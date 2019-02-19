<?php
/**
 * @file
 * Contains \Drupal\la_appointment\Form\ResumeForm.
 */
namespace Drupal\la_appointment\Form;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Database\Database;

class LaAppointmentForm extends FormBase {
    /**
     * {@inheritdoc}
     */
    public function getFormId() {
  	     return 'laappintment_form';
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        // Personal Information
      	$form['personal_info'] = array (
            '#type' => 'fieldset',
            '#title' => $this->t('Personal Information :'),
            '#group' => 'vertical_tabs',
        );

      	$form['personal_info']['guest_name'] = array (
            '#type' => 'textfield',
            '#title' =>$this-> t('Name'),
  	        '#maxlength' => 100,
  	        '#required' => TRUE,
      	    '#attributes' => ['class' => array('app-textbox', 'form-group')],
        );

        $form['personal_info']['guest_email'] = array (
            '#type' => 'email',
            '#title' => t('Email'),
            '#maxlength' => 100,
            '#required' => TRUE,
            '#attributes' => ['class' => array('app-textbox')],
        );

        $form['personal_info']['guest_phone'] = array (
            '#type' => 'tel',
            '#title' => $this->t('Phone number'),
        	'#maxlength' => 20,
            '#required' => TRUE,
            '#attributes' => ['class' => array('app-textbox-phone')],
        );

        // Appointment Information
        $form['appointment_info'] = array(
            '#type' => 'fieldset',
            '#title' => t('Appointment Information :'),
            '#group' => 'vertical_tabs',
        );

        $form['appointment_info']['appointment_location'] = array (
            '#type' => 'radios',
            '#title' => $this->t('Select Location : '),
            '#required' => TRUE,
            '#options' => array(
                'Metro Office: Figueroa Plaza' => $this->t('Metro Office: Figueroa Plaza'),
                'Valley Office: Marvin Braude Building' => $this->t('Valley Office: Marvin Braude Building'),
                'West LA Office: Sawtelle Blvd' => $this->t('West LA Office: Sawtelle Blvd'),
            ),
        );

        $form['appointment_info']['case_add_house_number'] = array (
            '#type' => 'textfield',
            '#title' => $this->t('House number'),
            '#maxlength' => 20,
            '#required' => TRUE,
            '#attributes' => ['class' => array('app-textbox-appointment')],
        );

        $form['appointment_info']['case_add_direction'] = array (
            '#type' => 'select',
            '#title' => $this->t('Direction'),
            '#options' => [
                'East' => $this->t('East'),
                'North' => $this->t('North'),
                'South' => $this->t('South'),
                'West' => $this->t('West'),
            ],
            '#attributes' => ['class' => array('app-textbox-direction')],
        );

        $form['appointment_info']['case_add_street_name'] = array (
            '#type' => 'textfield',
            '#title' => $this->t('Street name'),
            '#maxlength' => 100,
            '#required' => TRUE,
            '#attributes' => ['class' => array('app-textbox-appointment-street')],
        );

        // appointment for
        $form['appointment_info']['appointment_for'] = array (
            '#type' => 'radios',
            '#title' => t('Appointment for :'),
            '#options' => [
              'Filing' => 'Case Filing',
              'Clearing' => 'Case Condition Clearing',
              'AllWirelessFacilities' => 'All Wireless Facilities (Metro office only)',
              'MapProcessingServices' => 'Map Processing Services (Metro office only) (Lot Line Adj., Private Streets, C of C)',
              'BEStService' => 'BESt, Alcohol Sales and Service/Dancing (Metro office only) (case filing and condition clearance)',
              'AffordableHousing' => 'Affordable Housing Projects (Metro office only) (Density Bonus, UDU, TOC)'
            ],
            '#attributes' => ['class' => array('disable')],
        );


        // Case filling
        $form['appointment_info']['subject'] = array (
            '#type' => 'textarea',
            '#title' => t('Appointment Subject (Specify Case Filing Type)'),
            '#states' => array('visible' => array(':input[name="appointment_for"]' => array('value' => 'Filing')))
        );

        // Case Condition Clearing
        $form['appointment_info']['cases'] = array (
            '#type' => 'fieldset',
            '#title' => t('Note: For Sign Off, Please Enter Case Numbers'),
            '#collapsible' => TRUE,
            '#group' => 'vertical_tabs',
            '#states' => array('visible' => array(':input[name="appointment_for"]' => array('value' => 'Clearing')))
        );

        $form['appointment_info']['cases']['case1'] = array (
            '#type' => 'textfield',
            '#title' => t('Case 1:'),
            '#attributes' => ['class' => array('app-textbox-cases')],
        );

        $form['appointment_info']['cases']['case2'] = array (
            '#type' => 'textfield',
            '#title' => t('Case 2:'),
            '#attributes' => ['class' => array('app-textbox-cases')],
        );

        $form['appointment_info']['cases']['case3'] = array (
            '#type' => 'textfield',
            '#title' => t('Case 3:'),
            '#attributes' => ['class' => array('app-textbox-cases')],
        );

        $form['appointment_info']['cases']['case4'] = array (
            '#type' => 'textfield',
            '#title' => t('Case 4:'),
            '#attributes' => ['class' => array('app-textbox-cases')],
        );

        $form['appointment_info']['cases']['case5'] = array (
            '#type' => 'textfield',
            '#title' => t('Case 5:'),
            '#attributes' => ['class' => array('app-textbox-cases')],
        );

        $form['appointment_info']['cases']['case6'] = array (
            '#type' => 'textfield',
            '#title' => t('Case 6:'),
            '#attributes' => ['class' => array('app-textbox-cases')],
        );

        // Appointment Date and Time Preference
        $form['appointment_date_time'] = array(
            '#type' => 'fieldset',
            '#title' => t('Appointment Date and Time Preference:'),
            '#collapsible' => TRUE,
            '#group' => 'vertical_tabs',
        );

        $form['appointment_date_time']['first_available_appointment'] = array (
            '#type' => 'checkboxes',
            '#title' => $this->t('We will try to schedule an appointment for the first available date based on your preferences below : '),
            '#options' => [
                'First Available Appointment' => $this->t('First Available Appointment'),
            ],
            '#description' => 'OR, Please select your day of the week preference: ',
        );

        $form['appointment_date_time']['week_day_preference_anyday'] = array (
            '#type' => 'checkbox',
            '#title' => $this->t('Any Date'),
            '#default_value' => 'Any Date',
            '#attributes' => ['id' => ['any_day']],
            '#description' => 'or select one or more preferred days below:'
        );

        $form['appointment_date_time']['week_day_preference'] = array (
            '#type' => 'checkboxes',
            '#options' => [
                'Monday' => $this->t('Monday'),
                'Tuesday' => $this->t('Tuesday'),
                'Wednesday' => $this->t('Wednesday'),
                'Thursday' => $this->t('Thursday'),
                'Friday' => $this->t('Friday'),
            ],
            '#attributes' => ['class' => ['weekdays']],
        );

        $form['appointment_date_time']['time_preference'] = array (
            '#type' => 'radios',
            '#title' => $this->t('AND, Please select your time of day preference :  '),
            '#required' => TRUE,
            '#options' => [
                'Anytime' => $this->t('Anytime'),
                'Mornings (between 7:30 AM and Noon)' => $this->t('Mornings (between 7:30 AM and Noon)'),
                'Afternoons (between Noon and 4:30 PM)' => $this->t('Afternoons (between Noon and 4:30 PM)'),
            ],
            '#attributes' => ['class' => ['time_preference']],
        );

        $form['actions']['#type'] = 'actions';

        $form['actions']['submit'] = array (
            '#type' => 'submit',
            '#value' => $this->t('Submit'),
            /* '#button_type' => 'primary', */
        );

        return $form;
    }

