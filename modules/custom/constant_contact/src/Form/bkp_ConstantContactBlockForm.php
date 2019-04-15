<?php
/**
 * @file
 * Contains Drupal\constant_contact\Form\ConstantContactBlockForm.
 */
namespace Drupal\constant_contact\Form;

require drupal_get_path('module', 'constant_contact').'/lib/src/Ctct/autoload.php';
require drupal_get_path('module', 'constant_contact').'/lib/vendor/autoload.php';

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

// constant contact
use Ctct\Components\Contacts\Contact;
use Ctct\ConstantContact;
use Ctct\Components\Contacts\Address;
use Ctct\Exceptions\CtctException;


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
            '#markup' => "<strong>Contact Information</strong> (Fields mark with an * are required)",
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
            '#title_display' => 'invisible', 
            '#placeholder' => 'state *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')), 
            '#options' => [
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
        
        if (strlen($form_state->getValue('street_address')) < 2) {
            $form_state->setErrorByName('street_address', $this->t('Street address can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('city')) < 2) {
            $form_state->setErrorByName('city', $this->t('City can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('state')) < 2) {
            $form_state->setErrorByName('state', $this->t('State can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('zip')) > 5 || !is_numeric($form_state->getValue('zip'))) {
            $form_state->setErrorByName('zip', $this->t('Zip is not valid.'));
        }
        
        return $message;
    }
    
    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        $inputVal['first_name'] = $form_state->getValue('first_name');
        $inputVal['last_name'] = $form_state->getValue('last_name');
        $inputVal['email'] = $form_state->getValue('email');
        $inputVal['street_address'] = $form_state->getValue('street_address');
        $inputVal['city'] = $form_state->getValue('city');
        $inputVal['state'] = $form_state->getValue('state');
        $inputVal['zip'] = $form_state->getValue('zip');

        $op = $this->callConstantContactAPI($inputVal);
        
        if ($op) {
          drupal_set_message(t('Thank you! your\'s contact detail successfully added.'), 'status', TRUE);
       } 
    }
    
    // Call API

  /**
   * @param string $val
   * @return mixed
   */
  public function callConstantContactAPI ($val = '') {
      // Get data from setting
      $config = \Drupal::config('constant_contact.settings');
      $APIKEY = $config->get('cc_apikey');
      $ACCESS_TOKEN = $config->get('cc_access_token');

      // See: https://developer.constantcontact.com/get-started.html
      $cc = new ConstantContact($APIKEY);
      $listId = '1734008585';                     //Dev['General Interest' => '1365616101', 'News' => '1114618156'] // Prod ["Planning Website" => "1734008585"]

     // check if the form was submitted
      if (isset($val['email']) && strlen($val['email']) > 1) {
          try {
              // check to see if a contact with the email address already exists in the account
              $response = $cc->contactService->getContacts($ACCESS_TOKEN, array('email' => $val['email']));

              // create a new contact if one doesn't exist
              if (empty($response->results)) {
                  $action = "Creating Contact";

                  $contact = new Contact();
                  $contact->first_name = $val['first_name'];
                  $contact->last_name = $val['last_name'];
                  $contact->addEmail($val['email']);
                  $contact->addAddress(Address::create(array(
                      "address_type"  => "BUSINESS",
                      "line1"         => $val['street_address'],
                      "city"          => $val['city'],
                      "state"         => $val['state'],
                      "postal_code"   => $val['zip']
                  )));

                  $contact->addList($listId);

                  $returnContact = $cc->contactService->addContact($ACCESS_TOKEN, $contact, true);
                  return $returnContact;
              } else{
                drupal_set_message(t('Oops! the provided email already exists in our system.'), 'error', TRUE);
              }
          } catch (CtctException $ex) {
              echo '<span class="label label-important">Error ' . @$action . '</span>';
              echo '<div class="container alert-error"><pre class="failure-pre">';
              print_r($ex->getErrors());
              echo '</pre></div>';
              die();
          }
      }
    }
}