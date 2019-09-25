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
use Symfony\Component\HttpFoundation\RedirectResponse;

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
}