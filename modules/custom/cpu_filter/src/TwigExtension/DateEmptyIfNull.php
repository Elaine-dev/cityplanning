<?php
namespace Drupal\cpu_filter\TwigExtension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/*This filter modifies date filter to not print if value is null, this arose because Drupal Date field displays
today's date if value is null if you have multiple dates for an event. This does NOT affect authored_on field */

//class DateEmptyIfNull extends AbstractExtension
class DateEmptyIfNull extends \Twig_Extension // or: extends AbstractExtension
{
    public function getFilters()
    {
        return array(
            new TwigFilter('date', [ $this, 'dateFilter'], ['needs_environment' => true, ]),
        );
    }

    public function dateFilter(\Twig_Environment $env, $timestamp, $format = 'F d, Y')
    {
        return $timestamp === null ? '' : twig_date_format_filter($env, $timestamp, $format);
    }


public function getName()
  {
      return 'cpu_filter.twig_extension';
  }
}
