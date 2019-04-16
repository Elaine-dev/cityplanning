README.md for constant_contact module
-------------------------------------

CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Requirements
 * Installation
 * Configuration
 * Maintainer
 * Reference
 
INTRODUCTION
------------
	*constant_contact* module helps to manage subscriber contact details 
	using provided Constant Contact API.

REQUIREMENTS
------------
	This module requires no modules outside of Drupal core. 
	But it needs *php-sdk*. Get php-sdk from 'https://github.com/constantcontact/php-sdk'. 
	The module has used V2 API.  

INSTALLATION:
------------
	1. Extract the *.zip into your 'module' directory * /modules/<custom/contrib>/ *
	2. Go to `Extend` after successfully login into admin.
	3. Enable the module (constant_contact).
	
	Visit `https://www.drupal.org/node/1897420` for further information.

CONFIGURATION
-------------
	Set API Key and Access Token from 'Configuration >> Web services' in the configuration setting 
 	Link: [`/admin/config`]

	Direct access to the API Configuration : [`/admin/config/services/ccapisettings`] 

AUTHOR/MAINTAINER
------------------
	- Humbal Shahi (letters@humble.com.np)

REFERENCE
---------
	Constant Contact API Documentation (V2 API)
	https://github.com/constantcontact/php-sdk
	https://constantcontact.mashery.com/
	https://developer.constantcontact.com/