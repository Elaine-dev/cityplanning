<?php
namespace Drupal\la_api\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;


class DefaultController extends ControllerBase
{
    /**
     * Callback for rest/api/negativedeclaration/year/page/post_per_page
     */
    public function getNegativeDeclaration ( $year, $page, $post_per_page ) {
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
}