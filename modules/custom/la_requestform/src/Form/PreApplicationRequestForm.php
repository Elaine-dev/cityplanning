<?php
/**
 * @file
 * Contains \Drupal\la_requestform\Form\PreApplicationRequestForm.
 */

namespace Drupal\la_requestform\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Database\Database;
use Drupal\test_theme\ThemeClass;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Behat\Mink\Exception\Exception;

class PreApplicationRequestForm extends FormBase
{
     
    /**
     * {@inheritDoc}
     * @see \Drupal\Core\Form\FormInterface::getFormId()
     */
    public function getFormId () {
        // TODO: Auto-generated method stub
        return 'la_requestform_form';
    }
    
    /**
    * {@inheritDoc}
    * @see \Drupal\Core\Form\FormInterface::buildForm()
    */
    public function buildForm (array $form, FormStateInterface $form_state) {
        $form = array(
            '#attributes' => array('enctype' => 'multipart/form-data'),
        );
        
        $validators = array(
            'file_validate_extensions' => array('pdf'),
        );
        
        $form['projectInfo']['project_address'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Project Address *'),
            '#maxlength' => 256,
            '#required' => TRUE,
            '#attributes' => ['class' => array('preap-textbox')],
        ];
        
        $form['projectInfo']['contact_name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Contact Name *'),
            '#maxlength' => 150,
            '#required' => TRUE,
            '#attributes' => ['class' => array('preap-textbox-contact-name')],
        ];
        
        $form['projectInfo']['contact_email'] = [
            '#type' => 'email',
            '#title' => $this->t('Contact Email *'),
            '#maxlength' => 150,
            '#required' => TRUE,
            '#attributes' => ['class' => array('preap-textbox-contact-name')],
        ];
        
        $form['projectInfo']['contact_tel'] = [
            '#type' => 'tel',
            '#title' => $this->t('Contact Telephone No. *'),
            '#maxlength' => 10,
            '#required' => TRUE,
            '#attributes' => ['class' => array('preap-email')],
        ];
        
        $form['projectInfo']['comments'] = [
            '#type' => 'textarea',
            '#title' => $this->t('Comments (optional)'),
            '#attributes' => ['class' => array('preap-comments')],
        ];
        
        $form['preApplicationForm'] = [
            '#type' => 'fieldset',
            '#title' => $this->t('Pre-Application Form *'),
            '#group' => 'vertical_tabs',
        ];
         
        $form['preApplicationForm']['preAppForm'] = [
            '#type' => 'managed_file',
            '#description' => $this->t('NOTE: If you have not completed the Pre-Application Form, click <a href="#">HERE</a> before proceeding.'),
            '#upload_validators' => $validators,
            '#upload_location' => 'public://request_form/',
            '#required' => TRUE,
            '#multiple' => TRUE, 
        ];
        
        $form['departmentCPA'] = [
            '#type' => 'fieldset',
            '#title' => $this->t('Department of City Planning Application (Pages 1-4 only) *'),
            '#group' => 'vertical_tabs',
        ];
        
        $form['departmentCPA']['department_cpas'] = [
            '#type' => 'managed_file',
            '#description' => $this->t('NOTE: If you have not completed the Department of City Planning Application, click <a href="#">HERE</a> before proceeding and when applicable upload one of the following:'),
            '#upload_validators' => $validators,
            '#upload_location' => 'public://request_form/',
            '#required' => TRUE,
            '#multiple' => TRUE, 
        ];
        
        
        $form['signingDepartment'] = [
            '#type' => 'fieldset',
            '#title' => $this->t('Please indicate who will be signing the Department of City Planning Application'),
            '#group' => 'vertical_tabs',
        ];
        
        $form['signingDepartment']['application_signer'] = [
            '#type' => 'checkboxes',
            '#options' => [
                'Owner' => $this->t('Owner'),
                'Applicant' => $this->t('Applicant'),
                'Representative' => $this->t('Representative'),
            ],
        ];
        
        $form['signingDepartment']['signature'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Name(s) of signatory(ies): (separated by a comma)'),
        ];
        
