<?php
/**
 * @file
 * Contains Drupal\constant_contact\Form\ConstantContactBlockForm.
 */
namespace Drupal\constant_contact\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class ConstantContactBlockForm2 extends FormBase {
    /**
     *
     * {@inheritdoc}
     * @see \Drupal\Core\Form\FormInterface::getFormId()
     */
    public function getFormId() {
        return 'constant_contact_form2';
    }

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\Core\Form\FormInterface::buildForm()
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        $form['email'] = [
            '#type' => 'email',
            '#title' => $this->t('Email'),
            #'#title_display' => 'invisible',
            #'#placeholder' => 'email *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')),
            '#maxlength' => 50,
            '#required' => TRUE
        ];
        
        $form['first_name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('First name'),
            #'#title_display' => 'invisible', 
            #'#placeholder' => 'first name *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')),
            '#maxlength' => 50,
            '#maxlength_js' => TRUE,
            '#required' => TRUE,
        ];
        
        $form['last_name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Last name'),
            #'#title_display' => 'invisible', 
            #'#placeholder' => 'last name *',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control')),
            '#maxlength' => 50,
            '#maxlength_js' => TRUE,
            '#required' => TRUE
        ];
        
        $form['zip'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Zip'),
            #'#title_display' => 'invisible',
            #'#placeholder' => 'zip',
            '#prefix' => '<div class="form-group">',
            '#suffix' => '</div>',
            '#attributes' => array('class' => array('form-control'), 'pattern' => '[0-9]+'),
            '#maxlength' => 5,
            '#maxlength_js' => TRUE,
            '#required' => FALSE,
            
        ];
        
        $form['markup_categories'] = array(
            '#markup' => "<strong>Please select newsletter category:</strong>",
        );
        
        
        $cat_topics_options = [
            '1158323517' => 'News Alerts',
            '1022331299' =>  'Citywide Ordinances & Code Amendments',
            'Housing' => 'Housing',
            'Mobility' => 'Mobility',
            'Sustainability & Climate Change' => 'Sustainability & Climate Change',
            '1313095575' => 'Historic Preservation',
            'Urban Design' => 'Urban Design',
            '1270995464' => 'General Plan & Community Plans',
            'Development Services' => 'Development Services',
            'Public Hearing Notices' => 'Public Hearing Notices',
            'Bi-Weekly Project Case Filings' => 'Bi-Weekly Project Case Filings',
            'Commission Meeting Agendas' => 'Commission Meeting Agendas',
            'Media Updates' => 'Media Updates',
        ];
        
        $form['cat_topics'] = array(
            '#title' => t('Topics'),
            '#type' => 'checkboxes',
            '#options' => $cat_topics_options,
        ); 
        
        $cat_geography_options = [
            'Central' => 'Central',
            'East Los Angeles' =>  'East Los Angeles',
            'West Los Angeles' => 'West Los Angeles',
            'South Los Angeles' => 'South Los Angeles',
            'Harbor' => 'Harbor',
            'North Valley' => 'North Valley',
            'South Valley' => 'South Valley',
        ];
        
        $form['cat_geography'] = array(
            '#title' => t('Geography'),
            '#type' => 'checkboxes',
            '#options' => $cat_geography_options,
        ); 
        
        $cat_planning_initiatives_options = [
            '1273093292' => 'Wildlife Pilot Study',
            '1678264406' =>  'Home-Sharing',
            'Housing Element Updates' => 'Housing Element Updates',
            '1976889870' => 'Vacation Rentals',
            '1875684732' => 'Boyle Heights Community Plan Update (English)',
            '1476167977' => 'Boyle Heights Community Plan Update (Spanish)',
            '1157570819' => 'Venice Local Coastal Program',
            '1441739467' => 'Hollywood Community Plan Update',
            '1379573425' => 'Westside Community Plan Update',
            '1296026339' => 'Downtown Los Angeles Community Plan Update',
            '2087543998' => 'Harbor Community Plan Update',
            '1986756966' => 'Southeast Valley Community Plan Update',
            '1052736637' => 'Southwest Valley Community Plan Update',
            '1692092300' => 'Slauson Transit Neighborhood Plan Update',
            '1209544670' => 'Orange Line Transit Neighborhood Plan Update',
            '1752174216' => 'Purple Line Transit Neighborhood Plan Update',
            'Sign Ordinance Update' => 'Sign Ordinance Update',
            '1825449032' => 'Mello Act Ordinance',
            '1956946113' => 'Mills Act Program',
            '2074095629' => 'Restaurant Beverage Program',
            '1514113430' => 'Temporary Signs: Construction Walls',
            '1452635464' => 'Cannabis Regulations',
            'Deemed Approved Ordinance' => 'Deemed Approved Ordinance',
            '1452808463' => 'Housing Element Update',
            '1698693806' => 'Ventura-Cahuenga Specific Plan Update',
            'Processes & Procedures' => 'Processes & Procedures',
        ];
        
        $form['cat_current_planning_initiatives'] = array(
            '#title' => t('Current Planning Initiatives'),
            '#type' => 'checkboxes',
            '#options' => $cat_planning_initiatives_options,
        ); 
        
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
        
        return $message;
    }
    
    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state) { 
        $cat_topics = [];
        $cat_geography = [];
        $cat_current_planning_initiatives = [];
        
        $inputVal['first_name'] = $form_state->getValue('first_name');
        $inputVal['last_name'] = $form_state->getValue('last_name');
        $inputVal['email'] = $form_state->getValue('email');
        $inputVal['zip'] = $form_state->getValue('zip'); 
        
        $cat_topics = array_filter($form_state->getValue('cat_topics'));
        $cat_geography = array_filter($form_state->getValue('cat_geography'));
        $cat_current_planning_initiatives = array_filter($form_state->getValue('cat_current_planning_initiatives'));
        $inputVal['newsletter_category'] = array_merge($cat_topics, $cat_geography, $cat_current_planning_initiatives);        

        $format_data = [];
        foreach ($inputVal['newsletter_category'] as $key => $val) {
            $format_data['BODY_VALUES'][$key][] = [
                'cc_id' => $val,
                'first_name' => $inputVal['first_name'],
                'last_name' => $inputVal['last_name'],
                'email' => $inputVal['email'],
                'zip' => $inputVal['zip'],
           ];
        }
          
        $op = $this->callAPI(json_encode($format_data));
       
        if ($op) {
          drupal_set_message(t('Successfully subscribed.'), 'status', TRUE);
       } 
    }
    
    /**
     * Call API
     * @param string $jsonData
     */
    private function callAPI($jsonData) {
        $ch = curl_init();
        $url = "http://10.68.8.95/dcpapi/general/contacts/7c37a8b6819e4631311a310468769898";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        
        curl_close ($ch);
        
        return $output;
    }
}
