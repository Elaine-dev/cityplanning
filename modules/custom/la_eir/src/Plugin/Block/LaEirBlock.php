<?php
namespace Drupal\la_eir\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\node\Entity\Node;
use Drupal\Core\Url;

/**
 * Provides a block with a simple text.
 *
 * @Block(
 *   id = "laeir_block",
 *   admin_label = @Translation("LA EIR Block"),
 * )
 */

class LaEirBlock extends BlockBase
{
    /**
     * {@inheritDoc}
     * @see \Drupal\Core\Block\BlockPluginInterface::build()
     */
    public function build () {
        $view = \Drupal\views\Views::getView('duplicate_of_environmental_impact_reports');
        $view->setDisplay('default');
        $view->execute();
        //$view->serialize();

        $notices = [];
                                
        if ($view->result) {
            foreach($view->result as $value){
                $parent_eir_id = $value->_entity->get('field_select_eir')->getString();
                $eir_type = $value->_entity->get('field_eir_type')->getString();
               
                // Get node id
                $nid = $value->_entity->get('nid')->value;
                
                // Get node path
                //$alias = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
                $alias = \Drupal\Core\Url::fromRoute('entity.node.canonical', ['node' => $nid], ['absolute' => TRUE])->toString();
               
                // Load parent nid and get respective field value.
                $node = Node::load($parent_eir_id);
                $case_no = ($node->get('field_case_number')->getValue()[0]['value']) ? $node->get('field_case_number')->getValue()[0]['value'] : '';
                $project_title = ($node->get('title')->getValue()[0]['value']) ? $node->get('title')->getValue()[0]['value'] : '';
                
                $notices[$parent_eir_id][] = array(
                    'case_number' => $case_no,
                    'project_title' => $project_title,
                    'eir_type' => $eir_type,
                    'path' => $alias,
                    'parent' => $parent_eir_id
                );
                
                //$data = [];
                //$data[] = $value->_entity->get('field_eir_type')->getString();
            }
            
                    
            $new_notices = [];
            
            foreach($notices as $key=>$item) {
                $draft = '';
                $final = '';
                $notice_prepration = '';
                $additional_docs = '';
                
                foreach($item as $row) {
                    /**
                     * tid:133 - Notice of Preparation
                     * tid:143 - Draft EIR
                     * tid:153 - Final EIR
                     * tid:317 - Additional Docs
                     */
                    if($row['eir_type'] == 143) {
                        $draft = $row['path'];
                    } elseif($row['eir_type'] == 153) {
                        $final = $row['path'];
                    } elseif($row['eir_type'] == 133) {
                        $notice_prepration = $row['path'];
                    } elseif($row['eir_type'] == 317) {
                        $additional_docs = $row['path'];
                    }
                    
                    $new_notices[$key] = array(
                        'projectTitle' => $row['project_title'],
                        'eirNumber' => $row['case_number'],
                        'draftEIR' => $draft,
                        'finalEIR' => $final,
                        'noticeOfPreparation' => $notice_prepration,
                        'additionalDocs' => $additional_docs,
                    );
                }
            }
                        
            $new_eir = [];
            foreach($new_notices as $item) {
                $new_eir[] = $item;
            }            
            
            // Create json file
            $root_path = DRUPAL_ROOT;
            $file_path = $root_path.'/file/eir.json';
            
            if(file_exists($file_path)){
                unlink($file_path);
            }            
            
            $fp = fopen( $file_path, 'w');
            fwrite($fp, json_encode($new_eir));
            fclose($fp); 
            
            return [
                '#markup' => ' ',
            ];
        }
    }

    /**
     * {@inheritdoc}
     */
    protected function blockAccess(AccountInterface $account) {
        return AccessResult::allowedIfHasPermission($account, 'access content');
    }

    /**
     * {@inheritdoc}
     */
    public function blockForm($form, FormStateInterface $form_state) {
        $config = $this->getConfiguration();

        return $form;
    }

    /**
     * {@inheritdoc}
     */
    public function blockSubmit($form, FormStateInterface $form_state) {
        $this->configuration['my_block_settings'] = $form_state->getValue('my_block_settings');
    }
}