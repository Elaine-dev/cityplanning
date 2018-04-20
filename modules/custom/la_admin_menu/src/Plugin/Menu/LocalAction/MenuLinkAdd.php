<?php

namespace Drupal\la_admin_menu\Plugin\Menu\LocalAction;

use Drupal\Core\Menu\LocalActionDefault;
use Drupal\Core\Routing\RedirectDestinationInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Routing\RouteProviderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Modifies the 'Add link' local action to add a destination.
 */
class MenuLinkAdd extends LocalActionDefault {

  /**
   * The redirect destination.
   *
   * @var \Drupal\Core\Routing\RedirectDestinationInterface
   */
  private $redirectDestination;

  /**
   * Constructs a MenuLinkAdd object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Routing\RouteProviderInterface $route_provider
   *   The route provider to load routes by name.
   * @param \Drupal\Core\Routing\RedirectDestinationInterface $redirect_destination
   *   The redirect destination.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, RouteProviderInterface $route_provider, RedirectDestinationInterface $redirect_destination) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $route_provider);

    $this->redirectDestination = $redirect_destination;
  }

  
  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('router.route_provider'),
      $container->get('redirect.destination')
    );
  }

 
 
  /**
   * {@inheritdoc}
   */
  public function getRouteParameters(RouteMatchInterface $route_match) {
    $params = \Drupal::request()->getUri();
    

    $p = explode('/',$params);
    $p = explode('?',$p[6]);
    //kint($p[0]);
    $parameters = isset($this->pluginDefinition['route_parameters']) ? $this->pluginDefinition['route_parameters'] : array();
    $parameters = ['node_type'=>$p[0]];
    
    return  $parameters;
    
  }
}
