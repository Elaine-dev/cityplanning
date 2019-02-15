<?php
/**
 * @file
 * Contains \Drupal\la_requestform\Form\ClearanceRequestForm.
 */
namespace Drupal\la_requestform\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class ClearanceRequestForm extends FormBase
{
     /**
      * {@inheritDoc}
      * @see \Drupal\Core\Form\FormInterface::getFormId()
      */
    public function getFormId () {
        return 'clearance_request_form';
    }


     /**
      * {@inheritDoc}
      * @see \Drupal\Core\Form\FormInterface::buildForm()
      */
     public function buildForm (array $form, FormStateInterface $form_state) {
        // TODO: Auto-generated method stub
        $form['case_no'] = [
            '#type' => 'textfield',
            '#title' =>  $this->t('Case No. *'),
            '#maxlength' => 64,
            '#required' => TRUE,
            '#attributes' => ['class' => array('clearance-textbox')],
        ];

        $form['project_address'] = [
            '#type' => 'textfield',
            '#title' =>  $this->t('Project Address *'),
            '#maxlength' => 512,
            '#required' => TRUE,
            '#attributes' => ['id' => array('project-address')],
        ];

        $form['building_permit_no'] = [
            '#type' => 'textfield',
            '#title' =>  $this->t('Building Permit No. (if applicable)'),
            '#maxlength' => 64,
            '#attributes' => ['id' => array('building-permit-no')],
        ];

        $form['abc_agent'] = [
            '#type' => 'textfield',
            '#title' =>  $this->t('ABC Agent (if applicable)'),
            '#maxlength' => 128,
        ];

        $form['contact_name'] = [
            '#type' => 'textfield',
            '#title' =>  $this->t('Contact Name *'),
            '#maxlength' => 128,
            '#required' => TRUE,
            '#attributes' => ['class' => array('cname')],
        ];

        $form['contact_email'] = [
            '#type' => 'email',
            '#title' =>  $this->t('Contact Email *'),
            '#maxlength' => 128,
            '#attributes' => ['style' => array('margin-left: 16.5%;')],
            '#required' => TRUE,
        ];

        $form['contact_tel'] = [
            '#type' => 'tel',
            '#title' => $this->t('Contact Telephone No. *'),
            '#maxlength' => 10,
            '#attributes' => ['style' => array('margin-left: 10.3%;')],
            '#required' => TRUE,
        ];

        $form['comment'] = [
            '#type' => 'textarea',
            '#title' =>  $this->t('Comments'),
            '#attributes' => ['class' => array('preap-comments')],
        ];

        $form['actions']['#type'] = 'actions';
        $form['actions']['submit'] = array(
            '#type' => 'submit',
            '#value' => $this->t('Save'),
            '#button_type' => 'primary',
            '#attributes' => ['class' => array('preap-submit')],
        );

        return $form;

    }

    public function validateForm( array &$form, FormStateInterface $form_state) {

    }


     /**
      * {@inheritDoc}
      * @see \Drupal\Core\Form\FormInterface::submitForm()
      */
    public function submitForm (array &$form, FormStateInterface $form_state) {
        // TODO: Auto-generated method stub
        $created_date_timestamp = strtotime(date('Y-m-d H:i:s'));  //timestamp
        $fields = [
            'case_no' => $form_state->getValue('case_no'),
            'project_address' => $form_state->getValue('project_address'),
            'building_permit_no' => $form_state->getValue('building_permit_no'),
            'abc_agent' => $form_state->getValue('abc_agent'),
            'contact_name' => $form_state->getValue('contact_name'),
            'contact_email' => $form_state->getValue('contact_email'),
            'contact_tel' => $form_state->getValue('contact_tel'),
            'comment' => $form_state->getValue('comment'),
            'created'=> $created_date_timestamp,
        ];

        // create json data for API
        $data_json = stripslashes(json_encode($fields));
        drupal_set_message($this->t('Successfully saved request.'), 'status', TRUE);
    }


    /**
     * Call API
     * @param string $jsonData
     */
    private function callAPI ( $jsonData ) {
        $ch = curl_init();
        $url = "https://planning.lacity.org/dcpapi/general/forms/process";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec ($ch);

        curl_close ($ch);
    }
}