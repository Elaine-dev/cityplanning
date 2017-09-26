<?php
namespace Drupal\la_negativedeclaration\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\file\Entity\File;
//use function GuzzleHttp\json_encode;

/**
 * @author humbal
 * Provides a block with a simple text.
 *
 * @Block(
 *  id = "negative_declaration_block",
 *  admin_label = @Translation("Negative Declaration Block"),
 * )
 *
 */
class LaNegativedeclarationBlock extends BlockBase
{
     /**
      * {@inheritDoc}
      * @see \Drupal\Core\Block\BlockPluginInterface::build()
      */
    public function build () {
        // TODO: Load view with View ID notice.
        $view = \Drupal\views\Views::getView('negative_declaration');
        //$view->setDisplay('default');
        $view->execute();
        $view->serialize();
        $result = $view->result;
        $notice = array();
        foreach ($result as $key => $value) {
            $entity = $value->_entity;
            $title = $entity->get('title')->getValue()[0]['value'];
            $address	= $entity->get('field_address')->getValue();
            $date       = $entity->get('field_date')->getValue();
            $council_district = $entity->get('field_council_district')->getValue();
            $field_collection_id = $entity->get('field_sub_cases')->getValue();
            $notice[$title] = array(
                'primaryCaseNumber' => $title,
                'address' => htmlentities($address[0]['value']),
                'date' => $date[0]['value'],
                'councilDistrict' => $council_district[0]['value'],
                'sub_notice' => array(
                    'ids' => $field_collection_id,
                ),
            );
        }
        foreach($notice as $key=>$item) {
            foreach($item['sub_notice']['ids'] as $id) {
                $data = FieldCollectionItem::load($id['value']);
                $file_url = $data->get('field_mnd')->getString();
                $case_number = $data->get('field_case_number')->getValue();
                $publication = $data->get('field_publication')->getValue();

                if(!empty($publication)) {
                    $publication = $data->get('field_publication')->getValue()[0]['value'];
                }

                if(!empty($case_number)) {
                    $case_number = $data->get('field_case_number')->getValue()[0]['value'];
                }

                $notice[$key]['caseNumbers'][] = array(
                    'laTimesURL' => $publication,
                    'caseNumber' => $case_number,
                    'doc' => $file_url,
                );
            }
            unset($notice[$key]['sub_notice']);
        }

        $notice = array_reverse($notice, true); // reverse the data

        foreach($notice as $item){
            $new_array[] = $item;
        }

        // Create json file
        $file_path = 'file/notice.json';
        $fp = fopen( $file_path, 'w');
        fwrite($fp, json_encode(@$new_array));
        fclose($fp);
        return [
            '#markup' => '',
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