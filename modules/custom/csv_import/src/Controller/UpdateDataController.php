<?php
namespace Drupal\csv_import\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\Node;

class UpdateDataController extends  ControllerBase {
    private $cvs_file;
    
    public function __construct() {
        $this->cvs_file = 'public://import/overlays_update.csv';
    }
    
    public function getUpdate() {
        $file = fopen($this->cvs_file, 'r');
        while (!feof($file)) {
            $data[] = fgetcsv($file);
        }
        
        fclose($file);
        unlink($this->cvs_file);                        // remove file
        
        // Remove header from csv file
        unset($data[0]);
        
        try {
            foreach ($data as $key=>$row) {
                if (!empty($row)) {
                    $nid = $row[0];                     // get node Id.
                    $subTitle = $row[1];
                    
                    if (!empty($subTitle)) {
                        $key = Node::load($nid);
                        
                        // set new value for the title
                        // $key->title = $subTitle;
                        $key->field_sub_title = $subTitle;
                        
                        // update the node
                        $key->save();
                    }
                }            
            }
            
            $html = '<div class="msg"><p>Title has been updated successfully!</p></div>';
            return [
                '#markup' => $html,
            ];
        } catch (\Exception $e) {
            $e->getMessage();
        }
    }    
}
