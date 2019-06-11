<?php
use \Drupal\node\Entity\Node;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\file\Entity\File;
function import_csv_file($row, &$context) {
    // Do heavy coding here
    $message = 'Ready importing...';
    $context['sandbox']['progress'] = 1;
    $context['sandbox']['progress']++;
    $context['sandbox']['current_row'] = @$row['title'];

    // do something with row
    try{
        $node = Node::create([
            'type' => 'overlays',
            'title' => $row['title'],
            'field_sub_title' => $row['field_sub_title'],
            'field_type' => $row['field_type'],
            'field_project_planner_contact' => $row['field_project_planner_contact'],
            'field_community_plan_area_s_' => [
                'value' => $row['field_community_plan_area_s_'],
                'format' => 'basic_html'
            ],
            'field_area_planning_commission_s' => [
                'value' => $row['field_area_planning_commission_s'],
                'format' => 'basic_html'
            ],
            'field_council_district_s_' => $row['field_council_district_s_'],
            'field_design_review_board_drb_' => [
                'value' => $row['field_design_review_board_drb_'],
                'format' => 'basic_html'
            ],
            'body' => [
                'value' => $row['body'],
                'format' => 'basic_html'
            ],
        ]);
        
        $node->save();

    } catch(Exception $e) {

    }

    $context['message'] = $row['title']. ' processing...';
    $context['results'][] = $row['title'];
}

function csv_import_fininshed_callback($success, $results, $operations) {
    // The 'success' parameter means no fatal PHP errors were detected. All
    // other error management should be handled using 'results'.
    if ($success) {
        $message = \Drupal::translation()->formatPlural(
            count($results),
            'One post processed.', '@count posts processed.'
        );
        drupal_set_message($message);
    }
    else {
        $message = $this->t('Finished with an error.');
    }
    drupal_set_message($message);
    $_SESSION['csv_import_batch_results'] = $results;
}