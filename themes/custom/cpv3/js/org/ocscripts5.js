$.mockjax({
    url: '/orgchart/root-node',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'root-node',
      'name': 'VINCENT BERTONI',
      'dept': 'DIR OF PLANNING',
      'css': 'level1', 
      'children': [
        { 'name': 'KEVIN KELLER', 'dept': 'DEPUTY DIR OF PLANNING', 'className': 'drill-down asso-kevinkeller2', 'css': 'level2'},
        { 'name': 'LISA WEBBER', 'dept': 'PROJECT PLANNING BUREAU', 'className': 'drill-down asso-lisawebber2', 'css': 'level2'}
      ]
    } 
  });

 //*** KEVIN KELLER
  $.mockjax({
    url: '/orgchart/asso-kevinkeller2',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-kevinkeller2 drill-up',
      'name': 'KEVIN KELLER',
      'dept': 'DEPUTY DIR OF PLANNING',
      'css': 'level2',
      'children': [
        { 'name': 'LY LAM', 'dept': 'SR MGMT ANALYST II', 'className': 'drill-down asso-lylam3', 'css': 'level3' },
        { 'name': 'CRAIG WEBER', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-craigweber3', 'css': 'level3' },
        { 'name': 'ARTHI VARMA', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-arthivarma3', 'css': 'level3' },
        { 'name': 'KENNETH BERNSTEIN', 'dept': 'POLICY PLANNING AND HISTORIC RESOURCES', 'className': 'drill-down asso-kennethbernstein3', 'css': 'level3' },
        { 'name': 'NICHOLAS MARICICH', 'dept': 'NEIGHBORHOOD PLANNING', 'className': 'drill-down asso-nicholasmaricich3', 'css': 'level3' },
        { 'name': 'LILY QUAN', 'dept': 'EXECUTIVE ADMINISTRATIVE ASSISTANT', 'css': 'level3' },
        { 'name': 'JAMES VAN GERPEN', 'dept': 'INFORMATION TECHNOLOGIES', 'className': 'drill-down asso-jamesvangerpen3', 'css': 'level3' },
        { 'name': 'CARRIE FIRESTONE', 'dept': 'EXECUTIVE ADMINISTRATIVE ASSISTANT', 'className': 'drill-down asso-carriefirestone3', 'css': 'level3' },
        { 'name': 'MONICA NUNEZ', 'dept': 'EXECUTIVE ADMINISTRATIVE ASSISTANT', 'css': 'level3' },
        { 'name': 'YEGHIG KESHISHIAN', 'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS', 'className': 'drill-down asso-yeghigkeshishian3', 'css': 'level3' },
        { 'name': 'THOMAS ROTHMANN', 'dept': 'RECODE LA', 'className': 'drill-down asso-thomasrothmann3', 'css': 'level3' },
        { 'name': 'REBECCA VALDEZ', 'dept': 'PMU', 'className': 'drill-down asso-rebeccavaldez3', 'css': 'level3' },
        { 'name': 'CHRISTINA KARATZAS', 'dept': 'ADMINISTRATIVE SUPPORT', 'css': 'level3' },
        { 'name': 'CHRISTOPHE HAWTHORNE', 'dept': 'URBAN DESIGN STUDIO', 'css': 'level3' }
      ]
    }
  });
  
  //**** Ly Lam
  $.mockjax({
    url: '/orgchart/asso-lylam3',
    responseTime: 1000,
    contentType: 'application/json',
    responseText:  {
	'className': 'asso-lylam3 drill-up',
      'name': 'LY LAM',
      'dept': 'SR MGMT ANALYST II',
      'css': 'level3',
      'children': [
        { 'name': 'TIFFANY BUTLER', 'dept': 'SR MGMT ANALYST II', 'className': 'drill-down asso-tiffanybutler4', 'css': 'level4'},
        { 'name': 'ANNA ORELLANA', 'dept': 'ADMINISTRATIVE SUPPORT', 'css': 'level4'},
        { 'name': 'ADRIANA BELTRAN-HERRERA', 'dept': 'ADMINISTRATIVE SUPPORT', 'css': 'level4'},
        { 'name': 'MICHELLE CHAN', 'dept': 'ACCOUNTING AND PURCHASING', 'className': 'drill-down asso-michellechan4', 'css': 'level4'},
        { 'name': 'YI WEN SUN', 'dept': 'ADMINISTRATIVE SUPPORT', 'css': 'level4'},
        { 'name': 'YICHUN YEH', 'dept': 'ACCOUNTING AND PURCHASING', 'css': 'level4'}
      ]
    }
  });

  // taffany butler childs
  $.mockjax({
    url: '/orgchart/asso-tiffanybutler4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText:  {
	  'className': 'asso-tiffanybutler4 drill-up',
      'name': 'TIFFANY BUTLER',
      'dept': 'SR MGMT ANALYST II',
      'css': 'level4',
      'children': [
        { 'name': 'UWE KERNER', 'dept': 'ADMINISTRATIVE SUPPORT', 'css': 'level5'},
        { 'name': 'BEATRICE PACHECO', 'dept': 'OPERATIONS SECTION', 'className': 'drill-down asso-beatricepacheco5', 'css': 'level5'}
      ]
    }
  });
  
  $.mockjax({
    url: '/orgchart/asso-beatricepacheco5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText:  {
      'className': 'asso-beatricepacheco5 drill-up',
      'name': 'BEATRICE PACHECO',
      'dept': 'OPERATIONS SECTION',
      'css': 'level5',
      'children': [
        { 'name': 'SANDRA MCFARLANE', 'dept': 'AUTOMATED RECORDS', 'css': 'level6'},
        { 'name': 'JOAN HOLAZA', 'dept': 'AUTOMATED RECORDS', 'css': 'level6'},
        { 'name': 'CORII RICHARDSON', 'dept': 'AUTOMATED RECORDS', 'css': 'level6'},
        { 'name': 'LOURDES SANCHEZ', 'dept': 'AUTOMATED RECORDS', 'css': 'level6'},
        {'name': "CHRISTINE HERNANDEZ", 'dept': 'AUTOMATED RECORDS', 'css': 'level6'},
		{
			'name': "WANDA WALKER",
			'dept': "OPERATIONS SECTION",
			'css': "level7",
			"children": [
				{'name': "TONY STAPLES", 'dept': 'DOCUMENT IMAGING', 'css': 'level8'},
				{'name': "NELSON LARIOS",'dept': 'DOCUMENT IMAGING', 'css': 'level8'},
				{'name': "BRYAN SALGADO", 'dept': 'DOCUMENT IMAGING', 'css': 'level8'},
				{'name': "ALEX JOHNSON", 'dept': 'AUTOMATED RECORDS', 'css': 'level8'},
				{'name': "VINSON WATERS", 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level8'}
			]
		},
		{'name': "MARIA ORTIZ", 'dept': 'ADMINISTRATIVE SUPPORT', 'css': 'level6'}
      ]
    }
  });

