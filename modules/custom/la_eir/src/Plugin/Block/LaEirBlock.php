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
        $view = \Drupal\views\Views::getView('environmental_impact_reports');
        // $view->setDisplay('Display');
        $view->execute();
        // $view->serialize();
        $notice = [];

        foreach($view->result as $value){
            $parent_eir_id = $value->_entity->get('field_select_eir')->getString();
            $eir_type = $eir_type = $value->_entity->get('field_eir_type')->getString();
            // Get node id
            $nid = $value->_entity->get('nid')->value;
            // Get node path
            $alias = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
            $alias = \Drupal\Core\Url::fromRoute('entity.node.canonical', ['node' => $nid], ['absolute' => TRUE])->toString();
            // Load parent nid and get respective field value.
            $node = Node::load($parent_eir_id);
            $case_no = $node->get('field_case_number')->getValue()[0]['value'];
            $project_title = $node->get('title')->getValue()[0]['value'];

            $notice[$parent_eir_id][] = array(
                    'case_number' => $case_no,
                    'project_title' => $project_title,
                    'eir_type' => $eir_type,
                    'path' => $alias,
                    'parent' => $parent_eir_id
            );

            $data = [];
            $data[] = $value->_entity->get('field_eir_type')->getString();
        }

        $new_notice = [];
        foreach($notice as $key=>$item) {
            $draft = '';
            $final = '';
            $notice_prepration = '';
            foreach($item as $row) {
                /**
                 * id:133 - notice of preparation
                 * id:143 - draft
                 * id:153 - final
                 */
                if($row['eir_type'] == 143) {
                    $draft = $row['path'];
                } elseif($row['eir_type'] == 153) {
                    $final = $row['path'];
                } elseif($row['eir_type'] == 133) {
                    $notice_prepration = $row['path'];
                }

                $new_notice[$key] = array(
                    'projectTitle' => $row['project_title'],
                    'eirNumber' => $row['case_number'],
                    'draftEIR' => $draft,
                    'finalEIR' => $final,
                    'noticeOfPreparation' => $notice_prepration,
                );
            }
        }

        $new_eir = [];
        foreach($new_notice as $item) {
            $new_eir[] = $item;
        }


        // Create json file
        $file_path = 'file/eir.json';
        $fp = fopen( $file_path, 'w');
        fwrite($fp, json_encode($new_eir));
        fclose($fp);

        return [
            '#markup' => ' ',
        ];
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