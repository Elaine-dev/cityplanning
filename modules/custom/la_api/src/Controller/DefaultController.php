<?php
namespace Drupal\la_api\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\node\Entity\Node;


class DefaultController extends ControllerBase
{
    /**
     * Callback for rest/api/negativedeclaration/year/page/post_per_page
     */
    public function getNegativeDeclaration ( $year = 2019, $page = 1, $post_per_page = 10 ) {
        $view_1 = \Drupal\views\Views::getView('negative_declaration');
        $view_1->setDisplay('default');
        $view_1->setItemsPerPage(0);
        $view_1->setArguments([$year]);
        $view_1->execute();
        $total_count = $view_1->total_rows;

        $view = \Drupal\views\Views::getView('negative_declaration');
        $view->setDisplay('default');
        $view->setItemsPerPage($post_per_page);
        $view->setOffset(0);
        $view->initPager();
        $view->setCurrentPage($page);
        $view->setArguments([$year]);
        $view->execute();
        //$view->serialize();
        $result = $view->result;

        $notices = [];
        foreach ($result as $key => $value) {
            $entity = $value->_entity;
            $primary_case = $entity->get('title')->getValue()[0]['value'];
            $date = $entity->get('field_date')->getValue()[0]['value'];
            $address = $entity->get('field_address')->getValue()[0]['value'];
            $council_district = $entity->get('field_council_district')->getValue()[0]['value'];
            $field_collection_id = $entity->get('field_sub_cases')->getValue();

            $notices[$primary_case.'-'.$date] = [
                'primaryCaseNumber' => $primary_case,
                'address' => $address,
                'date' => $date,
                'councilDistrict' => $council_district,
                'sub_notices' => [
                    'ids' => $field_collection_id,
                ],
            ];
        }

        // format record
        foreach ($notices as $key => $item) {
            foreach ($item['sub_notices']['ids'] as $id) {
                $data = FieldCollectionItem::load($id['value']);

                // Load file from fid and get file url
                if (!empty($data->get('field_publication')->getValue())) {
                    $url = $data->get('field_publication')->getString();
                }else {
                    $url = '';
                }

                $notices[$key]['caseNumbers'][] = [
                    'caseNumber' => $data->get('field_case_number')->getValue()[0]['value'],
                    'laTimesURL' => $url,
                    'doc' => $data->get('field_mnd')->getString(),
                ];
            }

            unset($notices[$key]['sub_notices']);
        }

        $new_array = [];
        foreach($notices as $item){
            $new_array[] = $item;
        }

        $response['data'] = $new_array;
        $response['total_count'] = $total_count;

        return new JsonResponse( $response );
    }
    
    /**
     * Callback for rest/api/eir/{page}/{post_per_page}
     */
    public function getEIR ( $page = 1, $post_per_page = 10 ) {
        // Count total number of record in EIR Content Type
        $view_1 = \Drupal\views\Views::getView('environmental_impact_reports');
        $view_1->setDisplay('block_1');
        $view_1->setItemsPerPage(0);
        $view_1->execute();
        $total_count = $view_1->total_rows;
        
        // Display content from EIR Detail Content Type
        $view = \Drupal\views\Views::getView('environmental_impact_reports');
        $view->setDisplay('default');
        $view->setItemsPerPage($post_per_page);
        $view->setOffset(0);
        $view->initPager();
        $view->setCurrentPage($page);
        $view->execute();
        $result = $view->result;
        
        $eirs = [];
        foreach ($result as $key => $value) {
            $parent_eir_id = $value->_entity->get('field_select_eir')->getString();
            $eir_type = $value->_entity->get('field_eir_type')->getString();
            
            // Get node id
            $nid = $value->_entity->get('nid')->value;
            
            // Get node path
            $alias = \Drupal\Core\Url::fromRoute('entity.node.canonical', ['node' => $nid], ['absolute' => TRUE])->toString();
            
            // Load parent nid and get respective field value.
            $node = Node::load($parent_eir_id);
            $case_no = ($node->get('field_case_number')->getValue()[0]['value']) ? $node->get('field_case_number')->getValue()[0]['value'] : '';
            $project_title = ($node->get('title')->getValue()[0]['value']) ? $node->get('title')->getValue()[0]['value'] : '';
            
            $eirs[$parent_eir_id][] = array(
                'case_number' => $case_no,
                'project_title' => $project_title,
                'eir_type' => $eir_type,
                'path' => $alias,
                'parent' => $parent_eir_id
            );
        }
        
        
        /**
         *  Format data according to the EIR type.
         *  Each node should have :
         *      Project Title, Case Number, node link (for each Notice of Preparation,  Draft EIR, Final EIR, and Additional Docs if exists)
         */
        $format_eirs = [];
        
        foreach($eirs as $key=>$item) {
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
                
                $format_eirs[$key] = array(
                    'projectTitle' => $row['project_title'],
                    'eirNumber' => $row['case_number'],
                    'draftEIR' => $draft,
                    'finalEIR' => $final,
                    'noticeOfPreparation' => $notice_prepration,
                    'additionalDocs' => $additional_docs,
                );
            }
        }
        
