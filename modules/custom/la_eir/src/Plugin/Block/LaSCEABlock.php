<?php 
namespace Drupal\la_eir\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\node\Entity\Node;
use Drupal\Core\File;

/**
 * Provides a 'SCEA' block.
 * @Block(
 *   id = "lascea_block",
 *   admin_label = @Translation("SCEA Block"),
 * )
 */

class LaSCEABlock extends BlockBase
{
    /**
     * {@inheritdoc}
     * 
     */
    public function build() {
        $view = \Drupal\views\Views::getView('scea');
        $view->execute();
        
        $notices = [];
        
        if ($view->result) {
            foreach($view->result as $value) {
                $parent_scea_id = $value->_entity->get('field_select_scea_title')->getString();
                $scea_type = $value->_entity->get('field_type')->getString();
                
                // get node id
                $nid = $value->_entity->get('nid')->value;
                
                // get node path
                $alias = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
                $alias = \Drupal\Core\Url::fromRoute('entity.node.canonical', ['node' => $nid], ['absolute' => TRUE])->toString();
                
                // load parent nid and get respective field value.
                $node = Node::load($parent_scea_id);
                $case_no = $node->get('field_case_number')->getValue()[0]['value'];
                $project_title = $node->get('title')->getValue()[0]['value'];
                
                $notices[$parent_scea_id][] = array(
                    'case_number' => $case_no,
                    'project_title' => $project_title,
                    'scea_type' => $scea_type,
                    'path' => $alias,
                    'parent' => $parent_scea_id
                );
                
                $data = [];
                $data[] = $value->_entity->get('field_type')->getString();
            }
            
            $new_notices = [];
            
            foreach ($notices as $key => $item) {
                $default = '';
                foreach ($item as $row) {
                    /**
                     * if SCEA has different types, add condition to get path.
                     * tid: 394 - Default
                     */
                    /* if($row['scea_type'] == 394) {
                        $default = $row['path'];
                     } */
                   
                    $default = $row['path'];
                    
                    $new_notices[$key] = array(
                        'projectTitle' => $row['project_title'],
                        'case_number' => $row['case_number'],
                        'default' => $default,
                    );
                }
            }
            
            $new_scea = [];
            foreach($new_notices as $item) {
                $new_scea[] = $item;
            }
            
            // Create json file
            $root_path = DRUPAL_ROOT;
            $file_path = $root_path.'/file/scea.json';
            
            echo "root path: " . $root_path;
            echo "<br> file path: " . $file_path;
            
            kint($new_scea);
            
            die("<br>here");
            
            if(file_exists($file_path)){
                unlink($file_path);                
            }            
            
            $fp = fopen($file_path, 'w');
            fwrite($fp, json_encode($new_scea));
            fclose($fp);
            
            return [
                '#markup' => ' ',
            ];
        }
    }
}
