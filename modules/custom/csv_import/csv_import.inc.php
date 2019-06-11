<?php
use \Drupal\node\Entity\Node;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\file\Entity\File;
function import_csv_file($row, &$context) {
    // Do heavy coding here
    $message = 'Ready importing...';
    $context['sandbox']['progress'] = 1;
    $context['sandbox']['progress']++;
    $context['sandbox']['current_row'] = $row['field_primary_case'];

    // do something with row
    try{
        $node = Node::create([
            'type' => 'negative_declaration_public_noti',
            'title' => $row['field_primary_case'],
            'field_date' => $row['field_date'],
            'field_address' => $row['field_address'],
            'field_notice_id' => $row['field_notice_id'],
            'field_council_district' => $row['field_council_district'],
        ]);
        $node->save();

        /**
         * Field collection processing code block.
         */
        foreach($row['sub_notice'] as $item) {
            $field_collection_sub_notice = FieldCollectionItem::create(array('field_name' => 'field_sub_cases'));

            //Set relationship to the host node
            $field_collection_sub_notice->setHostEntity($node);
            $node->field_sub_cases[] = [
                'field_collection_item' => $field_collection_sub_notice,
            ];
            $field_collection_sub_notice->set('field_case_number', $item['field_case_number']);
            $field_collection_sub_notice->set('field_mnd', $item['field_mnd']);
            $field_collection_sub_notice->set('field_publication', $item['field_publication']);
            $node->save();
        }
    } catch(Exception $e) {

    }

    $context['message'] = $row['field_primary_case']. ' processing...';
    $context['results'][] = $row['field_primary_case'];
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

function curl_get_contents($url) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}