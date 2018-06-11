<?php
use \Drupal\node\Entity\Node;
//use Drupal\file\Entity\File;

function import_csv_file ($row, &$context) {
    // Do heavy coding here
    $row['prime'] = 'Biweekly case';
    $message = 'Ready importing...';
    $context['sandbox']['progress']++;
    $context['sandbox']['current_row'] = @$row['prime'];

    // do something with row
    try {
        $node = Node::create([
                'type' => 'bi_weekly_case_filing',
                'title' => $row['field_date'],
                'field_bi_weekly_case_type' => $row['field_bi_weekly_case_type'],
                'field_date' => $row['field_date'],
                'field_document' => $row['field_document'],
            ]
        );
        
        $node->save();
    } catch(Exception $e) {

    }

    $context['message'] = $row['prime']. ' processing...';
    $context['results'][] = $row['prime'];
}

function csv_import_fininshed_callback($success, $results, $operations) {
    // The 'success' parameter means no fatal PHP errors were detected. All
    // other error management should be handled using 'results'.
    if ($success) {
        $message = \Drupal::translation()->formatPlural(
            count($results),
            'One post processed.', '@count posts processed.'
        );
    }
    else {
        $message = t('Finished with an error.');
    }
    drupal_set_message($message);
    $_SESSION['csv_import_batch_results'] = $results;
}