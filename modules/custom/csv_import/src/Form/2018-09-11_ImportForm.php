<?php
namespace Drupal\csv_import\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\UrlHelper;
use Drupal\csv_import\Controller\ImportController;
use Drupal\csv_import\Controller\ImportBiweeklyCaseController;
use Drupal\csv_import\Controller\ImportOverlayController;
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
            '#title' => $this->t('Select Import For:'),
            '#options' => [
              'biweeklyCaseFiling' => 'Bi-Weekly Case Filing',
              'negativeDeclaration' => 'Negative Declaration Public Notices',
              'overlays' => 'Overlays',
            ],
            '#required' => TRUE,
        );

        $form['fieldset']['csv_file'] = array(
            '#type' => 'managed_file',
            '#title' => $this->t('File upload:'),
            '#upload_location' => 'public://import/',
            '#description' => $this->t('Upload CSV file.'),
            '#upload_validators' => array(
                'file_validate_extensions' => array('csv'),
                ),
        );

        $form['#redirect'] = FALSE;

        $form['fieldset']['submit'] = array(
            '#type' => 'submit',
            '#value' => $this->t('Import'),
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
        //$import_path = 'C:\xampp\htdocs\ladcp\sites\default\files\import\*';
        $import_path = '/home/dcprootadmin/apps/drupal/htdocs/sites/default/files/import/*';

        if(!empty($form_state->getValues()['csv_file'][0])) {
            $import_type = $form_state->getValues()['import_for'];
            $fid = $form_state->getValues()['csv_file'][0];
            $file = file_load($fid);
            $source = $file->get('uri')->getString();
            if(file_exists($source)) {
               switch ($import_type) {
                   case 'negativeDeclaration':
                       if(rename($source, 'public://import/csv/notice.csv')) {
                           $files = glob($import_path); // get all file names
                           foreach($files as $file){ // iterate files
                               if(is_file($file))
                                   unlink($file); // delete file
                           }
                       }
                       break;

                   case 'biweeklyCaseFiling':
                       if(rename($source, 'public://import/csv/biweekly.csv')) {
                           $files = glob($import_path); // get all file names
                           foreach($files as $file){ // iterate files
                               if(is_file($file))
                                   unlink($file); // delete file
                           }

                       }
                       break;

                   case 'overlays':
                       if (rename($source, 'public://import/csv/overlay.csv')){
                           $files = glob($import_path);
                           foreach ($files as $file){
                               if(is_file($file))
                                   unlink($file);
                           }
                       }
                       break;

                   default:
                       drupal_set_message('Oops! Invalid selection.');
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

        switch ($import_type) {
            case 'negativeDeclaration':
                $import = new ImportController();
                $import->importProperty();

                $operations = [];
                foreach($import->final_data as $row) {
                    $operations[] = ['import_csv_file', [$row]];
                }
                $batch = array(
                        'title' => $this->t('Importing'),
                        'operations' => $operations,
                        'finished' => 'csv_import_fininshed_callback',
                        'file' => drupal_get_path('module', 'csv_import'). '/csv_import.inc.php',
                );
                batch_set($batch);
                break;

            case 'biweeklyCaseFiling':
                $import = new ImportBiweeklyCaseController();
                $import->importProperty();

                $operations = [];
                foreach($import->final_data as $row) {
                    $operations[] = ['import_csv_file', [$row]];
                }

                $batch = array(
                        'title' => $this->t('Importing'),
                        'operations' => $operations,
                        'finished' => 'csv_import_fininshed_callback',
                        'file' => drupal_get_path('module', 'csv_import'). '/csv_import_biweekly.inc.php',
                );

                batch_set($batch);
                break;

            case 'overlays':
                $import = new ImportOverlayController();
                $import->importProperty();

                $operations = [];
                foreach($import->final_data as $row) {
                    $operations[] = ['import_csv_file', [$row]];
                }

                $batch = array(
                        'title' => $this->t('Importing'),
                        'operations' => $operations,
                        'finished' => 'csv_import_finished_callback',
                        'file' => drupal_get_path('module', 'csv_import').'/csv_import_overlay.inc.php',
                );

                batch_set($batch);
                break;

            default:
                drupal_set_message('Oops! Invalid selection.');
                break;
        }
    }
}