  /**
   * {@inheritdoc}
   */
    public function validateForm(array &$form, FormStateInterface $form_state) {}

  /**
   * {@inheritdoc}
   */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        drupal_set_message($form_state->getValue('name'));
        $created_date_timestamp = strtotime(date('Y-m-d H:i:s'));  //timestamp
        $status = 0;

        $firstAvailableAppointment = current($form_state->getValue('first_available_appointment'));         // return the value of the first array element.
        $anyDate = $form_state->getValue('week_day_preference_anyday');
        $anyDate = ($anyDate == 1) ? 'Any Date' : 0;

        $weekDays = $form_state->getValue('week_day_preference');
        $weekDayPreference = '';
        foreach ($weekDays as $v) {
           if ( gettype($v) === 'string' ) {
               $weekDayPreference .=  $v . ", ";
           }
        }

        $weekDayPreference = rtrim($weekDayPreference, ', ');
        $weekDayPreference = ( !empty($anyDate) ) ? $anyDate : $weekDayPreference;

        $fields = [
            'guest_name' => $form_state->getValue('guest_name'),
            'guest_email' => $form_state->getValue('guest_email'),
            'guest_phone' => $form_state->getValue('guest_phone'),
            'appointment_location' => $form_state->getValue('appointment_location'),
            'case_add_house_number'=>  $form_state->getValue('case_add_house_number'),
            'case_add_direction' => $form_state->getValue('case_add_direction'),
            'appointment_for' => $form_state->getValue('appointment_for'),
            'case_add_street_name' => $form_state->getValue('case_add_street_name'),
            'subject'=>  $form_state->getValue('subject'),
            'cases'=> json_encode(['case1'=> $form_state->getValue('case1'),'case2'=>$form_state->getValue('case2'),'case3'=>$form_state->getValue('case3'),'case4'=>$form_state->getValue('case4'),'case5'=>$form_state->getValue('case5'),'case6'=>$form_state->getValue('case6')]),
            'week_day_preference'=> ($firstAvailableAppointment) ? $firstAvailableAppointment : $weekDayPreference,
            'time_preference' => $form_state->getValue('time_preference'),
            'created'=> $created_date_timestamp,
            'status' => $status
        ];

