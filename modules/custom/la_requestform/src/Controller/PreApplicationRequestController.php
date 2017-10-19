<?php 
/**
 * @filesource \Drupal\la_requestform\Controller\PreApplicationRequestController.
 */
namespace Drupal\la_requestform\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\RedirectResponse;

class PreApplicationRequestController extends ControllerBase
{
    /**
     * {@inheritdoc}
     */   
    public function content () {
        return array(
            '#theme' => '',
        );
    }
}