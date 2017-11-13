<?php
$baseURL = 'ladcp.westus.cloudapp.azure.com/mockup/';
$requestURI = @$_SERVER['REQUEST_URI'];
$splitString = explode('/', $requestURI);
$active = $splitString[4];
@$activeLink = $splitString[5];
@$page = $splitString[6];
define('BASEURL', $baseURL);
?>

<!DOCTYPE html>
<html lang="en">
	<head>
  		<meta charset="utf-8"/>
      	<meta name="Generator" content="Drupal 8 (https://www.drupal.org)"/>
      	<meta name="MobileOptimized" content="width"/>
      	<meta name="HandheldFriendly" content="true"/>
      	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      	<link rel="shortcut icon" href="<?php echo BASEURL; ?>favicon.ico" type="image/vnd.microsoft.icon"/>
      	<title>Home | Deparment of City Planning, Los Angeles</title>

      	<link rel="stylesheet" href="<?php echo BASEURL; ?>css/bootstrap.min.css" media="all"/>
      	<link rel="stylesheet" href="<?php echo BASEURL; ?>css/css/normalize.css"/>
      	<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Condensed:300italic,400,300,700|Open+Sans:300italic,400,300" media="all"/>
      	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" media="all"/>

  	 	<link rel="stylesheet" href="<?php echo BASEURL; ?>css/style.css"/>
   		<link rel="stylesheet" href="<?php echo BASEURL; ?>css/banner-bootsrap.css"/>

   		<link rel="stylesheet" href="<?php echo BASEURL; ?>css/calendar/fullcalendar.css"/>
   		<link rel="stylesheet" href="<?php echo BASEURL; ?>css/calendar/fullcalendar.print.min.css"/>

      <!--[if lte IE 8]>
      <script src="/core/assets/vendor/html5shiv/html5shiv.min.js?v=3.7.3"></script>
      <![endif]-->
   </head>

   <body>