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
        //$view->setDisplay('Default');
       // $view->setItemsPerPage(10);
       // $view->setOffset(0);
        //$view->usePager();
        $view->execute();
        $view->serialize();
        $result = $view->result;
        $notices = array();
        foreach ($result as $key => $value) {
            $entity = $value->_entity;
            $title = $entity->get('title')->getValue()[0]['value'];
            $address = $entity->get('field_address')->getValue();
            $date = $entity->get('field_date')->getValue();
            $council_district = $entity->get('field_co')->getValue();
            $field_collection_id = $entity->get('field_sub_cases')->getValue();

            $notices[$title] = array(
                'primaryCaseNumber' => $title,
                'address' => htmlentities($address[0]['value']),
                'date' => $date[0]['value'],
                'councilDistrict' => $council_district[0]['value'],
                'sub_notice' => array(
                    'ids' => $field_collection_id,
                ),
            );

        }

        // TODO: Add sub cases in array
        foreach ($notices as $key => $item) {
            foreach ($item['sub_notice']['ids'] as $id) {
                $data = FieldCollectionItem::load($id['value']);
                // Load file from fid and get file url
                /*
                 * $file_id = $data->get('field_mnd')->getValue('target_id')[0]['target_id'];
                 * $file = File::load($file_id);
                 * $file_url = ($file) ? $file->url() : '';
                */
                $file_id = $data->get('field_mnd')->getValue('target_id');
                $file_url = '';
                if (!empty($file_id)) {
                    $file_id = $data->get('field_mnd')->getValue('target_id')[0]['target_id'];
                    $file = File::load($file_id);

                    $file_url = $file->url();
                }

                $notices[$key]['caseNumbers'][] = array(
                    'laTimesURL' => $data->get('field_publication')->getValue()[0]['value'],
                    'caseNumber' => $data->get('field_case_number')->getValue()[0]['value'],
                    'doc' => $file_url,
                );
            }
            unset($notices[$key]['sub_notice']);
        }

        $new_array = [];
        foreach($notices as $item){
            $new_array[] = $item;
        }

        // TODO: Create JSON file
        $file_path = 'file/notice.json';
        $fp = fopen( $file_path, 'w');
        fwrite( $fp, json_encode($new_array));
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