        $form['signingDepartment']['ownership_authority_doc'] = [
            '#type' => 'managed_file',
            '#title' => $this->t('Do not sign the application until staff has verified the authority to sign. Please provide the necessary documents to establish ownership/lessee authority.'),
            '#description' => $this->t(' <br>- Articles of Incorporation and/or ownership disclosure or a current Statement of Information filed with the State Secretary for properties owned by a Corp., LLC, Partnership, Ltd Partnership or Trust  <br>
            -Grand Deed, if owned by an entity, provide one or more of the documents above <br>
            -Lease agreement, if leasing the entire site <br>
            -Letter of Authorization with the notarized signature of the owner or lessee after verification of authority to sign'),
            '#upload_validators' => $validators,
            '#upload_location' => 'public://request_form/',
            '#multiple' => TRUE,
        ];
        
        $form['envDocs'] = [
            '#type' => 'fieldset',
            '#title' => $this->t('Environmental Documentation, as applicable: *'),
            '#group' => 'vertical_tabs',
        ];
        
        $form['envDocs']['environmental_documentation'] = [
            '#type' => 'managed_file',
            '#description' => $this->t('
                <br>EAF Form (pages 1-4) <br>
                NOTE: If you have not completed the EAF Form, click HERE before proceeding. <br><br>
        
                CE (under 200 seats, on-site consumption only) <br>
                NOTE: If you have not completed the CE for on-site consumption under 200 seats, click HERE before proceeding. <br><br>
        
                CE (Renewal of Grant) <br>
                NOTE: If you have not completed the CE for renewal of grant form, click HERE before proceeding.
            '),
            '#upload_location' => 'public://request_form/',
            '#required' => TRUE,
            '#multiple' => TRUE,
        ];
        
        $form['plot'] = [
            '#type' => 'fieldset',
            '#title' => $this->t('Plot Plan(s) (PDF) *'),
            '#group' => 'vertical_tabs',
        ];
        
        $form['plot']['plot_plan'] = [
            '#type' => 'managed_file',
            '#upload_location' => 'public://request_form/',
            '#upload_validators' => $validators,
            '#required' => TRUE,
            '#multiple' => TRUE,
        ];
        
        $form['floor'] = [
            '#type' => 'fieldset',
            '#title' => $this->t('Floor Plan(s) (PDF) *'),
            '#group' => 'vertical_tabs',
        ];
        
        $form['floor']['floor_plan'] = [
            '#type' => 'managed_file',
            '#upload_location' => 'public://request_form/',
            '#upload_validators' => $validators,
            '#required' => TRUE,
            '#multiple' => TRUE,
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
    
    /**
     * {@inheritdoc}
     */
    public function validateForm( array &$form, FormStateInterface $form_state ) {
        if (empty($form_state->getValue('contact_email'))) {
            $form_state->setErrorByName('contact_email', $this->t('Email address is compulsory.'));
        }
        if (strlen($form_state->getValue('contact_tel')) < 10) {
            $form_state->setErrorByName('contact_tel', $this->t('Mobile number is too short.'));
        }
    }
    
    /**
     * {@inheritdoc}
     */
    public function submitForm ( array &$form, FormStateInterface $form_state ) {
        // load file object
        if (!empty($form_state->getValue('preAppForm'))) {
            $preAppFormSource = self::getFileName($form_state->getValue('preAppForm'));
        }
        
        if (!empty($form_state->getValue('department_cpas'))) {
            $department_cpasSource = self::getFileName($form_state->getValue('department_cpas'));
        }
        
        if (!empty($form_state->getValue('ownership_authority_doc'))) {
            $ownershipAuthorityDocSource = self::getFileName($form_state->getValue('ownership_authority_doc'));
        }
        if (!empty($form_state->getValue('environmental_documentation'))) {
            $environmentalDocumentationSource = self::getFileName($form_state->getValue('environmental_documentation'));
        }
        if (!empty($form_state->getValue('plot_plan'))) {
            $plotPlanSource = self::getFileName($form_state->getValue('plot_plan'));
        }
        if (!empty($form_state->getValue('floor_plan'))) {
            $floorPlanSource = self::getFileName($form_state->getValue('floor_plan'));
        }
        
        $signers = $form_state->getValue('application_signer');
        $applicationSigner = implode(',', array_values($signers));
        $applicationSigner = rtrim($applicationSigner, ',0');
        
       // $applicationSigner = ($v1) ? $v1:''
        
        $created_date_timestamp = strtotime(date('Y-m-d H:i:s'));  //timestamp
        $fields = [
            'project_address' => $form_state->getValue('project_address'),
            'contact_name' => $form_state->getValue('contact_name'),
            'contact_email' => $form_state->getValue('contact_email'),
            'contact_tel' => $form_state->getValue('contact_tel'),
            'comments' => $form_state->getValue('comments'),
            'pre_application_form' => ($preAppFormSource) ? $preAppFormSource : '',
            'department_city_planning_application' => ($department_cpasSource) ? $department_cpasSource : '',
            'application_signer' => $applicationSigner,
            'signature' => $form_state->getValue('signature'),
            'ownership_authority_doc' => ($ownershipAuthorityDocSource) ? $ownershipAuthorityDocSource : '',
            'environmental_documentation' => ($environmentalDocumentationSource) ? $environmentalDocumentationSource : '',
            'plot_plan' => ($plotPlanSource) ? $plotPlanSource : '',
            'floor_plan' => ($floorPlanSource) ? $floorPlanSource : '',
            'created'=> $created_date_timestamp,
            'status' => 0
        ];
        
        // create json data for API
        $data_json = stripslashes(json_encode($fields));
        
        try {
            $op = db_insert('requestform')
                ->fields($fields)
                ->execute();
            if ($op) {
                drupal_set_message($this->t('Successfully saved appointment.'), 'status', TRUE);
                $this->callAPI($data_json);
            }
        } catch ( Exception $e) {
            throwException($e);
        }
    }
    
    /**
     * getFileName.
     */
    static function getFileName ( $data = Null ) {
        foreach ($data as $val) {
            @$fileSource .= self::getAbsoluteFilePath($val).',';
        }
        return $fileSource = rtrim($fileSource, ',');
    }
    
    /**
     * getAbsoluteFilePath
     */
    static function getAbsoluteFilePath ( $fileId ) {
        $file = file_load($fileId);
        $fileSource = file_create_url($file->get('uri')->getString());
        return $fileSource;
    }
    
    /**
     * Call API
     * @param string $jsonData
     */
    private function callAPI ( $jsonData ) {
        $ch = curl_init();
        $url = "http://161.149.221.142/dcpapi/general/forms/process";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec ($ch);
    
        curl_close ($ch);
    }
}

