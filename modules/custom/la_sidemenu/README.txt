DEVELOPING
-----------

This note is for the developers about side effect of following changes
 * URL change :
   	* Side menu for the Community Plans Updates.
   	
 * Taxonomy change :
 	* On alteration of Vocabulary name for the Community Plan Updates (eg: Downtown Community Plan Update, Hollywood Community Plan, Southeast Valley Menu, Southwest Valley Community Plan Updates),
 	  need to update Side menu for the Community Plans Updates.
 	  
 	  
BLOCK LAYOUT CONFIGURATION
--------------------------

In Side Menu Region:
	* Custom Side Menu Block > Configure : 
		Add Page restriction to hide for the listed pages:
	
		/plans-policies/community-plan-update/venice-news-item
		/plans-policies/community-plan-update/venice-news-item/*
		/plans-policies/community-plan-update/southwest-valley-news-item
		/plans-policies/community-plan-update/southwest-valley-news-item/*
		/plans-policies/community-plan-update/westside-news
		/plans-policies/community-plan-update/westside-news/*
		/plans-policies/community-plan-update/downtown-events
		/plans-policies/community-plan-update/downtown-events/*
		...
		...
		
	* Community Plan Update Side Menu - Block > Configure : 
		Visibility / Content Types : Select 'Community Plan Updates News Feed'