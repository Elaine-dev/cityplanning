<?php 
namespace Drupal\la_slider\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\image\Entity\ImageStyle;

/**
 * Provides 'side menu'.
 *
 * @Block(
 *   id = "la_slide_block",
 *   admin_label = @Translation("Custom Homepage Slider"),
 * )
 */
class LaSliderBlock extends BlockBase {
    /**
     * {@inheritDoc}
     * @see \Drupal\Core\Block\BlockPluginInterface::build()
     */
    public function build () {
        // TODO: Load view with View ID
        $view = \Drupal\views\Views::getView('slider_homepage');
        $view->setDisplay('default');
        $view->execute();
        $result = $view->result;
        
        $records = [];          //Array to hold newly formatted records
        $images_styles = [
            'large' => ImageStyle::load('homepage_slider')
        ];
        
        foreach ($result as $key => $value) {
            $entity = $value->_entity;
            $nid = $entity->get('nid')->getValue()[0]['value'];
            $title = $entity->get('title')->getValue()[0]['value'];
            $detail = $entity->get('body')->getValue()[0]['value'];
            $path = $entity->get('field_slider_images')[0]->entity->getFileUri();
            $imagePath = $images_styles['large']->buildUrl($path);
            
            $records[] = array(
                'title' => $title,
                'detail' => $detail,
                'imagePath' => $imagePath,
                'nid' => $nid,
            );
        }
        
        return [
            '#theme' => 'la_slider',
            '#data' => $records,
        ];
    }
}