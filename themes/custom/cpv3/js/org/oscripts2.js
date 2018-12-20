'use strict';

(function($){
	$(function() {
    	var datascource = {
    		 	"name": "VINCENT BERTONI",
    		 	"title": "DIR OF PLANNING",
    		 	"css": "level1",
    		 	"children": [
    			 	{
    			 		"name": "KEVIN KELLER",
    			 		"title": "DEPUTY DIR OF PLANNING",
    			 		"css": "level2",
    					"collapsed": "true",
    			 		"children":[
    		 				{
    			 				"name": "LY LAM",
    			 				"title": "SR MGMT ANALYST II",
    			 				"css": "level3",
    							"collapsed": "true",
    			 				"children": [
    			 					{
    			 						"name": "TIFFANY BUTLER",
    			 						"title": "SR MGMT ANALYST II",
    			 						"css": "level4",
    									"collapsed": "true",
    			 						"children": [
    		 								{"name": "UWE KERNER", "title": "ADMINISTRATIVE SUPPORT","css": "level5"},
    		 								{
    		 									"name": "BEATRICE PACHECO",
    		 									"title": "OPERATIONS SECTION",
    		 									"css": "level5",

    		 									"children": [
    		 										{"name": "SANDRA MCFARLANE", "title": "AUTOMATED RECORDS", "size": 3938, "css": "level6"},
    												{"name": "JOAN HOLAZA", "title": "AUTOMATED RECORDS", "size": 3812, "css": "level6"},
    												{"name": "CORII RICHARDSON", "title": "AUTOMATED RECORDS", "size": 6714, "css": "level6"},
    												{"name": "LOURDES SANCHEZ", "title": "AUTOMATED RECORDS", "size": 743, "css": "level6"},
    												{"name": "CHRISTINE HERNANDEZ", "title": "AUTOMATED RECORDS", "size": 3534, "css": "level6"},
    												{
    													"name": "WANDA WALKER",
    													"title": "OPERATIONS SECTION",
    													"css": "level7",
    													"collapsed": "true",
    													"children": [
    														{"name": "TONY STAPLES", "title": "DOCUMENT IMAGING", "size": 3534, "css": "level8"},
    														{"name": "NELSON LARIOS","title": "DOCUMENT IMAGING", "size": 5731, "css": "level8"},
    														{"name": "BRYAN SALGADO", "title": "DOCUMENT IMAGING", "size": 7840, "css": "level8"},
    														{"name": "ALEX JOHNSON", "title": "AUTOMATED RECORDS", "size": 5914, "css": "level8"},
    														{"name": "VINSON WATERS", "title": "ZONING ADMINISTRATION DIVISION", "size": 3416, "css": "level8"}
    													]
    												},
    												{"name": "MARIA ORTIZ", "title": "ADMINISTRATIVE SUPPORT", "size": 7074}
    		 									]
    										}
    			 						]
    		 						},
    		 						{"name": "ANNA ORELLANA", "title": "ADMINISTRATIVE SUPPORT", "size": 17010, "css": "level3"},
    								{"name": "ADRIANA BELTRAN-HERRERA", "title": "ADMINISTRATIVE SUPPORT", "size": 5842, "css": "level3"},
    								{
    									"name": "MICHELLE CHAN",
    									"title": "ACCOUNTING AND PURCHASING",
    									"css": "level4",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "RODEL DELA CRUZ",
    											"title": "ACCOUNTING AND PURCHASING",
    											"css": "level5",
    											"collapsed": "true",
    											"children": [
    												{"name": "ROSE OLIVA DUROY", "title": "ACCOUNTING AND PURCHASING", "size": 1983, "css": "level6"},
    												{"name": "TIFFANNI NGUYEN", "title": "ACCOUNTING AND PURCHASING", "size": 2047, "css": "level6"}
    											]
    										},
    										{
    											"name": "ZENAIDA AGUSTIN",
    											"title": "ACCOUNTING AND PURCHASING",
    											"css": "level5",
    											"collapsed": "true",
    											"children": [
    												{"name": "GINA GINETE", "title": "PAYROLL", "size": 1375, "css": "level6"},
    												{"name": "JAE LEE", "title": "ACCOUNTING AND PURCHASING", "size": 8746, "css": "level6"}
    											]
    										}
    									]
    								},
    								{"name": "YI WEN SUN", "title": "ADMINISTRATIVE SUPPORT", "size": 2202, "css": "level4"},
    								{"name": "YICHUN YEH", "title": "ACCOUNTING AND PURCHASING", "size": 1382, "css": "level4"}
    			 				]
    		 				},
    						{
    							"name": "CRAIG WEBER",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "JONATHAN HERSHEY",
    									"title": "NEIGHBORHOOD PLANNING",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "KINIKIA GARDNER",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "SIMILOLUWA ALIU", "title": "COMMUNITY PLANNING DIVISION", "size": 1629}
    											]
    										},
    										{
    											"name": "MELISSA ALOFAITULI", "size": 1675,
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "EMILY GABLE", "title": "COMMUNITY PLANNING DIVISION", "size": 2042},
    												{"name": "ANTONIO ISAIA", "title": "NEIGHBORHOOD PLANNING", "size": 1041}
    											]
    										},
    										{
    											"name": "LAURA MACPHERSON", "size": 5176,
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "HELEN CAMPBELL", "title": "COMMUNITY PLANNING DIVISION", "size": 449},
    												{"name": "EVA CHANG", "title": "COMMUNITY PLANNING DIVISION", "size": 5593},
    												{"name": "ALEXANDER YEE", "title": "POLICY PLANNING CLERICAL SUPPORT", "size": 5534}
    											]
    										}
    									]
    								},
    								{
    									"name": "HAYDEE URITA LOPEZ",
    									"title": "COMMUNITY PLANNING DIVISION",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "GABRIELA JUAREZ",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "ELIZABETH GALLARDO", "title": "COMMUNITY PLANNING DIVISION"}
    											]
    										},
    										{
    											"name": "PRIYA MEHENDALE",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "SOPHIA KIM", "title": "COMMUNITY PLANNING DIVISION"}
    											]
    										},
    										{
    											"name": "LINDA LOU",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "RENATA OOMS", "title": "NEIGHBORHOOD PLANNING"}
    											]
    										},
    										{"name": "ALEX HEATH", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "KIRAN RISHI", "title": "COMMUNITY PLANNING DIVISION"}
    									]
    								},
    								{"name": "CHERRY YAP", "title": "COMMUNITY PLANNING DIVISION"},
    								{
    									"name": "REUBEN CALDWELL",
    									"title": "COMMUNITY PLANNING DIVISION",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "MARIE COBIAN",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "ESTHER AMAYA", "title": "COMMUNITY PLANNING DIVISION"},
    												{"name": "JESSICA ALVARADO", "title": "COMMUNITY PLANNING DIVISION"}
    											]
    										},
    										{"name": "STEVEN KATIGBAK", "title": "COMMUNITY PLANNING DIVISION"},
    										{
    											"name": "TERESA BATSON",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "SALVADOR GUTIERREZ", "title": "COMMUNITY PLANNING DIVISION"},
    												{"name": "SUSAN WONG", "title": "NEIGHBORHOOD PLANNING"}
    											]
    										}
    									]
    								},
    								{
    									"name": "PATRICIA DIEFENDERFER",
    									"title": "NEIGHBORHOOD PLANNING",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "BRYAN ECK",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "TAL HARARI", "title": "COMMUNITY PLANNING DIVISION"},
    												{"name": "CLARE KELLEY", "title": "COMMUNITY PLANNING DIVISION"},
    												{"name": "BRITTANY ARCENEAUX", "title": "COMMUNITY PLANNING DIVISION"},
    												{"name": "VEENA SNEHANSH", "title": "COMMUNITY PLANNING DIVISION"}
    											]
    										},
    										{
    											"name": "RENATA DERMENGI DRAGLAND",
    											"title": "COMMUNITY PLANNING DIVISION",
    											"collapsed": "true",
    											"children": [
    												{"name": "LAURA KRAWCZYK", "title": "NEIGHBORHOOD PLANNING"},
    												{"name": "ANDREW JORGENSEN", "title": "COMMUNITY PLANNING DIVISION"},
    												{"name": "DIEGO JANACUA CORTEZ", "title": "NEIGHBORHOOD PLANNING"},
    												{"name": "MATTHEW GAMBOA", "title": "COMMUNITY PLANNING DIVISION"}
    											]
    										},
    										{"name": "GISELLE CORELLA", "title": "NEIGHBORHOOD PLANNING"}
    									]
    								}
    							]
    						},
    						{
    							"name": "ARTHI VARMA",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "MATTHEW GLESNE",
    									"title": "CITYWIDE PLANNING",
    									"collapsed": "true",
    									"children": [
    										{"name": "CALLY HARDY", "title": "CITYWIDE PLANNING"},
    										{"name": "DAVID GREENWOOD", "title": "CITYWIDE PLANNING"},
    										{"name": "LOVELL WILLIAMS", "title": "CITYWIDE PLANNING"}
    									]
    								},
    								{
    									"name": "MARIA PALLINI TIPTON",
    									"title": "COMMUNITY PLANNING DIVISION",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "JACK TSAO",
    											"title": "DEMOGRAPHICS",
    											"collapsed": "true",
    											"children": [
    												{"name": "ANGELA CHANG", "title": "DEMOGRAPHICS"},
    												{"name": "LIN BAI", "title": "DEMOGRAPHICS"}
    											]
    										},
    										{"name": "ARIANE BRISKI", "title": "CITYWIDE PLANNING"},
    										{"name": "LENA MIK", "title": "CITYWIDE PLANNING"},
    										{"name": "CHRISTOPHE PINA", "title": "CITYWIDE PLANNING"},
    										{"name": "JASON DOUGLAS", "title": "CITYWIDE PLANNING"},
    										{"name": "NINA PHINOUWONG", "title": "CITYWIDE PLANNING"},
    										{"name": "LIKYELEH ABERA GEBRE", "title": "CITYWIDE PLANNING"}
    									]
    								},
    								{
    									"name": "DIANA KITCHING",
    									"title": "CITYWIDE PLANNING",
    									"collapsed": "true",
    									"children": [
    										{"name": "MATTHEW GERTZ", "title": "CITYWIDE PLANNING"}
    									]
    								},
    								{
    									"name": "RUBINA GHAZARIAN",
    									"title": "CITYWIDE PLANNING",
    									"collapsed": "true",
    									"children": [
    										{"name": "BABAK DORJI", "title": "CITYWIDE PLANNING"},
    										{"name": "QIUANA WILLIAMS", "title": "CITYWIDE PLANNING"}
    									]
    								}
    							]
    						},
    						{
    							"name": "KENNETH BERNSTEIN",
    							"title": "POLICY PLANNING AND HISTORIC RESOURCES",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "LAMBERT GIESSINGER",
    									"title": "HISTORIC RESOURCES",
    									"collapsed": "true",
    									"children": [
    										{"name": "MELISSA JONES", "title": "HISTORIC RESOURCES"}
    									]
    								},
    								{
    									"name": "NAOMI GUTH",
    									"title": "HPOZ",
    									"collapsed": "true",
    									"children": [
    										{"name": "KIMBERLY HENRY", "title": "HPOZ"},
    										{"name": "BLAIR SMITH", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "BRADLEY FURUYA", "title": "HPOZ"},
    										{"name": "MAX LODER", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "LYDIA CHAPMAN", "title": "HPOZ"},
    										{"name": "CHRISTINA PARK", "title": "HPOZ"},
    										{"name": "MAKAN BARANGHOORI", "title": "HPOZ"},
    										{"name": "JONATHAN KAPLAN", "title": "HPOZ"},
    										{"name": "SARA GERSHENHORN", "title": "HPOZ"},
    										{"name": "AMANDA KAINER", "title": "HPOZ"},
    										{"name": "KATIE DEBIASE", "title": "HPOZ"},
    										{"name": "MICAELA TORRES-GIL", "title": "HPOZ"}
    									]
    								},
    								{
    									"name": "CLAIRE BOWIN",
    									"title": "CITYWIDE PLANNING",
    									"collapsed": "true",
    									"children": [
    										{"name": "EDGAR GARCIA",  "title": "HPOZ"},
    										{
    											"name": "LAKISHA HULL",
    											"title": "NEIGHBORHOOD PLANNING",
    											"collapsed": "true",
    											"children": [
    												{"name": "KAROLINA GORSKA", "title": "URBAN DESIGN STUDIO"},
    												{"name": "HOLLY HARPER", "title": "URBAN DESIGN STUDIO"}
    											]
    										}
    									]
    								},
    								{
    									"name": "JANET HANSEN",
    									"title": "HISTORIC RESOURCES",
    									"collapsed": "true",
    									"children": [
    										{"name": "SARA CRUZ", "title": "HISTORIC RESOURCES"}
    									]
    								},
    								{"name": "MIGUEL SOTELO", "title": "POLICY PLANNING CLERICAL SUPPORT"}
    							]
    						},
    						{
    							"name": "NICHOLAS MARICICH",
    							"title": "NEIGHBORHOOD PLANNING",
    							"collapsed": "true",
    							"children": [
    								{"name": "SHANNON RYAN", "title": "COMMUNITY PLANNING DIVISION"}
    							]
    						},
    						{"name": "LILY QUAN", "title": "EXECUTIVE ADMINISTRATIVE ASSISTANT"},
    						{
    							"name": "JAMES VAN GERPEN",
    							"title": "INFORMATION TECHNOLOGIES",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "SHAKEH BOGHOSKHANIAN",
    									"title": "GRAPHICS",
    									"collapsed": "true",
    									"children": [
    										{"name": "LOUISA RANICK", "title": "GRAPHICS"},
    										{"name": "ARLET SHIRVANIAN", "title": "COMMUNITY PLANNING DIVISION"}
    									]
    								},
    								{
    									"name": "BETTY DONG",
    									"title": "GIS SECTION",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "CHARLES LEE",
    											"title": "GIS SECTION",
    											"collapsed": "true",
    											"children": [
    												{
    													"name": "JESUS RAMOS",
    													"title": "GIS SECTION",
    													"collapsed": "true",
    													"children": [
    														{"name": "ARMANDO ALFARO", "title": "GIS SECTION"},
    														{"name": "KORY SIRKIN", "title": "GIS SECTION"},
    														{"name": "LIDIA VAIZ", "title": "GIS SECTION"}
    													]
    												},
    												{
    													"name": "TIMMY LUONG",
    													"title": "GIS SECTION",
    													"collapsed": "true",
    													"children": [
    														{"name": "LESI MAI", "title": "GIS SECTION"},
    														{"name": "LARA VARGAS", "title": "GIS SECTION"}
    													]
    												},
    												{
    													"name": "GARY HIMAN",
    													"title": "GIS SECTION",
    													"collapsed": "true",
    													"children": [
    														{"name": "AZIZ BAKKOURY", "title": "GIS SECTION"}
    													]
    												}
    											]
    										},
    										{
    											"name": "CUONG FAN",
    											"title": "GIS SECTION",
    											"collapsed": "true",
    											"children": [
    												{"name": "CARL NELSON", "title": "GIS SECTION"},
    												{"name": "DAVID ABBOTT", "title": "GIS SECTION"},
    												{"name": "MEGAN YANEZ", "title": "GIS SECTION"}
    											]
    										},
    										{
    											"name": "DAVID DIEUDONNE",
    											"title": "GIS SECTION",
    											"collapsed": "true",
    											"children": [
    												{"name": "RITA DIAZ", "title": "GIS SECTION"},
    												{"name": "JULIANNA AGUILAR", "title": "GIS SECTION"}
    											]
    										},
    										{
    											"name": "CRUZ ORTIZ",
    											"title": "GIS SECTION",
    											"collapsed": "true",
    											"children": [
    												{"name": "NICOLE SABUTIS", "title": "GIS SECTION"},
    												{"name": "HIROYUKI MATSUDA", "title": "GIS SECTION"},
    												{"name": "ABRAM LEAL", "title": "GIS SECTION"},
    												{"name": "OMAR ALHASHIMI", "title": "GIS SECTION"},
    												{"name": "AKOUA DOFFOU", "title": "GIS SECTION"}
    											]
    										},
    										{"name": "DWAYNE MERCADEL", "title": "GIS SECTION"}
    									]
    								},
    								{"name": "XANDRO DONADO", "title": "GRAPHICS"},
    								{
    									"name": "MARIAELVIA HERNANDEZ",
    									"title": "GRAPHICS",
    									"collapsed": "true",
    									"children": [
    										{"name": "JACOB LOPEZ", "title": "GRAPHICS"},
    										{"name": "ANDRES MANZANO", "title": "GRAPHICS"},
    										{"name": "COLLETTE DEL POSO", "title": "NEIGHBORHOOD PLANNING"}
    									]
    								},
    								{
    									"name": "DAVID TERUKINA",
    									"title": "EMERGING TECHNOLOGIES SECTION",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "MING DAI",
    											"title": "APPLICATION DEVELOPMENT SECTION",
    											"collapsed": "true",
    											"children": [
    												{"name": "NGOCDUNG BUI", "title": "APPLICATION DEVELOPMENT SECTION"},
    												{"name": "JAY STRAHAN", "title": "GIS SECTION"}
    											]
    										},
    										{
    											"name": "CAM VUONG",
    											"title": "EMERGING TECHNOLOGIES SECTION",
    											"collapsed": "true",
    											"children": [
    												{"name": "HEBER MARTINEZ", "title": "EMERGING TECHNOLOGIES SECTION", "size": 1983},
    												{"name": "MICHAEL CHANG", "title": "EMERGING TECHNOLOGIES SECTION", "size": 2047},
    												{"name": "DUKE TRAN", "title": "EMERGING TECHNOLOGIES SECTION", "size": 1375},
    												{"name": "KELVIN TSAN", "title": "EMERGING TECHNOLOGIES SECTION", "size": 8746},
    												{"name": "WILSON YIP", "title": "INFORMATION TECHNOLOGIES", "size": 2202}
    											]
    										},
    										{
    											"name": "ROWLEN SHUE",
    											"title": "EMERGING TECHNOLOGIES SECTION",
    											"collapsed": "true",
    											"children": [
    												{"name": "STEPHANIE LUCKETT",  "title": "EMERGING TECHNOLOGIES SECTION", "size": 3534}
    											]
    										},
    										{
    											"name": "CHARLES NORMAN",
    											"title": "APPLICATION DEVELOPMENT SECTION",
    											"collapsed": "true",
    											"children": [
    												{"name": "PAUL VERGER", "title": "APPLICATION DEVELOPMENT SECTION"}
    											]
    										},
    										{"name": "ESTHER TAM", "title": "APPLICATION DEVELOPMENT SECTION"}
    									]
    								},
    								{"name": "MARY QUON", "title": "INFORMATION TECHNOLOGIES"}
    							]
    						},
    						{
    							"name": "CARRIE FIRESTONE",
    							"title": "EXECUTIVE ADMINISTRATIVE ASSISTANT",
    							"collapsed": "true",
    							"children": [
    								{"name": "DENISE CHAVEZ", "title": "COMMISSION OFFICE"}
    							]
    						},
    						{"name": "MONICA NUNEZ", "title": "EXECUTIVE ADMINISTRATIVE ASSISTANT"},
    						{
    							"name": "YEGHIG KESHISHIAN",
    							"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    							"collapsed": "true",
    							"children": [
    								{"name": "DYLAN SITTIG", "title": "COMMUNITY PLANNING DIVISION"},
    								{"name": "FABIOLA INZUNZA ARMENTA", "title": "CASE MANAGEMENT"},
    								{"name": "LAUREN ALBA", "title": "COUNCIL LIAISON - EXTERNAL AFFAIRS"},
    								{"name": "VICKY TAVITIAN", "title": "COUNCIL LIAISON - EXTERNAL AFFAIRS"},
    								{"name": "RYAN TEMPLE", "title": "COUNCIL LIAISON - EXTERNAL AFFAIRS"},
    								{"name": "ANSIS HOHEISEL", "title": "COUNCIL LIAISON - EXTERNAL AFFAIRS"},
    								{"name": "DANIEL CORONADO", "title": "COUNCIL LIAISON - EXTERNAL AFFAIRS"},
    								{"name": "RAYNA PLUMMER", "title": "COUNCIL LIAISON - EXTERNAL AFFAIRS"}
    							]
    						},
    						{
    							"name": "THOMAS ROTHMANN",
    							"title": "RECODE LA",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "PHYLLIS NATHANSON",
    									"title": "RECODE LA",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "ERICK LOPEZ",
    											"title": "RECODE LA",
    											"collapsed": "true",
    											"children": [
    												{"name": "BOYOUNG KIM", "title": "CODE STUDIES"},
    												{"name": "AZEEN KHANMALEK", "title": "CODE STUDIES"},
    												{"name": "PATRICK WHALEN", "title": "CODE STUDIES"}
    											]
    										},
    										{
    											"name": "DEBORAH KAHEN",
    											"title": "CODE STUDIES",
    											"collapsed": "true",
    											"children": [
    												{"name": "ESTHER AHN", "title": "RECODE LA"},
    												{"name": "JAIME ESPINOZA", "title": "RECODE LA"},
    												{"name": "NIALL HUFFMAN", "title": "CODE STUDIES"}
    											]
    										},
    										{
    											"name": "ERIN COLEMAN",
    											"title": "CODE STUDIES",
    											"collapsed": "true",
    											"children": [
    												{"name": "MARY RICHARDSON", "title": "CODE STUDIES"},
    												{"name": "YI LU", "title": "CODE STUDIES"}
    											]
    										}
    									]
    								}
    							]
    						},
    						{
    							"name": "REBECCA VALDEZ",
    							"title": "PMU",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "ROXANNE WILES",
    									"title": "PMU",
    									"collapsed": "true",
    									"children": [
    										{"name": "JAMES WILLIAMS", "title": "COMMISSION OFFICE"},
    										{"name": "CECILIA LAMAS", "title": "COMMISSION OFFICE"},
    										{"name": "ETTA ARMSTRONG", "title": "COMMISSION OFFICE"},
    										{"name": "RAFAEL VEGA", "title": "COMMISSION OFFICE"},
    										{"name": "JASON WONG", "title": "COMMISSION OFFICE"},
    										{"name": "MARCOS GODOY", "title": "COMMISSION OFFICE"}
    									]
    								},
    								{"name": "NINA IDEMUDIA", "title": "PMU"},
    								{
    									"name": "ASHLEY ATKINSON",
    									"title": "PMU",
    									"collapsed": "true",
    									"children": [
    										{"name": "JONATHAN CHIU", "title": "PMU"}
    									]
    								},
    								{"name": "ALLISON WILHITE", "title": "PMU"}
    							]
    						},
    						{"name": "CHRISTINA KARATZAS", "title": "ADMINISTRATIVE SUPPORT"},
    						{"name": "CHRISTOPHE HAWTHORNE", "title": "URBAN DESIGN STUDIO"}
    		 			]

    			 	},
    			 	{
    					"name": "LISA WEBBER",
    					"title": "PROJECT PLANNING BUREAU",
    					"css": "level2",
    					"collapsed": "true",
    					"children": [
    						{"name": "MAYA ZAITZEVSKY", "title": "ZONING ADMINISTRATION DIVISION", "css": "level3"},
    						{"name": "THEODORE IRVING", "title": "ZONING ADMINISTRATION DIVISION", "css": "level3"},
    						{
    							"name": "SHANA BONSTIN",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"css": "level4",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "JANE CHOI",
    									"title": "PROJ PLN DIV 1 - CENTRAL",
    									"css": "level5",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "MAY SIRINOPWONGSAGON",
    											"title": "PROJ PLN DIV 1 - CENTRAL",
    											"css": "level6",
    											"collapsed": "true",
    											"children": [
    												{"name": "MICHAEL SIN", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "ISAIAH ROSS", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "CHI DANG", "title": "PROJ PLN DIV 1 - CENTRAL"}
    											]
    										},
    										{
    											"name": "NICOLE SANCHEZ",
    											"title": "PROJ PLN DIV 1 - CENTRAL",
    											"collapsed": "true",
    											"children": [
    												{"name": "JOHN DACEY", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "SANTOS SANCHEZ", "title": "PROJ PLN DIV 1 - CENTRAL"}
    											]
    										},
    										{
    											"name": "KEVIN GOLDEN",
    											"title": "PROJ PLN DIV 1 - CENTRAL",
    											"collapsed": "true",
    											"children": [
    												{"name": "HAKEEM PARKE DAVIS", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "HANI BAKER", "title": "PROJ PLN DIV 1 - CENTRAL"}
    											]
    										}
    									]
    								},
    								{"name": "DON JEFFERSON",  "title": "PROJ PLN DIV 1 - CENTRAL"},
    								{"name": "MARIA REYES", "title": "PROJ PLN DIV 1 - CENTRAL"},
    								{
    									"name": "CHRISTINA LEE",
    									"title": "PROJ PLN DIV 1 - CENTRAL",
    									"collapsed": "true",
    									"children": [
    										{"name": "MONIQUE ACOSTA", "title": "PROJ PLN DIV 1 - CENTRAL"},
    										{
    											"name": "MINDY NGUYEN",
    											"title": "PROJ PLN DIV 1 - CENTRAL",
    											"collapsed": "true",
    											"children": [
    												{"name": "AMANDA BRIONES", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "NURI CHO", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "JASON HERNANDEZ", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "RICHARD REASER", "title": "PROJ PLN DIV 1 - CENTRAL"}
    											]
    										},
    										{
    											"name": "IRIS WAN",
    											"title": "PROJ PLN DIV 1 - CENTRAL",
    											"collapsed": "true",
    											"children": [
    												{"name": "RONY GIRON", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "JOE LUCKEY", "title": "PROJ PLN DIV 1 - CENTRAL"},
    												{"name": "RUBEN VASQUEZ", "title": "PROJ PLN DIV 1 - CENTRAL"}
    											]
    										}
    									]
    								}
    							]
    						},
    						{
    							"name": "ESTINEH MAILIAN",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "ROBERT DUENAS",
    									"title": "DEVELOPMENT SERVICES CENTER",
    									"children": [
    										{"name": "MARCUS WOERSCHING", "title": "METRO PUBLIC COUNTER"},
    										{"name": "GRISELDA GONZALEZ", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{
    											"name": "TINA VACHARKULKSEMSUK",
    											"title": "METRO PUBLIC COUNTER",
    											"collapsed": "true",
    											"children": [
    												{"name": "SHEILA TONI", "title": "DEVELOPMENT SERVICES CENTER"}
    											]
    										},
    										{
    											"name": "VANESSA SOTO",
    											"title": "CONDITION COMPLIANCE UNIT",
    											"collapsed": "true",
    											"children": [
    												{"name": "DANAI ZAIRE", "title": "CONDITION COMPLIANCE UNIT"},
    												{"name": "JAMES HOWE", "title": "CONDITION COMPLIANCE UNIT"}
    											]
    										},
    										{"name": "PHYLLIS PARKER", "title": "DEVELOPMENT SERVICES CENTER"},
    										{
    											"name": "PIO QUITORIANO",
    											"title": "DEVELOPMENT SERVICES CENTER",
    											"collapsed": "true",
    											"children": [
    												{"name": "MATTHEW QUAN", "title": "DEVELOPMENT SERVICES CENTER"},
    												{"name": "GRACIELA ACOSTA", "title": "DEVELOPMENT SERVICES CENTER"},
    												{"name": "CLAUDE GOODING", "title": "DEVELOPMENT SERVICES CENTER"},
    												{"name": "ANACANY HURTADO", "title": "DEVELOPMENT SERVICES CENTER"}
    											]
    										},
    										{
    											"name": "ULISES GONZALEZ",
    											"title": "DEVELOPMENT SERVICES CENTER",
    											"collapsed": "true",
    											"children": [
    												{"name": "MAIDEL LUEVANO", "title": "DEVELOPMENT SERVICES CENTER"},
    												{"name": "NORALI MARTINEZ MAZA", "title": "METRO PUBLIC COUNTER"}
    											]
    										},
    										{
    											"name": "ERIC CLAROS",
    											"title": "METRO PUBLIC COUNTER",
    											"collapsed": "true",
    											"children": [
    												{"name": "AIDA KARAPETIAN", "title": "METRO PUBLIC COUNTER"}
    											]
    										},
    										{
    											"name": "MELVINA ADLERSBERG",
    											"title": "CONDITION COMPLIANCE UNIT",
    											"collapsed": "true",
    											"children": [
    												{"name": "RAYMOND PARKER", "title": "CONDITION COMPLIANCE UNIT"}
    											]
    										}
    									]
    								},
    								{
    									"name": "MARITZA PRZEKOP",
    									"title": "DEVELOPMENT SERVICES CENTER",
    									"collapsed": "true",
    									"children": [
    										{
    											"name": "ANNA VIDAL",
    											"title": "VALLEY PUBLIC COUNTER",
    											"collapsed": "true",
    											"children": [
    												{"name": "STEVEN WECHSLER", "title": "VALLEY PUBLIC COUNTER"},
    												{"name": "DAISY BENICIA", "title": "VALLEY PUBLIC COUNTER"},
    												{"name": "RINA LARA", "title": "VALLEY PUBLIC COUNTER"},
    												{"name": "PABLO ESTRADA", "title": "VALLEY PUBLIC COUNTER"},
    												{"name": "THOMAS HENRY", "title": "VALLEY PUBLIC COUNTER"}
    											]
    										},
    										{"name": "TREVOR MARTIN", "title": "WEST PUBLIC COUNTER"},
    										{"name": "CRISTINA ORELLANA", "title": "VALLEY PUBLIC COUNTER"},
    										{
    											"name": "HERMINIGIL AGUSTIN",
    											"title": "VALLEY PUBLIC COUNTER",
    											"collapsed": "true",
    											"children": [
    												{"name": "DENNIS CHEW", "title": "VALLEY PUBLIC COUNTER"},
    												{"name": "RICARDO TORRES", "title": "VALLEY PUBLIC COUNTER"}
    											]
    										},
    										{"name": "SARAH GOLDMAN", "title": "WEST PUBLIC COUNTER"},
    										{"name": "NOAH MCCOY", "title": "WEST PUBLIC COUNTER"},
    										{"name": "DENISE BELL", "title": "WEST PUBLIC COUNTER"}
    							]
    						},
    						{
    							"name": "SARAH PEARSON",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true",
    							"children": [
    								{"name": "SUSAN ZERMENO", "title": "CASE MANAGEMENT"},
    								{
    									"name": "KIT AWAKUNI",
    									"title": "CASE MANAGEMENT",
    									"collapsed": "true",
    									"children": [
    										{"name": "JUSTIN BILOW", "title": "CASE MANAGEMENT"}
    									]
    								}
    							]
    						},
    						{
    							"name": "RALPH AVILA",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "NORA DRESSER",
    									"title": "METRO PUBLIC COUNTER",
    									"collapsed": "true",
    									"children": [
    										{"name": "EDBER MACEDO", "title": "METRO PUBLIC COUNTER"}
    									]
    								},
    								{
    									"name": "GLORIA DEAN",
    									"title": "METRO PUBLIC COUNTER",
    									"collapsed": "true",
    									"children": [
    										{"name": "JASMINE ALIASGHAR", "title": "METRO PUBLIC COUNTER"},
    										{"name": "CAROLINA MENJIVAR", "title": "METRO PUBLIC COUNTER"}
    									]
    								},
    								{
    									"name": "STEVE KIM",
    									"title": "METRO PUBLIC COUNTER",
    									"collapsed": "true",
    									"children": [
    										{"name": "IVORY CHAMBESHI", "title": "METRO PUBLIC COUNTER"},
    										{"name": "DIANA JIMENEZ", "title": "METRO PUBLIC COUNTER"},
    										{"name": "SOPHIE GABEL-SCHEINBAUM", "title": "METRO PUBLIC COUNTER"}
    									]
    								},
    								{
    									"name": "JOSE ROMERO NAVARRO",
    									"title": "METRO PUBLIC COUNTER",
    									"collapsed": "true",
    									"children": [
    										{"name": "DANALYNN DOMINGUEZ", "title": "METRO PUBLIC COUNTER"},
    										{"name": "SEAN VEAL", "title": "METRO PUBLIC COUNTER"},
    										{"name": "YOVANA PEREZ", "title": "METRO PUBLIC COUNTER"}
    									]
    								},
    								{
    									"name": "BRIDGETTE WOOTEN",
    									"title": "METRO PUBLIC COUNTER",
    									"collapsed": "true",
    									"children": [
    										{"name": "FIPE LEILUA", "title": "METRO PUBLIC COUNTER"},
    										{"name": "BRIAN CARR", "title": "METRO PUBLIC COUNTER"},
    										{"name": "JESSE RAMOS", "title": "METRO PUBLIC COUNTER"}
    									]
    								}
    							]
    						},
    						{"name": "LINDA CLARKE", "title": "METRO PUBLIC COUNTER"}
    					]
    				},
    				{"name": "FERNANDO TOVAR", "title": "ZONING ADMINISTRATION DIVISION"},
    				{
    					"name": "BLAKE LAMB",
    					"title": "PROJ PLN DIV 3 - VALLEY",
    					"collapsed": "true",
    					"children": [
    						{
    							"name": "DAVID OLIVO",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "ANDRES RODRIGUEZ",
    									"title": "COMMUNITY PLANNING DIVISION",
    									"collapsed": "true",
    									"children": [
    										{"name": "DANIEL SKOLNICK", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "JORDAN FRAADE", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "JULIA HEIDELMAN", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "KORA MCNAUGHTON", "title": "COMMUNITY PLANNING DIVISION"}
    									]
    								},
    								{
    									"name": "CLAUDIA RODRIGUEZ",
    									"title": "COMMUNITY PLANNING DIVISION",
    									"collapsed": "true",
    									"children": [
    										{"name": "ADRINEH MELKONIAN", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "ERIKA LAM", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "MICHELLE MONTENEGRO", "title": "COMMUNITY PLANNING DIVISION"}
    									]
    								}
    							]
    						},
    						{
    							"name": "MICHELLE LEVY",
    							"title": "PROJ PLN DIV 3 - VALLEY",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "SARAH HOUNSELL",
    									"title": "PROJ PLN DIV 3 - VALLEY",
    									"collapsed": "true",
    									"children": [
    										{"name": "MARIANNE KING", "title": "PROJ PLN DIV 3 - VALLEY"},
    										{"name": "LUCERITO MARTINEZ", "title": "PROJ PLN DIV 3 - VALLEY"}
    									]
    								},
    								{
    									"name": "VALENTINA KNOX-JONES",
    									"title": "PROJ PLN DIV 3 - VALLEY",
    									"collapsed": "true",
    									"children": [
    										{"name": "CHRISTINE BUSTILLOS", "title": "PROJ PLN DIV 3 - VALLEY"}
    									]
    								},
    								{
    									"name": "TIMOTHY FARGO",
    									"title": "PROJ PLN DIV 3 - VALLEY",
    									"collapsed": "true",
    									"children": [
    										{"name": "TRACY WILLIAMS", "title": "PROJ PLN DIV 3 - VALLEY"}
    									]
    								},
    								{
    									"name": "LAURA FRAZIN STEELE",
    									"title": "PROJ PLN DIV 3 - VALLEY",
    									"collapsed": "true",
    									"children": [
    										{"name": "KARIN BOGHOSKHANIAN", "title": "PROJ PLN DIV 3 - VALLEY NP"},
    										{"name": "PEGGY MALONE BROWN", "title": "PROJ PLN DIV 3 - VALLEY"}
    									]
    								}
    							]
    						},
    						{
    							"name": "COURTNEY SCHOENWALD",
    							"title": "PROJ PLN DIV 3 - VALLEY",
    							"collapsed": "true",
    							"children": [
    								{"name": "ALYCIA WITZLING", "title": "PROJ PLN DIV 3 - VALLEY"},
    								{"name": "ANDRE CALDERON", "title": "PROJ PLN DIV 3 - VALLEY"}
    							]
    						},
    						{
    							"name": "CHRISTINE SAPONARA",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "THOMAS GLICK",
    									"title": "COMMUNITY PLANNING DIVISION",
    									"collapsed": "true",
    									"children": [
    										{"name": "CORREY KITCHENS", "title": "COMMUNITY PLANNING DIVISION"},
    										{"name": "NELSON RODRIGUEZ", "title": "COMMUNITY PLANNING DIVISION"}
    									]
    								}
    							]
    						},
    						{"name": "MIGUEL HERNANDEZ", "title": "PROJ PLN DIV 3 - VALLEY"},
    						{"name": "MARY CROWELL", "title": "PROJ PLN DIV 3 - VALLEY"}
    					]
    				},
    				{"name": "HENRY CHU", "title": "ZONING ADMINISTRATION DIVISION"},
    				{
    					"name": "CHARLES RAUSCH",
    					"title": "MJ PROJ AND ENVIR ANALYSIS SECTION",
    					"collapsed": "true",
    					"children": [
    						{
    							"name": "NICHOLAS HENDRICKS",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true",
    							"children": [
    								{"name": "JORDANN TURNER", "title": "EXPEDITED PROCESSING"},
    								{
    									"name": "PHILLIP BAZAN",
    									"title": "EXPEDITED PROCESSING",
    									"collapsed": "true",
    									"children": [
    										{"name": "DEZIREE GUTIERREZ", "title": "EXPEDITED PROCESSING"},
    										{"name": "BRENDA KAHINJU", "title": "EXPEDITED PROCESSING"}
    									]
    								},
    								{
    									"name": "OLIVER NETBURN",
    									"title": "EXPEDITED PROCESSING",
    									"collapsed": "true",
    									"children": [
    										{"name": "CHI LIM", "title": "EXPEDITED PROCESSING"},
    										{"name": "MICHELLE S CARTER", "title": "EXPEDITED PROCESSING"}
    									]
    								},
    								{
    									"name": "JENNAFER MONTERROSA",
    									"title": "EXPEDITED PROCESSING",
    									"collapsed": "true",
    									"children": [
    										{"name": "LILIAN RUBIO", "title": "EXPEDITED PROCESSING"},
    										{"name": "NICHOLAS AYARS", "title": "EXPEDITED PROCESSING"}
    									]
    								},
    								{
    									"name": "SIAM PEWSAWANG",
    									"title": "EXPEDITED PROCESSING",
    									"collapsed": "true",
    									"children": [
    										{"name": "BRYAN OCHOA", "title": "EXPEDITED PROCESSING"}
    									]
    								},
    								{
    									"name": "COURTNEY SHUM",
    									"title": "EXPEDITED PROCESSING",
    									"collapsed": "true",
    									"children": [
    										{"name": "WILLIAM HUGHEN", "title": "EXPEDITED PROCESSING"},
    										{"name": "CHUANZHE SONG", "title": "EXPEDITED PROCESSING"}
    									]
    								}
    							]
    						},
    						{
    							"name": "LUCIRALIA IBARRA",
    							"title": "MAJOR PROJECTS",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "ADAM VILLANI",
    									"title": "MAJOR PROJECTS",
    									"collapsed": "true",
    									"children": [
    										{"name": "SRIMAL HEWAWITHARANA", "title": "ENVIRONMENTAL ANALYSIS"},
    										{"name": "MANUEL ELIZARRARAS", "title": "COMMUNITY PLANNING DIVISION"}
    									]
    								},
    								{
    									"name": "ALEJANDRO HUERTA",
    									"title": "ENVIRONMENTAL ANALYSIS",
    									"collapsed": "true",
    									"children": [
    										{"name": "ERIN STRELICH", "title": "ENVIRONMENTAL ANALYSIS"},
    										{"name": "JASON MCCREA", "title": "MAJOR PROJECTS"}
    									]
    								},
    								{
    									"name": "ELVA NUNO O DONNELL",
    									"title": "MAJOR PROJECTS",
    									"collapsed": "true",
    									"children": [
    										{"name": "CHRISTINA NGUYEN", "title": "MAJOR PROJECTS"}
    									]
    								},
    								{
    									"name": "DARLENE NAVARRETE",
    									"title": "MAJOR PROJECTS",
    									"collapsed": "true",
    									"children": [
    										{"name": "SUSAN JIMENEZ", "title": "ENVIRONMENTAL ANALYSIS"}
    									]
    								}
    							]
    						},
    						{
    							"name": "JON FOREMAN",
    							"title": "ZONING ADMINISTRATION DIVISION",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "STACY MUNOZ",
    									"title": "ZONING ADMINISTRATION DIVISION",
    									"collapsed": "true",
    									"children": [
    										{"name": "SIERRA RODRIGUEZ", "title": "ZONING ADMINISTRATION DIVISION"},
    										{"name": "DIANE HAMILTON", "title": "AUTOMATED RECORDS"},
    										{"name": "GABRIEL MENDEZ", "title": "ZONING ADMINISTRATION DIVISION"}
    									]
    								}
    							]
    						},
    						{
    							"name": "HEATHER BLEEMERS",
    							"title": "MJ PROJ AND ENVIR ANALYSIS SECTION",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "MILENA ZASADZIEN",
    									"title": "MAJOR PROJECTS",
    									"collapsed": "true",
    									"children": [
    										{"name": "MARK FRIEDLANDER", "title": "MAJOR PROJECTS"},
    										{"name": "JOHNNY LE", "title": "MAJOR PROJECTS"}
    									]
    								},
    								{
    									"name": "SERGIO IBARRA",
    									"title": "MAJOR PROJECTS",
    									"collapsed": "true",
    									"children": [
    										{"name": "KATHLEEN KING", "title": "MAJOR PROJECTS"}
    									]
    								},
    								{
    									"name": "WILLIAM LAMBORN",
    									"title": "ENVIRONMENTAL ANALYSIS",
    									"collapsed": "true",
    									"children": [
    										{"name": "JONATHAN CHANG",  "title": "ENVIRONMENTAL ANALYSIS"}
    									]
    								}
    							]
    						},
    						{
    							"name": "JAE KIM",
    							"title": "PMU",
    							"collapsed": "true",
    							"children": [
    								{"name": "KHAIRUL CHOUDHURY", "title": "NUISANCE ABATEMENT"},
    								{
    									"name": "LYNDA SMITH",
    									"title": "NUISANCE ABATEMENT",
    									"collapsed": "true",
    									"children": [
    										{"name": "MATTHEW LUM", "title": "NUISANCE ABATEMENT"},
    										{"name": "HELENE ROTOLO", "title": "NUISANCE ABATEMENT"},
    										{"name": "BLAYNE SUTTON -WILLS", "title": "NUISANCE ABATEMENT"}
    									]
    								}
    							]
    						}
    					]
    				},
    				{"name": "DAVID WEINTRAUB",  "title": "ZONING ADMINISTRATION DIVISION"},
    				{
    					"name": "FAISAL ROBLE",
    					"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    					"collapsed": "true",
    					"children": [
    						{
    							"name": "MICHELLE SINGH",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "JASON CHAN",
    									"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    									"collapsed": "true",
    									"children": [
    										{"name": "CONNIE CHAUV", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "ZURIEL ESPINOSA-SALAS", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "JULIA DUNCAN", "title": "PROJ PLN DIV 2 - WEST/SOUTH"}
    									]
    								},
    								{
    									"name": "ALAN COMO",
    									"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    									"collapsed": "true",
    									"children": [
    										{"name": "STEVE GARCIA", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "STACY FARFAN", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "KYLE WINSTON", "title": "PROJ PLN DIV 2 - WEST/SOUTH"}
    									]
    								}
    							]
    						},
    						{
    							"name": "DEBBIE LAWRENCE",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true",
    							"children": [
    								{
    									"name": "JULIET OH",
    									"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    									"collapsed": "true",
    									"children": [
    										{"name": "JEFFREY KHAU", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "IRA BROWN", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "BINDU KANNAN", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    										{"name": "DAVID SOLAIMAN TEHRANI", "title": "PROJ PLN DIV 2 - WEST/SOUTH"}
    									]
    								},
    								{"name": "KENTON TRINH", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    								{"name": "ALISSA GORDON", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    								{"name": "ALEXANDER TRUONG", "title": "PROJ PLN DIV 2 - WEST/SOUTH"},
    								{"name": "MARISA GARCIA", "title": "PROJ PLN DIV 2 - WEST/SOUTH"}
    							]
    						},
    						{"name": "TYNA HALL BRADLEY", "title": "PROJ PLN DIV 2 - WEST/SOUTH"}
    					]
    				},
    				{"name": "FRANKLIN QUON", "title": "ZONING ADMINISTRATION DIVISION"},
    				{"name": "JACK CHIANG", "title": "ZONING ADMINISTRATION DIVISION"},
    				{"name": "ALETA JAMES", "title": "CONDITION COMPLIANCE UNIT"}
    			]}
    		]};

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'direction': 'l2r'
    });

    $(".orgchart").each(function(){
		$(".edge").click(function(){
			var height = $(".orgchart").height()+370;

			$(".chart-max-height").css('height', height);
			console.log($(".orgchart").height());
			console.log(height);
		});
    });

  });

})(jQuery);