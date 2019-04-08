<?php
/**
 * @file
 * Contains Drupal\constant_contact\Form\ConstantContactForm.
 */
namespace Drupal\constant_contact\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class ConstantContactForm extends ConfigFormBase {
    /**
     * @var string config setting
     */ 
    const SETTINGS = 'constant_contact.settings';   
    
    /**
     * {@inheritdoc}
     */
    protected function getEditableConfigNames() {
        return [
            static::SETTINGS,
        ];
    }
    
    /**
     *
     * {@inheritdoc}
     * @see \Drupal\Core\Form\FormInterface::getFormId()
     */
    public function getFormId() {
        return 'constant_contact_config_form';
    }

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\Core\Form\FormInterface::buildForm()
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        $form = parent::buildForm($form, $form_state);
        
        // Default configuration.
        $config = $this->config(static::SETTINGS);
        
        $form['cc_apikey'] = [
            '#type' => 'textfield',
            '#title' => $this->t('API KEY'),
            '#placeholder' => 'API Key',
            '#description' => $this->t('If you don\'t have API key, follow the instruction below: <br> 
                                1. Create a <a href="https://constantcontact.mashery.com/login" target="_blank" rel="nofollow">new account</a>. <br>
                                2. Log in and create a New Application. After creation, it will provide you the API Key.
                               '),
            '#default_value' => $config->get('cc_apikey'), 
        ]; 
        
        $form['cc_access_token'] = [
            '#type' => 'textfield',
            '#title' => $this->t('ACCESS TOKEN'),
            '#placeholder' => 'API Token',
            '#description' => $this->t('To get API Token / Access Token, follow the instruction below: <br>
                                1. After getting the API key, you have to click the Get Token Button. <br>
                                2. Follow the steps unitll you receive the token strings.            
                                '),
            '#default_value' => $config->get('cc_access_token'), 
        ]; 
        
        return $form;
    }
    
    /**
     * {@inheritdoc}
     */
    public function validateForm(array &$form, FormStateInterface $form_state) {
        if (strlen($form_state->getValue('cc_apikey')) < 1 ) {
            $form_state->setErrorByName('cc_apikey', $this->t('API Key can\'t be blank.'));
        }
        
        if (strlen($form_state->getValue('cc_access_token')) < 1 ) {
            $form_state->setErrorByName('cc_access_token', $this->t('Access Token can\'t be blank.'));
        }
    }
    
    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        parent::submitForm($form, $form_state);
        
        // Set the submitted configuration setting
        $this->config(static::SETTINGS)
            ->set('cc_apikey', trim($form_state->getValue('cc_apikey')))
            ->set('cc_access_token', trim($form_state->getValue('cc_access_token')))
            ->save();
    }
    
}