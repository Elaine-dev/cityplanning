<?php
namespace Drupal\csv_import\Controller;

use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Controller\ControllerBase;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\file\Entity\File;

class ImportOverlayController extends ControllerBase {
    private $csv_file;
    private $mapping_file;
    public $final_data;
    private $type = 'overlays';

    // Log parameters
    public $total_node;
    public $inserted_node;
    public $error_node = 0;

    public function __construct() {
        global $base_url;
        $this->csv_file = 'public://import/csv/overlay.csv';
        $this->mapping_file = drupal_get_path('module','csv_import').'/file/mapping_overlays.csv';
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
        
        foreach ($nodes as $node) {
            $nid = $node->get('nid')->getString();
            if(!empty($nid)) {
                $unused_nids[] = (int)$nid;
            }
        }
        
        // Delete multiple nodes
        if (!empty($unused_nids)){
            entity_delete_multiple('node', $unused_nids);
        }
    }

    /**
     * Function responsible for parsing csv file
     * csv data are organised
     * assigned into final_data
     */
    public function getDataFromCSV() {
        $file = fopen($this->csv_file, "r");
        $mapping = fopen($this->mapping_file, "r");
        
        //parse mapping file
        while( !feof($mapping)){
            $mapping_data [] = fgetcsv($mapping);
        }
        foreach ($mapping_data as $row){
            $final_mapping [$row[0]] = $row[1];
        }
        
        // parse csv file
        while( !feof($file)){
           $data[] = fgetcsv($file);                                                                                                                                                                                                                                             
        }
        
        // Extract header from csv file
        $keys = $data[0];
        unset($data[0]);        // remove header
        $this->total_node = count($data);
        
        // format data according to the database
        foreach( $data as $item){
            foreach ($item as $key => $row) {
                if (!empty($final_mapping[$keys[$key]])) {
                    $base = $final_mapping[$keys[$key]];
                    
                    // get taxonomy id.
                    if ($base == 'field_type') {
                        $terms = taxonomy_term_load_multiple_by_name(trim($row));
                        $tid = key($terms);
                        $formatted_array[$base] = $tid;
                    } else {
                        $formatted_array[$base] = trim($row);
                    }
                }
              
            }            
            $raw_data[] = $formatted_array;
        }
        
        $this->final_data = $raw_data;
    }
}