        // create json data for API to send email
        $appointment_data = 'appointment_data='.stripslashes(json_encode([
            'device' => 'Website',
            'name' => $fields['guest_name'],
            'email' => $fields['guest_email'],
            'phone' => $fields['guest_phone'],
            'location' => $fields['appointment_location'],
            'house'=>  $fields['case_add_house_number'],
            'direction' => $fields['case_add_direction'],
            'street' => $fields['case_add_street_name'],
            'appttype' => $fields['appointment_for'],
            'subject'=> $fields['subject'],
            'cases'=> $fields['cases'],
            'datepref'=> $fields['week_day_preference'],
            'timepref' => $fields['time_preference'],
        ]));

        //$appointment_data = 'appointment_data='.'{"device":"Website","name":"Humbal Shahi","email":"humbal.shahi@lacity.org","phone":"123 456 7896","location":"Valley Office: Marvin Braude Building","house":"200","direction":"North","street":"Temple","appttype":"Clearing","subject":"","cases":{"case1":"c-1","case2":"c-2","case3":"c-3","case4":"c-4","case5":"","case6":""},"datepref":"Monday","timepref":"Mornings (between 7:30 AM and Noon)"}';
        db_insert('la_appointments')
            ->fields($fields)
            ->execute();

        $this->callAPI($appointment_data);

        drupal_set_message($this->t('Successfully saved appointment.'), 'status', TRUE);
    }

    /**
     * Call API
     * @param string $jsonData
     */
    private function callAPI ( $jsonData ) {
        $ch = curl_init();
        $url = "http://161.149.221.142/AppointmentSystem/Default.aspx?e=json";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec ($ch);

        curl_close ($ch);
    }
}