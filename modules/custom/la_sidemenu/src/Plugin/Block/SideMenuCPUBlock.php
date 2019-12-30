<?php

namespace Drupal\la_sidemenu\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides 'side menu for Community Plan Update' eg. event detail pages.
 * 
 *  @Block(
 *      id = "side_menu_CPU_block",
 *      admin_label = @Translation("Community Plan Update Side Menu - Block")
 *  ) 
 */

class SideMenuCPUBlock extends BlockBase {
    /**
     * {@inheritdoc}
     */
    public function build() {
        global $base_url;
        $list = array();
        
        // Get URI
        $uri = $_SERVER['REQUEST_URI'];
                       
        /**
         * -- Local --
         * Array (
         [0] =>
         [1] => plans-policies
         [2] => community-plan-update
         [3] => venice-news-item
         [4] => pop-office-hours-appointments
         )
         */
        
        $uri_array = explode('/', $uri);
        $menu_level = $uri_array[3];                                    // tax term in the form of url   
        $menu_level_es = ($uri_array[4]) ? $uri_array[4] : '';          // for Spanish language, es is added in url pattern
        $html = '';
        
        if (isset($menu_level) && $uri_array[2] == 'community-plan-update') { 
            
            $menu_base_path = '/plans-policies/community-plan-update/';
            $menu_name = '';
            
            /**
             * $menu_name: Vocabulary name in the Taxonomy. Each Community Plan Update has different menu.
             * $parent_link : URL of parent node.
             */            
            switch ($menu_level) {
                case 'venice-news-item':
                    $menu_name = 'venice_local_coastal_program';
                    $parent_link = $menu_base_path.'venice-local-coastal-program';
                    break;
                    
                case 'southwest-valley-news-item':
                    $menu_name = 'southwest_valley_community_plan_';
                    $parent_link = $menu_base_path.'southwest-valley-community-plans-update';
                    break;
                    
                case 'westside-news':
                    $menu_name = 'westside_community_plan_update';
                    $parent_link = $menu_base_path.'planning-westside';
                    break;
                    
                case 'westside-events':
                    $menu_name = 'westside_community_plan_update';
                    $parent_link = $menu_base_path.'planning-westside';
                    break;
                    
                case 'downtown-events':
                    $menu_name = 'downtown_community_plan_update';
                    $parent_link = $menu_base_path.'downtown-los-angeles-community-plan-update';
                    break;
                    
                case 'boyle-heights-events':
                    if ($menu_level_es == 'es'){
                        $menu_name = 'boyle_heights_cpu_menu_es';
                        $parent_link = $menu_base_path.'boyle-heights-community-plan-update-es';
                    }else{
                        $menu_name = 'boyle_heights_cpu';
                        $parent_link = $menu_base_path.'boyle-heights-community-plan-update';
                    }                    
                    
                    break;
                    
                case 'southeast-valley-news':
                    $menu_name = 'southeast_valley_menu';
                    $parent_link = $menu_base_path.'southeast-valley-community-plan-update';
                    break; 
                    
                case 'harbor-events':
                    $menu_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;
                    
                case 'harbor-events-share-phase':
                    $menu_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;
                    
                case 'harbor-events-listen-phase':
                    $menu_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;
                    
                case 'harbor-events-consult-phase':
                    $menu_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;
                    
                case 'harbor-events-finalize-phase':
                    $menu_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;
                    
                case 'harbor-events-adopt-phase':
                    $menu_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;
                    
                case 'general-news-item':
                    $menu_name = 'gerneral_plan_update';
                    $parent_link = $menu_base_path.'general-plan-updates';
                    break;
            }
            
            if (!empty($menu_name)) {
                // load menu from taxonomy
                $menu_list = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree($menu_name);
                $menu_format = formatTabMenuTitleForCP($menu_list);
                
                
                $html = '<ul>';
                foreach ($menu_format as $val) {
                    $html .= '<li><a href="'.$parent_link.'#'.$val['link'].'">'.$val['name'].'</a> </li>';
                    $html .= '<li class="line"></li>';
                }
                
                $html .= '</ul>';
            }
        }
        
        return [
            '#markup' => $html,
        ];
    }
}