        $final_eirs = [];
        foreach($format_eirs as $item) {
            $final_eirs[] = $item;
        }
        
        $response['data'] = $final_eirs;
        $response['total_count'] = $total_count;
        
        return new JsonResponse( $response );
    }
    
    /**
     * Callback for rest/api/scea/{page}/{post_per_page}
     */
    public function getSCEA ( $page = 1, $post_per_page = 10 ) {
        // Count total number of record in EIR Content Type
        $view_1 = \Drupal\views\Views::getView('scea');
        $view_1->setDisplay('block_1');
        $view_1->setItemsPerPage(0);
        $view_1->execute();
        $total_count = $view_1->total_rows;
        
        // Display content from EIR Detail Content Type
        $view = \Drupal\views\Views::getView('scea');
        $view->setDisplay('default');
        $view->setItemsPerPage($post_per_page);
        $view->setOffset(0);
        $view->initPager();
        $view->setCurrentPage($page);
        $view->execute();
        $result = $view->result;
        
        $sceas = [];
        foreach ($result as $key => $value) {
            $parent_scea_id = $value->_entity->get('field_select_scea_title')->getString();
            $scea_type = $value->_entity->get('field_type')->getString();
            
            // Get node id
            $nid = $value->_entity->get('nid')->value;
            
            // Get node path
            $alias = \Drupal\Core\Url::fromRoute('entity.node.canonical', ['node' => $nid], ['absolute' => TRUE])->toString();
            
            // Load parent nid and get respective field value.
            $node = Node::load($parent_scea_id);
            $case_no = ($node->get('field_case_number')->getValue()[0]['value']) ? $node->get('field_case_number')->getValue()[0]['value'] : '';
            $project_title = ($node->get('title')->getValue()[0]['value']) ? $node->get('title')->getValue()[0]['value'] : '';
            
            $sceas[$parent_scea_id][] = array(
                'case_number' => $case_no,
                'project_title' => $project_title,
                'scea_type' => $scea_type,
                'path' => $alias,
                'parent' => $parent_scea_id
            );
        }
        
        
        /**
         *  Format data according to the EIR type.
         *  Each node should have :
         *      Project Title, Case Number, node link (for each Notice of Preparation,  Draft EIR, Final EIR, and Additional Docs if exists)
         */
        $format_sceas = [];
        
        foreach($sceas as $key=>$item) {
            $draft = '';
            $final = '';
            $notice_prepration = '';
            $additional_docs = '';
            
            foreach($item as $row) {
                /**
                 * if SCEA has different types, add condition to get path.
                 * tid: 395 - Default
                 */
                
                /* if($row['scea_type'] == 395) {
                 $default = $row['path'];
                 } */
                
                $default = $row['path'];
                
                $format_sceas[$key] = array(
                    'projectTitle' => $row['project_title'],
                    'case_number' => $row['case_number'],
                    'default' => $default,
                );
            }
        }
        
        $final_sceas = [];
        foreach($format_sceas as $item) {
            $final_sceas[] = $item;
        }
        
        $response['data'] = $final_sceas;
        $response['total_count'] = $total_count;
        
        return new JsonResponse( $response );
    }
}