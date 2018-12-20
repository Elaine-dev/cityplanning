<?php

namespace Drupal\la_sidemenu\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\node\Entity\Node;
use Drupal\Core\Url;
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
        $uri_array = explode('/',$uri);
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

        foreach ($tree as $item) {
            $title = strtolower($item->link->getTitle());
            $url = $item->link->getUrlObject();
            $title = readableURLString($title);
            
            //Todo need to update index based on uri
            if($title == $uri_array[1]) {
                if(!empty($item->subtree)) {
                    foreach($item->subtree as $child) {
                        $child_title = $child->link->getTitle();
                        $child_url = $child->link->getUrlObject();
                        $child_list[] = Link::fromTextAndUrl($child_title, $child_url);
                    }
                }
                $list[] = array(
                        $title => Link::fromTextAndUrl($title, $url),
                        'child' => $child_list,
                );
            }
        }

        // Generate side menu
        $full_url = '';
        $html = '<ul>';
        if (!empty($list[0]['child'])) {
          foreach(@$list[0]['child'] as $row) {

              $link_text = $row->getText();
              if($row->getUrl()->isExternal()) {
                  $url = $row->getUrl()->getUri();
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
              $html .= '<li><a class="'.$class.'" href="'.$full_url.'" target="'.$target.'">'.$link_text.'</a> </li>';
              $html .= '<li class="line"></li>';
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

