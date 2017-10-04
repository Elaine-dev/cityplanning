<?php
namespace Drupal\csv_import\Controller;

use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Controller\ControllerBase;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\file\Entity\File;

class ImportController extends ControllerBase {
    public $csv_file;
    public $mapping_file;
    public $final_data;
    public $type = 'negative_declaration_public_noti';

    // Log parameters
    public $total_node;
    public $inserted_node;
    public $error_node = 0;

    public function __construct() {
        global $base_url;
        $this->csv_file = 'public://import/csv/notice.csv';
        $this->mapping_file = drupal_get_path('module','csv_import').'/file/mapping.csv';
    }

    /**
     * Custom import funciton
     * stpes:
     * - 1: old data from db are deleted which are not found in csv file. However manual inserted data are not deleted
     * - 2: Parse csv file and manage required notice and sub-notice grouped data
     * - 3: save data into database
     */
    public function importProperty() {
        // Todo delete pdf files currently not done
        /**
         * Delete old records which are present in database and are inserted druing csv import
         */
        // $this->deleteNodes();  // Onetime add records
        // Get data from csv file
        $this->getDataFromCSV();
    }

    /**
     * Delete old nodes from database
     * Only nodes added by csv import are deleted.
     */
    public function deleteNodes() {
        $unused_nids = array();
        $nids = \Drupal::entityQuery('node')
            ->condition('type', $this->type)
            ->execute();
        $nodes = \Drupal::entityTypeManager()
            ->getStorage('node')
            ->loadMultiple($nids);

        foreach($nodes as $key => $node) {
            $notice_id = $node->get('field_notice_id')->getString();
            if(!empty($notice_id)) {
                $nid = $node->get('nid')->getString();
                $unused_nids[] = $nid;
                // Load node for processing its file.
                $node = \Drupal\node\Entity\Node::load($nid);
                // Get sub notice form
                $sub_notice_id = $node->get('field_sub_cases')->getValue();
                foreach($sub_notice_id as $id) {
                    /**
                     * Load field collection
                     * Code block for deleting attatchment i.e. field_mnd
                     * */
                    $sub_field = FieldCollectionItem::load($id['value']);
                    $file = $sub_field->get('field_mnd')->getValue();
                    if(!empty($file)) {
                        $fid = $file[0]['target_id'];
                        if($fid != 0) {
                            file_delete($fid);
                        }
                    }
                }
            }
        }
        // Delete multiple nodes
        if(!empty($unused_nids)) {
            entity_delete_multiple('node', $unused_nids);
        }
    }

    /**
     * Function responsible for parsing csv file
     * csv data are grouped into notice and sub-notice and
     * assigned into final_data
     */
    public function getDataFromCSV() {
        $file = fopen($this->csv_file, "r");
        $mapping = fopen($this->mapping_file, "r");
        //parse mapping file
        $j = 0;
        while (!feof($mapping)) {
            $mapping_data[] = fgetcsv($mapping);
            $j++;
        }
        unset($mapping_data[0]);
        foreach($mapping_data as $row) {
            $final_mapping[$row[0]] = $row[1];
        }

        // parse csv file
        $i = 0;
        while (!feof($file)) {
            $data[] = fgetcsv($file);
            $i++;
        }
        // close file handler
        fclose($file);

        // Extract header.
        $keys = $data[0];
        // Remove header form data.
        unset($data[0]);

        // Get total count for log purpose
        $this->total_node = count($data);

        // Readable format of csv file
        foreach($data as $item) {
            foreach($item as $key=>$row) {
                if(!empty($final_mapping[$keys[$key]])) {
                    $base = $final_mapping[$keys[$key]];
                    $formated_array[$base] = $row;}
            }
            $raw_data[] = $formated_array;
        }

        // Regroup csv data into notice and sub notice array.
        foreach($raw_data as $key=>$item) {
            // Grouping sub-notices
            $sub_notices[$item['field_primary_case']][] = array(
                'field_case_number' => $item['field_case_number'],
                'field_mnd' => $item['field_mnd'],
                'field_publication' => $item['field_publication'],
            );
            // get and group notice id
            $ids[$item['field_primary_case']][] = $item['field_notice_id'];
            // Generating final grouped set of array.
            $notice[$item['field_primary_case']] = array(
                'field_date' => $item['field_date'],
                'field_primary_case' => $item['field_primary_case'],
                'field_address' => $item['field_address'],
                'field_council_district' => $item['field_council_district'],
                'field_notice_id' => implode(',', $ids[$item['field_primary_case']]),
                'sub_notice' => $sub_notices[$item['field_primary_case']],
            );

        }
        $this->final_data = $notice;
    }

    /**
     * Function to add <pre> tag before and after a variable of print_r
     * @param mixed $var variable to be debugged
     * @param boolean $die if true die is called after print_r
     */
    function pr($var = '', $die = false) {

        $array = debug_backtrace();
        echo '<br/>Debugging from ' . $array[0]['file'] . ' line: ' . $array[0]['line'];

        echo '<pre>';
        print_r($var);
        echo '</pre>';

        if ($die !== FALSE) {
            die();
        }
    }
    
    /*
    * Format date in yy-mm-dd
    */
    function formatDate ($date) {
        $splitDate = explode('/', $date);
        return $newDate = $splitDate[2].'-'.sprintf("%02d", $splitDate[0]).'-'.sprintf("%02d", $splitDate[1]);
    }
}