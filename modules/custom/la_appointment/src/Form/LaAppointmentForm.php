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
use Drupal\Core\Routing\TrustedRedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonDecode;

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
  	        //'#maxlength' => 100,
  	        '#required' => TRUE,
      	    '#attributes' => ['class' => array('app-textbox', 'form-group')],
        );

        $form['personal_info']['guest_email'] = array (
            '#type' => 'email',
            '#title' => t('Email'),
            //'#maxlength' => 200,
            '#required' => TRUE,
            '#attributes' => ['class' => array('app-textbox')],
        );

        $form['personal_info']['guest_phone'] = array (
            '#type' => 'tel',
            '#title' => $this->t('Phone number'),
        	//'#maxlength' => 14,
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
            //'#maxlength' => 20,
            '#required' => TRUE,
            '#attributes' => ['class' => array('app-textbox-appointment')],
        );

        $form['appointment_info']['case_add_direction'] = array (
            '#type' => 'select',
            '#title' => $this->t('Direction'),
            '#options' => [
                '' => $this->t(''),
                'East' => $this->t('East'),
                'North' => $this->t('North'),
                'South' => $this->t('South'),
                'West' => $this->t('West'),
            ],
            '#attributes' => ['class' => array('app-textbox-direction')],
        );

        $form['appointment_info']['case_add_street_name'] = array (
            '#type' => 'textfield',
            '#title' => $this->t('Street name <br>& Unit number'),
            //'#maxlength' => 100,
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
              'WirelessFacilities' => 'Wireless Facilities (Metro office only)',
              'MapProcessingServices' => 'Map Processing Services (Metro office only) (Lot Line Adj., Private Streets, C of C)',
              'BEStService' => 'BESt, Alcohol Sales and Service/Dancing (Metro office only) (case filing and condition clearance)',
              'AffordableHousing' => 'Affordable Housing Projects (Metro office only) (Density Bonus, UDU, TOC)',
              'PARP' => 'Preliminary Application Review Program (Metro office only) (SB330 preliminary application)'
            ],
            '#attributes' => ['class' => array('disable')],
            '#required' => TRUE,
        );


        // Case filling
        $form['appointment_info']['subject'] = array (
            '#type' => 'textarea',
            '#title' => t('Appointment Subject (Specify Case Filing Type)'),
            '#states' => [
                'visible' => [  
                    [':input[name="appointment_for"]' => ['value' => 'Filing']],
                    [':input[name="appointment_for"]' => ['value' => 'WirelessFacilities']],                  
                    [':input[name="appointment_for"]' => ['value' => 'MapProcessingServices']],                  
                    [':input[name="appointment_for"]' => ['value' => 'BEStService']],                  
                    [':input[name="appointment_for"]' => ['value' => 'AffordableHousing']],
                    [':input[name="appointment_for"]' => ['value' => 'PARP']],
                ],
                'required' => [
                    [':input[name="appointment_for"]' => ['value' => 'Filing']],
                    [':input[name="appointment_for"]' => ['value' => 'WirelessFacilities']],
                    [':input[name="appointment_for"]' => ['value' => 'MapProcessingServices']],
                    [':input[name="appointment_for"]' => ['value' => 'BEStService']],
                    [':input[name="appointment_for"]' => ['value' => 'AffordableHousing']],
                    [':input[name="appointment_for"]' => ['value' => 'PARP']],
                ],
            ]
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
            '#states' => [
                'required' => [
                    [':input[name="appointment_for"]' => ['value' => 'Clearing']],
                ]
            ],
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
            '#required' => TRUE,
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
            '#description' => 'OR select one or more preferred days below:'
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
            //'#required' => TRUE,
            '#options' => [
                'Anytime' => $this->t('Anytime'),
                'Mornings (between 7:30 AM and Noon)' => $this->t('Mornings (between 7:30 AM and Noon)'),
                'Afternoons (between Noon and 4:30 PM)' => $this->t('Afternoons (between Noon and 4:30 PM)'),
            ],
            '#attributes' => ['class' => ['time_preference']],
        );
        
        $form['#attached']['library'][] = 'la_appointment/caseFilingAppointmentSys';

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
    public function validateForm(array &$form, FormStateInterface $form_state) {
        // Assert the Appointment date & time is valid
        $firstAvailable = $form_state->getValue('first_available_appointment')['First Available Appointment'];
        $anyday = $form_state->getValue('week_day_preference_anyday');  // 0 or 1        
        $weekday = array_filter($form_state->getValue('week_day_preference'));
        $timePreference = $form_state->getValue('time_preference');
        
        if (empty($firstAvailable) && ($anyday !== 1) && count($weekday) == 0 && empty($timePreference)) {
            $form_state->setErrorByName('appointmentDateTime', $this->t('Appointment Date and Time Preference :  field is required.'));
        }
    }

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
        if ($weekDays) {
            foreach ($weekDays as $v) {
                if ( gettype($v) === 'string' ) {
                    $weekDayPreference .=  $v . ", ";
                }
            }
        }
        
        $weekDayPreference = rtrim($weekDayPreference, ', ');
        $weekDayPreference = ( !empty($anyDate) ) ? $anyDate : $weekDayPreference;
        
        // Appointment for
        $appointment_for = $this->getAppointmentDetail($form_state->getValue('appointment_for'));        
        
        // for locations
        $full_address = $this->getLocation($form_state->getValue('appointment_location'));
                
        $cases = [
            'case1'=> ($form_state->getValue('case1')) ? $form_state->getValue('case1') : '',
            'case2'=> ($form_state->getValue('case2')) ? $form_state->getValue('case2') : '',
            'case3'=> ($form_state->getValue('case3')) ? $form_state->getValue('case3') : '',
            'case4'=> ($form_state->getValue('case4')) ? $form_state->getValue('case4') : '',
            'case5'=> ($form_state->getValue('case5')) ? $form_state->getValue('case5') : '',
            'case6'=> ($form_state->getValue('case6')) ? $form_state->getValue('case6') : ''
        ];

        $fields = [
            'guest_name' => $form_state->getValue('guest_name'),
            'guest_email' => $form_state->getValue('guest_email'),
            'guest_phone' => $form_state->getValue('guest_phone'),
            'appointment_location' => $full_address,
            'case_add_house_number'=>  $form_state->getValue('case_add_house_number'),
            'case_add_direction' => $form_state->getValue('case_add_direction'),
            'appointment_for' => $appointment_for,
            'case_add_street_name' => $form_state->getValue('case_add_street_name'),
            'subject'=> ($form_state->getValue('subject')) ? $form_state->getValue('subject') : '',
            'cases'=> json_encode($cases),
            'week_day_preference'=> ($firstAvailableAppointment) ? $firstAvailableAppointment : $weekDayPreference,
            'time_preference' => ($form_state->getValue('time_preference')) ? $form_state->getValue('time_preference') : '',
            'created'=> $created_date_timestamp,
            'status' => $status
        ];
        
        // create json data for API to send email
        $appointment_data = 'appointment_data='.stripslashes(json_encode([
            'device' => 'Website',
            'name' => $fields['guest_name'],
            'email' => $fields['guest_email'],
            'phone' => $fields['guest_phone'],
            'location' => $form_state->getValue('appointment_location'),
            'house'=>  $fields['case_add_house_number'],
            'direction' => $fields['case_add_direction'],
            'street' => $fields['case_add_street_name'],
            'appttype' => $form_state->getValue('appointment_for'), 
            'subject'=> $fields['subject'],
            'cases'=> $fields['cases'],
            'datepref'=> $fields['week_day_preference'],
            'timepref' => $fields['time_preference'],
        ]));              
       
        try{
            // Call API
            //$appointment_data = 'appointment_data='.'{"device":"Website","name":"Humbal Shahi","email":"humbal.shahi@lacity.org","phone":"123 456 7896","location":"Valley Office: Marvin Braude Building","house":"200","direction":"North","street":"Temple","appttype":"Clearing","subject":"","cases":{"case1":"c-1","case2":"c-2","case3":"c-3","case4":"c-4","case5":"","case6":""},"datepref":"Monday","timepref":"Mornings (between 7:30 AM and Noon)"}';
            $callResult = $this->callAPI($appointment_data);
            $callResultOP = json_decode($callResult, true);

           

           if (empty($callResultOP['error'])) { 
               // add record to the database
               $connection = \Drupal::database();
               $result = $connection->insert('la_appointments')
                   ->fields($fields)
                   ->execute();
                               
                drupal_set_message($this->t('Thank you for submitting your request to schedule an appointment, the details of that request are as follows.'), 'status', TRUE);
                $url = '/development-services/appointment/form/status/'.base64_encode($result);
                
                $response = new TrustedRedirectResponse($url, Response::HTTP_FOUND);
                $form_state->setResponse($response);
            }            
            
        } catch (Exception $e) {            
            // Log the exception to watchdog.
            \Drupal::logger('type')->error($e->getMessage());
        }        
    }

    /**
     * Call API
     * @param string $jsonData
     */
    private function callAPI($jsonData) {
        $ch = curl_init();
        $url = "https://planning.lacity.org/appointmentsystem/Default.aspx?e=json";      
        //$url = "http://10.68.8.144/appointmentsystem/Default.aspx?e=json";             // for testing
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);  
       
        curl_close ($ch);
        
        return $output;
    }
    
    private function getLocation($location = null) {
        switch ($location) {
            case 'Metro Office: Figueroa Plaza':
                $full_address = "DSC Metro (Figueroa Plaza): (213) 482-7077" ."<br>";
                $full_address .= "201 N. Figueroa St., 4th Floor, Los Angeles CA​ ​90012";
                break;
                
            case 'Valley Office: Marvin Braude Building':
                $full_address = "DSC Valley (Marvin Braude Building): (818) 374-5050" ."<br>";
                $full_address .= "6262 Van Nuys Blvd., 2nd Floor, Van Nuys CA 91401";
                break;
                
            case 'West LA Office: Sawtelle Blvd':
                $full_address = "DSC West LA (Sawtelle Blvd): (310) 231-2598" ."<br>";
                $full_address .= "1828 Sawtelle Blvd, Los Angeles CA​ ​90025";
                break;
                
            default:
                $full_address = '';
                break;
        }
        
        return $full_address;
    }
    
    private function getAppointmentDetail ($appointment_for = null) {
        switch ($appointment_for) {
            case 'Filing' :
                $appointmentFor = 'Case Filing';
                break;
                
            case 'Clearing' :
                $appointmentFor = 'Case Condition Clearing';
                break;
                
            case 'WirelessFacilities' :
                $appointmentFor = 'Wireless Facilities (Metro office only)';
                break;
                
            case 'MapProcessingServices' :
                $appointmentFor = 'Map Processing Services (Metro office only) (Lot Line Adj., Private Streets, C of C)';
                break;
                
            case 'BEStService' :
                $appointmentFor = 'BESt, Alcohol Sales and Service/Dancing (Metro office only) (case filing and condition clearance)';
                break;
                
            case 'AffordableHousing' :
                $appointmentFor = 'Affordable Housing Projects (Metro office only) (Density Bonus, UDU, TOC)';
                break;

                case 'PARP' :
                    $appointmentFor = 'Preliminary Application Review Program (Metro office only) (SB330 preliminary application)';
                    break;
                
            default:
                $appointmentFor = '';
                break;
        }
        
        return $appointmentFor;
    }
}
