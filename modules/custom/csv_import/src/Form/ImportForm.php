<?php
namespace Drupal\csv_import\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\UrlHelper;
use Drupal\csv_import\Controller\ImportController;
use Drupal\csv_import\Controller\ImportBiweeklyCaseController;
use Drupal\file\Entity\File;
use Drupal\node\Entity\Node;

class ImportForm extends FormBase {
    /**
     * {@inheritdoc}
     */
    public function getFormId() {
        return 'csv_import_form';
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        $form['fieldset'] = array(
            '#type' => 'fieldset',
            '#title' => 'Form',
        );
        $form['fieldset']['import_for'] = array(
            '#type' => 'select',
            '#title' => t('Select Import For:'),
            '#options' => [
                'negativeDeclaration' => 'Negative Declaration Public Notices',
                'biweeklyCaseFiling' => 'Bi-Weekly Case Filing',
                'eir' => 'EIR',
            ],
            '#required' => TRUE,
        );

        $form['fieldset']['csv_file'] = array(
            '#type' => 'managed_file',
            '#title' => t('File upload:'),
            '#upload_location' => 'public://import/',
            '#description' => t('Upload CSV file.'),
            '#upload_validators' => array(
                'file_validate_extensions' => array('csv'),
                ),
        );

        $form['#redirect'] = FALSE;

        $form['fieldset']['submit'] = array(
            '#type' => 'submit',
            '#value' => t('Import'),
        );

        return $form;
    }

    /**
     * {@inheritdoc}
     */
    public function validateForm(array &$form, FormStateInterface $form_state) {
        /**
         * Delete files from import folder.
         * Copy new uploaded file to csv folder.
         */
        if(!empty($form_state->getValues()['csv_file'][0])) {
            $import_type = $form_state->getValues()['import_for'];
            $fid = $form_state->getValues()['csv_file'][0];
            $file = file_load($fid);
            $source = $file->get('uri')->getString();
            if(file_exists($source)) {
               switch ($import_type) {
                   case 'negativeDeclaration':
                       if(rename($source, 'public://import/csv/notice.csv')) {
                           $files = glob('C:\xampp\htdocs\ladcp\sites\default\files\import\*'); // get all file names
                           foreach($files as $file){ // iterate files
                               if(is_file($file))
                                   unlink($file); // delete file
                           }
                       }
                       break;
                   case 'biweeklyCaseFiling':
                       if(rename($source, 'public://import/csv/biweekly.csv')) {
                           $files = glob('C:\xampp\htdocs\ladcp\sites\default\files\import\*'); // get all file names
                           foreach($files as $file){ // iterate files
                               if(is_file($file))
                                   unlink($file); // delete file
                           }
                       }
                       break;
                   default:
                       die("invalid option");
                       break;
               }
            }
        }
    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        $form_values = $form_state->getValues();
        $fid = @$form_values['csv_file'][0];
        $import_type = @$form_values['import_for'];

        if($import_type == 'negativeDeclaration') {
            $import = new ImportController();
            $import->importProperty();
            
            $operations = [];
            foreach($import->final_data as $row) {
                $operations[] = ['import_csv_file', [$row]];
            }
            $batch = array(
                'title' => t('Importing'),
                'operations' => $operations,
                'finished' => 'csv_import_fininshed_callback',
                'file' => drupal_get_path('module', 'csv_import'). '/csv_import.inc.php',
            );
            batch_set($batch);
        } else if ($import_type == 'biweeklyCaseFiling') {
            $import = new ImportBiweeklyCaseController();
            $import->importProperty();
            
            $operations = [];
            foreach($import->final_data as $row) {
                $operations[] = ['import_csv_file', [$row]];
            }
            
            $batch = array(
                'title' => t('Importing'),
                'operations' => $operations,
                'finished' => 'csv_import_fininshed_callback',
                'file' => drupal_get_path('module', 'csv_import'). '/csv_import_biweekly.inc.php',
            );
            
            batch_set($batch);
        } 
        
        else {
            drupal_set_message('Development is not done yet!');
        }
    }
}