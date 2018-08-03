'use strict';

(function($){

  $(function() {

    var datascource = {
    		"name": "VINCENT BERTONI",
    		"title": "OFFICE OF THE DIRECTOR",
    		"children": [{
    			"name": "KEVIN KELLER",
    			"title": "EXECUTIVE OFFICE",
    			"collapsed": "true",
    			"children": [{
    				"name": "LY LAM",
    				"title": "ADMINISTRATIVE SERVICES DIVISION",
    				"collapsed": "true",
    				"children": [{
    					"name": "TIFFANY BUTLER",
    					"title": "MJ PROJ AND ENVIR ANALYSIS SECTION",
    					"collapsed": "true",
    					"children": [{
    						"name": "UWE KERNER",
    						"title": "ADMINISTRATIVE SUPPORT",
    						"collapsed": "true"
    					},
    					{
    						"name": "BEATRICE PACHECO",
    						"title": "OPERATIONS SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "SANDRA MCFARLANE",
    							"title": "AUTOMATED RECORDS",
    							"collapsed": "true"
    						},
    						{
    							"name": "JOAN HOLAZA",
    							"title": "AUTOMATED RECORDS",
    							"collapsed": "true"
    						},
    						{
    							"name": "CORII RICHARDSON",
    							"title": "AUTOMATED RECORDS",
    							"collapsed": "true"
    						},
    						{
    							"name": "LOURDES SANCHEZ",
    							"title": "AUTOMATED RECORDS",
    							"collapsed": "true"
    						},
    						{
    							"name": "CHRISTINE HERNANDEZ",
    							"title": "AUTOMATED RECORDS",
    							"collapsed": "true"
    						},
    						{
    							"name": "WANDA WALKER",
    							"title": "OPERATIONS SECTION",
    							"collapsed": "true",
    							"children": [{
    								"name": "TONY STAPLES",
    								"title": "DOCUMENT IMAGING",
    								"collapsed": "true"
    							},
    							{
    								"name": "NELSON LARIOS",
    								"title": "DOCUMENT IMAGING",
    								"collapsed": "true"
    							},
    							{
    								"name": "BRYAN SALGADO",
    								"title": "DOCUMENT IMAGING",
    								"collapsed": "true"
    							},
    							{
    								"name": "ALEX JOHNSON",
    								"title": "AUTOMATED RECORDS",
    								"collapsed": "true"
    							},
    							{
    								"name": "VINSON WATERS",
    								"title": "ZONING ADMINISTRATION DIVISION",
    								"collapsed": "true"
    							}]
    						}]
    					},
    					{
    						"name": "MARIA ORTIZ",
    						"title": "ADMINISTRATIVE SUPPORT",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "ANNA ORELLANA",
    					"title": "ADMINISTRATIVE SUPPORT",
    					"collapsed": "true"
    				},
    				{
    					"name": "ADRIANA BELTRAN-HERRERA",
    					"title": "ADMINISTRATIVE SUPPORT",
    					"collapsed": "true"
    				},
    				{
    					"name": "MICHELLE CHAN",
    					"title": "ACCOUNTING AND PURCHASING",
    					"collapsed": "true",
    					"children": [{
    						"name": "RODEL DELA CRUZ",
    						"title": "ACCOUNTING AND PURCHASING",
    						"collapsed": "true",
    						"children": [{
    							"name": "ROSE OLIVA DUROY",
    							"title": "ACCOUNTING AND PURCHASING",
    							"collapsed": "true"
    						},
    						{
    							"name": "TIFFANNI NGUYEN",
    							"title": "ACCOUNTING AND PURCHASING",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ZENAIDA AGUSTIN",
    						"title": "ACCOUNTING AND PURCHASING",
    						"collapsed": "true",
    						"children": [{
    							"name": "GINA GINETE",
    							"title": "PAYROLL",
    							"collapsed": "true"
    						},
    						{
    							"name": "JAE LEE",
    							"title": "ACCOUNTING AND PURCHASING",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "YI WEN SUN",
    					"title": "ADMINISTRATIVE SUPPORT",
    					"collapsed": "true"
    				},
    				{
    					"name": "YICHUN YEH",
    					"title": "ACCOUNTING AND PURCHASING",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "CRAIG WEBER",
    				"title": "COMMUNITY PLANNING DIVISION",
    				"collapsed": "true",
    				"children": [{
    					"name": "JONATHAN HERSHEY",
    					"title": "NEIGHBORHOOD PLANNING",
    					"collapsed": "true",
    					"children": [{
    						"name": "KINIKIA GARDNER",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "SIMILOLUWA ALIU",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "MELISSA ALOFAITULI",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "EMILY GABLE",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "ANTONIO ISAIA",
    							"title": "NEIGHBORHOOD PLANNING",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "LAURA MACPHERSON",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "HELEN CAMPBELL",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "EVA CHANG",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "ALEXANDER YEE",
    							"title": "POLICY PLANNING CLERICAL SUPPORT",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "HAYDEE URITA LOPEZ",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true",
    					"children": [{
    						"name": "GABRIELA JUAREZ",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "ELIZABETH GALLARDO",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "PRIYA MEHENDALE",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "SOPHIA KIM",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "LINDA LOU",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "RENATA OOMS",
    							"title": "NEIGHBORHOOD PLANNING",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ALEX HEATH",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true"
    					},
    					{
    						"name": "KIRAN RISHI",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "CHERRY YAP",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true"
    				},
    				{
    					"name": "REUBEN CALDWELL",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true",
    					"children": [{
    						"name": "MARIE COBIAN",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "ESTHER AMAYA",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "JESSICA ALVARADO",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "STEVEN KATIGBAK",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true"
    					},
    					{
    						"name": "TERESA BATSON",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "SALVADOR GUTIERREZ",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "SUSAN WONG",
    							"title": "NEIGHBORHOOD PLANNING",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "PATRICIA DIEFENDERFER",
    					"title": "NEIGHBORHOOD PLANNING",
    					"collapsed": "true",
    					"children": [{
    						"name": "BRYAN ECK",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "TAL HARARI",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "CLARE KELLEY",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "BRITTANY ARCENEAUX",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "VEENA SNEHANSH",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "RENATA DERMENGI DRAGLAND",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "LAURA KRAWCZYK",
    							"title": "NEIGHBORHOOD PLANNING",
    							"collapsed": "true"
    						},
    						{
    							"name": "ANDREW JORGENSEN",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "DIEGO JANACUA CORTEZ",
    							"title": "NEIGHBORHOOD PLANNING",
    							"collapsed": "true"
    						},
    						{
    							"name": "MATTHEW GAMBOA",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "GISELLE CORELLA",
    						"title": "NEIGHBORHOOD PLANNING",
    						"collapsed": "true"
    					}]
    				}]
    			},
    			{
    				"name": "ARTHI VARMA",
    				"title": "COMMUNITY PLANNING DIVISION",
    				"collapsed": "true",
    				"children": [{
    					"name": "MATTHEW GLESNE",
    					"title": "CITYWIDE PLANNING",
    					"collapsed": "true",
    					"children": [{
    						"name": "CALLY HARDY",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "DAVID GREENWOOD",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "LOVELL WILLIAMS",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "MARIA PALLINI TIPTON",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true",
    					"children": [{
    						"name": "JACK TSAO",
    						"title": "DEMOGRAPHICS",
    						"collapsed": "true",
    						"children": [{
    							"name": "ANGELA CHANG",
    							"title": "DEMOGRAPHICS",
    							"collapsed": "true"
    						},
    						{
    							"name": "LIN BAI",
    							"title": "DEMOGRAPHICS",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ARIANE BRISKI",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "LENA MIK",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "CHRISTOPHE PINA",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "JASON DOUGLAS",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "NINA PHINOUWONG",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "LIKYELEH ABERA GEBRE",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "DIANA KITCHING",
    					"title": "CITYWIDE PLANNING",
    					"collapsed": "true",
    					"children": [{
    						"name": "MATTHEW GERTZ",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "RUBINA GHAZARIAN",
    					"title": "CITYWIDE PLANNING",
    					"collapsed": "true",
    					"children": [{
    						"name": "BABAK DORJI",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					},
    					{
    						"name": "QIUANA WILLIAMS",
    						"title": "CITYWIDE PLANNING",
    						"collapsed": "true"
    					}]
    				}]
    			},
    			{
    				"name": "KENNETH BERNSTEIN",
    				"title": "POLICY PLANNING AND HISTORIC RESOURCES",
    				"collapsed": "true",
    				"children": [{
    					"name": "LAMBERT GIESSINGER",
    					"title": "HISTORIC RESOURCES",
    					"collapsed": "true",
    					"children": [{
    						"name": "MELISSA JONES",
    						"title": "HISTORIC RESOURCES",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "NAOMI GUTH",
    					"title": "HPOZ",
    					"collapsed": "true",
    					"children": [{
    						"name": "KIMBERLY HENRY",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "BLAIR SMITH",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true"
    					},
    					{
    						"name": "BRADLEY FURUYA",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "MAX LODER",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true"
    					},
    					{
    						"name": "LYDIA CHAPMAN",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "CHRISTINA PARK",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "MAKAN BARANGHOORI",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "JONATHAN KAPLAN",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "SARA GERSHENHORN",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "AMANDA KAINER",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "KATIE DEBIASE",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "MICAELA TORRES-GIL",
    						"title": "HPOZ",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "CLAIRE BOWIN",
    					"title": "CITYWIDE PLANNING",
    					"collapsed": "true",
    					"children": [{
    						"name": "EDGAR GARCIA",
    						"title": "HPOZ",
    						"collapsed": "true"
    					},
    					{
    						"name": "LAKISHA HULL",
    						"title": "NEIGHBORHOOD PLANNING",
    						"collapsed": "true",
    						"children": [{
    							"name": "KAROLINA GORSKA",
    							"title": "URBAN DESIGN STUDIO",
    							"collapsed": "true"
    						},
    						{
    							"name": "HOLLY HARPER",
    							"title": "URBAN DESIGN STUDIO",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "JANET HANSEN",
    					"title": "HISTORIC RESOURCES",
    					"collapsed": "true",
    					"children": [{
    						"name": "SARA CRUZ",
    						"title": "HISTORIC RESOURCES",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "MIGUEL SOTELO",
    					"title": "POLICY PLANNING CLERICAL SUPPORT",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "NICHOLAS MARICICH",
    				"title": "NEIGHBORHOOD PLANNING",
    				"collapsed": "true",
    				"children": [{
    					"name": "SHANNON RYAN",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "LILY QUAN",
    				"title": "EXECUTIVE ADMINISTRATIVE ASSISTANT",
    				"collapsed": "true"
    			},
    			{
    				"name": "JAMES VAN GERPEN",
    				"title": "INFORMATION TECHNOLOGIES",
    				"collapsed": "true",
    				"children": [{
    					"name": "SHAKEH BOGHOSKHANIAN",
    					"title": "GRAPHICS",
    					"collapsed": "true",
    					"children": [{
    						"name": "LOUISA RANICK",
    						"title": "GRAPHICS",
    						"collapsed": "true"
    					},
    					{
    						"name": "ARLET SHIRVANIAN",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "BETTY DONG",
    					"title": "GIS SECTION",
    					"collapsed": "true",
    					"children": [{
    						"name": "CHARLES LEE",
    						"title": "GIS SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "JESUS RAMOS",
    							"title": "GIS SECTION",
    							"collapsed": "true",
    							"children": [{
    								"name": "ARMANDO ALFARO",
    								"title": "GIS SECTION",
    								"collapsed": "true"
    							},
    							{
    								"name": "KORY SIRKIN",
    								"title": "GIS SECTION",
    								"collapsed": "true"
    							},
    							{
    								"name": "LIDIA VAIZ",
    								"title": "GIS SECTION",
    								"collapsed": "true"
    							}]
    						},
    						{
    							"name": "TIMMY LUONG",
    							"title": "GIS SECTION",
    							"collapsed": "true",
    							"children": [{
    								"name": "LESI MAI",
    								"title": "GIS SECTION",
    								"collapsed": "true"
    							},
    							{
    								"name": "LARA VARGAS",
    								"title": "GIS SECTION",
    								"collapsed": "true"
    							}]
    						},
    						{
    							"name": "GARY HIMAN",
    							"title": "GIS SECTION",
    							"collapsed": "true",
    							"children": [{
    								"name": "AZIZ BAKKOURY",
    								"title": "GIS SECTION",
    								"collapsed": "true"
    							}]
    						}]
    					},
    					{
    						"name": "CUONG FAN",
    						"title": "GIS SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "CARL NELSON",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "DAVID ABBOTT",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "MEGAN YANEZ",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "DAVID DIEUDONNE",
    						"title": "GIS SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "RITA DIAZ",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "JULIANNA AGUILAR",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "CRUZ ORTIZ",
    						"title": "GIS SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "NICOLE SABUTIS",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "HIROYUKI MATSUDA",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "ABRAM LEAL",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "OMAR ALHASHIMI",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "AKOUA DOFFOU",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "DWAYNE MERCADEL",
    						"title": "GIS SECTION",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "XANDRO DONADO",
    					"title": "GRAPHICS",
    					"collapsed": "true"
    				},
    				{
    					"name": "MARIAELVIA HERNANDEZ",
    					"title": "GRAPHICS",
    					"collapsed": "true",
    					"children": [{
    						"name": "JACOB LOPEZ",
    						"title": "GRAPHICS",
    						"collapsed": "true"
    					},
    					{
    						"name": "ANDRES MANZANO",
    						"title": "GRAPHICS",
    						"collapsed": "true"
    					},
    					{
    						"name": "COLLETTE DEL POSO",
    						"title": "NEIGHBORHOOD PLANNING",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "DAVID TERUKINA",
    					"title": "EMERGING TECHNOLOGIES SECTION",
    					"collapsed": "true",
    					"children": [{
    						"name": "MING DAI",
    						"title": "APPLICATION DEVELOPMENT SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "NGOCDUNG BUI",
    							"title": "APPLICATION DEVELOPMENT SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "JAY STRAHAN",
    							"title": "GIS SECTION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "CAM VUONG",
    						"title": "EMERGING TECHNOLOGIES SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "HEBER MARTINEZ",
    							"title": "EMERGING TECHNOLOGIES SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "MICHAEL CHANG",
    							"title": "EMERGING TECHNOLOGIES SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "DUKE TRAN",
    							"title": "EMERGING TECHNOLOGIES SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "KELVIN TSAN",
    							"title": "EMERGING TECHNOLOGIES SECTION",
    							"collapsed": "true"
    						},
    						{
    							"name": "WILSON YIP",
    							"title": "INFORMATION TECHNOLOGIES",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ROWLEN SHUE",
    						"title": "EMERGING TECHNOLOGIES SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "STEPHANIE LUCKETT",
    							"title": "EMERGING TECHNOLOGIES SECTION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "CHARLES NORMAN",
    						"title": "APPLICATION DEVELOPMENT SECTION",
    						"collapsed": "true",
    						"children": [{
    							"name": "PAUL VERGER",
    							"title": "APPLICATION DEVELOPMENT SECTION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ESTHER TAM",
    						"title": "APPLICATION DEVELOPMENT SECTION",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "MARY QUON",
    					"title": "INFORMATION TECHNOLOGIES",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "CARRIE FIRESTONE",
    				"title": "EXECUTIVE ADMINISTRATIVE ASSISTANT",
    				"collapsed": "true",
    				"children": [{
    					"name": "DENISE CHAVEZ",
    					"title": "COMMISSION OFFICE",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "MONICA NUNEZ",
    				"title": "EXECUTIVE ADMINISTRATIVE ASSISTANT",
    				"collapsed": "true"
    			},
    			{
    				"name": "YEGHIG KESHISHIAN",
    				"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    				"collapsed": "true",
    				"children": [{
    					"name": "DYLAN SITTIG",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true"
    				},
    				{
    					"name": "FABIOLA INZUNZA ARMENTA",
    					"title": "CASE MANAGEMENT",
    					"collapsed": "true"
    				},
    				{
    					"name": "LAUREN ALBA",
    					"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    					"collapsed": "true"
    				},
    				{
    					"name": "VICKY TAVITIAN",
    					"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    					"collapsed": "true"
    				},
    				{
    					"name": "RYAN TEMPLE",
    					"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    					"collapsed": "true"
    				},
    				{
    					"name": "ANSIS HOHEISEL",
    					"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    					"collapsed": "true"
    				},
    				{
    					"name": "DANIEL CORONADO",
    					"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    					"collapsed": "true"
    				},
    				{
    					"name": "RAYNA PLUMMER",
    					"title": "COUNCIL LIAISON - EXTERNAL AFFAIRS",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "THOMAS ROTHMANN",
    				"title": "RECODE LA",
    				"collapsed": "true",
    				"children": [{
    					"name": "PHYLLIS NATHANSON",
    					"title": "RECODE LA",
    					"collapsed": "true",
    					"children": [{
    						"name": "ERICK LOPEZ",
    						"title": "RECODE LA",
    						"collapsed": "true",
    						"children": [{
    							"name": "BOYOUNG KIM",
    							"title": "CODE STUDIES",
    							"collapsed": "true"
    						},
    						{
    							"name": "AZEEN KHANMALEK",
    							"title": "CODE STUDIES",
    							"collapsed": "true"
    						},
    						{
    							"name": "PATRICK WHALEN",
    							"title": "CODE STUDIES",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "DEBORAH KAHEN",
    						"title": "CODE STUDIES",
    						"collapsed": "true",
    						"children": [{
    							"name": "ESTHER AHN",
    							"title": "RECODE LA",
    							"collapsed": "true"
    						},
    						{
    							"name": "JAIME ESPINOZA",
    							"title": "RECODE LA",
    							"collapsed": "true"
    						},
    						{
    							"name": "NIALL HUFFMAN",
    							"title": "CODE STUDIES",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ERIN COLEMAN",
    						"title": "CODE STUDIES",
    						"collapsed": "true",
    						"children": [{
    							"name": "MARY RICHARDSON",
    							"title": "CODE STUDIES",
    							"collapsed": "true"
    						},
    						{
    							"name": "YI LU",
    							"title": "CODE STUDIES",
    							"collapsed": "true"
    						}]
    					}]
    				}]
    			},
    			{
    				"name": "REBECCA VALDEZ",
    				"title": "PMU",
    				"collapsed": "true",
    				"children": [{
    					"name": "ROXANNE WILES",
    					"title": "PMU",
    					"collapsed": "true",
    					"children": [{
    						"name": "JAMES WILLIAMS",
    						"title": "COMMISSION OFFICE",
    						"collapsed": "true"
    					},
    					{
    						"name": "CECILIA LAMAS",
    						"title": "COMMISSION OFFICE",
    						"collapsed": "true"
    					},
    					{
    						"name": "ETTA ARMSTRONG",
    						"title": "COMMISSION OFFICE",
    						"collapsed": "true"
    					},
    					{
    						"name": "RAFAEL VEGA",
    						"title": "COMMISSION OFFICE",
    						"collapsed": "true"
    					},
    					{
    						"name": "JASON WONG",
    						"title": "COMMISSION OFFICE",
    						"collapsed": "true"
    					},
    					{
    						"name": "MARCOS GODOY",
    						"title": "COMMISSION OFFICE",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "NINA IDEMUDIA",
    					"title": "PMU",
    					"collapsed": "true"
    				},
    				{
    					"name": "ASHLEY ATKINSON",
    					"title": "PMU",
    					"collapsed": "true",
    					"children": [{
    						"name": "JONATHAN CHIU",
    						"title": "PMU",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "ALLISON WILHITE",
    					"title": "PMU",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "CHRISTINA KARATZAS",
    				"title": "ADMINISTRATIVE SUPPORT",
    				"collapsed": "true"
    			},
    			{
    				"name": "CHRISTOPHE HAWTHORNE",
    				"title": "URBAN DESIGN STUDIO",
    				"collapsed": "true"
    			}]
    		},
    		{
    			"name": "LISA WEBBER",
    			"title": "PROJECT PLANNING BUREAU",
    			"collapsed": "true",
    			"children": [{
    				"name": "MAYA ZAITZEVSKY",
    				"title": "ZONING ADMINISTRATION DIVISION",
    				"collapsed": "true"
    			},
    			{
    				"name": "THEODORE IRVING",
    				"title": "ZONING ADMINISTRATION DIVISION",
    				"collapsed": "true"
    			},
    			{
    				"name": "SHANA BONSTIN",
    				"title": "PROJ PLN DIV 1 - CENTRAL",
    				"collapsed": "true",
    				"children": [{
    					"name": "JANE CHOI",
    					"title": "PROJ PLN DIV 1 - CENTRAL",
    					"collapsed": "true",
    					"children": [{
    						"name": "MAY SIRINOPWONGSAGON",
    						"title": "PROJ PLN DIV 1 - CENTRAL",
    						"collapsed": "true",
    						"children": [{
    							"name": "MICHAEL SIN",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "ISAIAH ROSS",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "CHI DANG",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "NICOLE SANCHEZ",
    						"title": "PROJ PLN DIV 1 - CENTRAL",
    						"collapsed": "true",
    						"children": [{
    							"name": "JOHN DACEY",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "SANTOS SANCHEZ",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "KEVIN GOLDEN",
    						"title": "PROJ PLN DIV 1 - CENTRAL",
    						"collapsed": "true",
    						"children": [{
    							"name": "HAKEEM PARKE DAVIS",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "HANI BAKER",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "DON JEFFERSON",
    					"title": "PROJ PLN DIV 1 - CENTRAL",
    					"collapsed": "true"
    				},
    				{
    					"name": "MARIA REYES",
    					"title": "PROJ PLN DIV 1 - CENTRAL",
    					"collapsed": "true"
    				},
    				{
    					"name": "CHRISTINA LEE",
    					"title": "PROJ PLN DIV 1 - CENTRAL",
    					"collapsed": "true",
    					"children": [{
    						"name": "MONIQUE ACOSTA",
    						"title": "PROJ PLN DIV 1 - CENTRAL",
    						"collapsed": "true"
    					},
    					{
    						"name": "MINDY NGUYEN",
    						"title": "PROJ PLN DIV 1 - CENTRAL",
    						"collapsed": "true",
    						"children": [{
    							"name": "AMANDA BRIONES",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "NURI CHO",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "JASON HERNANDEZ",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "RICHARD REASER",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "IRIS WAN",
    						"title": "PROJ PLN DIV 1 - CENTRAL",
    						"collapsed": "true",
    						"children": [{
    							"name": "RONY GIRON",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "JOE LUCKEY",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						},
    						{
    							"name": "RUBEN VASQUEZ",
    							"title": "PROJ PLN DIV 1 - CENTRAL",
    							"collapsed": "true"
    						}]
    					}]
    				}]
    			},
    			{
    				"name": "ESTINEH MAILIAN",
    				"title": "DEVELOPMENT SERVICES CENTER",
    				"collapsed": "true",
    				"children": [{
    					"name": "ROBERT DUENAS",
    					"title": "DEVELOPMENT SERVICES CENTER",
    					"collapsed": "true",
    					"children": [{
    						"name": "MARCUS WOERSCHING",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true"
    					},
    					{
    						"name": "GRISELDA GONZALEZ",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true"
    					},
    					{
    						"name": "TINA VACHARKULKSEMSUK",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "SHEILA TONI",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "VANESSA SOTO",
    						"title": "CONDITION COMPLIANCE UNIT",
    						"collapsed": "true",
    						"children": [{
    							"name": "DANAI ZAIRE",
    							"title": "CONDITION COMPLIANCE UNIT",
    							"collapsed": "true"
    						},
    						{
    							"name": "JAMES HOWE",
    							"title": "CONDITION COMPLIANCE UNIT",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "PHYLLIS PARKER",
    						"title": "DEVELOPMENT SERVICES CENTER",
    						"collapsed": "true"
    					},
    					{
    						"name": "PIO QUITORIANO",
    						"title": "DEVELOPMENT SERVICES CENTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "MATTHEW QUAN",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "GRACIELA ACOSTA",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "CLAUDE GOODING",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "ANACANY HURTADO",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ULISES GONZALEZ",
    						"title": "DEVELOPMENT SERVICES CENTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "MAIDEL LUEVANO",
    							"title": "DEVELOPMENT SERVICES CENTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "NORALI MARTINEZ MAZA",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ERIC CLAROS",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "AIDA KARAPETIAN",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "MELVINA ADLERSBERG",
    						"title": "CONDITION COMPLIANCE UNIT",
    						"collapsed": "true",
    						"children": [{
    							"name": "RAYMOND PARKER",
    							"title": "CONDITION COMPLIANCE UNIT",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "MARITZA PRZEKOP",
    					"title": "DEVELOPMENT SERVICES CENTER",
    					"collapsed": "true",
    					"children": [{
    						"name": "ANNA VIDAL",
    						"title": "VALLEY PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "STEVEN WECHSLER",
    							"title": "VALLEY PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "DAISY BENICIA",
    							"title": "VALLEY PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "RINA LARA",
    							"title": "VALLEY PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "PABLO ESTRADA",
    							"title": "VALLEY PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "THOMAS HENRY",
    							"title": "VALLEY PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "TREVOR MARTIN",
    						"title": "WEST PUBLIC COUNTER",
    						"collapsed": "true"
    					},
    					{
    						"name": "CRISTINA ORELLANA",
    						"title": "VALLEY PUBLIC COUNTER",
    						"collapsed": "true"
    					},
    					{
    						"name": "HERMINIGIL AGUSTIN",
    						"title": "VALLEY PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "DENNIS CHEW",
    							"title": "VALLEY PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "RICARDO TORRES",
    							"title": "VALLEY PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "SARAH GOLDMAN",
    						"title": "WEST PUBLIC COUNTER",
    						"collapsed": "true"
    					},
    					{
    						"name": "NOAH MCCOY",
    						"title": "WEST PUBLIC COUNTER",
    						"collapsed": "true"
    					},
    					{
    						"name": "DENISE BELL",
    						"title": "WEST PUBLIC COUNTER",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "SARAH PEARSON",
    					"title": "DEVELOPMENT SERVICES CENTER",
    					"collapsed": "true",
    					"children": [{
    						"name": "SUSAN ZERMENO",
    						"title": "CASE MANAGEMENT",
    						"collapsed": "true"
    					},
    					{
    						"name": "KIT AWAKUNI",
    						"title": "CASE MANAGEMENT",
    						"collapsed": "true",
    						"children": [{
    							"name": "JUSTIN BILOW",
    							"title": "CASE MANAGEMENT",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "RALPH AVILA",
    					"title": "DEVELOPMENT SERVICES CENTER",
    					"collapsed": "true",
    					"children": [{
    						"name": "NORA DRESSER",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "EDBER MACEDO",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "GLORIA DEAN",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "JASMINE ALIASGHAR",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "CAROLINA MENJIVAR",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "STEVE KIM",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "IVORY CHAMBESHI",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "DIANA JIMENEZ",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "SOPHIE GABEL-SCHEINBAUM",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "JOSE ROMERO NAVARRO",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "DANALYNN DOMINGUEZ",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "SEAN VEAL",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "YOVANA PEREZ",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "BRIDGETTE WOOTEN",
    						"title": "METRO PUBLIC COUNTER",
    						"collapsed": "true",
    						"children": [{
    							"name": "FIPE LEILUA",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "BRIAN CARR",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						},
    						{
    							"name": "JESSE RAMOS",
    							"title": "METRO PUBLIC COUNTER",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "LINDA CLARKE",
    					"title": "METRO PUBLIC COUNTER",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "FERNANDO TOVAR",
    				"title": "ZONING ADMINISTRATION DIVISION",
    				"collapsed": "true"
    			},
    			{
    				"name": "BLAKE LAMB",
    				"title": "PROJ PLN DIV 3 - VALLEY",
    				"collapsed": "true",
    				"children": [{
    					"name": "DAVID OLIVO",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true",
    					"children": [{
    						"name": "ANDRES RODRIGUEZ",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "DANIEL SKOLNICK",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "JORDAN FRAADE",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "JULIA HEIDELMAN",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "KORA MCNAUGHTON",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "CLAUDIA RODRIGUEZ",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "ADRINEH MELKONIAN",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "ERIKA LAM",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "MICHELLE MONTENEGRO",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "MICHELLE LEVY",
    					"title": "PROJ PLN DIV 3 - VALLEY",
    					"collapsed": "true",
    					"children": [{
    						"name": "SARAH HOUNSELL",
    						"title": "PROJ PLN DIV 3 - VALLEY",
    						"collapsed": "true",
    						"children": [{
    							"name": "MARIANNE KING",
    							"title": "PROJ PLN DIV 3 - VALLEY",
    							"collapsed": "true"
    						},
    						{
    							"name": "LUCERITO MARTINEZ",
    							"title": "PROJ PLN DIV 3 - VALLEY",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "VALENTINA KNOX-JONES",
    						"title": "PROJ PLN DIV 3 - VALLEY",
    						"collapsed": "true",
    						"children": [{
    							"name": "CHRISTINE BUSTILLOS",
    							"title": "PROJ PLN DIV 3 - VALLEY",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "TIMOTHY FARGO",
    						"title": "PROJ PLN DIV 3 - VALLEY",
    						"collapsed": "true",
    						"children": [{
    							"name": "TRACY WILLIAMS",
    							"title": "PROJ PLN DIV 3 - VALLEY",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "LAURA FRAZIN STEELE",
    						"title": "PROJ PLN DIV 3 - VALLEY",
    						"collapsed": "true",
    						"children": [{
    							"name": "KARIN BOGHOSKHANIAN",
    							"title": "PROJ PLN DIV 3 - VALLEY NP",
    							"collapsed": "true"
    						},
    						{
    							"name": "PEGGY MALONE BROWN",
    							"title": "PROJ PLN DIV 3 - VALLEY",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "COURTNEY SCHOENWALD",
    					"title": "PROJ PLN DIV 3 - VALLEY",
    					"collapsed": "true",
    					"children": [{
    						"name": "ALYCIA WITZLING",
    						"title": "PROJ PLN DIV 3 - VALLEY",
    						"collapsed": "true"
    					},
    					{
    						"name": "ANDRE CALDERON",
    						"title": "PROJ PLN DIV 3 - VALLEY",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "CHRISTINE SAPONARA",
    					"title": "COMMUNITY PLANNING DIVISION",
    					"collapsed": "true",
    					"children": [{
    						"name": "THOMAS GLICK",
    						"title": "COMMUNITY PLANNING DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "CORREY KITCHENS",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "NELSON RODRIGUEZ",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "MIGUEL HERNANDEZ",
    					"title": "PROJ PLN DIV 3 - VALLEY",
    					"collapsed": "true"
    				},
    				{
    					"name": "MARY CROWELL",
    					"title": "PROJ PLN DIV 3 - VALLEY",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "HENRY CHU",
    				"title": "ZONING ADMINISTRATION DIVISION",
    				"collapsed": "true"
    			},
    			{
    				"name": "CHARLES RAUSCH",
    				"title": "MJ PROJ AND ENVIR ANALYSIS SECTION",
    				"collapsed": "true",
    				"children": [{
    					"name": "NICHOLAS HENDRICKS",
    					"title": "EXPEDITED PROCESSING",
    					"collapsed": "true",
    					"children": [{
    						"name": "JORDANN TURNER",
    						"title": "EXPEDITED PROCESSING",
    						"collapsed": "true"
    					},
    					{
    						"name": "PHILLIP BAZAN",
    						"title": "EXPEDITED PROCESSING",
    						"collapsed": "true",
    						"children": [{
    							"name": "DEZIREE GUTIERREZ",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						},
    						{
    							"name": "BRENDA KAHINJU",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "OLIVER NETBURN",
    						"title": "EXPEDITED PROCESSING",
    						"collapsed": "true",
    						"children": [{
    							"name": "CHI LIM",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						},
    						{
    							"name": "MICHELLE S CARTER",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "JENNAFER MONTERROSA",
    						"title": "EXPEDITED PROCESSING",
    						"collapsed": "true",
    						"children": [{
    							"name": "LILIAN RUBIO",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						},
    						{
    							"name": "NICHOLAS AYARS",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "SIAM PEWSAWANG",
    						"title": "EXPEDITED PROCESSING",
    						"collapsed": "true",
    						"children": [{
    							"name": "BRYAN OCHOA",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "COURTNEY SHUM",
    						"title": "EXPEDITED PROCESSING",
    						"collapsed": "true",
    						"children": [{
    							"name": "WILLIAM HUGHEN",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						},
    						{
    							"name": "CHUANZHE SONG",
    							"title": "EXPEDITED PROCESSING",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "LUCIRALIA IBARRA",
    					"title": "MAJOR PROJECTS",
    					"collapsed": "true",
    					"children": [{
    						"name": "ADAM VILLANI",
    						"title": "MAJOR PROJECTS",
    						"collapsed": "true",
    						"children": [{
    							"name": "SRIMAL HEWAWITHARANA",
    							"title": "ENVIRONMENTAL ANALYSIS",
    							"collapsed": "true"
    						},
    						{
    							"name": "MANUEL ELIZARRARAS",
    							"title": "COMMUNITY PLANNING DIVISION",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ALEJANDRO HUERTA",
    						"title": "ENVIRONMENTAL ANALYSIS",
    						"collapsed": "true",
    						"children": [{
    							"name": "ERIN STRELICH",
    							"title": "ENVIRONMENTAL ANALYSIS",
    							"collapsed": "true"
    						},
    						{
    							"name": "JASON MCCREA",
    							"title": "MAJOR PROJECTS",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ELVA NUNO O DONNELL",
    						"title": "MAJOR PROJECTS",
    						"collapsed": "true",
    						"children": [{
    							"name": "CHRISTINA NGUYEN",
    							"title": "MAJOR PROJECTS",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "DARLENE NAVARRETE",
    						"title": "MAJOR PROJECTS",
    						"collapsed": "true",
    						"children": [{
    							"name": "SUSAN JIMENEZ",
    							"title": "ENVIRONMENTAL ANALYSIS",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "JON FOREMAN",
    					"title": "ZONING ADMINISTRATION DIVISION",
    					"collapsed": "true",
    					"children": [{
    						"name": "STACY MUNOZ",
    						"title": "ZONING ADMINISTRATION DIVISION",
    						"collapsed": "true",
    						"children": [{
    							"name": "SIERRA RODRIGUEZ",
    							"title": "ZONING ADMINISTRATION DIVISION",
    							"collapsed": "true"
    						},
    						{
    							"name": "DIANE HAMILTON",
    							"title": "AUTOMATED RECORDS",
    							"collapsed": "true"
    						},
    						{
    							"name": "GABRIEL MENDEZ",
    							"title": "ZONING ADMINISTRATION DIVISION",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "HEATHER BLEEMERS",
    					"title": "MJ PROJ AND ENVIR ANALYSIS SECTION",
    					"collapsed": "true",
    					"children": [{
    						"name": "MILENA ZASADZIEN",
    						"title": "MAJOR PROJECTS",
    						"collapsed": "true",
    						"children": [{
    							"name": "MARK FRIEDLANDER",
    							"title": "MAJOR PROJECTS",
    							"collapsed": "true"
    						},
    						{
    							"name": "JOHNNY LE",
    							"title": "MAJOR PROJECTS",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "SERGIO IBARRA",
    						"title": "MAJOR PROJECTS",
    						"collapsed": "true",
    						"children": [{
    							"name": "KATHLEEN KING",
    							"title": "MAJOR PROJECTS",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "WILLIAM LAMBORN",
    						"title": "ENVIRONMENTAL ANALYSIS",
    						"collapsed": "true",
    						"children": [{
    							"name": "JONATHAN CHANG",
    							"title": "ENVIRONMENTAL ANALYSIS",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "JAE KIM",
    					"title": "PMU",
    					"collapsed": "true",
    					"children": [{
    						"name": "KHAIRUL CHOUDHURY",
    						"title": "NUISANCE ABATEMENT",
    						"collapsed": "true"
    					},
    					{
    						"name": "LYNDA SMITH",
    						"title": "NUISANCE ABATEMENT",
    						"collapsed": "true",
    						"children": [{
    							"name": "MATTHEW LUM",
    							"title": "NUISANCE ABATEMENT",
    							"collapsed": "true"
    						},
    						{
    							"name": "HELENE ROTOLO",
    							"title": "NUISANCE ABATEMENT",
    							"collapsed": "true"
    						},
    						{
    							"name": "BLAYNE SUTTON -WILLS",
    							"title": "NUISANCE ABATEMENT",
    							"collapsed": "true"
    						}]
    					}]
    				}]
    			},
    			{
    				"name": "DAVID WEINTRAUB",
    				"title": "ZONING ADMINISTRATION DIVISION",
    				"collapsed": "true"
    			},
    			{
    				"name": "FAISAL ROBLE",
    				"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    				"collapsed": "true",
    				"children": [{
    					"name": "MICHELLE SINGH",
    					"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    					"collapsed": "true",
    					"children": [{
    						"name": "JASON CHAN",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true",
    						"children": [{
    							"name": "CONNIE CHAUV",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						},
    						{
    							"name": "ZURIEL ESPINOSA-SALAS",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						},
    						{
    							"name": "JULIA DUNCAN",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "ALAN COMO",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true",
    						"children": [{
    							"name": "STEVE GARCIA",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						},
    						{
    							"name": "STACY FARFAN",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						},
    						{
    							"name": "KYLE WINSTON",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						}]
    					}]
    				},
    				{
    					"name": "DEBBIE LAWRENCE",
    					"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    					"collapsed": "true",
    					"children": [{
    						"name": "JULIET OH",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true",
    						"children": [{
    							"name": "JEFFREY KHAU",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						},
    						{
    							"name": "IRA BROWN",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						},
    						{
    							"name": "BINDU KANNAN",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						},
    						{
    							"name": "DAVID SOLAIMAN TEHRANI",
    							"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    							"collapsed": "true"
    						}]
    					},
    					{
    						"name": "KENTON TRINH",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true"
    					},
    					{
    						"name": "ALISSA GORDON",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true"
    					},
    					{
    						"name": "ALEXANDER TRUONG",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true"
    					},
    					{
    						"name": "MARISA GARCIA",
    						"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    						"collapsed": "true"
    					}]
    				},
    				{
    					"name": "TYNA HALL BRADLEY",
    					"title": "PROJ PLN DIV 2 - WEST/SOUTH",
    					"collapsed": "true"
    				}]
    			},
    			{
    				"name": "FRANKLIN QUON",
    				"title": "ZONING ADMINISTRATION DIVISION",
    				"collapsed": "true"
    			},
    			{
    				"name": "JACK CHIANG",
    				"title": "ZONING ADMINISTRATION DIVISION",
    				"collapsed": "true"
    			},
    			{
    				"name": "ALETA JAMES",
    				"title": "CONDITION COMPLIANCE UNIT",
    				"collapsed": "true"
    			}]
    		}]
    	};

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title'
    });

  });

})(jQuery);