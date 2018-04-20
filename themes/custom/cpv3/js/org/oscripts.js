'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Vincent P. Bertoni, AICP',
      'title': 'Director of City Planning',
      'children': [
        {'name': "Kevin Keller, AICP Deputy Director of Planning", 'title': 'Policy Planning Bureau','collapsed': true,
        	'children' : [
	              { 'name': '', 'title': 'Citywide Planning & Historic Resources Division' },           
	              { 'name': '', 'title': 'Community Planning Division'},           
	              { 'name': '', 'title': 'Code Studies Division'},           
        	 ]
        },
        {'name': 'Lisa M. Webber, AICP Deputy Director of Planning', 'title': 'Project Planning Bureau','collapsed': true,
        	'children' : [
	              { 'name': '', 'title': 'Central Project Planning Division', 'className': 'slide-up' },           
	              { 'name': '', 'title': 'West/South Project Planning Division'},           
	              { 'name': '', 'title': 'Valley Project Planning Division'},           
	              { 'name': '', 'title': 'Office of Zoning Administration' },           
	              { 'name': '', 'title': 'Citywide Project Planning Division'},           
	              { 'name': '', 'title': 'Development Services Centers'},           
        	 ]
        },
        { 'name': 'Jan Zatorski, Deputy Director of Planning', 'title': 'Resource Management Bureau','collapsed': true,
          'children': [
            { 'name': '', 'title': 'Administrative Services Division', 'className': 'slide-up' },
            { 'name': '', 'title': 'Planning Information Technologies Division',},
            { 'name': '', 'title': 'Commission Office' },
            { 'name': '', 'title': 'Personnel Liaison Services',},
          ]
        }
    
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title'
    });

  });

})(jQuery);