<?php 
namespace Drupal\constant_contact\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;


/**
 * Constant Contact Block
 * @Block(
 *   id = "constant_contact_block2",
 *   admin_label = @Translation("Constant Contact block-2"),
 * )
 */ 

class ConstantContactBlock2 extends BlockBase
{
    /**
     * 
     * {@inheritDoc}
     * @see \Drupal\Core\Block\BlockPluginInterface::build()
     */
    public function build() {
        return \Drupal::formBuilder()->getForm('Drupal\constant_contact\Form\ConstantContactBlockForm2');
    }
}
