<?php
/**
 * Created : Aug 1, 2017
 * Developer: Humbal Shahi
 * 
 * @filesource
 * Contains \Drupal\la_appointment\Controller\LaAppointmentController.
 */
namespace Drupal\la_appointment\Controller;

use Drupal\Core\Controller\ControllerBase;
//use RedUNIT\Base\Database;
use Symfony\Component\HttpFoundation\RedirectResponse;
use function GuzzleHttp\json_decode;
use Symfony\Component\Validator\Constraints\NotNull;

class LaAppointmentController extends ControllerBase
{
    /**
     * {@inheritdoc}
     */
    public function content () {
        return array (
            '#theme' => 'la_appointment',
        );
    }
    
    public function updateStatus($id) {
        $result = db_select('{la_appointments}','n')
            ->fields('n', array('status', 'id'))
            ->condition('id', $id,'=')
            ->execute()
            ->fetchAssoc();
        $status = $result['status'];
        $status = ($status == 0) ? 1 : 0;
    
        $result = db_update('{la_appointments}')
            ->condition('id', $id)
            ->fields(array('status' => $status))
            ->execute();
        return new RedirectResponse(\Drupal::url('la_appointment.admin_lis'));
    }
    
    public function deleteRecord($id) {
        db_delete('{la_appointments}')
            ->condition('id', $id)
            ->execute();
        return new RedirectResponse(\Drupal::url('la_appointment.admin_lis'));
    }

    public function formStatus($id = Null) {
        $deencrypted_id = base64_decode($id);
        
        $result = db_select('{la_appointments}','n')
            ->fields('n', array('guest_name', 'guest_email', 'guest_phone' , 'appointment_location', 'case_add_house_number', 'case_add_direction',
              'case_add_street_name', 'appointment_for', 'subject', 'cases', 'week_day_preference', 'time_preference', 'created', 'status'))
            ->condition('id', $deencrypted_id,'=')
            ->execute()
            ->fetchAssoc();

        $cases_decode = array_filter(json_decode($result['cases'], true));
        
        $cases = null;
        if (count($cases_decode) > 0) {
            foreach ($cases_decode as $key=>$val) {
                $cases .= $val ."<br>";              
            }
        }
      
        $result['cases_format'] = $cases;     

        $build = [
            '#type' => 'markup',
            '#theme' => 'la_appointment_status',
            '#data' => $result,
        ];

        return $build;
    }
}
