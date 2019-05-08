README.md for csv_import module
-------------------------------

CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Installation
 * Configuration
 * Maintainer
 
INTRODUCTION
------------ 
	*csv_import* module helps to import, and update data using csv file.

INSTALLATION
------------
	1. Extract the *.zip into your 'module' directory * /modules/<custom/contrib>/ *
	2. Go to `Extend` after successfully login into admin.
	3. Enable the module (csv_import).
	
	Visit `https://www.drupal.org/node/1897420` for further information.

CONFIGURATION
-------------
	Import:
		Link to access import feature: * /admin/dev/import *
	
	Update:
		Link to access update title for Overlays: * /admin/dev/updatedata *
		Note: The name for the csv file should be 'overlays_update.csv' with following heading:
			Node ID,Sub Title
		
		`Node ID`: ID of the particular node. It's a compulsory field.
		`Sub Title`: The sub title for the particular node.

AUTHOR/MAINTAINER
-----------------
	- Humbal Shahi (letters@humble.com.np)