// ***** michelle chanchilds
  $.mockjax({
    url: '/orgchart/asso-michellechan4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText:  {
	  'className': 'asso-michellechan4 drill-up',
      'name': 'MICHELLE CHAN',
      'dept': 'ACCOUNTING AND PURCHASING',
      'css': 'level4',
      'children': [
        { 'name': 'RODEL DELA CRUZ', 'dept': 'ACCOUNTING AND PURCHASING', 'className': 'drill-down asso-rodeldelacruz5', 'css': 'level5'},
        { 'name': 'ZENAIDA AGUSTIN', 'dept': 'ACCOUNTING AND PURCHASING', 'className': 'drill-down asso-zenaidaagustin5', 'css': 'level5'}
      ]
    }
  });
  
  $.mockjax({
    url: '/orgchart/asso-rodeldelacruz5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText:  {
	  'className': 'asso-rodeldelacruz5 drill-up',
      'name': 'RODEL DELA CRUZ',
      'dept': 'ACCOUNTING AND PURCHASING',
      'css': 'level5',
      'children': [
        { 'name': 'ROSE OLIVA DUROY', 'dept': 'ACCOUNTING AND PURCHASING', 'css': 'level6'},
        { 'name': 'TIFFANNI NGUYEN', 'dept': 'ACCOUNTING AND PURCHASING', 'css': 'level6'}
      ]
    }
  });
  
  $.mockjax({
    url: '/orgchart/asso-zenaidaagustin5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText:  {
	  'className': 'asso-zenaidaagustin5 drill-up',
      'name': 'ZENAIDA AGUSTIN',
      'dept': 'ACCOUNTING AND PURCHASING',
      'css': 'level5',
      'children': [
        { 'name': 'GINA GINETE', 'dept': 'PAYROLL', 'css': 'level6'},
        { 'name': 'JAE LEE', 'dept': 'ACCOUNTING AND PURCHASING', 'css': 'level6'}
      ]
    }
  });

  // **** CRAIG WEBER
  $.mockjax({
	    url: '/orgchart/asso-craigweber3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-craigweber3 drill-up',
	      'name': 'CRAIG WEBER',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level3',
	      'children': [
	        { 'name': 'JONATHAN HERSHEY', 'dept': 'NEIGHBORHOOD PLANNING', 'className': 'drill-down asso-jonathanhershey4', 'css': 'level4'},
	        { 'name': 'HAYDEE URITA LOPEZ', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-haydeeuritalopez4', 'css': 'level4'},
	        { 'name': 'CHERRY YAP', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level4'},
	        { 'name': 'REUBEN CALDWELL', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-reubencaldwell4', 'css': 'level4'},
	        { 'name': 'PATRICIA DIEFENDERFER', 'dept': 'NEIGHBORHOOD PLANNING', 'className': 'drill-down asso-patriciadiefenderfer4', 'css': 'level4'}
	      ]
	    }
	  });

  $.mockjax({
	    url: '/orgchart/asso-jonathanhershey4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-jonathanhershey4 drill-up',
	      'name': 'JONATHAN HERSHEY',
	      'dept': 'NEIGHBORHOOD PLANNING',
	      'css': 'level4',
	      'children': [
	        { 'name': 'KINIKIA GARDNER', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-kinikiagardner5', 'css': 'level5'},
	        { 'name': 'MELISSA ALOFAITULI', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-melissaalofaituli5', 'css': 'level5'},
	        { 'name': 'LAURA MACPHERSON', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-lauramacpherson5', 'css': 'level5'}
	      ]
	    }
	  });
  
  $.mockjax({
	    url: '/orgchart/asso-haydeeuritalopez4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-haydeeuritalopez4 drill-up',
	      'name': 'HAYDEE URITA LOPEZ',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'GABRIELA JUAREZ', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-gabrielajuarez5', 'css': 'level5'},
	        { 'name': 'PRIYA MEHENDALE', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-priyamehendale5', 'css': 'level5'},
	        { 'name': 'LINDA LOU', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-lindalou5', 'css': 'level5'},
	        { 'name': 'ALEX HEATH', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5'},
	        { 'name': 'KIRAN RISHI', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5'}
	      ]
	    }
	  });
  
  $.mockjax({
	    url: '/orgchart/asso-kinikiagardner5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-kinikiagardner5 drill-up',
	      'name': 'KINIKIA GARDNER',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level6',
	      'children': [
	        { 'name': 'SIMILOLUWA ALIU', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level7'}
	      ]
	    }
	  });

  // ****** child of MELISSA ALOFAITULI
  $.mockjax({
	    url: '/orgchart/asso-melissaalofaituli5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-melissaalofaituli5 drill-up',
	      'name': 'MELISSA ALOFAITULI',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'EMILY GABLE', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'ANTONIO ISAIA', 'dept': 'NEIGHBORHOOD PLANNING', 'css': 'level6'},
	      ]
	    }
	  });

  // ****** child of LAURA MACPHERSON
  $.mockjax({
	    url: '/orgchart/asso-lauramacpherson5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-lauramacpherson5 drill-up',
	      'name': 'LAURA MACPHERSON',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'HELEN CAMPBELL', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'EVA CHANG', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'ALEXANDER YEE', 'dept': 'POLICY PLANNING CLERICAL SUPPORT', 'css': 'level6'},
	      ]
	    }
	  });

	// ****** child of GABRIELA JUAREZ
	$.mockjax({
	    url: '/orgchart/asso-gabrielajuarez5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-gabrielajuarez5 drill-up',
	      'name': 'GABRIELA JUAREZ',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'ELIZABETH GALLARDO', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'}
	      ]
	    }
	  });
	  
	// ****** child of PRIYA MEHENDALE
	$.mockjax({
	    url: '/orgchart/asso-priyamehendale5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-priyamehendale5 drill-up',
	      'name': 'PRIYA MEHENDALE',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'SOPHIA KIM', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'}
	      ]
	    }
	  });
	  
	// ****** child of LINDA LOU
	$.mockjax({
	    url: '/orgchart/asso-lindalou5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-lindalou5 drill-up',
	      'name': 'LINDA LOU',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'RENATA OOMS', 'dept': 'NEIGHBORHOOD PLANNING', 'css': 'level6'}
	      ]
	    }
	  });

	  
	// ***** child of REUBEN CALDWELL
	$.mockjax({
	    url: '/orgchart/asso-reubencaldwell4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-reubencaldwell4 drill-up',
	      'name': 'REUBEN CALDWELL',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'MARIE COBIAN', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-mariecobian5', 'css': 'level5'},
	        { 'name': 'STEVEN KATIGBAK', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5'},
	        { 'name': 'TERESA BATSON', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-teresabatson5', 'css': 'level5'}
	      ]
	    }
	  });
	  
	// ****** child of MARIE COBIAN
	$.mockjax({
	    url: '/orgchart/asso-mariecobian5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-mariecobian5 drill-up',
	      'name': 'MARIE COBIAN',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'ESTHER AMAYA', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'JESSICA ALVARADO', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** child of TERESA BATSON
	$.mockjax({
	    url: '/orgchart/asso-teresabatson5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-teresabatson5 drill-up',
	      'name': 'TERESA BATSON',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'SALVADOR GUTIERREZ', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'SUSAN WONG', 'dept': 'NEIGHBORHOOD PLANNING', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ***** child of PATRICIA DIEFENDERFER
	$.mockjax({
	    url: '/orgchart/asso-patriciadiefenderfer4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-patriciadiefenderfer4 drill-up',
	      'name': 'PATRICIA DIEFENDERFER',
	      'dept': 'NEIGHBORHOOD PLANNING',
	      'css': 'level4',
	      'children': [
	        { 'name': 'BRYAN ECK', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-bryaneck5', 'css': 'level5'},
	        { 'name': 'RENATA DERMENGI DRAGLAND', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-renatadermengidragland5', 'css': 'level5'},
	        { 'name': 'GISELLE CORELLA', 'dept': 'NEIGHBORHOOD PLANNING', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ****** child of BRYAN ECK
	$.mockjax({
	    url: '/orgchart/asso-bryaneck5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-bryaneck5 drill-up',
	      'name': 'BRYAN ECK',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'TAL HARARI', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'CLARE KELLEY', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'BRITTANY ARCENEAUX', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'VEENA SNEHANSH', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** child of RENATA DERMENGI DRAGLAND
	$.mockjax({
	    url: '/orgchart/asso-renatadermengidragland5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-renatadermengidragland5 drill-up',
	      'name': 'RENATA DER MENGI DRAGLAND',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'LAURA KRAWCZYK', 'dept': 'NEIGHBORHOOD PLANNING', 'css': 'level6'},
	        { 'name': 'ANDREW JORGENSEN', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	        { 'name': 'DIEGO JANACUA CORTEZ', 'dept': 'NEIGHBORHOOD PLANNING', 'css': 'level6'},
	        { 'name': 'MATTHEW GAMBOA', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// **** child of ARTHI VARMA
	$.mockjax({
	    url: '/orgchart/asso-arthivarma3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-arthivarma3 drill-up',
	      'name': 'ARTHI VARMA',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level3',
	      'children': [
	        { 'name': 'MATTHEW GLESNE', 'dept': 'CITYWIDE PLANNING', 'className': 'drill-down asso-matthewglesne4', 'css': 'level4'},
	        { 'name': 'MARIA PALLINI TIPTON', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-mariapallinitipton4', 'css': 'level4'},
	        { 'name': 'DIANA KITCHING', 'dept': 'CITYWIDE PLANNING', 'className': 'drill-down asso-dianakitching4', 'css': 'level4'},
	        { 'name': 'RUBINA GHAZARIAN', 'dept': 'CITYWIDE PLANNING', 'className': 'drill-down asso-rubinaghazarian4', 'css': 'level4'},
	      ]
	    }
	  });
	  
	// ***** child of MATTHEW GLESNE
	$.mockjax({
	    url: '/orgchart/asso-matthewglesne4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-matthewglesne4 drill-up',
	      'name': 'MATTHEW GLESNE',
	      'dept': 'CITYWIDE PLANNING',
	      'css': 'level4',
	      'children': [
	        { 'name': 'CALLY HARDY', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	        { 'name': 'DAVID GREENWOOD', 'dept': 'CITYWIDE PLANNING','css': 'level5'},
	        { 'name': 'LOVELL WILLIAMS', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ***** child of MARIA PALLINI TIPTON
	$.mockjax({
	    url: '/orgchart/asso-mariapallinitipton4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-mariapallinitipton4 drill-up',
	      'name': 'MARIA PALLINI TIPTON',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'JACK TSAO', 'dept': 'DEMOGRAPHICS', 'className': 'drill-down asso-jacktsao5', 'css': 'level5'},
	        { 'name': 'ARIANE BRISKI', 'dept': 'CITYWIDE PLANNING','css': 'level5'},
	        { 'name': 'LENA MIK', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	        { 'name': 'CHRISTOPHE PINA', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	        { 'name': 'JASON DOUGLAS', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	        { 'name': 'NINA PHINOUWONG', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	        { 'name': 'LIKYELEH ABERA GEBRE', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ****** child of JACK TSAO
	$.mockjax({
	    url: '/orgchart/asso-jacktsao5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-jacktsao5 drill-up',
	      'name': 'JACK TSAO',
	      'dept': 'CITYWIDE PLANNING',
	      'css': 'level5',
	      'children': [
	        { 'name': 'ANGELA CHANG', 'dept': 'DEMOGRAPHICS','css': 'level6'},
	        { 'name': 'LENA MIK', 'dept': 'CITYWIDE PLANNING', 'css': 'level6'},
	      ]
	    }
	  });

	// ***** child of DIANA KITCHING
	$.mockjax({
	    url: '/orgchart/asso-dianakitching4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-dianakitching4 drill-up',
	      'name': 'DIANA KITCHING',
	      'dept': 'CITYWIDE PLANNING',
	      'css': 'level4',
	      'children': [
	        { 'name': 'MATTHEW GERTZ', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ***** child of RUBINA GHAZARIAN
	$.mockjax({
	    url: '/orgchart/asso-rubinaghazarian4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		  'className': 'asso-rubinaghazarian4 drill-up',
	      'name': 'RUBINA GHAZARIAN',
	      'dept': 'CITYWIDE PLANNING',
	      'css': 'level4',
	      'children': [
	        { 'name': 'BABAK DORJI', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	        { 'name': 'QIUANA WILLIAMS', 'dept': 'CITYWIDE PLANNING', 'css': 'level5'},
	      ]
	    }
	  });

	  // **** KENNETH BERNSTEIN
	  $.mockjax({
	    url: '/orgchart/asso-kennethbernstein3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-kennethbernstein3 drill-up',
	      'name': 'KENNETH BERNSTEIN',
	      'dept': 'POLICY PLANNING AND HISTORIC RESOURCES',
	      'css': 'level3',
	      'children': [
	        { 'name': 'LAMBERT GIESSINGER', 'dept': 'HISTORIC RESOURCES', 'className': 'drill-down asso-lambertgiessinger4', 'css': 'level4'},
	        { 'name': 'NAOMI GUTH', 'dept': 'HPOZ', 'className': 'drill-down asso-naomiguth4', 'css': 'level4'},
	        { 'name': 'CLAIRE BOWIN', 'dept': 'CITYWIDE PLANNING', 'className': 'drill-down asso-clairebowin4', 'css': 'level4'},
	        { 'name': 'JANET HANSEN', 'dept': 'HISTORIC RESOURCES', 'className': 'drill-down asso-janethansen4', 'css': 'level4'},
	        { 'name': 'MIGUEL SOTELO', 'dept': 'POLICY PLANNING CLERICAL SUPPORT', 'className': 'drill-down asso-miguelsotelo4', 'css': 'level4'},
	      ]
	    }
	  });
	  
	  // ***** LAMBERT GIESSINGER
	  $.mockjax({
	    url: '/orgchart/asso-lambertgiessinger4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-lambertgiessinger4 drill-up',
	      'name': 'LAMBERT GIESSINGER',
	      'dept': 'HISTORIC RESOURCES',
	      'css': 'level4',
	      'children': [
	        { 'name': 'MELISSA JONES', 'dept': 'HISTORIC RESOURCES', 'css': 'level5'},
	      ]
	    }
	  });

	// ***** NAOMI GUTH
	  $.mockjax({
	    url: '/orgchart/asso-naomiguth4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-naomiguth4 drill-up',
	      'name': 'NAOMI GUTH',
	      'dept': 'HPOZ',
	      'css': 'level4',
	      'children': [
	        { 'name': 'KIMBERLY HENRY', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'BLAIR SMITH', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5'},
	        { 'name': 'BRADLEY FURUYA', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'MAX LODER', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5'},
	        { 'name': 'LYDIA CHAPMAN', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'CHRISTINA PARK', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'MAKAN BARANGHOORI', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'JONATHAN KAPLAN', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'SARA GERSHENHORN', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'AMANDA KAINER', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'KATIE DEBIASE', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'MICAELA TORRES-GIL', 'dept': 'HPOZ', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ***** CLAIRE BOWIN
	  $.mockjax({
	    url: '/orgchart/asso-clairebowin4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-clairebowin4 drill-up',
	      'name': 'CLAIRE BOWIN',
	      'dept': 'CITYWIDE PLANNING',
	      'css': 'level4',
	      'children': [
	        { 'name': 'EDGAR GARCIA', 'dept': 'HPOZ', 'css': 'level5'},
	        { 'name': 'LAKISHA HULL', 'dept': 'NEIGHBORHOOD PLANNING', 'className': 'drill-down asso-lakishahull5', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ****** LAKISHA HULL
	  $.mockjax({
	    url: '/orgchart/asso-lakishahull5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-lakishahull5 drill-up',
	      'name': 'LAKISHA HULL',
	      'dept': 'NEIGHBORHOOD PLANNING',
	      'css': 'level5',
	      'children': [
	        { 'name': 'KAROLINA GORSKA', 'dept': 'URBAN DESIGN STUDIO', 'css': 'level6'},
	        { 'name': 'HOLLY HARPER', 'dept': 'URBAN DESIGN STUDIO', 'css': 'level6'},
	      ]
	    }
	  });

	// ***** JANET HANSEN
	  $.mockjax({
	    url: '/orgchart/asso-janethansen4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-janethansen4 drill-up',
	      'name': 'JANET HANSEN',
	      'dept': 'HISTORIC RESOURCES',
	      'css': 'level4',
	      'children': [
	        { 'name': 'SARA CRUZ', 'dept': 'HISTORIC RESOURCES', 'css': 'level5'},
	      ]
	    }
	  });


	//**** NICHOLAS MARICICH
	  $.mockjax({
	    url: '/orgchart/asso-nicholasmaricich3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-nicholasmaricich3 drill-up',
	      'name': 'NICHOLAS MARICICH',
	      'dept': 'NEIGHBORHOOD PLANNING',
	      'css': 'level3',
	      'children': [
	        { 'name': 'SHANNON RYAN', 'dept': 'SR MGMT ANALYST II', 'css': 'level4'},
	      ]
	    }
	  });
	  

	// **** JAMES VAN GERPEN
	  $.mockjax({
	    url: '/orgchart/asso-jamesvangerpen3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-jamesvangerpen3 drill-up',
	      'name': 'JAMES VAN GERPEN',
	      'dept': 'INFORMATION TECHNOLOGIES',
	      'css': 'level3',
	      'children': [
	        { 'name': 'SHAKEH BOGHOSKHANIAN', 'dept': 'GRAPHICS', 'className': 'drill-down asso-shakehboghoskhanian4', 'css': 'level4'},
	        { 'name': 'BETTY DONG', 'dept': 'GIS SECTION', 'className': 'drill-down asso-bettydong4', 'css': 'level4'},
	        { 'name': 'XANDRO DONADO', 'dept': 'GRAPHICS', 'css': 'level4'},
	        { 'name': 'MARIAELVIA HERNANDEZ', 'dept': 'GRAPHICS', 'className': 'drill-down asso-mariaelviahernandez4', 'css': 'level4'},
	        { 'name': 'DAVID TERUKINA', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'className': 'drill-down asso-davidterukina4', 'css': 'level4'},
	        { 'name': 'MARY QUON', 'dept': 'INFORMATION TECHNOLOGIES', 'css': 'level4'}
	      ]
	    }
	  });
	  
	// ***** SHAKEH BOGHOSKHANIAN
	  $.mockjax({
	    url: '/orgchart/asso-shakehboghoskhanian4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-shakehboghoskhanian4 drill-up',
	      'name': 'SHAKEH BOGHOSKHANIAN',
	      'dept': 'GRAPHICS',
	      'css': 'level4',
	      'children': [
	        { 'name': 'LOUISA RANICK', 'dept': 'GRAPHICS', 'css': 'level5'},
	        { 'name': 'ARLET SHIRVANIAN', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ***** BETTY DONG
	  $.mockjax({
	    url: '/orgchart/asso-bettydong4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-bettydong4 drill-up',
	      'name': 'BETTY DONG',
	      'dept': 'GIS SECTION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'CHARLES LEE', 'dept': 'GIS SECTION', 'className': 'drill-down asso-charleslee5', 'css': 'level5'},
	        { 'name': 'CUONG FAN', 'dept': 'GIS SECTION', 'className': 'drill-down asso-cuongfan5', 'css': 'level5'},
	        { 'name': 'DAVID DIEUDONNE', 'dept': 'GIS SECTION',  'className': 'drill-down asso-daviddieudonne5', 'css': 'level5'},
	        { 'name': 'CRUZ ORTIZ', 'dept': 'GIS SECTION', 'className': 'drill-down asso-cruzortiz5', 'css': 'level5'},
	        { 'name': 'DWAYNE MERCADEL', 'dept': 'GIS SECTION', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ****** CHARLES LEE
	  $.mockjax({
	    url: '/orgchart/asso-charleslee5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-charleslee5 drill-up',
	      'name': 'CHARLES LEE',
	      'dept': 'GIS SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'JESUS RAMOS', 'dept': 'GIS SECTION', 'className': 'drill-down asso-jesusramos6', 'css': 'level6'},
	        { 'name': 'TIMMY LUONG', 'dept': 'GIS SECTION', 'className': 'drill-down asso-timmyluong6', 'css': 'level6'},
	        { 'name': 'GARY HIMAN', 'dept': 'GIS SECTION',  'className': 'drill-down asso-garyhiman6', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** CUONG FAN
	  $.mockjax({
	    url: '/orgchart/asso-cuongfan5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-cuongfan5 drill-up',
	      'name': 'CUONG FAN',
	      'dept': 'GIS SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'CARL NELSON', 'dept': 'GIS SECTION', 'css': 'level6'},
	        { 'name': 'DAVID ABBOTT', 'dept': 'GIS SECTION', 'css': 'level6'},
	        { 'name': 'MEGAN YANEZ', 'dept': 'GIS SECTION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** DAVID DIEUDONNE
	  $.mockjax({
	    url: '/orgchart/asso-daviddieudonne5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-daviddieudonne5 drill-up',
	      'name': 'DAVID DIEUDONNE',
	      'dept': 'GIS SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'RITA DIAZ', 'dept': 'GIS SECTION', 'css': 'level6'},
	        { 'name': 'JULIANNA AGUILAR', 'dept': 'GIS SECTION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** CRUZ ORTIZ
	  $.mockjax({
	    url: '/orgchart/asso-cruzortiz5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-cruzortiz5 drill-up',
	      'name': 'CRUZ ORTIZ',
	      'dept': 'GIS SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'NICOLE SABUTIS', 'dept': 'GIS SECTION', 'css': 'level6'},
	        { 'name': 'HIROYUKI MATSUDA', 'dept': 'GIS SECTION', 'css': 'level6'},
	        { 'name': 'ABRAM LEAL', 'dept': 'GIS SECTION', 'css': 'level6'},
	        { 'name': 'OMAR ALHASHIMI', 'dept': 'GIS SECTION', 'css': 'level6'},
	        { 'name': 'AKOUA DOFFOU', 'dept': 'GIS SECTION', 'css': 'level6'},
	      ]
	    }
	  });

	// ******* JESUS RAMOS
	  $.mockjax({
	    url: '/orgchart/asso-jesusramos6',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-jesusramos6 drill-up',
	      'name': 'JESUS RAMOS',
	      'dept': 'GIS SECTION',
	      'css': 'level6',
	      'children': [
	        { 'name': 'ARMANDO ALFARO', 'dept': 'GIS SECTION', 'css': 'level7'},
	        { 'name': 'KORY SIRKIN', 'dept': 'GIS SECTION', 'css': 'level7'},
	        { 'name': 'LIDIA VAIZ', 'dept': 'GIS SECTION',  'css': 'level7'},
	      ]
	    }
	  });
	  
	// ******* TIMMY LUONG
	  $.mockjax({
	    url: '/orgchart/asso-timmyluong6',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-timmyluong6 drill-up',
	      'name': 'CHARLES LEE',
	      'dept': 'GIS SECTION',
	      'css': 'level6',
	      'children': [
	        { 'name': 'LESI MAI', 'dept': 'GIS SECTION', 'css': 'level7'},
	        { 'name': 'LARA VARGAS', 'dept': 'GIS SECTION', 'css': 'level7'},
	      ]
	    }
	  });
	  
	// ******* GARY HIMAN
	  $.mockjax({
	    url: '/orgchart/asso-garyhiman6',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-garyhiman6 drill-up',
	      'name': 'CHARLES LEE',
	      'dept': 'GIS SECTION',
	      'css': 'level6',
	      'children': [
	        { 'name': 'AZIZ BAKKOURY', 'dept': 'GIS SECTION', 'css': 'level7'},
	      ]
	    }
	  });

	// ***** MARIAELVIA HERNANDEZ
	  $.mockjax({
	    url: '/orgchart/asso-mariaelviahernandez4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-mariaelviahernandez4 drill-up',
	      'name': 'MARIAELVIA HERNANDEZ',
	      'dept': 'GRAPHICS',
	      'css': 'level4',
	      'children': [
	        { 'name': 'JACOB LOPEZ', 'dept': 'GRAPHICS', 'css': 'level5'},
	        { 'name': 'ANDRES MANZANO', 'dept': 'GRAPHICS', 'css': 'level5'},
	        { 'name': 'COLLETTE DEL POSO', 'dept': 'NEIGHBORHOOD PLANNING',  'css': 'level5'},
	      ]
	    }
	  });
	  
	// ***** DAVID TERUKINA
	  $.mockjax({
	    url: '/orgchart/asso-davidterukina4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-davidterukina4 drill-up',
	      'name': 'MARIAELVIA HERNANDEZ',
	      'dept': 'EMERGING TECHNOLOGIES SECTION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'MING DAI', 'dept': 'APPLICATION DEVELOPMENT SECTION', 'className': 'drill-down asso-mingdai5', 'css': 'level5'},
	        { 'name': 'CAM VUONG', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'className': 'drill-down asso-camvuong5', 'css': 'level5'},
	        { 'name': 'ROWLEN SHUE', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'className': 'drill-down asso-rowlenshue5', 'css': 'level5'},
	        { 'name': 'CHARLES NORMAN', 'dept': 'APPLICATION DEVELOPMENT SECTION', 'className': 'drill-down asso-charlesnorman5', 'css': 'level5'},
	        { 'name': 'ESTHER TAM', 'dept': 'APPLICATION DEVELOPMENT SECTION', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ****** MING DAI
	  $.mockjax({
	    url: '/orgchart/asso-mingdai5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-mingdai5 drill-up',
	      'name': 'MING DAI',
	      'dept': 'APPLICATION DEVELOPMENT SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'NGOCDUNG BUI', 'dept': 'APPLICATION DEVELOPMENT SECTION', 'css': 'level6'},
	        { 'name': 'JAY STRAHAN', 'dept': 'GIS SECTION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** CAM VUONG
	  $.mockjax({
	    url: '/orgchart/asso-camvuong5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-camvuong5 drill-up',
	      'name': 'CAM VUONG',
	      'dept': 'EMERGING TECHNOLOGIES SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'HEBER MARTINEZ', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'css': 'level6'},
	        { 'name': 'MICHAEL CHANG', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'css': 'level6'},
	        { 'name': 'DUKE TRAN', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'css': 'level6'},
	        { 'name': 'KELVIN TSAN', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'css': 'level6'},
	        { 'name': 'WILSON YIP', 'dept': 'INFORMATION TECHNOLOGIES', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** ROWLEN SHUE
	  $.mockjax({
	    url: '/orgchart/asso-rowlenshue5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-rowlenshue5 drill-up',
	      'name': 'ROWLEN SHUE',
	      'dept': 'EMERGING TECHNOLOGIES SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'STEPHANIE LUCKETT', 'dept': 'EMERGING TECHNOLOGIES SECTION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** CHARLES NORMAN
	  $.mockjax({
	    url: '/orgchart/asso-charlesnorman5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-charlesnorman5 drill-up',
	      'name': 'CHARLES NORMAN',
	      'dept': 'APPLICATION DEVELOPMENT SECTION',
	      'css': 'level5',
	      'children': [
	        { 'name': 'PAUL VERGER', 'dept': 'APPLICATION DEVELOPMENT SECTION', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// **** CARRIE FIRESTONE
	  $.mockjax({
	    url: '/orgchart/asso-carriefirestone3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-carriefirestone3 drill-up',
	      'name': 'CARRIE FIRESTONE',
	      'dept': 'EXECUTIVE ADMINISTRATIVE ASSISTANT',
	      'css': 'level3',
	      'children': [
	        { 'name': 'DENISE CHAVEZ', 'dept': 'COMMISSION OFFICE', 'css': 'level4'},
	      ]
	    }
	  });
	  
	// **** YEGHIG KESHISHIAN
	  $.mockjax({
	    url: '/orgchart/asso-yeghigkeshishian3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-yeghigkeshishian3 drill-up',
	      'name': 'YEGHIG KESHISHIAN',
	      'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS',
	      'css': 'level3',
	      'children': [
	        { 'name': 'DYLAN SITTIG', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level4'},
	        { 'name': 'FABIOLA INZUNZA ARMENTA', 'dept': 'CASE MANAGEMENT', 'css': 'level4'},
	        { 'name': 'LAUREN ALBA', 'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS', 'css': 'level4'},
	        { 'name': 'VICKY TAVITIAN', 'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS', 'css': 'level4'},
	        { 'name': 'RYAN TEMPLE', 'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS', 'css': 'level4'},
	        { 'name': 'ANSIS HOHEISEL', 'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS', 'css': 'level4'},
	        { 'name': 'DANIEL CORONADO', 'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS', 'css': 'level4'},
	        { 'name': 'RAYNA PLUMMER', 'dept': 'COUNCIL LIAISON - EXTERNAL AFFAIRS', 'css': 'level4'},
	      ]
	    }
	  });
	  
	// **** THOMAS ROTHMANN
	  $.mockjax({
	    url: '/orgchart/asso-thomasrothmann3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-thomasrothmann3 drill-up',
	      'name': 'THOMAS ROTHMANN',
	      'dept': 'RECODE LA',
	      'css': 'level3',
	      'children': [
	        { 'name': 'PHYLLIS NATHANSON', 'dept': 'RECODE LA', 'className': 'drill-down asso-phyllisnathanson4', 'css': 'level4'},
	      ]
	    }
	  });
	  
	// ***** PHYLLIS NATHANSON
	  $.mockjax({
	    url: '/orgchart/asso-phyllisnathanson4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-phyllisnathanson4 drill-up',
	      'name': 'PHYLLIS NATHANSON',
	      'dept': 'RECODE LA',
	      'css': 'level4',
	      'children': [
	        { 'name': 'ERICK LOPEZ', 'dept': 'RECODE LA', 'className': 'drill-down asso-ericklopez5', 'css': 'level5'},
	        { 'name': 'DEBORAH KAHEN', 'dept': 'CODE STUDIES', 'className': 'drill-down asso-deborahkahen5', 'css': 'level5'},
	        { 'name': 'ERIN COLEMAN', 'dept': 'CODE STUDIES', 'className': 'drill-down asso-erincoleman5', 'css': 'level5'},
	      ]
	    }
	  });
	  
	// ****** ERICK LOPEZ
	  $.mockjax({
	    url: '/orgchart/asso-ericklopez5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-ericklopez5 drill-up',
	      'name': 'ERICK LOPEZ',
	      'dept': 'RECODE LA',
	      'css': 'level5',
	      'children': [
	        { 'name': 'BOYOUNG KIM', 'dept': 'CODE STUDIES', 'css': 'level6'},
	        { 'name': 'AZEEN KHANMALEK', 'dept': 'CODE STUDIES', 'css': 'level6'},
	        { 'name': 'PATRICK WHALEN', 'dept': 'CODE STUDIES', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** DEBORAH KAHEN
	  $.mockjax({
	    url: '/orgchart/asso-deborahkahen5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-deborahkahen5 drill-up',
	      'name': 'DEBORAH KAHEN',
	      'dept': 'CODE STUDIES',
	      'css': 'level5',
	      'children': [
	        { 'name': 'ESTHER AHN', 'dept': 'RECODE LA', 'css': 'level6'},
	        { 'name': 'JAIME ESPINOZA', 'dept': 'RECODE LA', 'css': 'level6'},
	        { 'name': 'NIALL HUFFMAN', 'dept': 'CODE STUDIES', 'css': 'level6'},
	      ]
	    }
	  });
	  
	// ****** ERIN COLEMAN
	  $.mockjax({
	    url: '/orgchart/asso-erincoleman5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-erincoleman5 drill-up',
	      'name': 'ERIN COLEMAN',
	      'dept': 'CODE STUDIES',
	      'css': 'level5',
	      'children': [
	        { 'name': 'MARY RICHARDSON', 'dept': 'CODE STUDIES', 'css': 'level6'},
	        { 'name': 'YI LU', 'dept': 'CODE STUDIES', 'css': 'level6'},
	      ]
	    }
	  });

	//**** REBECCA VALDEZ
	  $.mockjax({
	    url: '/orgchart/asso-rebeccavaldez3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-rebeccavaldez3 drill-up',
	      'name': 'REBECCA VALDEZ',
	      'dept': 'PMU',
	      'css': 'level3',
	      'children': [
	        { 'name': 'ROXANNE WILES', 'dept': 'PMU', 'className': 'drill-down asso-roxannewiles4', 'css': 'level4'},
	        { 'name': 'NINA IDEMUDIA', 'dept': 'PMU', 'css': 'level4'},
	        { 'name': 'ASHLEY ATKINSON', 'dept': 'PMU', 'className': 'drill-down asso-ashleyatkinson4', 'css': 'level4'},
	        { 'name': 'ALLISON WILHITE', 'dept': 'ACCOUNTING AND PURCHASING', 'css': 'level4'},
	      ]
	    }
	  });
	  
	//**** ROXANNE WILES
	  $.mockjax({
	    url: '/orgchart/asso-roxannewiles4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-roxannewiles4 drill-up',
	      'name': 'ROXANNE WILES',
	      'dept': 'PMU',
	      'css': 'level4',
	      'children': [
	        { 'name': 'JAMES WILLIAMS', 'dept': 'COMMISSION OFFICE', 'css': 'level5'},
	        { 'name': 'CECILIA LAMAS', 'dept': 'COMMISSION OFFICE', 'css': 'level5'},
	        { 'name': 'ETTA ARMSTRONG', 'dept': 'COMMISSION OFFICE', 'css': 'level5'},
	        { 'name': 'RAFAEL VEGA', 'dept': 'COMMISSION OFFICE', 'css': 'level5'},
	        { 'name': 'JASON WONG', 'dept': 'COMMISSION OFFICE', 'css': 'level5'},
	        { 'name': 'MARCOS GODOY', 'dept': 'COMMISSION OFFICE', 'css': 'level5'},
	      ]
	    }
	  });
	  
	//**** ASHLEY ATKINSON
	  $.mockjax({
	    url: '/orgchart/asso-ashleyatkinson4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText:  {
		'className': 'asso-ashleyatkinson4 drill-up',
	      'name': 'ASHLEY ATKINSON',
	      'dept': 'PMU',
	      'css': 'level4',
	      'children': [
	        { 'name': 'JONATHAN CHIU', 'dept': 'PMU', 'css': 'level5'},
	      ]
	    }
	  });

	/** ********************* **/
	//*** LISA WEBBER
	  $.mockjax({
	    url: '/orgchart/asso-lisawebber2',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-lisawebber2 drill-up',
	      'name': 'LISA WEBBER',
	      'dept': 'PROJECT PLANNING BUREAU',
	      'css': 'level2',
	      'children': [
	        { 'name': 'MAYA ZAITZEVSKY', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level3' },
	        { 'name': 'THEODORE IRVING', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level3' },
	        { 'name': 'SHANA BONSTIN', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-shanabonstin3', 'css': 'level3' },
	        { 'name': 'ESTINEH MAILIAN', 'dept': 'DEVELOPMENT SERVICES CENTER', 'className': 'drill-down asso-estinehmailian3', 'css': 'level3' },
	        { 'name': 'FERNANDO TOVAR', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level3' },
	        { 'name': 'BLAKE LAMB', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'className': 'drill-down asso-blakelamb3', 'css': 'level3' },
	        { 'name': 'HENRY CHU', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level3' },
	        { 'name': 'CHARLES RAUSCH', 'dept': 'MJ PROJ AND ENVIR ANALYSIS SECTION', 'className': 'drill-down asso-charlesrausch3', 'css': 'level3' },
	        { 'name': 'DAVID WEINTRAUB', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level3' },
	        { 'name': 'FAISAL ROBLE', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'className': 'drill-down asso-faisalroble3', 'css': 'level3' },
	        { 'name': 'FRANKLIN QUON', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level3' },
	        { 'name': 'JACK CHIANG', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level3' },
	        { 'name': 'ALETA JAMES', 'dept': 'CONDITION COMPLIANCE UNIT', 'css': 'level3' },
	      ]
	    }
	  });

	  
//**** SHANA BONSTIN
  $.mockjax({
    url: '/orgchart/asso-shanabonstin3',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-shanabonstin3 drill-up',
      'name': 'SHANA BONSTIN',
      'dept': 'PROJ PLN DIV 1 - CENTRAL',
      'css': 'level3',
      'children': [
        { 'name': 'JANE CHOI', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-janechoi4', 'css': 'level4' },
        { 'name': 'DON JEFFERSON', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level4' },
        { 'name': 'MARIA REYES', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level4' },
        { 'name': 'CHRISTINA LEE', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-christinalee4', 'css': 'level4' },
      ]
    }
  });
	  
	//***** JANE CHOI
	  $.mockjax({
	    url: '/orgchart/asso-janechoi4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-janechoi4 drill-up',
	      'name': 'JANE CHOI',
	      'dept': 'PROJ PLN DIV 1 - CENTRAL',
	      'css': 'level4',
	      'children': [
	        { 'name': 'MAY SIRINOPWONGSAGON', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-maysirinopwongsagon5', 'css': 'level5' },
	        { 'name': 'NICOLE SANCHEZ', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-nicolesanchez5', 'css': 'level5' },
	        { 'name': 'KEVIN GOLDEN', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-kevingolden5', 'css': 'level5' },
	      ]
	    }
	  });
	  
	//****** MAY SIRINOPWONGSAGON
	  $.mockjax({
	    url: '/orgchart/asso-maysirinopwongsagon5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-maysirinopwongsagon5 drill-up',
	      'name': 'MAY SIRINOPWONGSAGON',
	      'dept': 'PROJ PLN DIV 1 - CENTRAL',
	      'css': 'level5',
	      'children': [
	        { 'name': 'MICHAEL SIN', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'ISAIAH ROSS', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'CHI DANG', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//****** NICOLE SANCHEZ
	  $.mockjax({
	    url: '/orgchart/asso-nicolesanchez5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-nicolesanchez5 drill-up',
	      'name': 'NICOLE SANCHEZ',
	      'dept': 'PROJ PLN DIV 1 - CENTRAL',
	      'css': 'level5',
	      'children': [
	        { 'name': 'JOHN DACEY', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'SANTOS SANCHEZ', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//****** KEVIN GOLDEN
	  $.mockjax({
	    url: '/orgchart/asso-kevingolden5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-kevingolden5 drill-up',
	      'name': 'KEVIN GOLDEN',
	      'dept': 'PROJ PLN DIV 1 - CENTRAL',
	      'css': 'level5',
	      'children': [
	        { 'name': 'HAKEEM PARKE DAVIS', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'HANI BAKER', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	      ]
	    }
	  });

	//***** CHRISTINA LEE
	  $.mockjax({
	    url: '/orgchart/asso-christinalee4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-christinalee4 drill-up',
	      'name': 'CHRISTINA LEE',
	      'dept': 'PROJ PLN DIV 1 - CENTRAL',
	      'css': 'level4',
	      'children': [
	        { 'name': 'MONIQUE ACOSTA', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level5' },
	        { 'name': 'MINDY NGUYEN', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-mindynguyen5', 'css': 'level5' },
	        { 'name': 'IRIS WAN', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'className': 'drill-down asso-iriswan5', 'css': 'level5' },
	      ]
	    }
	  });
	  
	//****** MINDY NGUYEN
	  $.mockjax({
	    url: '/orgchart/asso-mindynguyen5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-mindynguyen5 drill-up',
	      'name': 'MINDY NGUYEN',
	      'dept': 'PROJ PLN DIV 1 - CENTRAL',
	      'css': 'level5',
	      'children': [
	        { 'name': 'AMANDA BRIONES', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'NURI CHO', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'JASON HERNANDEZ', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'RICHARD REASER', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//****** IRIS WAN
	  $.mockjax({
	    url: '/orgchart/asso-iriswan5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-iriswan5 drill-up',
	      'name': 'IRIS WAN',
	      'dept': 'PROJ PLN DIV 1 - CENTRAL',
	      'css': 'level5',
	      'children': [
    	  	{ 'name': 'RONY GIRON', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'JOE LUCKEY', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	        { 'name': 'RUBEN VASQUEZ', 'dept': 'PROJ PLN DIV 1 - CENTRAL', 'css': 'level6' },
	      ]
	    }
	  });

	//**** ESTINEH MAILIAN
	  $.mockjax({
	    url: '/orgchart/asso-estinehmailian3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-estinehmailian3 drill-up',
	      'name': 'ESTINEH MAILIAN',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level3',
	      'children': [
	        { 'name': 'ROBERT DUENAS', 'dept': 'DEVELOPMENT SERVICES CENTER', 'className': 'drill-down asso-robertduenas4', 'css': 'level4' },
	        { 'name': 'MARITZA PRZEKOP', 'dept': 'DEVELOPMENT SERVICES CENTER', 'className': 'drill-down asso-maritzaprzekop4', 'css': 'level4' },
	        { 'name': 'SARAH PEARSON', 'dept': 'DEVELOPMENT SERVICES CENTER', 'className': 'drill-down asso-sarahpearson4', 'css': 'level4' },
	        { 'name': 'RALPH AVILA', 'dept': 'DEVELOPMENT SERVICES CENTER', 'className': 'drill-down asso-ralphavila4', 'css': 'level4' },
	        { 'name': 'LINDA CLARKE', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level4' },
	      ]
	    }
	  });

	//***** ESTINEH MAILIAN
	  $.mockjax({
	    url: '/orgchart/asso-robertduenas4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-robertduenas4 drill-up',
	      'name': 'ROBERT DUENAS',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level4',
	      'children': [
	        { 'name': 'MARCUS WOERSCHING', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level5' },
	        { 'name': 'GRISELDA GONZALEZ', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
	        { 'name': 'TINA VACHARKULKSEMSUK', 'dept': 'METRO PUBLIC COUNTER', 'className': 'drill-down asso-tinavacharkulksemsuk5', 'css': 'level5' },
	        { 'name': 'VANESSA SOTO', 'dept': 'CONDITION COMPLIANCE UNIT', 'className': 'drill-down asso-vanessasoto5', 'css': 'level5' },
	        { 'name': 'PHYLLIS PARKER', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level5' },
	        { 'name': 'PIO QUITORIANO', 'dept': 'DEVELOPMENT SERVICES CENTER', 'className': 'drill-down asso-pioquitoriano5', 'css': 'level5' },
	        { 'name': 'ULISES GONZALEZ', 'dept': 'DEVELOPMENT SERVICES CENTER', 'className': 'drill-down asso-ulisesgonzalez5', 'css': 'level5' },
	        { 'name': 'ERIC CLAROS', 'dept': 'METRO PUBLIC COUNTER', 'className': 'drill-down asso-ericclaros5', 'css': 'level5' },
	        { 'name': 'MELVINA ADLERSBERG', 'dept': 'CONDITION COMPLIANCE UNIT', 'className': 'drill-down asso-melvinaadlersberg5', 'css': 'level5' },
	      ]
	    }
	  });
	  
	//***** TINA VACHARKULKSEMSUK
	  $.mockjax({
	    url: '/orgchart/asso-tinavacharkulksemsuk5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-tinavacharkulksemsuk5 drill-up',
	      'name': 'TINA VACHARKULKSEMSUK',
	      'dept': 'METRO PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'SHEILA TONI', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//***** VANESSA SOTO
	  $.mockjax({
	    url: '/orgchart/asso-vanessasoto5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-vanessasoto5 drill-up',
	      'name': 'VANESSA SOTO',
	      'dept': 'CONDITION COMPLIANCE UNIT',
	      'css': 'level5',
	      'children': [
	        { 'name': 'DANAI ZAIRE', 'dept': 'CONDITION COMPLIANCE UNIT', 'css': 'level6' },
	        { 'name': 'JAMES HOWE', 'dept': 'CONDITION COMPLIANCE UNIT', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//***** PIO QUITORIANO
	  $.mockjax({
	    url: '/orgchart/asso-pioquitoriano5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-pioquitoriano5 drill-up',
	      'name': 'PIO QUITORIANO',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'MATTHEW QUAN', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level6' },
	        { 'name': 'GRACIELA ACOSTA', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level6' },
	        { 'name': 'CLAUDE GOODING', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level6' },
	        { 'name': 'ANACANY HURTADO', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//***** ULISES GONZALEZ
	  $.mockjax({
	    url: '/orgchart/asso-ulisesgonzalez5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-ulisesgonzalez5 drill-up',
	      'name': 'ULISES GONZALEZ',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'MAIDEL LUEVANO', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level6' },
	        { 'name': 'NORALI MARTINEZ MAZA', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//***** ERIC CLAROS
	  $.mockjax({
	    url: '/orgchart/asso-ericclaros5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-ericclaros5 drill-up',
	      'name': 'ERIC CLAROS',
	      'dept': 'METRO PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'AIDA KARAPETIAN', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//***** MELVINA ADLERSBERG
	  $.mockjax({
	    url: '/orgchart/asso-melvinaadlersberg5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-melvinaadlersberg5 drill-up',
	      'name': 'MELVINA ADLERSBERG',
	      'dept': 'CONDITION COMPLIANCE UNIT',
	      'css': 'level5',
	      'children': [
	        { 'name': 'RAYMOND PARKER', 'dept': 'CONDITION COMPLIANCE UNIT', 'css': 'level6' },
	      ]
	    }
	  });

	//***** MARITZA PRZEKOP
	  $.mockjax({
	    url: '/orgchart/asso-maritzaprzekop4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-maritzaprzekop4 drill-up',
	      'name': 'MARITZA PRZEKOP',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level4',
	      'children': [
	        { 'name': 'ANNA VIDAL', 'dept': 'VALLEY PUBLIC COUNTER', 'className': 'drill-down asso-annavidal5', 'css': 'level5' },
	        { 'name': 'TREVOR MARTIN', 'dept': 'WEST PUBLIC COUNTER', 'css': 'level5' },
	        { 'name': 'CRISTINA ORELLANA', 'dept': 'VALLEY PUBLIC COUNTER',  'css': 'level5' },
	        { 'name': 'HERMINIGIL AGUSTIN', 'dept': 'VALLEY PUBLIC COUNTER', 'className': 'drill-down asso-herminigilagustin5', 'css': 'level5' },
	        { 'name': 'SARAH GOLDMAN', 'dept': 'WEST PUBLIC COUNTER', 'css': 'level5' },
	        { 'name': 'NOAH MCCOY', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level5' },
	        { 'name': 'DENISE BELL', 'dept': 'DEVELOPMENT SERVICES CENTER', 'css': 'level5' },
	      ]
	    }
	  });
	  
	//****** ANNA VIDAL
	  $.mockjax({
	    url: '/orgchart/asso-annavidal5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-annavidal5 drill-up',
	      'name': 'ANNA VIDAL',
	      'dept': 'VALLEY PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'STEVEN WECHSLER', 'dept': 'VALLEY PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'DAISY BENICIA', 'dept': 'VALLEY PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'RINA LARA', 'dept': 'VALLEY PUBLIC COUNTER',  'css': 'level6' },
	        { 'name': 'PABLO ESTRADA', 'dept': 'VALLEY PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'THOMAS HENRY', 'dept': 'VALLEY PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//****** HERMINIGIL AGUSTIN
	  $.mockjax({
	    url: '/orgchart/asso-herminigilagustin5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-herminigilagustin5 drill-up',
	      'name': 'HERMINIGIL AGUSTIN',
	      'dept': 'VALLEY PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'DENNIS CHEW', 'dept': 'VALLEY PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'RICARDO TORRES', 'dept': 'VALLEY PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  });

	//***** SARAH PEARSON
	  $.mockjax({
	    url: '/orgchart/asso-sarahpearson4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-sarahpearson4 drill-up',
	      'name': 'SARAH PEARSON',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level4',
	      'children': [
	        { 'name': 'SUSAN ZERMENO', 'dept': 'VALLEY PUBLIC COUNTER', 'css': 'level5' },
	        { 'name': 'KIT AWAKUNI', 'dept': 'CASE MANAGEMENT', 'className': 'drill-down asso-kitawakuni5', 'css': 'level5' },
	      ]
	    }
	  });  
	  
	//****** KIT AWAKUNI
	  $.mockjax({
	    url: '/orgchart/asso-kitawakuni5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-kitawakuni5 drill-up',
	      'name': 'SARAH PEARSON',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'JUSTIN BILOW', 'dept': 'CASE MANAGEMENT', 'css': 'level6' },
	      ]
	    }
	  }); 

	//***** RALPH AVILA
	  $.mockjax({
	    url: '/orgchart/asso-ralphavila4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-ralphavila4 drill-up',
	      'name': 'RALPH AVILA',
	      'dept': 'DEVELOPMENT SERVICES CENTER',
	      'css': 'level4',
	      'children': [
	        { 'name': 'NORA DRESSER', 'dept': 'METRO PUBLIC COUNTER', 'className': 'drill-down asso-ralphavila5', 'css': 'level5' },
	        { 'name': 'GLORIA DEAN', 'dept': 'METRO PUBLIC COUNTER', 'className': 'drill-down asso-gloriadean5',  'css': 'level5' },
	        { 'name': 'STEVE KIM', 'dept': 'METRO PUBLIC COUNTER', 'className': 'drill-down asso-stevekim5',  'css': 'level5' },
	        { 'name': 'JOSE ROMERO NAVARRO', 'dept': 'METRO PUBLIC COUNTER', 'className': 'drill-down asso-joseromeronavarro5',  'css': 'level5' },
	        { 'name': 'BRIDGETTE WOOTEN', 'dept': 'METRO PUBLIC COUNTER', 'className': 'drill-down asso-bridgettewooten5',  'css': 'level5' },
	      ]
	    }
	  });
	     
	//****** NORA DRESSER
	  $.mockjax({
	    url: '/orgchart/asso-ralphavila5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-ralphavila5 drill-up',
	      'name': 'NORA DRESSER',
	      'dept': 'METRO PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'EDBER MACEDO', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  });  
	   
	//****** GLORIA DEAN
	  $.mockjax({
	    url: '/orgchart/asso-gloriadean5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-gloriadean5 drill-up',
	      'name': 'GLORIA DEAN',
	      'dept': 'METRO PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'JASMINE ALIASGHAR', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'CAROLINA MENJIVAR', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  });  
	   
	//****** STEVE KIM
	  $.mockjax({
	    url: '/orgchart/asso-stevekim5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-stevekim5 drill-up',
	      'name': 'STEVE KIM',
	      'dept': 'METRO PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'IVORY CHAMBESHI', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'DIANA JIMENEZ', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'SOPHIE GABEL-SCHEINBAUM', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  });   
	  
	//****** JOSE ROMERO NAVARRO
	  $.mockjax({
	    url: '/orgchart/asso-joseromeronavarro5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-joseromeronavarro5 drill-up',
	      'name': 'JOSE ROMERO NAVARRO',
	      'dept': 'METRO PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'DANALYNN DOMINGUEZ', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'SEAN VEAL', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'YOVANA PEREZ', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  }); 
	    
	//****** BRIDGETTE WOOTEN
	  $.mockjax({
	    url: '/orgchart/asso-bridgettewooten5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-bridgettewooten5 drill-up',
	      'name': 'BRIDGETTE WOOTEN',
	      'dept': 'METRO PUBLIC COUNTER',
	      'css': 'level5',
	      'children': [
	        { 'name': 'FIPE LEILUA', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'BRIAN CARR', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	        { 'name': 'JESSE RAMOS', 'dept': 'METRO PUBLIC COUNTER', 'css': 'level6' },
	      ]
	    }
	  }); 

	//**** BLAKE LAMB
	  $.mockjax({
	    url: '/orgchart/asso-blakelamb3',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-blakelamb3 drill-up',
	      'name': 'BLAKE LAMB',
	      'dept': 'PROJ PLN DIV 3 - VALLEY',
	      'css': 'level3',
	      'children': [
	        { 'name': 'DAVID OLIVO', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-davidolivo4', 'css': 'level4' },
	        { 'name': 'MICHELLE LEVY', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'className': 'drill-down asso-michellelevy4', 'css': 'level4' },
	        { 'name': 'COURTNEY SCHOENWALD', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'className': 'drill-down asso-courtneyschoenwald4', 'css': 'level4' },
	        { 'name': 'CHRISTINE SAPONARA', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-christinesaponara4', 'css': 'level4' },
	        { 'name': 'MIGUEL HERNANDEZ', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level4' },
	        { 'name': 'MARY CROWELL', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level4' },
	      ]
	    }
	  });
	  
	//***** DAVID OLIVO
	  $.mockjax({
	    url: '/orgchart/asso-davidolivo4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-davidolivo4 drill-up',
	      'name': 'DAVID OLIVO',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'ANDRES RODRIGUEZ', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-andresrodriguez5', 'css': 'level5' },
	        { 'name': 'CLAUDIA RODRIGUEZ', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-claudiarodriguez5', 'css': 'level5' },
	      ]
	    }
	  });
	  
	//***** ANDRES RODRIGUEZ
	  $.mockjax({
	    url: '/orgchart/asso-andresrodriguez5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-andresrodriguez5 drill-up',
	      'name': 'ANDRES RODRIGUEZ',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'DANIEL SKOLNICK', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5' },
	        { 'name': 'JORDAN FRAADE', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5' },
	        { 'name': 'JULIA HEIDELMAN', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5' },
	        { 'name': 'KORA MCNAUGHTON', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5' },
	      ]
	    }
	  });
	  
	//***** CLAUDIA RODRIGUEZ
	  $.mockjax({
	    url: '/orgchart/asso-claudiarodriguez5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-claudiarodriguez5 drill-up',
	      'name': 'CLAUDIA RODRIGUEZ',
	      'dept': 'COMMUNITY PLANNING DIVISION',
	      'css': 'level4',
	      'children': [
	        { 'name': 'ADRINEH MELKONIAN', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5' },
	        { 'name': 'ERIKA LAM', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5' },
	        { 'name': 'MICHELLE MONTENEGRO', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level5' },
	      ]
	    }
	  });

	//***** MICHELLE LEVY
	  $.mockjax({
	    url: '/orgchart/asso-michellelevy4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-michellelevy4 drill-up',
	      'name': 'MICHELLE LEVY',
	      'dept': 'PROJ PLN DIV 3 - VALLEY',
	      'css': 'level4',
	      'children': [
	        { 'name': 'SARAH HOUNSELL', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'className': 'drill-down asso-sarahhounsell5', 'css': 'level5' },
	        { 'name': 'VALENTINA KNOX-JONES', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'className': 'drill-down asso-valentinaknoxjones5', 'css': 'level5' },
	        { 'name': 'TIMOTHY FARGO', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'className': 'drill-down asso-timothyfargo5', 'css': 'level5' },
	        { 'name': 'LAURA FRAZIN STEELE', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'className': 'drill-down asso-laurafrazinsteele5', 'css': 'level5' },
	      ]
	    }
	  });
	  
	//****** SARAH HOUNSELL
	  $.mockjax({
	    url: '/orgchart/asso-sarahhounsell5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-sarahhounsell5 drill-up',
	      'name': 'SARAH HOUNSELL',
	      'dept': 'PROJ PLN DIV 3 - VALLEY',
	      'css': 'level5',
	      'children': [
	        { 'name': 'MARIANNE KING', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level6' },
	        { 'name': 'LUCERITO MARTINEZ', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//****** VALENTINA KNOX-JONES
	  $.mockjax({
	    url: '/orgchart/asso-valentinaknoxjones5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-valentinaknoxjones5 drill-up',
	      'name': 'VALENTINA KNOX-JONES',
	      'dept': 'PROJ PLN DIV 3 - VALLEY',
	      'css': 'level5',
	      'children': [
	        { 'name': 'CHRISTINE BUSTILLOS', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//****** TIMOTHY FARGO
	  $.mockjax({
	    url: '/orgchart/asso-timothyfargo5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-timothyfargo5 drill-up',
	      'name': 'VALENTINA KNOX-JONES',
	      'dept': 'PROJ PLN DIV 3 - VALLEY',
	      'css': 'level5',
	      'children': [
	        { 'name': 'TRACY WILLIAMS', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level6' },
	      ]
	    }
	  });
	  
	//****** LAURA FRAZIN STEELE
	  $.mockjax({
	    url: '/orgchart/asso-laurafrazinsteele5',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-laurafrazinsteele5 drill-up',
	      'name': 'VALENTINA KNOX-JONES',
	      'dept': 'PROJ PLN DIV 3 - VALLEY',
	      'css': 'level5',
	      'children': [
	        { 'name': 'KARIN BOGHOSKHANIAN', 'dept': 'PROJ PLN DIV 3 - VALLEY NP', 'css': 'level6' },
	        { 'name': 'PEGGY MALONE BROWN', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level6' },
	      ]
	    }
	  });

	//***** COURTNEY SCHOENWALD
	  $.mockjax({
	    url: '/orgchart/asso-courtneyschoenwald4',
	    responseTime: 1000,
	    contentType: 'application/json',
	    responseText: {
	      'className': 'asso-courtneyschoenwald4 drill-up',
	      'name': 'COURTNEY SCHOENWALD',
	      'dept': 'PROJ PLN DIV 3 - VALLEY',
	      'css': 'level4',
	      'children': [
	        { 'name': 'ALYCIA WITZLING', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level5' },
	        { 'name': 'ANDRE CALDERON', 'dept': 'PROJ PLN DIV 3 - VALLEY', 'css': 'level5' },
	      ]
	    }
	  });
	  
//***** CHRISTINE SAPONARA
  $.mockjax({
    url: '/orgchart/asso-christinesaponara4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-christinesaponara4 drill-up',
      'name': 'CHRISTINE SAPONARA',
      'dept': 'COMMUNITY PLANNING DIVISION',
      'css': 'level4',
      'children': [
        { 'name': 'THOMAS GLICK', 'dept': 'COMMUNITY PLANNING DIVISION', 'className': 'drill-down asso-christinesaponara5', 'css': 'level5' },
      ]
    }
  });
	  
//***** THOMAS GLICK
  $.mockjax({
    url: '/orgchart/asso-christinesaponara5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-christinesaponara5 drill-up',
      'name': 'THOMAS GLICK',
      'dept': 'COMMUNITY PLANNING DIVISION',
      'css': 'level5',
      'children': [
        { 'name': 'CORREY KITCHENS', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6' },
        { 'name': 'NELSON RODRIGUEZ', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6' },
      ]
    }
  });

//**** CHARLES RAUSCH
  $.mockjax({
    url: '/orgchart/asso-charlesrausch3',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-charlesrausch3 drill-up',
      'name': 'CHARLES RAUSCH',
      'dept': 'MJ PROJ AND ENVIR ANALYSIS SECTION',
      'css': 'level3',
      'children': [
        { 'name': 'NICHOLAS HENDRICKS', 'dept': 'EXPEDITED PROCESSING', 'className': 'drill-down asso-nicholashendricks4', 'css': 'level4' },
        { 'name': 'LUCIRALIA IBARRA', 'dept': 'MAJOR PROJECTS', 'className': 'drill-down asso-luciraliaibarra4', 'css': 'level4' },
        { 'name': 'JON FOREMAN', 'dept': 'ZONING ADMINISTRATION DIVISION', 'className': 'drill-down asso-jonforeman4', 'css': 'level4' },
        { 'name': 'HEATHER BLEEMERS', 'dept': 'MJ PROJ AND ENVIR ANALYSIS SECTION', 'className': 'drill-down asso-heatherbleemers4', 'css': 'level4' },
        { 'name': 'JAE KIM', 'dept': 'PMU', 'className': 'drill-down asso-jaekim4', 'css': 'level4' },
      ]
    }
  });
  
  
//***** NICHOLAS HENDRICKS
  $.mockjax({
    url: '/orgchart/asso-nicholashendricks4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-nicholashendricks4 drill-up',
      'name': 'NICHOLAS HENDRICKS',
      'dept': 'EXPEDITED PROCESSING',
      'css': 'level4',
      'children': [
        { 'name': 'JORDANN TURNER', 'dept': 'EXPEDITED PROCESSING', 'css': 'level5' },
        { 'name': 'PHILLIP BAZAN', 'dept': 'EXPEDITED PROCESSING', 'className': 'drill-down asso-phillipbazan5', 'css': 'level5' },
        { 'name': 'OLIVER NETBURN', 'dept': 'EXPEDITED PROCESSING', 'className': 'drill-down asso-olivernetburn5', 'css': 'level5' },
        { 'name': 'JENNAFER MONTERROSA', 'dept': 'EXPEDITED PROCESSING', 'className': 'drill-down asso-jennafermonterrosa5', 'css': 'level5' },
        { 'name': 'SIAM PEWSAWANG', 'dept': 'EXPEDITED PROCESSING', 'className': 'drill-down asso-siampewsawang5', 'css': 'level5' },
        { 'name': 'COURTNEY SHUM', 'dept': 'EXPEDITED PROCESSING', 'className': 'drill-down asso-courtneyshum5', 'css': 'level5' },
      ]
    }
  });
  
//****** PHILLIP BAZAN
  $.mockjax({
    url: '/orgchart/asso-phillipbazan5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-phillipbazan5 drill-up',
      'name': 'PHILLIP BAZAN',
      'dept': 'EXPEDITED PROCESSING',
      'css': 'level5',
      'children': [
        { 'name': 'DEZIREE GUTIERREZ', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
        { 'name': 'BRENDA KAHINJU', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
      ]
    }
  });
  
//****** OLIVER NETBURN
  $.mockjax({
    url: '/orgchart/asso-olivernetburn5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-olivernetburn5 drill-up',
      'name': 'OLIVER NETBURN',
      'dept': 'EXPEDITED PROCESSING',
      'css': 'level5',
      'children': [
        { 'name': 'CHI LIM', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
        { 'name': 'MICHELLE S CARTER', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
      ]
    }
  });
  
//****** JENNAFER MONTERROSA
  $.mockjax({
    url: '/orgchart/asso-jennafermonterrosa5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-jennafermonterrosa5 drill-up',
      'name': 'JENNAFER MONTERROSA',
      'dept': 'EXPEDITED PROCESSING',
      'css': 'level5',
      'children': [
        { 'name': 'LILIAN RUBIO', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
        { 'name': 'NICHOLAS AYARS', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
      ]
    }
  });
  
//****** SIAM PEWSAWANG
  $.mockjax({
    url: '/orgchart/asso-siampewsawang5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-siampewsawang5 drill-up',
      'name': 'SIAM PEWSAWANG',
      'dept': 'EXPEDITED PROCESSING',
      'css': 'level5',
      'children': [
        { 'name': 'BRYAN OCHOA', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
      ]
    }
  });
  
//****** COURTNEY SHUM
  $.mockjax({
    url: '/orgchart/asso-courtneyshum5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-courtneyshum5 drill-up',
      'name': 'COURTNEY SHUM',
      'dept': 'EXPEDITED PROCESSING',
      'css': 'level5',
      'children': [
        { 'name': 'WILLIAM HUGHEN', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
        { 'name': 'CHUANZHE SONG', 'dept': 'EXPEDITED PROCESSING', 'css': 'level6' },
      ]
    }
  });

//***** LUCIRALIA IBARRA
  $.mockjax({
    url: '/orgchart/asso-luciraliaibarra4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-luciraliaibarra4 drill-up',
      'name': 'LUCIRALIA IBARRA',
      'dept': 'MAJOR PROJECTS',
      'css': 'level4',
      'children': [
        { 'name': 'ADAM VILLANI', 'dept': 'MAJOR PROJECTS', 'className': 'drill-down asso-adamvillani5', 'css': 'level5' },
        { 'name': 'ALEJANDRO HUERTA', 'dept': 'ENVIRONMENTAL ANALYSIS', 'className': 'drill-down asso-alejandrohuerta5', 'css': 'level5' },
        { 'name': 'ELVA NUNO O DONNELL', 'dept': 'MAJOR PROJECTS', 'className': 'drill-down asso-elvanunoodonnell5', 'css': 'level5' },
        { 'name': 'DARLENE NAVARRETE', 'dept': 'MAJOR PROJECTS', 'className': 'drill-down asso-darlenenavarrete5', 'css': 'level5' },
      ]
    }
  });
  
//***** ADAM VILLANI
  $.mockjax({
    url: '/orgchart/asso-adamvillani5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-adamvillani5 drill-up',
      'name': 'ADAM VILLANI',
      'dept': 'MAJOR PROJECTS',
      'css': 'level5',
      'children': [
        { 'name': 'SRIMAL HEWAWITHARANA', 'dept': 'ENVIRONMENTAL ANALYSIS', 'css': 'level6' },
        { 'name': 'MANUEL ELIZARRARAS', 'dept': 'COMMUNITY PLANNING DIVISION', 'css': 'level6' },
      ]
    }
  });
  
//***** ALEJANDRO HUERTA
  $.mockjax({
    url: '/orgchart/asso-alejandrohuerta5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-alejandrohuerta5 drill-up',
      'name': 'ALEJANDRO HUERTA',
      'dept': 'ENVIRONMENTAL ANALYSIS',
      'css': 'level5',
      'children': [
        { 'name': 'ERIN STRELICH', 'dept': 'ENVIRONMENTAL ANALYSIS', 'css': 'level6' },
        { 'name': 'JASON MCCREA', 'dept': 'MAJOR PROJECTS', 'css': 'level6' },
      ]
    }
  });
  
//***** ELVA NUNO O DONNELL
  $.mockjax({
    url: '/orgchart/asso-elvanunoodonnell5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-elvanunoodonnell5 drill-up',
      'name': 'ELVA NUNO O DONNELL',
      'dept': 'MAJOR PROJECTS',
      'css': 'level5',
      'children': [
        { 'name': 'CHRISTINA NGUYEN', 'dept': 'MAJOR PROJECTS', 'css': 'level6' },
      ]
    }
  });
  
//***** DARLENE NAVARRETE
  $.mockjax({
    url: '/orgchart/asso-darlenenavarrete5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-darlenenavarrete5 drill-up',
      'name': 'DARLENE NAVARRETE',
      'dept': 'MAJOR PROJECTS',
      'css': 'level5',
      'children': [
        { 'name': 'SUSAN JIMENEZ', 'dept': 'ENVIRONMENTAL ANALYSIS', 'css': 'level6' },
      ]
    }
  });

//***** JON FOREMAN
  $.mockjax({
    url: '/orgchart/asso-jonforeman4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-jonforeman4 drill-up',
      'name': 'JON FOREMAN',
      'dept': 'ZONING ADMINISTRATION DIVISION',
      'css': 'level4',
      'children': [
        { 'name': 'STACY MUNOZ', 'dept': 'ZONING ADMINISTRATION DIVISION', 'className': 'drill-down asso-stacymunoz5', 'css': 'level5' },
      ]
    }
  });
  
//***** STACY MUNOZ
  $.mockjax({
    url: '/orgchart/asso-stacymunoz5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-stacymunoz5 drill-up',
      'name': 'STACY MUNOZ',
      'dept': 'ZONING ADMINISTRATION DIVISION',
      'css': 'level5',
      'children': [
        { 'name': 'SIERRA RODRIGUEZ', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level6' },
        { 'name': 'DIANE HAMILTON', 'dept': 'AUTOMATED RECORDS', 'css': 'level6' },
        { 'name': 'GABRIEL MENDEZ', 'dept': 'ZONING ADMINISTRATION DIVISION', 'css': 'level6' },
      ]
    }
  });

//***** HEATHER BLEEMERS
  $.mockjax({
    url: '/orgchart/asso-heatherbleemers4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-heatherbleemers4 drill-up',
      'name': 'HEATHER BLEEMERS',
      'dept': 'MJ PROJ AND ENVIR ANALYSIS SECTION',
      'css': 'level4',
      'children': [
        { 'name': 'MILENA ZASADZIEN', 'dept': 'MAJOR PROJECTS', 'className': 'drill-down asso-milenazasadzien5', 'css': 'level5' },
        { 'name': 'SERGIO IBARRA', 'dept': 'MAJOR PROJECTS', 'className': 'drill-down asso-sergioibarra5', 'css': 'level5' },
        { 'name': 'WILLIAM LAMBORN', 'dept': 'ENVIRONMENTAL ANALYSIS', 'className': 'drill-down asso-williamlamborn5', 'css': 'level5' },
      ]
    }
  });

//***** MILENA ZASADZIEN
  $.mockjax({
    url: '/orgchart/asso-milenazasadzien5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-milenazasadzien5 drill-up',
      'name': 'STACY MUNOZ',
      'dept': 'MAJOR PROJECTS',
      'css': 'level5',
      'children': [
        { 'name': 'MARK FRIEDLANDER', 'dept': 'MAJOR PROJECTS', 'css': 'level6' },
        { 'name': 'JOHNNY LE', 'dept': 'MAJOR PROJECTS', 'css': 'level6' },
      ]
    }
  });
  
//***** SERGIO IBARRA
  $.mockjax({
    url: '/orgchart/asso-sergioibarra5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-sergioibarra5 drill-up',
      'name': 'SERGIO IBARRA',
      'dept': 'MAJOR PROJECTS',
      'css': 'level5',
      'children': [
        { 'name': 'KATHLEEN KING', 'dept': 'MAJOR PROJECTS', 'css': 'level6' },
      ]
    }
  });
  
//***** WILLIAM LAMBORN
  $.mockjax({
    url: '/orgchart/asso-williamlamborn5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-williamlamborn5 drill-up',
      'name': 'WILLIAM LAMBORN',
      'dept': 'MAJOR PROJECTS',
      'css': 'level5',
      'children': [
        { 'name': 'JONATHAN CHANG', 'dept': 'ENVIRONMENTAL ANALYSIS', 'css': 'level6' },
      ]
    }
  });

//***** JAE KIM
  $.mockjax({
    url: '/orgchart/asso-jaekim4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-jaekim4 drill-up',
      'name': 'JAE KIM',
      'dept': 'PMU',
      'css': 'level4',
      'children': [
        { 'name': 'KHAIRUL CHOUDHURY', 'dept': 'NUISANCE ABATEMENT', 'css': 'level5' },
        { 'name': 'LYNDA SMITH', 'dept': 'NUISANCE ABATEMENT', 'className': 'drill-down asso-lyndasmith5', 'css': 'level5' },
      ]
    }
  });
  
//***** LYNDA SMITH
  $.mockjax({
    url: '/orgchart/asso-lyndasmith5',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-lyndasmith5 drill-up',
      'name': 'LYNDA SMITH',
      'dept': 'NUISANCE ABATEMENT',
      'css': 'level4',
      'children': [
        { 'name': 'MATTHEW LUM', 'dept': 'NUISANCE ABATEMENT', 'css': 'level5' },
        { 'name': 'HELENE ROTOLO', 'dept': 'NUISANCE ABATEMENT', 'css': 'level5' },
        { 'name': 'BLAYNE SUTTON -WILLS', 'dept': 'NUISANCE ABATEMENT', 'css': 'level5' },
      ]
    }
  });

//**** FAISAL ROBLE
  $.mockjax({
    url: '/orgchart/asso-faisalroble3',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-faisalroble3 drill-up',
      'name': 'FAISAL ROBLE',
      'dept': 'PROJ PLN DIV 2 - WEST/SOUTH',
      'css': 'level3',
      'children': [
        { 'name': 'MICHELLE SINGH', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'className': 'drill-down asso-michellesingh4', 'css': 'level4' },
        { 'name': 'DEBBIE LAWRENCE', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'className': 'drill-down asso-debbielawrence4', 'css': 'level4' },
        { 'name': 'TYNA HALL BRADLEY', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level4' },
      ]
    }
  });
  
//***** MICHELLE SINGH
  $.mockjax({
    url: '/orgchart/asso-michellesingh4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-michellesingh4 drill-up',
      'name': 'MICHELLE SINGH',
      'dept': 'PROJ PLN DIV 2 - WEST/SOUTH',
      'css': 'level4',
      'children': [
        { 'name': 'JASON CHAN', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'className': 'drill-down asso-jasonchan4', 'css': 'level5' },
        { 'name': 'ALAN COMO', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'className': 'drill-down asso-alancomo4', 'css': 'level5' },
      ]
    }
  });
  
//***** JASON CHAN
  $.mockjax({
    url: '/orgchart/asso-jasonchan4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-jasonchan4 drill-up',
      'name': 'JASON CHAN',
      'dept': 'PROJ PLN DIV 2 - WEST/SOUTH',
      'css': 'level5',
      'children': [
        { 'name': 'CONNIE CHAUV', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
        { 'name': 'ZURIEL ESPINOSA-SALAS', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
        { 'name': 'JULIA DUNCAN', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
      ]
    }
  });
  
//***** ALAN COMO
  $.mockjax({
    url: '/orgchart/asso-alancomo4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-alancomo4 drill-up',
      'name': 'ALAN COMO',
      'dept': 'PROJ PLN DIV 2 - WEST/SOUTH',
      'css': 'level5',
      'children': [
        { 'name': 'STEVE GARCIA', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
        { 'name': 'STACY FARFAN', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
        { 'name': 'KYLE WINSTON', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
      ]
    }
  });


  
//****** JULIET OH
  $.mockjax({
    url: '/orgchart/asso-julietoh4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-julietoh4 drill-up',
      'name': 'JULIET OH',
      'dept': 'PROJ PLN DIV 2 - WEST/SOUTH',
      'css': 'level5',
      'children': [
        { 'name': 'JEFFREY KHAU', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
        { 'name': 'IRA BROWN', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
        { 'name': 'BINDU KANNAN', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
        { 'name': 'DAVID SOLAIMAN TEHRANI', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level6' },
      ]
    }
  });


//***** DEBBIE LAWRENCE
  $.mockjax({
    url: '/orgchart/asso-debbielawrence4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-debbielawrence4 drill-up',
      'name': 'DEBBIE LAWRENCE',
      'dept': 'PROJ PLN DIV 2 - WEST/SOUTH',
      'css': 'level4',
      'children': [
        { 'name': 'JULIET OH', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'className': 'drill-down asso-julietoh4', 'css': 'level5' },
        { 'name': 'KENTON TRINH', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
        { 'name': 'ALISSA GORDON', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
        { 'name': 'ALEXANDER TRUONG', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
        { 'name': 'MARISA GARCIA', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
      ]
    }
  });

//***** JULIET OH
  $.mockjax({
    url: '/orgchart/asso-julietoh4',
    responseTime: 1000,
    contentType: 'application/json',
    responseText: {
      'className': 'asso-julietoh4 drill-up',
      'name': 'JULIET OH',
      'dept': 'PROJ PLN DIV 2 - WEST/SOUTH',
      'css': 'level5',
      'children': [
        { 'name': 'JEFFREY KHAU', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
        { 'name': 'IRA BROWN', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
        { 'name': 'BINDU KANNAN', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
        { 'name': 'DAVID SOLAIMAN TEHRANI', 'dept': 'PROJ PLN DIV 2 - WEST/SOUTH', 'css': 'level5' },
      ]
    }
  });
   
  function initOrgchart(rootClass) {
    $('#chart-container').orgchart({
      'chartClass': rootClass,
      'data' : '/orgchart/' + rootClass,
      'nodeContent': 'dept',
      'createNode': function($node, data) {
        if ($node.is('.drill-down')) {
          var assoClass = data.className.match(/asso-\w+/)[0];
          var drillDownIcon = $('<i>', {
            'class': 'fa fa-arrow-circle-down drill-icon',
            'click': function() {
              $('#chart-container').find('.orgchart:visible').addClass('hidden');
              if (!$('#chart-container').find('.orgchart.' + assoClass).length) {
                initOrgchart(assoClass);
              } else {
                $('#chart-container').find('.orgchart.' + assoClass).removeClass('hidden');
              }
            }
          });
          $node.append(drillDownIcon);
        } else if ($node.is('.drill-up')) {
          var assoClass = data.className.match(/asso-\w+/)[0];
          var drillUpIcon = $('<i>', {
            'class': 'fa fa-arrow-circle-up drill-icon',
            'click': function() {
              $('#chart-container').find('.orgchart:visible').addClass('hidden').end()
                .find('.drill-down.' + assoClass).closest('.orgchart').removeClass('hidden');
            }
          });
          $node.append(drillUpIcon);
        }
      }
    });
  }

  $(function() {
    initOrgchart('root-node');
  });