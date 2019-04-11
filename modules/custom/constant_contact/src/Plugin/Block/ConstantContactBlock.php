<?php 
namespace Drupal\constant_contact\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;


/**
 * Constant Contact Block
 * @Block(
 *   id = "constant_contact_block",
 *   admin_label = @Translation("Constant Contact block"),
 * )
 */ 

class ConstantContactBlock extends BlockBase
{
    /**
     * 
     * {@inheritDoc}
     * @see \Drupal\Core\Block\BlockPluginInterface::build()
     */
    public function build() {
        return \Drupal::formBuilder()->getForm('Drupal\constant_contact\Form\ConstantContactBlockForm');
    }
}
