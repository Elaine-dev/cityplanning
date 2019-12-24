<?php


// @file src/taxterm_subs/Service/SubTerms.php
namespace Drupal\taxterm_subs\Service;
//namespace Drupal\taxterm_subs\SubtermsTraits;
//namespace Drupal\taxterm_subs\Traits;
//require_once DRUPAL_ROOT . '/modules/custom/taxterm_subs/src/SubtermsTrait/SubtermsTrait.php';
//require_once 'SubtermsTrait.php';


/**
SubtermsTrait
*/
trait SubtermsTrait {
public function subterms(&$vid=('westside_community_plan_update')) {
$terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree($vid, 0);
  if (!empty($terms)) {
      foreach ($terms as $term) {
          $children = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree($vid, $term->tid, 2);
              if (empty($children)) {
              // no child
              if ($term->parents[0] == 0)
                  $tax_tree[$term->tid] = [
                      'tid' => $term->tid,
                      'name' => $term->name,
                  ];
          } else {
              $tax_tree[$term->tid] = [
                  'tid' => $term->tid,
                  'name' => $term->name,
              ];
      }
      foreach ($children as $child) {
              $tax_tree[$term->tid]['sub'][$child->tid] = [
                  'tid' => $child->tid,
                  'name' => $child->name,
              ];
            }
          }
        }
 return $tax_tree;
}
}

/**
 * The SubTerms service. Loads child taxonomy terms for submenus here to keep theme file tidy.
 */
class SubTerms {
  use SubtermsTrait;

public function createSubtermsBhes(&$terms=array(), &$tax_tree=array(), &$vid=('boyle_heights_cpu_menu_es')) {
  $this->subterms();
  /** place in theme file:
  * $variables['bhspan_menu'] = \Drupal::service('term_subs')->createSubtermsBhes();
  **/
  return $this->subterms($vid);
  }
public function createSubtermsBoyleHeights(&$terms=array(), &$tax_tree=array(), &$vid=('boyle_heights_cpu')) {
  $this->subterms();
  /** place in theme file:
  * $variables['boyleheights_menu'] = \Drupal::service('term_subs')->createSubtermsBoyleHeights();
  **/
  return $this->subterms($vid);
    }
public function createSubtermsHarbor(&$terms=array(), &$tax_tree=array(), &$vid=('harbor_menu')) {
  $this->subterms();
  /** place in theme file:
      * $variables['harborplans_menu'] = \Drupal::service('term_subs')->createSubtermsHarbor();
  **/
  return $this->subterms($vid);
        }
public function createSubtermsWestside(&$terms=array(), &$tax_tree=array(), &$vid=('westside_community_plan_update')) {
  $this->subterms();
  /** place in theme file:
      * $variables['westside_menu'] = \Drupal::service('term_subs')->createSubtermsWestside();
  **/
  return $this->subterms($vid);
                }
public function createSubtermsSouthEast(&$terms=array(), &$tax_tree=array(), &$vid=('southeast_valley_menu')) {
  $this->subterms();
  /** place in theme file:
      * $variables['sevplans_menu'] = \Drupal::service('term_subs')->createSubtermsSouthEast();
  **/
 return $this->subterms($vid);
    }
public function createSubtermsSouthWest(&$terms=array(), &$tax_tree=array(), &$vid=('southwest_valley_community_plan_')) {
      $this->subterms();
      /** place in theme file:
          * $variables['swvalley_menu'] = \Drupal::service('term_subs')->createSubtermsSouthWest();
      **/
     return $this->subterms($vid);
        }
public function createSubtermsDowntown(&$terms=array(), &$tax_tree=array(), &$vid=('downtown_community_plan_update')) {
    $this->subterms();
              /** place in theme file:
                  * $variables['downtown_menu'] = \Drupal::service('term_subs')->createSubtermsDowntown();
              **/
    return $this->subterms($vid);
                }
public function createSubtermsGeneral(&$terms=array(), &$tax_tree=array(), &$vid=('gerneral_plan_update')) {
    $this->subterms();
    /** place in theme file:
        * $variables['general_menu'] = \Drupal::service('term_subs')->createSubtermsGeneral();
    **/
    return $this->subterms($vid);
    }
  public function createSubtermsHollywood(&$terms=array(), &$tax_tree=array(), &$vid=('hollywood_community_plan')) {
    $this->subterms();
        /** place in theme file:
            * $variables['hollywood_menu'] = \Drupal::service('term_subs')->createSubtermsHollywood();
        **/
    return $this->subterms($vid);
  }
  public function createSubtermsVenice(&$terms=array(), &$tax_tree=array(), &$vid=('venice_local_coastal_program')) {
    $this->subterms();
    /** place in theme file:
        * $variables['venice_menu'] = \Drupal::service('term_subs')->createSubtermsVenice();
    **/
    return $this->subterms($vid);
  }
//  public function createSubtermsHousing(&$terms=array(), &$tax_tree=array(), &$vid=('housing_element_update')) {
  //  $this->subterms();
    /** place in theme file:
        * $variables['housing_menu'] = \Drupal::service('term_subs')->createSubtermsHousing();
    **/
  //  return $this->subterms($vid);
//  }
}
