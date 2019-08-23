<?php

namespace Drupal\la_sidemenu\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Link;

/**
 * Provides 'side menu'.
 *
 * @Block(
 *   id = "side_menu_block",
 *   admin_label = @Translation("Custom Side Menu Block"),
 * )
 */
class SideMenuBlock extends BlockBase {
    /**
     * {@inheritdoc}
     */
    public function build() {
        global $base_url;
        $list = array();
        //Get uri
        $uri = $_SERVER['REQUEST_URI'];
        $uri_array = explode('/', $uri);
        
        /**
         * Array (
            [0] =>
            [1] => preservation-design
            [2] => urban-design
            [3] => program-overview
            )
         */        
        $menu_level = $uri_array[1];
        $actual_url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

        // load main menu
        $menu_name = 'main';
        $menu_tree = \Drupal::menuTree();
        $parameters = $menu_tree->getCurrentRouteMenuTreeParameters($menu_name);
        $parameters->setMinDepth(0)->onlyEnabledLinks();

        $tree = $menu_tree->load($menu_name, $parameters);
        $manipulators = array(
            array('callable' => 'menu.default_tree_manipulators:checkAccess'),
            array('callable' => 'menu.default_tree_manipulators:generateIndexAndSort'),
        );
        
        $tree = $menu_tree->transform($tree, $manipulators);
        $child_list = [];

        foreach ($tree as $item) {
            $title = strtolower($item->link->getTitle());
            $url = $item->link->getUrlObject();
            $title = readableURLString($title);
            
            //Todo need to update index based on uri
            if($title == $menu_level) {
                if(!empty($item->subtree)) {
                    foreach($item->subtree as $child) {
                        $child_title = $child->link->getTitle();
                        $child_url = $child->link->getUrlObject();
                        $child_list[] = Link::fromTextAndUrl($child_title, $child_url);
                    }
                }
                $list[] = array(
                    $title => Link::fromTextAndUrl($title, $url),
                    'child' => ($child_list) ? $child_list : '',
                );
            }
        }

        // Generate side menu
        $full_url = '';
        $html = '<ul>';
        
        // hide/unhide Urban Design sub-menus
        $urban_design_menu = ['Urban Design Program Overview','Urban Design Project Review','Urban Design Guidelines & Standards'];
        $class_for_dev_services = '';
        
        if (!empty($list[0]['child'])) {
          foreach(@$list[0]['child'] as $row) {

              $link_text = $row->getText();
              if($row->getUrl()->isExternal()) {
                  $full_url = $row->getUrl()->getUri();
                  $target = '_blank';
                  $class = '';
              } else {
                  $system_path = '/'.$row->getUrl()->getInternalPath();
                  $url = \Drupal::service('path.alias_manager')->getAliasByPath($system_path);
                  $target = '';
                  $full_url = $base_url.$url;

                  if($actual_url == $full_url) {
                      $class = 'active';
                  } else {
                      $class = '';
                  }
              }
              
              /**
               * Hide Urban Design sub-menu when navigating to Historic Resources and Historic Districs submenus.
               *
               * add css classes 'unhide-urd' & 'hide-urd' to unhide/hide Urban Design sub-menus
               * when clicked on menus under Development Services.
               *
               * Also add jQuery condition to implement it.
               *    $('.hide-urd').hide();
               *    $('.unhide-urd').show();
               *
               *  $uri_array = explode('/', $uri); :
               *    http://ladcp.westus.cloudapp.azure.com/development-services/urban-design/policy-objectives
               *    Array
               *    (
               *         [0] =>
               *         [1] => development-services
               *         [2] => urban-design
               *         [3] => policy-objectives
               *     )
               */
              if ($menu_level== 'development-services') {
                  $class_for_dev_services =  (in_array($link_text, $urban_design_menu)) ? 'unhide-urd' : 'hide-urd';
              }
                       
              $html .= '<li class ="' . $class_for_dev_services . '"><a class="'. $class . '" href="'.$full_url.'" target="'.$target.'">'.$link_text.'</a> </li>';
              $html .= '<li class="line '.$class_for_dev_services.'"></li>';
          }
        }
        
        $html .= '</ul>';
        return [
            '#markup' => $html,
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function blockAccess(AccountInterface $account) {
        return AccessResult::allowedIfHasPermission($account, 'access content');
    }

    /**
     * {@inheritdoc}
     */
    public function blockForm($form, FormStateInterface $form_state) {
        $config = $this->getConfiguration();

        return $form;
    }

    /**
     * {@inheritdoc}
     */
    public function blockSubmit($form, FormStateInterface $form_state) {
        $this->configuration['my_block_settings'] = $form_state->getValue('my_block_settings');
    }
}