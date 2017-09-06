<?php 
namespace Drupal\la_negativedeclaration\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\file\Entity\File;

class DefaultController extends ControllerBase 
{
    function createJSON () {
        // Load view with view ID notice
        $view = \Drupal\views\Views::getView('negative_declaration');
        $view->setDisplay('default');
        $view->setItemsPerPage(10);
        $view->setOffset(0);
        $view->usePager();
        $view->execute();
        $view->serialize();
        $result = $view->result;
        $notices = array();
        foreach ($result as $key => $value) {
            $entity = $value->_entity;
            $title = $entity->get('title')->getValue()[0]['value'];
            $address    = $entity->get('field_address')->getValue();
            $date       = $entity->get('field_date')->getValue();
            $council_district = $entity->get('field_council_district')->getValue();
            $field_collection_id = $entity->get('field_sub_notice_form')->getValue();
        
            $notices[$title] = array(
                'primaryCaseNumber' => $title,
                'address' => htmlentities($address[0]['value']),
                'date' => $date[0]['value'],
                'councilDistrict' => $council_district[0]['value'],
                'sub_notice' => array (
                    'ids' => $field_collection_id,
                ),
            );
        }
        
        foreach ($notices as $key=>$item) {
            foreach ($item['sub_notice']['ids'] as $id) {
                $data = FieldCollectionItem::load($id['value']);
                // Load file from fid and get filr url
                $file_id = $data->get('field_mnd')->getValue('target_id')[0]['target_id'];
                $file = File::load($file_id);
                $file_url = $file->url();
        
                $notices[$key]['caseNumbers'][] = array(
                    'laTimesURL' => $data->get('field_publication')->getValue()[0]['value'],
                    'caseNumber' => $data->get('field_cass_number')->getValue()[0]['value'],
                    'doc' => $file_url,
                );
            }
        
            unset($notices[$key]['sub_notice']);
        }
        
        foreach ($notices as $item) {
            $new_array[] = $item;
        }
        // Create json file
        $file_path = 'file/notice.json';
        $fp = fopen( $file_path, 'w');
        fwrite($fp, json_encode($new_array));
        fclose($fp);
        
        $html = '<div class="msg"><p>notice.json file has been created successfully!</p></div>';
        return [
            '#markup' => $html,
        ];
    }
}