<?php
/**
 * @file
 * Contains Drupal\constant_contact\Form\ConstantContactBlockForm.
 */
namespace Drupal\constant_contact\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class ConstantContactBlockForm extends FormBase {
    /**
     *
     * {@inheritdoc}
     * @see \Drupal\Core\Form\FormInterface::getFormId()
     */
    public function getFormId() {
        return 'constant_contact_form';
    }

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\Core\Form\FormInterface::buildForm()
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        $form['intro'] = array(
            '#markup' => "<strong>Contact Information</strong> (Fields marked with an asterisk [*] are required)",
        );
        
        $form['first_name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('First name'),
            '#title_display' => 'invisible', 
            '#form_type' => 'horizontal',
            '#placeholder' => 'first name *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')),
            '#maxlength' => 50,
            '#size' => 50,
            '#maxlength_js' => TRUE,
            '#required' => TRUE,
        ];
        
        $form['last_name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Last name'),
            '#title_display' => 'invisible', 
            '#placeholder' => 'last name *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')),
            '#maxlength' => 50,
            '#maxlength_js' => TRUE,
            '#required' => TRUE
        ];
        
        $form['email'] = [
            '#type' => 'email',
            '#title' => $this->t('Email'),
            '#title_display' => 'invisible', 
            '#placeholder' => 'email address *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')), 
            '#maxlength' => 50,
            '#required' => TRUE
        ];
        
        $form['street_address'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Street address'),
            '#title_display' => 'invisible', 
            '#placeholder' => 'street address *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')),
            '#maxlength' => 64,
            '#maxlength_js' => TRUE,
            '#required' => TRUE
        ];
        
        $form['city'] = [
            '#type' => 'textfield',
            '#title' => $this->t('City'),
            '#title_display' => 'invisible',
            '#placeholder' => 'city *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')), 
            '#maxlength' => 60,
            '#required' => TRUE
        ];
        
        $form['state'] = [
            '#type' => 'select',
            '#title' => $this->t('State'),
            '#default_value' => '',
            '#title_display' => 'invisible', 
            '#placeholder' => 'state *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')), 
            '#options' => [
                "" => $this->t("state *"),
                "AL" => $this->t("Alabama"),
                "AK" => $this->t("Alaska"),
                "AZ" => $this->t("Arizona"),
                "AR" => $this->t("Arkansas"),
                "CA" => $this->t("California"),
                "CO" => $this->t("Colorado"),
                "CT" => $this->t("Connecticut"),
                "DE" => $this->t("Delaware"),
                "FL" => $this->t("Florida"),
                "GA" => $this->t("Georgia"),
                "HI" => $this->t("Hawaii"),
                "ID" => $this->t("Idaho"),
                "IL" => $this->t("Illinois"),
                "IN" => $this->t("Indiana"),
                "IA" => $this->t("Iowa"),
                "KS" => $this->t("Kansas"),
                "KY" => $this->t("Kentucky"),
                "LA" => $this->t("Louisiana"),
                "ME" => $this->t("Maine"),
                "MD" => $this->t("Maryland"),
                "MA" => $this->t("Massachusetts"),
                "MI" => $this->t("Michigan"),
                "MN" => $this->t("Minnesota"),
                "MS" => $this->t("Mississippi"),
                "MO" => $this->t("Missouri"),
                "MT" => $this->t("Montana"),
                "NE" => $this->t("Nebraska"),
                "NV" => $this->t("Nevada"),
                "NH" => $this->t("New Hampshire"),
                "NJ" => $this->t("New Jersey"),
                "NM" => $this->t("New Mexico"),
                "NY" => $this->t("New York"),
                "NC" => $this->t("North Carolina"),
                "ND" => $this->t("North Dakota"),
                "OH" => $this->t("Ohio"),
                "OK" => $this->t("Oklahoma"),
                "OR" => $this->t("Oregon"),
                "PA" => $this->t("Pennsylvania"),
                "RI" => $this->t("Rhode Island"),
                "SC" => $this->t("South Carolina"),
                "SD" => $this->t("South Dakota"),
                "TN" => $this->t("Tennessee"),
                "TX" => $this->t("Texas"),
                "UT" => $this->t("Utah"),
                "VT" => $this->t("Vermont"),
                "VA" => $this->t("Virginia"),
                "WA" => $this->t("Washington"),
                "WV" => $this->t("West Virginia"),
                "WI" => $this->t("Wisconsin"),
                "WY" => $this->t("Wyoming"),
            ],           
            '#required' => TRUE
        ];
        
        $form['zip'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Zip'),
            '#title_display' => 'invisible', 
            '#placeholder' => 'zip *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control'), 'pattern' => '[0-9]+'),
            '#maxlength' => 5,
            '#maxlength_js' => TRUE,
            '#required' => TRUE,
            
        ];
        
        $form['actions']['#type'] = 'actions';
        
        $form['actions']['submit'] = array (
            '#type' => 'submit',
            '#value' => $this->t('Submit'),
        ); 
        
        return $form;
    }
    
    /**
     * {@inheritdoc}
     */
    public function validateForm(array &$form, FormStateInterface $form_state) {
        $message = parent::validateForm($form, $form_state);
        
        if (strlen($form_state->getValue('first_name')) < 2) {
            $form_state->setErrorByName('first_name', $this->t('First name can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('last_name')) < 2) {
            $form_state->setErrorByName('last_name', $this->t('First name can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('email')) < 2) {
            $form_state->setErrorByName('email', $this->t('Email can\'t be blank.'));
        }
        
       /* * comment address fields. *
        *        
        if (strlen($form_state->getValue('street_address')) < 2) {
            $form_state->setErrorByName('street_address', $this->t('Street address can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('city')) < 3) {
            $form_state->setErrorByName('city', $this->t('City can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('state')) != 2) {
            $form_state->setErrorByName('state', $this->t('State can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('zip')) != 5 || !is_numeric($form_state->getValue('zip'))) {
            $form_state->setErrorByName('zip', $this->t('ZIP is invalid.'));
        } 
        */
        
        return $message;
    }
    
    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        $inputVal['first_name'] = $form_state->getValue('first_name');
        $inputVal['last_name'] = $form_state->getValue('last_name');
        $inputVal['email'] = $form_state->getValue('email');
        
/*         $inputVal['street_address'] = $form_state->getValue('street_address');
        $inputVal['city'] = $form_state->getValue('city');
        $inputVal['state'] = $form_state->getValue('state');
        $inputVal['zip'] = $form_state->getValue('zip'); */

        $op = callConstantContactAPI($inputVal);
               
        if ($op) {
          drupal_set_message(t('Thank you! your\'s contact detail successfully added.'), 'status', TRUE);
       } 
    }  
}
