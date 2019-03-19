<?php

namespace Drupal\la_publication_slider\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\image\Entity\ImageStyle;

/**
 * Provides 'publication slider'.
 *
 * @Block(
 *      id = "la_publication_slider",
 *      admin_label = @Translation("Publication Slider"),
 * )
 */
class PublicationSliderBlock extends BlockBase {
    /**
     * {@inheritDoc}
     * @see \Drupal\Core\Block\BlockPluginInterface::build()
     */
    public function build () {
        // TODO: Load view with View ID
        $view = \Drupal\views\Views::getView('publication_slider');
        $view->setDisplay('default');
        $view->execute();
        //$view->serialize();
        $result = $view->result;

        $records = [];          //Array to hold newly formatted records
        $images_styles = [
            'large' => ImageStyle::load('slider_image'),
            'thumbnail' => ImageStyle::load('thumbnail')
        ];
        foreach ($result as $key => $value) {
            $entity = $value->_entity;
            $title = $entity->get('title')->getValue()[0]['value'];
            $detail = $entity->get('field_text_detail')->getValue()[0]['value'];
            $imagePath = $images_styles['large']->buildUrl($entity->get('field_slider_image')[0]->entity->getFileUri());

            $records[] = array(
                'title' => $title,
                'detail' => $detail,
                'imagePath' => $imagePath,
            );
        }

        //kint($records);
        return [
            '#theme' => 'la_publ_slider',
            '#data' => $records,
        ];
    }
}