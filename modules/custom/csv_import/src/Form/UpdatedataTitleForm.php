<?php 
namespace Drupal\csv_import\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\csv_import\Controller\UpdateDataController;
use Drupal\Core\Messenger\MessengerInterface;

class UpdatedataTitleForm extends FormBase {
    
    public function getFormId() {
        return 'updatedata_title_form';
    }
    
    /**
     * 
     * {@inheritDoc}
     * @see \Drupal\Core\Form\FormInterface::buildForm()
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        $form['fieldset'] = array(
            '#type' => 'fieldset',
            '#title' => 'Form',
        );
        
        $form['fieldset']['cvs_file'] = array(
            '#type' => 'managed_file',
            '#title' => $this->t('File upload:'),
            '#upload_location' => 'public://import/',
            '#description' => $this->t('valid file extension: csv'),
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
     * 
     * {@inheritDoc}
     * @see \Drupal\Core\Form\FormBase::validateForm()
     */
    public function validateForm(array &$form, FormStateInterface $form_state) {}
    
    /**
     * 
     * {@inheritDoc}
     * @see \Drupal\Core\Form\FormInterface::submitForm()
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {            
        $form_values = $form_state->getValues();
        
        // Read file
        $update = new UpdateDataController();
        $status = UpdatedataTitleForm::batchUpdateData($update);
        
        if (isset($status)) {
            $this->messenger()->addMessage($status);
        }
    }
    
    static function batchUpdateData ($update) {
        return $update->getUpdate();
    }
}