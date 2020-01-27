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
        kint($uri_array);
        
        $menu_level = $uri_array[3];                                    // tax term in the form of url
        $menu_level_es = ($uri_array[4]) ? $uri_array[4] : '';          // for Spanish language, es is added in url pattern
        $html = '';
        
        $menu_base_path = '/plans-policies/community-plan-update/';
        $menu_base_path_other = '/plans-policies/';
        $tax_machine_name = '';

        //kint($menu_level);

        if ($uri_array[2] == 'community-plan-update' && isset($menu_level)) {
            /**
             * $tax_machine_name: Vocabulary name in the Taxonomy. Each Community Plan Update has different menu.
             * $parent_link : URL of parent node.
             */
            switch ($menu_level) {
                case 'venice-news-item':
                    $tax_machine_name = 'venice_local_coastal_program';
                    $parent_link = $menu_base_path.'venice-local-coastal-program';
                    break;

                case 'southwest-valley-news-item':
                    $tax_machine_name = 'southwest_valley_community_plan_';
                    $parent_link = $menu_base_path.'southwest-valley-community-plans-update';
                    break;

                case 'westside-news':
                    $tax_machine_name = 'westside_community_plan_update';
                    $parent_link = $menu_base_path.'planning-westside';
                    break;

                case 'westside-events':
                    $tax_machine_name = 'westside_community_plan_update';
                    $parent_link = $menu_base_path.'planning-westside';
                    break;

                case 'downtown-events':
                    $tax_machine_name = 'downtown_community_plan_update';
                    $parent_link = $menu_base_path.'downtown-los-angeles-community-plan-update';
                    break;

                case 'boyle-heights-events':
                    if ($menu_level_es == 'es'){
                        $tax_machine_name = 'boyle_heights_cpu_menu_es';
                        $parent_link = $menu_base_path.'boyle-heights-community-plan-update-es';
                    }else{
                        $tax_machine_name = 'boyle_heights_cpu';
                        $parent_link = $menu_base_path.'boyle-heights-community-plan-update';
                    }

                    break;

                case 'southeast-valley-news':
                    $tax_machine_name = 'southeast_valley_menu';
                    $parent_link = $menu_base_path.'southeast-valley-community-plan-update';
                    break;

                case 'harbor-events':
                    $tax_machine_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;

                case 'harbor-events-share-phase':
                    $tax_machine_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;

                case 'harbor-events-listen-phase':
                    $tax_machine_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;

                case 'harbor-events-consult-phase':
                    $tax_machine_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;

                case 'harbor-events-finalize-phase':
                    $tax_machine_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;

                case 'harbor-events-adopt-phase':
                    $tax_machine_name = 'harbor_menu';
                    $parent_link = $menu_base_path.'harbor-la-community-plans-update';
                    break;

                case 'general-news-item':
                    $tax_machine_name = 'gerneral_plan_update';
                    $parent_link = $menu_base_path_other.'general-plan-updates';
                    break;
            }
        } elseif ($uri_array[2] == 'housing-element-update' && isset($menu_level)) {
            $tax_machine_name = 'housing_element_update';
            $parent_link = $menu_base_path_other.'housing-element-update';
        }
        
        if (!empty($tax_machine_name)) {
            // load menu from taxonomy
            $menu_list = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree($tax_machine_name);
            $menu_format = formatTabMenuTitleForCP($menu_list);
            
            
            $html = '<ul>';
            foreach ($menu_format as $val) {
                $html .= '<li><a href="'.$parent_link.'#'.$val['link'].'">'.$val['name'].'</a> </li>';
                $html .= '<li class="line"></li>';
            }
            
            $html .= '</ul>';
        }

        return [
            '#markup' => $html,
        ];
    }
}
