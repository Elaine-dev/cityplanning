<?php include_once '../includes/header.php'; ?>
<script>
var original_html = null;
var assignment_list = ['1|Alameda District Specific Plan, Santo Sanchez|213-978-1361',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Arleta-Pacoima Community Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Atwater Village POD, Mary Richardson|213-978-1478',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Avenue 57/Pasadena Gold Line, Mary Richardson|213-978-1478',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Baseline Mansionization Ordinance and|',
                       '1|Baseline Hillside Ordinance, Erick Lopez|213-978-1323',
                       '0|Unit Head, Erick Lopez|213-978-1323',
                       '1|Beverly Crest � Bel Air Com Plan, Victor Vallejo|213-978-1453',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Boyle Heights Com Plan, Michael Sin|213-978-1345',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Brentwood � Pacific Palisades Com Plan, Kenton Trinh|213-978-1290',
                       '0|Unit Head, Griselda Gonzalez|213-978-1210',
                       '1|Broadway CDO, Isaiah Ross|213-978-1368',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Broadway Sign District, Isaiah Ross|213-978-1368',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Bunker Hill Specific Plan, Santo Sanchez|213-978-1361',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Canoga Park/West Hills/Winnetka/Woodland Hills Com Plan,|',
                       '0|Valentina Knox-Jones|818-374-5038',
                       '0|Will Hughen|818-374-5049',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|Canoga Park Commercial Corridor, CDO,|',
                       '0|Valentina Knox-Jones|818-374-5038',
                       '0|Will Hughen|818-374-5049',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|Canoga Park Downtown CDO; Streetscape,|',
                       '0|Valentina Knox-Jones|818-374-5038',
                       '0|Will Hughen|818-374-5049',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|Central City Com Plan, Isaiah Ross|213-978-1368',
                       '0|Santo Sanchez|213-978-1361',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Central City North Com Plan, Michael Sin|213-978-1345',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Central City West Specific Plan, Azeen Khanmalek|213-978-1336',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Century City No & So Specific Plan, Lakisha Hull|213-978-1319',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Chatsworth/Porter Ranch Com Plan, Peg Malone-Brown|818-374-5036',
                       '0|Jennifer Driver|818-374-9916',
                       '0|Unit Head, Dan ODonnell|818-374-9907',
                       '1|Coastal Bluffs Specific Plan, Kellen Hoime|213-473-9769',
                       '0|Unit Head, Jose Carlos Romero|213-978-1348',
                       '1|Colorado Blvd SP/DRB, Ondrea Tye|213-978-1197',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Cornfield Arroyo Seco Specific Plan, Michael Sin|213-978-1345',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Crenshaw Corridor Specific Plan, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Cypress Park � Glassell Park CDO, Mary Richardson|213-978-1478',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Density Bonus Ordinance, Vacant|213-482-XXXX',
                       '0|Unit Head, Kit Awakuni|213-482-0441',
                       '1|Devonshire/Topanga Corridor SP/DRB, Jennifer Driver|818-374-9916',
                       '0|Peg Malone-Brown|818-374-5036',
                       '0|Unit Head, Dan ODonnell|818-374-9907',
                       '1|Downtown Design Guide, Santo Sanchez|213-978-1361',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Downtown San Pedro CDO, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Downtown Westchester CDO, David Solaiman-Tehrani|213-978-1193',
                       '0|Unit Head, Alam Choudhury|213-978-1467',
                       '1|Echo Park ICO/CDO, Arely Monarez|213-978-1321',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Encinitas Sign District, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Encino-Tarzana Com Plan, Valentina Knox-Jones|818-374-5038',
                       '0|Will Hughen|818-374-5049',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|Fig/Olympic Sign District, Michael Sin|213-978-1345',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Figueroa/7 TH Street Sign District, Michael Sin|213-978-1345',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Fletcher Square CDO, Mary Richardson|213-978-1478',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Foothill Boulevard Corridor Specific Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Girard Tract Specific Plan, Will Hughen|818-374-5049',
                       '0|Valentina Knox-Jones|818-374-5038',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|Glencoe-Maxella Specific Plan, Harden Carter|213-978-1175',
                       '0|Unit Head, Griselda Gonzalez|213-978-1210',
                       '1|Granada Hills Specific Plan & DRB w/ Signs,|',
                       '0|Peg Malone-Brown|818-374-5036',
                       '0|Unit Head, Dan ODonnell|818-374-9907',
                       '1|Granada Hills/Knollwood Com Plan, Peg Malone-Brown|818-374-5036',
                       '0|Jennifer Driver|818-374-9916',
                       '0|Unit Head, Dan O Donnell|818-374-9907',
                       '1|Harbor Gateway Com Plan, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Hollywood Com Plan, Nicole Sanchez|213-978-3034',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Hollywood Signage Supp Use District, Nicole Sanchez|213-978-3034',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Hollywoodland Specific Plan & DRB, Nuri Cho|213-978-1177',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Jordan Downs Specific Plan, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Larchmont Boulevard, Joe Luckey|213-978-1340',
                       '0|Unit Head, Kinikia Gardner|213-978-1445',
                       '1|LAX-El Segundo Dunes Specific Plan,|',
                       '0|David Solaiman-Tehrani|213-978-1193',
                       '0|Unit Head, Jae Kim|213-978-1322',
                       '1|Lincoln Blvd CDO, Harden Carter|213-978-1175',
                       '0|Unit Head, Griselda Gonzalez|213-978-1210',
                       '1|Lincoln Heights CDO, Arely Monarez|213-978-1321',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Little Tokyo CDO, Michael Sin|213-978-1345',
                       '0|Unit Head, Jennifer Caira|213-978-1165',
                       '1|Los Angeles Sports & Entertainment District|',
                       '1|(Staples Center � Specific Plan), Jennifer Caira|213-978-1165',
                       '0|Unit Head, Blake Lamb|213-978-1167',
                       '1|Loyola Marymount University Specific Plan, Iris Wan|213-978-1186',
                       '0|Unit Head, Jose Carlos Romero|213-978-1348',
                       '1|Loyola Village CDO, Iris Wan|213-978-1186',
                       '0|Unit Head, Jose Carlos Romero|213-978-1348',
                       '1|Mello Coordinator, Juliet Oh|213-978-1186',
                       '0|Unit Head, Jae Kim|213-978-1322',
                       '1|Melrose Q Conditions, Nicole Sanchez|213-978-3034',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Miracle Mile CDO, Joe Luckey|213-978-1340',
                       '0|Unit Head, Kinikia Gardner|213-978-1445',
                       '1|Mission Hills/Panorama City-North Hills-|',
                       '1|Sepulveda Community Plan,|',
                       '0|Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Mt Washington/Glassell Park Sp, Ondrea Tye|213-978-1197',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Mulholland Scenic Parkway SP,|',
                       '0|Will Hughen|818-374-5049',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|North Westwood Village, Sheila Gershon|213-978-1376',
                       '0|Unit Head, Jason Chan|213-978-1310',
                       '1|Northeast Hillside Ordinance, Mary Richardson|213-978-1478',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|Northeast LA Community Plan, Mary Richardson|213-978-1478',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|North Hollywood /Valley Village Com Plan,|',
                       '0|Marianne King (T, TH)|818-374-5059',
                       '0|Courtney Schoenwald (M, W)|818-374-9904',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|North University Park SP/DRB, Renata Dragland|213-978-1797',
                       '0|Unit Head, Naomi Guth|213-978-1198',
                       '1|Northridge Community Plan, Peg Malone-Brown|818-374-5036',
                       '0|Unit Head, Dan O Donnell|818-374-9907',
                       '1|Oaks �D� Limitations, Azeen Khanmalek|213-978-1336',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Oaks Hillside Mansionization Overlay, Azeen Khanmalek|213-978-1336',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Oxford Triangle Specific Plan, Juliet Oh|213-978-1186',
                       '0|Unit Head, Jae Kim|213-978-1322',
                       '1|Pacific Palisades Commercial Village SP/DBB,|',
                       '0|Kenton Trihn|213-978-1290',
                       '0|Unit Head, Griselda Gonzalez|213-978-1210',
                       '1|Pacoima CDO & Streetscape Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Palms Mar Vista Community Plan, Victor Vallejo|213-978-1453',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Panorama City CDO & Streetscape Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Park Mile SP/DRB, Gabriela Juarez|213-978-1199',
                       '0|Unit Head, Kinikia Gardner|213-978-1445',
                       '1|Playa Vista Specific Plan, David Solaiman-Tehrani|213-978-1193',
                       '0|Unit Head, Jae Kim|213-978-1322',
                       '1|Ponte Vista, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Porter Ranch Land Use/Trans Specific Plan w/DRB,|',
                       '0|Peg Malone-Brown|818-374-5036',
                       '0|Unit Head, Dan O Donnell|818-374-9907',
                       '1|Priority Housing Coordinator, Iris Wan|213-978-1397',
                       '0|Unit Head,Jae H Kim|213-978-1322',
                       '1|Reseda Central Business District CDO &|',
                       '1|Streetscape, Will Hughen|818-374-5049',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|Reseda/West Van Nuys Plan & CDO, Will Hughen|818-374-5049',
                       '0|Unit Head, Tom Glick|818-374-5062',
                       '1|San Gabriel/Verdugo Mountains SP, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|San Pedro, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|San Pedro Community Plan, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|San Pedro Specific Plan, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|San Vicente Specific Plan & DRB, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Sepulveda Corridor Specific Plan, Victor Vallejo|213-978-1453',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Sherman Oaks/Studio City/Toluca Lake/Cahunega Pass Com Plan,|',
                       '0|Marianne King (T, TH)|818-374-5059',
                       '0|Courtney Schoenwald (M, W)|818-374-9904',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|Silverlake/EchoPark/Elysian Valley Com Plan,|',
                       '0|Arely Monarez|213-978-1321',
                       '0|Unit Head, Greg Shoop|213-978-1243',
                       '1|South Los Angeles Alcohol Specific Plan, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|South Los Angeles Com Plan Q, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|South Los Angeles Design Q, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Southeast Los Angeles Com Plan, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Southeast Los Angeles Com Plan Q, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Studio City Residential Floor Area,|',
                       '0|Marianne King (T, TH)|818-374-5059',
                       '0|Courtney Schoenwald M, W)|818-374-9904',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|Subdivision Section,|',
                       '0|Amanda Briones|213-978-1328',
                       '0|Joey Vasquez|213-978-1487',
                       '0|Unit Head, Kevin Golden|213-978-1396',
                       '1|Sun Valley CDO & Streetscape Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Sun Valley/La Tuna Canyon Com Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Sunland/Tujunga/Shadow Hills/Lake View Terrace/|',
                       '1|East La Tuna Canyon Com Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Sylmar Community Plan, Nelson Rodriguez|818-374-9903',
                       '0|Unit Head, Laura Frazin-Steele|818-374-9919',
                       '1|Toluca Lake Village CDO, Christine Saponara|213-978-1363',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|Urban Design Studio, Simon Pastucha|213-978-1475',
                       '0|Unit Head, Simon Pastucha|213-978-1475',
                       '1|USC Specific Plan, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Valley Circle/Plummer St Scenic Corridor Specific Plan,|',
                       '0|Jennifer Driver|818-374-9916',
                       '0|Peg Malone-Brown|818-374-5036',
                       '0|Unit Head, Dan O Donnell|818-374-9907',
                       '1|Valley Village Specific Plan,|',
                       '0|Marianne King (T, TH)|818-374-5059',
                       '0|Courtney Schoenwald (M, W)|818-374-9904',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|Van Nuys/North Sherman Oaks Com Plan,|',
                       '0|Marianne King (T, TH)|818-374-5059',
                       '0|Courtney Schoenwald (M, W)|818-374-9904',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|Van Nuys CBD, CDO & Streetscape Plan,|',
                       '0|Marianne King (T, TH)|818-374-5059',
                       '0|Courtney Schoenwald (M, W)|818-374-9904',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|Venice Coastal Specific Plan,|',
                       '0|Kellen Hoime|213-473-9769',
                       '0|Juliet Oh|213-978-1186',
                       '0|Unit Head, Jae Kim|213-978-1322',
                       '1|Venice Community Plan, Juliet Oh|213-978-1186',
                       '0|Unit Head, Jae Kim|213-978-1322',
                       '1|Ventura/Cahuenga Blvd Corridor Specific Plan;|',
                       '1|Encino, Sherman Oaks, Studio City/Cahuenga, Tarzana,|',
                       '1|and Woodland Hills Streetscape Plans|',
                       '0|Courtney Schoenwald (M, W, F)|818-374-9904',
                       '0|Marianne King (T, TH)|818-374-5059',
                       '0|Unit Head, Sarah Hounsell|818-374-9917',
                       '1|Vermont/Western (SNAP) Station Neighborhood|',
                       '1|Area Specific Plan, Nuri Cho|213-978-1177',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|Warner Center 2035 Plan, Jennifer Driver|818-374-9916',
                       '0|Peg Malone-Brown|818-374-5036',
                       '0|Unit Head, Dan O Donnell|818-374-9907',
                       '1|West Adams CPIO, Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|West Adams/Baldwin Hills/Leimert Park Com Plan,|',
                       '0|Alan Como|213-473-9985',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|West LA Community Plan, Lakisha Hull|213-978-1319',
                       '0|Unit Head, Debbie Lawrence|213-978-1163',
                       '1|West Pico Boulevard CDO, Victor Vallejo|213-978-1453',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|West Pico NOD, Victor Vallejo|213-978-1453',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Westchester-Playa Del Rey Com Plan,|',
                       '0|David Solaiman-Tehrani|213-978-1193',
                       '0|Unit Head, Alam Choudhury|213-978-1467',
                       '1|Westfield, Lakisha Hull|213-978-1319',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Westlake Community Plan, Azeen Khanmalek|213-978-1336',
                       '0|Unit Head, Mindy Nguyen|213-978-1241',
                       '1|West Wilshire Blvd CDO, Alissa Gordon|213-978-1456',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Westwood Community Plan, Sheila Gershon|213-978-1376',
                       '0|Unit Head, Jason Chan|213-978-1310',
                       '1|Westwood Boulevard POD, Sheila Gershon|213-978-1376',
                       '0|Unit Head, Jason Chan|213-978-1310',
                       '1|Westwood DRB, Matthew Quan|213-978-1320',
                       '0|Unit Head, Jason Chan|213-978-1310',
                       '1|Westwood Multi-Family, Sheila Gershon|213-978-1376',
                       '0|Unit Head, Jason Chan|213-978-1310',
                       '1|Westwood Village SP, Matthew Quan|213-978-1320',
                       '0|Unit Head, Jason Chan|213-978-1310',
                       '1|Westwood-Pico NOD, Victor Vallejo|213-978-1453',
                       '0|Unit Head, Lakisha Hull|213-978-1319',
                       '1|Wilmington-Harbor City Com Plan, Matthew Lum|213-978-1172',
                       '0|Unit Head, Michelle Singh|213-978-1166',
                       '1|Wilshire Community Plan, Joe Luckey|213-978-1340',
                       '0|Unit Head, Kinikia Gardner|213-978-1445',
                       '1|Wilshire Westwood Scenic Corridor & DRB,|',
                       '0|Sheila Gershon|213-978-1376',
                       '0|Unit Head, Jason Chan|213-978-1310'];
                       var dept_dir  =  ["COMMISSION SECRETARIAT|N/A~COMMISSION SECRETARIAT| (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~City Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~Cultural Heritage Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~Central Area Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~East Los Angeles Area Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~Harbor Area Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~North Valley Area Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~South Los Angeles Area Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~South Valley Area Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~West Los Angeles Area Planning Commission | (213) 978-1300 ",
                       "COMMISSION SECRETARIAT|N/A~Commission Office Manager, Rocky Wiles|213  978-1389 ",
                       "EXECUTIVE MANAGEMENT |N/A~Director of Planning, Vince Bertoni|213  978-1271 ",
                       "EXECUTIVE MANAGEMENT |N/A~Exec Admin Assistant, Carrie Firestone|213  978-1271 ",
                       "EXECUTIVE MANAGEMENT |N/A~Deputy Director, Lisa Webber  |213  978-1274 ",
                       "EXECUTIVE MANAGEMENT |N/A~Deputy Director, Jan Zatorski  |213  978-1273 ",
                       "EXECUTIVE MANAGEMENT |N/A~Deputy Director, Kevin Keller  |213  978-1272 ",
                       "EXECUTIVE MANAGEMENT |N/A~Exec Admin Assistant, Monica Nunez  |213  978-1271 ",
                       "EXECUTIVE MANAGEMENT |N/A~Exec Admin Assistant, Lily Quan  |213  978-1127 ",
                       "EXTERNAL AFFAIRS |N/A~External Affairs Officer, Yeghig Keshishian  |213  978-1324 ",
                       "EXTERNAL AFFAIRS |N/A~Case Manager, Andy Rodriguez  |213  978-1294 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Administrative Services Section ~Section Supervisor, Ly Lam  |213  978-1206 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Administrative Services Section ~Sr Analyst I, Tiffany Butler  |213  978-1983 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Administrative Services Section ~Analyst II, Maria Ortiz  |213  978-1291 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Accounting & Purchasing ~Section Supervisor, Livea Yeh  |213  978-1268 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Accounting & Purchasing ~Senior Accountant II, Zenaida Agustin  |213  978-1286 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Accounting & Purchasing ~Timekeeper Supervisor, Gina Ginete  |213  978-0169 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Accounting & Purchasing ~Timekeeper, Elvira Mendez  |213  978-1285 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Department Operations Section ~Section Supervisor, Beatrice Pacheco  |213  978-1260 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Department Operations Section ~Principal Clerk, Kevin Roth  |213  978-1458 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Department Operations Section ~Automated Records Counter   |213  978-1259 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Department Operations Section ~Central Publications Counter  |213  978-1255 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Department Operations Section ~Document Imaging|213  978-1327 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Department Operations Section ~Mail/Duplicating Counter|213  978-1257 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Personnel Services Section ~Personnel Director II, Ruben Vasquez  |213  978-1772 ",
                       "ADMINISTRATIVE SERVICES DIVISION |Personnel Services Section ~Management Assistant, Mindy De Young  |213  473-9958 ",
                       "INFORMATION TECHNOLOGIES DIVISION |N/A~General Information/Helpdesk|213  978-1455 ",
                       "INFORMATION TECHNOLOGIES DIVISION |N/A~Director of Systems, James VanGerpen  |213  978-1399 ",
                       "INFORMATION TECHNOLOGIES DIVISION |N/A~Secretary, Mary Quon  |213  978-1393 ",
                       "INFORMATION TECHNOLOGIES DIVISION |N/A~GIS Chief, Betty Dong  |213  978-1392 ",
                       "INFORMATION TECHNOLOGIES DIVISION |N/A~GIS Supervisor II, Fae Tsukamoto  |213  978-1420 ",
                       "INFORMATION TECHNOLOGIES DIVISION |N/A~Sr Systems Analyst II, David Terukina  |213  978-1427 ",
                       "HISTORIC RESOURCES DIVISION |N/A~General Information|213  978-6364 ",
                       "HISTORIC RESOURCES DIVISION |N/A~Division Manager, Ken Bernstein   |213  978-1181 ",
                       "HISTORIC RESOURCES DIVISION |N/A~Historic Preservation Overlay Zones, Naomi Guth   |213  978-1198 ",
                       "HISTORIC RESOURCES DIVISION |Office of Historic Resources ~SurveyLA, Janet Hansen  |213  978-1191 ",
                       "HISTORIC RESOURCES DIVISION |Office of Historic Resources ~Architect, Lambert Giessinger  |213  978-1183 ",
                       "HISTORIC RESOURCES DIVISION |Office of Historic Resources ~Preservation Planner, Sara Cruz   |213  978-1189 ",
                       "HISTORIC RESOURCES DIVISION |Office of Historic Resources ~Preservation Planner, Melissa Jones   |213  978-1192 ",
                       "HISTORIC RESOURCES DIVISION |Citywide Policy ~Sr City Planner, Claire Bowin  |213  978-1213 ",
                       "COMMUNITY PLANNING DIVISION |N/A~General Information|213  978-1164 ",
                       "COMMUNITY PLANNING DIVISION |N/A~Division Manager, Craig Weber   |213  978-1311 ",
                       "COMMUNITY PLANNING DIVISION |N/A~Section I, Sr City Planner, Patricia Diefenderfer  |213  978-1170 ",
                       "COMMUNITY PLANNING DIVISION |N/A~Section II, Sr City Planner, Conni Pallini-Tipton  |213  978-1179 ",
                       "COMMUNITY PLANNING DIVISION |N/A~Section III, Sr City Planner, Jonathan Hershey  |213  978-1337 ",
                       "COMMUNITY PLANNING DIVISION |Code Studies (re:Code LA) ~Division Manager, Prin City Planner, Tom Rothmann|213  978-1891 ",
                       "COMMUNITY PLANNING DIVISION |Code Studies (re:Code LA) ~re:Code LA Unit 1 - City Planner, Erick Lopez  |213  978-1323 ",
                       "COMMUNITY PLANNING DIVISION |Code Studies (re:Code LA) ~re:Code LA Unit 2 - City Planner, Deborah Kahen  |213  978-1202 ",
                       "COMMUNITY PLANNING DIVISION |Code Studies (re:Code LA) ~re:Code LA Unit 2 -City Planner, Phyllis Nathanson  |213  978-1474 ",
                       "PROJECT PLANNING DIVISION |Major Projects & EIR ~General Information �|213  978-1332 ",
                       "PROJECT PLANNING DIVISION |Major Projects & EIR ~Major Projects & EIR, AZA, Charlie Rausch |213  978-1306 ",
                       "PROJECT PLANNING DIVISION |Major Projects & EIR ~Major Projects, (Metro) Luci Ibarra      |213  978-1378 ",
                       "PROJECT PLANNING DIVISION |Major Projects & EIR ~Major Projects, (Valley), Elva O'Donnell|818  374-5066 ",
                       "PROJECT PLANNING DIVISION |Major Projects & EIR ~Environmental Analysis, Karen Hoo|213  978-1331 ",
                       "PROJECT PLANNING DIVISION |Major Projects & EIR ~Urban Design Studio, Simon Pastucha  |213  978-0628 ",
                       "PROJECT PLANNING DIVISION |Central Projects Planning ~General Information �|213  978-1160 ",
                       "PROJECT PLANNING DIVISION |Central Projects Planning ~Principal City Planner, Shana Bonstin  |213  978-1217 ",
                       "PROJECT PLANNING DIVISION |Central Projects Planning ~Sr City Planner, Blake Lamb  |213  978-1167 ",
                       "PROJECT PLANNING DIVISION |West/Coastal & South Project Planning ~General Information �|213  978-1371 ",
                       "PROJECT PLANNING DIVISION |West/Coastal & South Project Planning ~Principal City Planner, Faisal Robles  |213  978-1168 ",
                       "PROJECT PLANNING DIVISION |West/Coastal & South Project Planning ~Sr City Planner, Debbie Lawrence  |213  978-1163 ",
                       "PROJECT PLANNING DIVISION |West/Coastal & South Project Planning ~Sr City Planner, Jae Kim  |213  978-1322 ",
                       "PROJECT PLANNING DIVISION |Valley Project Planning ~General Information|818  374-9941 ",
                       "PROJECT PLANNING DIVISION |Valley Project Planning ~Principal City Planner, Shana Bonstin  |213  978-1217 ",
                       "PROJECT PLANNING DIVISION |Valley Project Planning ~Sr City Planner, Kevin Jones  |818  374-5072 ",
                       "PROJECT PLANNING DIVISION |Valley Project Planning ~Northeast Valley, Laura Frazin Steele  |818  374-9919 ",
                       "PROJECT PLANNING DIVISION |Valley Project Planning ~Northwest Valley, Dan O'Donnell  |818  374-9907 ",
                       "PROJECT PLANNING DIVISION |Valley Project Planning ~Southeast Valley, Sarah Hounsell  |818  374-9917 ",
                       "PROJECT PLANNING DIVISION |Valley Project Planning ~Southwest Valley, Tom Glick  |818  374-5062 ",
                       "PROJECT PLANNING DIVISION |Expedited Processing Section ~General Information|213  473-9984 ",
                       "PROJECT PLANNING DIVISION |Expedited Processing Section ~Sr City Planner, Nicholas Hendricks  |213  978-1383 ",
                       "PROJECT PLANNING DIVISION |Expedited Processing Section ~City Planner, Heather Bleemers|213  978-0092 ",
                       "PROJECT PLANNING DIVISION |Expedited Processing Section ~City Planner, Jenna Monterrosa|213  978-1377 ",
                       "PROJECT PLANNING DIVISION |Expedited Processing Section ~City Planner, May Sirinopwongsagon|213  978-1372 ",
                       "PROJECT PLANNING DIVISION |Expedited Processing Section ~City Planner, Jordann Turner|213  978-1365 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~General Information|213  978-1318 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Chief Zoning Administrator, Linn Wyatt  |213  978-1318 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Sr City Planner, Jon Foreman  |213  978-1387 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Management Analyst II, Stacy Munoz  |213  978-1354 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrators  |213  978-1318 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, Jack Chiang  |213  978-0195 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, Henry Chu |213  978-1324 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, Lourdes Green  |213  978-1313 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, Theodore Irving  |213  978-1366 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, Aleta James  |213  202-5402 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, Fernando Tovar  |213  978-1303 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, David Weintraub  |213  978-3094 ",
                       "ZONING ADMINISTRATION DIVISION |N/A~Associate Zoning Administrator, Maya Zaitzevsky  |818  374-5069 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~General Information - Metro  |213  482-7077 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~Principal City Planner, Estineh Mailian  |213  482-0421 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~Metro Counter, City Planner, Herman Van Buren |213  482-7074 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~Metro Counter, City Planner, Maritza Przekop  |213  482-0482 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~Metro Counter, Housing Unit, Ulises Gonzalez  |213  202-5414 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~Metro Counter, Housing Unit, Eric Claros  |213  202-5448 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~Metro Counter, Wireless Unit, Tina Vacharkulksemsuk  |213  202-5423 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~City Planner, Kit Awakuni  |213  482-0441 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~City Planning Associate, Susan Zermeno  |213  482-7073 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Metro~Planning Assistant, Cassandra Van Der Zweep  |213  482-0376 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Valley~General Information - Valley|818  374-5050 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Valley~Sr City Planner, Ralph Avila  |818  374-9915 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Valley~Valley Counter, Herminigildo Agustin  |818  374-5028 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Valley~Valley Counter, Susan Whisnant  |818  374-1121 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Valley~Valley Counter, Anna Vidal  |818  374-5029 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Condition Compliance / Nuisance Abatement / Revocation Section ~General Information  |213  202-5464 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Condition Compliance / Nuisance Abatement / Revocation Section ~Sr City Planner, Bob Duenas   |213  202-5460 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Condition Compliance / Nuisance Abatement / Revocation Section ~Sr Administrative Clerk, Melvina Adlerberg  |213  202-5434 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Condition Compliance / Nuisance Abatement / Revocation Section ~Administrative Clerk, Felipe Ortega  |213  202-5435 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Condition Compliance / Nuisance Abatement / Revocation Section ~BESt, Vanessa Soto  |213  202-5409 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Condition Compliance / Nuisance Abatement / Revocation Section ~MViP, Mariana Valdivia  |213  202-5408 ",
                       "DEVELOPMENT SERVICE CENTER DIVISION |Condition Compliance / Nuisance Abatement / Revocation Section ~Nuisance Abatement/Revocations, City Planner, Tim Fargo  |213  202-5407 ",
                       "FAX NUMBERS|N/A~Accounting, Room 570, CH  |213  978-2232 ",
                       "FAX NUMBERS|N/A~Admin Services, Room 525, CH  |213  978-0595 ",
                       "FAX NUMBERS|N/A~Automated Records, Room 575, CH  |213  978-1263 ",
                       "FAX NUMBERS|N/A~Case Management, 10TH Fl, 201 N Figueroa  |213  482-6874  ",
                       "FAX NUMBERS|N/A~Commission Office, Room 532, CH  |213  978-1029 ",
                       "FAX NUMBERS|N/A~Exec Office, Room 525, CH  |213  978-1275 ",
                       "FAX NUMBERS|N/A~Expediting, Room 721, CH  |213  978-4656 ",
                       "FAX NUMBERS|N/A~Expediting, Room 721, CH  |213  978-1343 ",
                       "FAX NUMBERS|N/A~Historic Resources, Room 559, CH|213 978-0017",
                       "FAX NUMBERS|N/A~HPOZ, Room 601, CH  |213  978-6566 ",
                       "FAX NUMBERS|N/A~Major Projects & EIR, Room 705, CH  |213  978-1343 ",
                       "FAX NUMBERS|N/A~Metro Neighborhood Project, Room 621, CH  |213  978-1226 ",
                       "FAX NUMBERS|N/A~Personnel, Room 220, CH  |213  978-1251 ",
                       "FAX NUMBERS|N/A~Planning Policy, Room 667, CH  |213  978-1477 ",
                       "FAX NUMBERS|N/A~Subdivision, Room 720, CH  |213  978-8115 ",
                       "FAX NUMBERS|N/A~Systems/GIS, Room 825, CH  |213  978-1404 ",
                       "FAX NUMBERS|N/A~Zoning Administrative Office, Room 763, CH  |213  978-1334 ",
                       "FAX NUMBERS|N/A~201 N Figueroa St, Fax #1  |213  482-7080 ",
                       "FAX NUMBERS|N/A~6262 Van Nuys Blvd, Ste 251, Van Nuys  |818  374-5075 ",
                       "FAX NUMBERS|N/A~6262 Van Nuys Blvd, Ste 351, Van Nuys  |818  374-5070 ",
                       "FAX NUMBERS|N/A~6262 Van Nuys Blvd, Ste 430, Van Nuys  |818  374-9955 "];
                       var employees = ["DAVID ABBOTT|(213) 978-1424|DAVID.ABBOTT@LACITY.ORG|GEOG INFO SPECIALIST",
                                        "GRACIELA ACOSTA|(213) 482-7072|GRACIELA.ACOSTA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MONIQUE ACOSTA|(213) 978-1173|MONIQUE.ACOSTA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MELVINA ADLERSBERG|() -||SR ADMINISTRATIVE CLERK",
                                        "HERMI AGUSTIN|(818) 374-5028|Herminigildo.Agustin@lacity.org|CITY PLANNER",
                                        "ZENAIDA AGUSTIN|(213) 978-1286|zenaida.agustin@lacity.org|SR ACCOUNTANT II",
                                        "ESTHER AHN|(213) 978-1486|ESTHER.AHN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "ARMANDO ALFARO|(213) 978-1412|Armando.Alfaro@lacity.org|GEOG INFO SPECIALIST",
                                        "MELISSA ALOFAITULI|(213) 978-1201|MELISSA.WATSON@LACITY.ORG|CITY PLANNING ASSOC",
                                        "JESSICA ALVARADO|() -||PLANNING ASSISTANT",
                                        "ESTHER AMAYA|(213) 978-1211|ESTHER.AMAYA@LACITY.ORG|PLANNING ASSISTANT",
                                        "BRITTANY ARCENEAUX|(213) 978-1911||CITY PLANNING ASSOC",
                                        "ETTA ARMSTRONG|() -||COMMISSION EXEC ASST I",
                                        "DELIA ARRIAGA ANAYA|() -||STUDENT PROF WORKER",
                                        "HAROLD ARRIVILLAGA|(213) 978-1296|HAROLD.ARRIVILLAGA@LACITY.ORG|COMMISSION EXEC ASST I",
                                        "RALPH AVILA|(818) 374-9915|RALPH.AVILA@LACITY.ORG|SR CITY PLANNER",
                                        "IRIS AWAKUNI|(213) 978-1249|IRIS.FAGAR-AWAKUNI@LACITY.ORG|CITY PLANNER",
                                        "KIT AWAKUNI|(213) 482-0441|KIT.AWAKUNI@LACITY.ORG|CITY PLANNER",
                                        "NICHOLAS AYARS|(213) 202-5438|NICHOLAS.AYARS@LACITY.ORG|PLANNING ASSISTANT",
                                        "LIN BAI|() -||OPER & STATS RES ANL I",
                                        "TERESA BATSON|() -||CITY PLANNING ASSOC",
                                        "PHILLIP BAZAN|(213) 978-1309|phillip.bazan@lacity.org|MANAGEMENT ANALYST II",
                                        "DENISE BELL|(213) 482-7093|DENISE.BOONE@LACITY.ORG|ADMINISTRATIVE CLERK",
                                        "DAISY BENICIA|(213) 482-7093|DAISY.BENICIA@LACITY.ORG|PLANNING ASSISTANT",
                                        "KEN BERNSTEIN|(213) 978-1181|KEN.BERNSTEIN@LACITY.ORG|PR CITY PLANNER",
                                        "VINCENT BERTONI|(213) 978-1271|Vince.Bertoni@lacity.org|DIR OF PLANNING",
                                        "JUSTIN BILOW|(213) 482-7083|JUSTIN.BILOW@LACITY.ORG|PLANNING ASSISTANT",
                                        "ANA BLANCARTE|(818) 374-9908|ANALISA.BLANCARTE@LACITY.ORG|STUDENT PROF WORKER",
                                        "HEATHER BLEEMERS|(213) 978-0092|HEATHER.BLEEMERS@LACITY.ORG|CITY PLANNER",
                                        "KARIN BOGHOSKHANIAN|(818) 974-9923|KARIN.BOGHOSKHANIAN@LACITY.ORG|STUDENT PROF WORKER",
                                        "SHANA BONSTIN|(213) 978-1217|Shana.Bonstin@lacity.org|PR CITY PLANNER",
                                        "CLAIRE BOWIN|(213) 978-1213|Claire.Bowin@lacity.org|SR CITY PLANNER",
                                        "AMANDA BRIONES|(213) 978-1328|AMANDA.BRIONES@LACITY.ORG|PLANNING ASSISTANT",
                                        "ARIANE BRISKI|(213) 978-1220|ariane.briski@lacity.org|CITY PLANNING ASSOC",
                                        "JUNE BUI|(213) 978-1408|JUNE.BUI@LACITY.ORG|PROGRAMMER/ANALYST V",
                                        "TIFFANY BUTLER|(213) 978-1283|TIFFANY.BUTLER@LACITY.ORG|SR MGMT ANALYST I",
                                        "JENNIFER CAIRA|(213) 978-1165|JENNIFER.CAIRA@LACITY.ORG|CITY PLANNER",
                                        "ANDRE CALDERON|() -||CITY PLANNING ASSOC",
                                        "REUBEN CALDWELL|(213) 978-1209|REUBEN.CALDWELL@LACITY.ORG|CITY PLANNER",
                                        "BRIAN CARR|(213) 482-7083|BRIAN.R.CARR@LACITY.ORG|CITY PLANNING ASSOC",
                                        "HARDEN CARTER|(213) 978-1175|HARDEN.CARTER@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MICHELLE S CARTER|(213) 202-5442||CITY PLANNING ASSOC",
                                        "JASON CHAN|(213) 978-1310|JASON.CHAN@LACITY.ORG|CITY PLANNER",
                                        "ANGELA CHANG|(213) 978-1434|angela.chang@lacity.org|OPER & STATS RES ANL I",
                                        "JONATHAN CHANG|() -||CITY PLANNING ASSOC",
                                        "LAMEESE CHANG|(213) 978-1178|LAMEESE.CHANG@LACITY.ORG|CITY PLANNER",
                                        "MICHAEL CHANG|(213) 978-1452|michael.chang@lacity.org|SYSTEMS ANALYST II",
                                        "LYDIA CHAPMAN|() -||CITY PLANNING ASSOC",
                                        "CONNIE CHAUV|(213) 978-0016|CONNIE.CHAUV@LACITY.ORG|CITY PLANNING ASSOC",
                                        "DENNIS CHEW|(818) 374-5025|Dennis.Chew@lacity.org|CITY PLANNING ASSOC",
                                        "JACK CHIANG|(213) 978-0195|Jack.Chiang@lacity.org|ASSOC ZONING ADMINSTR",
                                        "JONATHAN CHIU|(213) 978-1915|JONATHAN.CHIU@LACITY.ORG|ADMINISTRATIVE CLERK",
                                        "NURI CHO|(213) 978-1177|NURI.CHO@LACITY.ORG|PLANNING ASSISTANT",
                                        "JANE CHOI|(213) 978-1379|Jane.Choi@lacity.org|SR CITY PLANNER",
                                        "LILIAN CHOU|() -||STUDENT PROF WORKER",
                                        "ALAM CHOUDHURY|(213) 978-1467|ALAM.CHOUDHURY@LACITY.ORG|CITY PLANNER",
                                        "HENRY CHU|(213) 978-1225|Henry.Chu@lacity.org|ASSOC ZONING ADMINSTR",
                                        "LINDA CLARKE|(213) 978-1305|LINDA.CLARKE@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "ERIC CLAROS|() -|ERIC.CLAROS@LACITY.ORG|PLANNING ASSISTANT",
                                        "MARIE COBIAN|(213) 978-0626|MARIE.COBIAN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "ERIN COLEMAN|(213) 978-1338|Erin.Coleman@lacity.org|CITY PLANNING ASSOC",
                                        "ALAN COMO|(213) 473-9985|Alan.Como@lacity.org|CITY PLANNING ASSOC",
                                        "GISELLE CORELLA|(213) 978-1357|giselle.corella@lacity.org|CITY PLANNING ASSOC",
                                        "LISETTE COVARRUBIAS|(213) 202-5439|LISETTE.COVARRUBIAS@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MARY CROWELL|(818) 374-5074|MARY.CROWELL@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "SARA CRUZ|(213) 978-1189||CITY PLANNING ASSOC",
                                        "JOHN DACEY|(213) 482-7340|john.dacey@lacity.org|CITY PLANNING ASSOC",
                                        "MING DAI|(213) 978-1428|Ming.Dai@lacity.org|DATA BASE ARCHITECT",
                                        "GLORIA DEAN|(213) 482-7089|GLORIA.DEAN@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "COLLETTE DEL POSO|() -||STUDENT PROF WORKER",
                                        "RODEL DELA CRUZ|(213) 978-1292|RODEL.DELACRUZ@LACITY.ORG|SR ACCOUNTANT I",
                                        "RENATA DERMENGI DRAGLAND|(213) 978-1797|RENATA.DRAGLAND@LACITY.ORG|CITY PLANNING ASSOC",
                                        "RITA DIAZ|() -||OFFICE ENGINEERING TECHNICIAN",
                                        "PATRICIA DIEFENDERFER|(213) 978-1170|Patricia.Diefenderfer@lacity.org|SR CITY PLANNER",
                                        "DAVID DIEUDONNE|(213) 978-1432|David.Dieudonne@lacity.org|GEOG INFO SYS SUPVR I",
                                        "DANALYNN DOMINGUEZ|(213) 978-1191||CITY PLANNING ASSOC",
                                        "XANDRO DONADO|() -||GRAPHICS DESIGNER III",
                                        "BETTY DONG|() -||GEOG INFO SYS CHIEF",
                                        "BABAK DORJI|() -||STUDENT PROF WORKER",
                                        "JASON DOUGLAS|() -||CITY PLANNING ASSOC",
                                        "NORA DRESSER|(213) 978-1346|NORA.DRESSER@LACITY.ORG|CITY PLANNER",
                                        "JENNIFER DRIVER|(818) 374-9916|Jennifer.Driver@lacity.org|CITY PLANNING ASSOC",
                                        "ROBERT DUENAS|(213) 202-5427|BOB.DUENAS@LACITY.ORG|SR CITY PLANNER",
                                        "ROSE OLIVA DUROY|(213) 978-1284||ACCOUNTANT II",
                                        "BRYAN ECK|(213) 978-1304|BRYAN.ECK@LACITY.ORG|CITY PLANNER",
                                        "JOSE ELIAS|(213) 202-5437|JOSE.ELIAS@LACITY.ORG|CITY PLANNING ASSOC",
                                        "ZURIEL ESPINOSA-SALAS|(213) 202-5446|ZURIEL.ESPINOSA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "JAIME ESPINOZA|(213) 978-1250||CITY PLANNING ASSOC",
                                        "CUONG FAN|(213) 978-1468|CUONG.FAN@LACITY.ORG|GEOG INFO SYS SUPVR I",
                                        "STACY FARFAN|() -||CITY PLANNING ASSOC",
                                        "TIMOTHY FARGO|(213) 202-5407|TIM.FARGO@LACITY.ORG|CITY PLANNER",
                                        "CARRIE FIRESTONE|(213) 978-1245||EXEC ADMIN ASST III",
                                        "ROBERT FLORES|(213) 978-1437|Robert.Flores@lacity.org|GEOG INFO SPECIALIST",
                                        "JON FOREMAN|(213) 978-1387|Jon.Foreman@lacity.org|SR CITY PLANNER",
                                        "LAURA FRAZIN STEELE|(213) 202-5414|LAURA.FRAZINSTEELE@LACITY.ORG|CITY PLANNER",
                                        "BRADLEY FURUYA|(213) 978-1218|Bradley.Furuya@lacity.org|PLANNING ASSISTANT",
                                        "EMILY GABLE|() -||CITY PLANNING ASSOC",
                                        "ELIZABETH GALLARDO|(213) 978-1297||CITY PLANNING ASSOC",
                                        "EDGAR GARCIA|() -|Edgar.Garcia@lacity.org|ARTS MANAGER I",
                                        "STEVE GARCIA|() -||PLANNING ASSISTANT",
                                        "KINIKIA GARDNER|(213) 978-1445|KINIKIA.GARDNER@LACITY.ORG|CITY PLANNER",
                                        "SHEILA GERSHON|(213) 978-1376|SHEILA.GERSHON@LACITY.ORG|PLANNING ASSISTANT",
                                        "LAMBERT GIESSINGER|(213) 978-1183|Lambert.Giessinger@lacity.org|ARCHITECT",
                                        "GINA GINETE|(213) 978-0169||ACCOUNTANT II",
                                        "RONY GIRON|(213) 202-5403|RONY.GIRON@LACITY.ORG|CITY PLANNING ASSOC",
                                        "RENEE GLASCO|(213) 978-1134|RENEE.GLASCO@LACITY.ORG|COMMISSION EXEC ASST I",
                                        "MATTHEW GLESNE|(213) 978-2666|MATTHEW.GLESNE@LACITY.ORG|CITY PLANNER",
                                        "TOM GLICK|(818) 374-5062|TOM.GLICK@LACITY.ORG|CITY PLANNER",
                                        "KEVIN GOLDEN|(213) 978-1396|KEVIN.GOLDEN@LACITY.ORG|CITY PLANNER",
                                        "SARAH GOLDMAN|(213) 978-1182||CITY PLANNING ASSOC",
                                        "MOIRA GOMEZ|(213) 978-1371||SR ADMINISTRATIVE CLERK",
                                        "GRISELDA GONZALEZ|(213) 978-1210|GRISELDA.GONZALEZ@LACITY.ORG|CITY PLANNER",
                                        "ULISES GONZALEZ|(213) 202-5411|ULISES.GONZALEZ@LACITY.ORG|CITY PLANNING ASSOC",
                                        "ALISSA GORDON|(213) 978-1456|ALISSA.GORDON@LACITY.ORG|CITY PLANNING ASSOC",
                                        "KAROLINA GORSKA|() -||PLANNING ASSISTANT",
                                        "LOURDES GREEN|(213) 978-1313|Lourdes.Green@lacity.org|ASSOC ZONING ADMINSTR",
                                        "ELIZABETH GUDINO|(213) 978-0636|Elizabeth.Gudino@lacity.org|GRAPHICS DESIGNER II",
                                        "NAOMI GUTH|(213) 978-1198|Naomi.Guth@lacity.org|CITY PLANNER",
                                        "DEZIREE GUTIERREZ|(213) 978-1414|deziree.gutierrez@lacity.org|STUDENT PROF WORKER",
                                        "SALVADOR GUTIERREZ|() -||STUDENT PROF WORKER",
                                        "TYNA HALL BRADLEY|(213) 978-1364|TYNA.HALL@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "DIANE HAMILTON|(213) 978-1298|DIANE.HAMILTON@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "JANET HANSEN|(213) 978-1191|Janet.Hansen@lacity.org|SR CITY PLANNER",
                                        "TAL HARARI|(213) 978-1204|TAL.HARARI@LACITY.ORG|CITY PLANNING ASSOC",
                                        "CALLY HARDY|() -||CITY PLANNING ASSOC",
                                        "ALEX HEATH|(213) 978-0627|alex.heath@lacity.org|CITY PLANNING ASSOC",
                                        "NICHOLAS HENDRICKS|(213) 978-1383|Nick.Hendricks@lacity.org|SR CITY PLANNER",
                                        "KIMBERLY HENRY|(213) 978-1216|Kimberly.Henry@lacity.org|CITY PLANNING ASSOC",
                                        "TOM HENRY|(818) 374-5027|TOM.HENRY@LACITY.ORG|CITY PLANNING ASSOC",
                                        "ELVIA HERNANDEZ|(213) 978-0639|ELVIA.HERNANDEZ@LACITY.ORG|GRAPHICS SUPERVISOR I",
                                        "JASON HERNANDEZ|() -||PLANNING ASSISTANT",
                                        "LORENA HERNANDEZ|(213) 978-1429|Lorena.Hernandez@lacity.org|GEOG INFO SPECIALIST",
                                        "MIGUEL HERNANDEZ|(818) 374-9918||ADMINISTRATIVE CLERK",
                                        "JONATHAN HERSHEY|(213) 978-1337|Jonathan.Hershey@lacity.org|SR CITY PLANNER",
                                        "SRIMAL HEWAWITHARANA|(213) 978-1359|Srimal.Hewawitharana@lacity.org|ENVIRONMENTAL SPEC II",
                                        "GARY HIMAN|(213) 978-1425|Gary.Himan@lacity.org|GEOG INFO SYS SUPVR I",
                                        "KELLEN HOIME|(213) 473-9769|KELLEN.HOIME@LACITY.ORG|CITY PLANNING ASSOC",
                                        "JOAN HOLAZA|(213) 978-1256|Joan.Holaza@lacity.org|SR ADMINISTRATIVE CLERK",
                                        "KAREN HOO|(213) 978-1331|karen.hoo@lacity.org|CITY PLANNER",
                                        "GHAZAL HOOSHMAND|() -||STUDENT PROF WORKER",
                                        "SARAH HOUNSELL|(818) 374-9917|SARAH.HOUNSELL@LACITY.ORG|CITY PLANNER",
                                        "WILLIAM HSU|(213) 978-2289||CITY PLANNING ASSOC",
                                        "ALEJANDRO HUERTA|(213) 978-1454|ALEJANDRO.HUERTA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "NIALL HUFFMAN|(213) 978-3405|NIALL.HUFFMAN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "WILLIAM HUGHEN|(818) 374-5049||CITY PLANNING ASSOC",
                                        "LAKISHA HULL|(213) 978-1319|LAKISHA.HULL@LACITY.ORG|CITY PLANNER",
                                        "LUCI IBARRA|(213) 978-1378|Luciralia.Ibarra@lacity.org|SR CITY PLANNER",
                                        "SERGIO IBARRA|(213) 978-1333|SERGIO.IBARRA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "NINA IDEMUDIA|(213) 202-5440|NINA.IDEMUDIA@LACITY.ORG|PLANNING ASSISTANT",
                                        "FABIOLA INZUNZA ARMENTA|(213) 978-1302||CITY PLANNING ASSOC",
                                        "THEODORE IRVING|(213) 978-1366|THEODORE.IRVING@LACITY.ORG|ASSOC ZONING ADMINSTR",
                                        "ANTONIO ISAIA|(213) 978-1353|ANTONIO.ISAIA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "SCOTT JACKSON|(213) 978-1494|scott.jackson@lacity.org|GEOG INFO SPECIALIST",
                                        "ALETA JAMES|(213) 202-5402|ALETA.JAMES@LACITY.ORG|ASSOC ZONING ADMINSTR",
                                        "DON JEFFERSON|(213) 978-1299|DON.JEFFERSON@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "KEVIN JONES|(818) 374-5072|KEVIN.JONES@LACITY.ORG|SR CITY PLANNER",
                                        "MELISSA JONES|(213) 978-1192||ARCHITECTURAL ASSOC II",
                                        "MICHELLE JONES|() -||SR ADMINISTRATIVE CLERK",
                                        "TORIKA JONES|() -|Ioana.Ciurariu@lacity.org|STUDENT PROF WORKER",
                                        "ANDREW JORGENSEN|(213) 978-1281|ANDREW.JORGENSEN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "GABRIELA JUAREZ|(213) 978-1199|GABRIELA.JUAREZ@LACITY.ORG|CITY PLANNING ASSOC",
                                        "DEBORAH KAHEN|(213) 978-1202|DEBORAH.KAHEN@LACITY.ORG|CITY PLANNER",
                                        "BRENDA KAHINJU|() -||SR ADMINISTRATIVE CLERK",
                                        "AIDA KARAPETIAN|(213) 202-5450|AIDA.KARAPETIAN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "STEVEN KATIGBAK|(213) 978-1349|STEVEN.KATIGBAK@LACITY.ORG|PLANNING ASSISTANT",
                                        "ROBERT KEATINGE|() -||STUDENT PROF WORKER",
                                        "KEVIN KELLER|(213) 978-1272|KEVIN.KELLER@LACITY.ORG|DEPUTY DIR OF PLANNING",
                                        "CLARE KELLEY|(213) 978-1207|CLARE.KELLEY@LACITY.ORG|PLANNING ASSISTANT",
                                        "UWE KERNER|() -||MANAGEMENT ANALYST II",
                                        "YEGHIG KESHISHIAN|() -||PUB INFO DIRECTOR I",
                                        "ATA KHAN|() -||PLANNING ASSISTANT",
                                        "AZEEN KHANMALEK|(213) 978-1336|AZEEN.KHANMALEK@LACITY.ORG|CITY PLANNING ASSOC",
                                        "JEFFREY KHAU|() -||CITY PLANNING ASSOC",
                                        "SUNGHEA KHIL|(213) 482-6982||STUDENT PROF WORKER",
                                        "BONNIE KIM|(213) 978-1330|BONNIE.KIM@LACITY.ORG|CITY PLANNING ASSOC",
                                        "JAE KIM|(213) 978-1322|JAE.H.KIM@LACITY.ORG|SR CITY PLANNER",
                                        "STEVE KIM|(213) 482-7340|STEVE.KIM@LACITY.ORG|CITY PLANNING ASSOC",
                                        "KATHLEEN KING|(213) 978-1195||CITY PLANNING ASSOC",
                                        "MARIANNE KING|(818) 374-5059|MARIANNE.KING@LACITY.ORG|CITY PLANNING ASSOC",
                                        "DIANA KITCHING|(213) 978-1308|DIANA.KITCHING@LACITY.ORG|CITY PLANNER",
                                        "VALENTINA KNOX-JONES|(818) 374-5054|VALENTINA.KNOX.JONES@LACITY.ORG|CITY PLANNING ASSOC",
                                        "LAURA KRAWCZYK|(213) 978-1212|LAURA.KRAWCZYK@LACITY.ORG|CITY PLANNING ASSOC",
                                        "TIM KY|(213) 978-1423|Tim.Ky@lacity.org|SR SYSTEMS ANALYST I",
                                        "MY LA|(213) 978-1194|MY.LA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "LY LAM|(213) 978-1206|Ly.T.Lam@lacity.org|SR MGMT ANALYST II",
                                        "CECILIA LAMAS|() -||SR ADMINISTRATIVE CLERK",
                                        "BLAKE LAMB|(213) 978-1167|Blake.Lamb@lacity.org|SR CITY PLANNER",
                                        "WILLIAM LAMBORN|(213) 978-1470|WILLIAM.LAMBORN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "REVA LANYON|() -||STUDENT PROF WORKER",
                                        "NELSON LARIOS|(213) 978-1327|Nelson.Larios@lacity.org|SR ADMINISTRATIVE CLERK",
                                        "DEBBIE LAWRENCE|(213) 978-1163|Debbie.Lawrence@lacity.org|SR CITY PLANNER",
                                        "ABRAM LEAL|(213) 978-1433||GEOG INFO SPECIALIST",
                                        "CHARLES LEE|(213) 978-1441|CHARLES.S.LEE@LACITY.ORG|GEOG INFO SYS SUPVR II",
                                        "CHRISTINA LEE|(213) 473-9723|CHRISTINA.TOY-LEE@LACITY.ORG|CITY PLANNER",
                                        "JAE LEE|(213) 978-1282|Jae.Y.Lee@lacity.org|ACCOUNTING CLERK",
                                        "FIPE LEILUA|(213) 473-9984|FIPE.LEILUA@LACITY.ORG|PLANNING ASSISTANT",
                                        "CHI LIM|(213) 202-5441|JOANN.LIM@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MAX LODER|() -||STUDENT PROF WORKER",
                                        "ERICK LOPEZ|(213) 978-1323|ERICK.LOPEZ@LACITY.ORG|CITY PLANNER",
                                        "JACOB LOPEZ|(213) 978-1261|JACOB.LOPEZ@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "LINDA LOU|(213) 978-1473|LINDA.LOU@LACITY.ORG|CITY PLANNING ASSOC",
                                        "YI LU|(213) 978-1287|YI.LU@LACITY.ORG|CITY PLANNING ASSOC",
                                        "STEPHANIE LUCKETT|(213) 978-1447|STEPHANIE.LUCKETT@LACITY.ORG|SYSTEMS ANALYST II",
                                        "JOE LUCKEY|(213) 978-1340|JOE.LUCKEY@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MAIDEL LUEVANO|() -|MAIDEL.LUEVANO@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MATTHEW LUM|(213) 978-1172||CITY PLANNING ASSOC",
                                        "TIMMY LUONG|(213) 978-1407|timmy.luong@lacity.org|GEOG INFO SPECIALIST",
                                        "EDBER MACEDO|(213) 482-7084||CITY PLANNING ASSOC",
                                        "LAURA MACPHERSON|(213) 978-1187|LAURA.MACPHERSON@LACITY.ORG|PLANNING ASSISTANT",
                                        "ESTINEH MAILIAN|(213) 482-0421|ESTINEH.MAILIAN@LACITY.ORG|PR CITY PLANNER",
                                        "PEGGY MALONE BROWN|(818) 374-9907|PEGGY.MALONE-BROWN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "NICHOLAS MARICICH|(213) 978-1240|NICHOLAS.MARICICH@LACITY.ORG|SR CITY PLANNER",
                                        "TREVOR MARTIN|(818) 374-5052|TREVOR.MARTIN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "HEBER MARTINEZ|(213) 978-1398|Heber.martinez@lacity.org|SYSTEMS ANALYST II",
                                        "LUCERITO MARTINEZ|() -||CITY PLANNING ASSOC",
                                        "NORALI MARTINEZ MAZA|(213) 482-7082||PLANNING ASSISTANT",
                                        "HIROYUKI MATSUDA|(213) 978-1390|hiroyuki.matsuda@lacity.org|GEOG INFO SPECIALIST",
                                        "SANDRA MCFARLANE|(213) 978-1255|Sandra.McFarlane@lacity.org|SR ADMINISTRATIVE CLERK",
                                        "PRIYA MEHENDALE|(213) 978-1380|PRIYA.MEHENDALE@LACITY.ORG|CITY PLANNER",
                                        "ADRINEH MELKONIAN|() -||CITY PLANNING ASSOC",
                                        "ELVIRA MENDEZ|() -||ACCOUNTING CLERK",
                                        "LENA MIK|(213) 978-2717|Lena.Mik@lacity.org|CITY PLANNING ASSOC",
                                        "JENNA MONTERROSA|(213) 978-1377|JENNA.MONTERROSA@LACITY.ORG|CITY PLANNER",
                                        "STACY MUNOZ|(213) 978-1354|STACY.MUNOZ@LACITY.ORG|MANAGEMENT ANALYST II",
                                        "PHYLLIS NATHANSON|(213) 978-1474|PHYLLIS.NATHANSON@LACITY.ORG|CITY PLANNER",
                                        "DARLENE NAVARRETE|(213) 978-1332|DARLENE.NAVARRETE@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "CARL NELSON|(213) 978-1419|Carl.E.Nelson@lacity.org|GEOG INFO SPECIALIST",
                                        "OLIVER NETBURN|(213) 978-1382|OLIVER.NETBURN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MINDY NGUYEN|(213) 978-1241|MINDY.NGUYEN@LACITY.ORG|CITY PLANNER",
                                        "CHARLES NORMAN|(213) 202-5422|Charles.Norman@lacity.org|SR SYSTEMS ANALYST I",
                                        "MONICA NUNEZ|() -||EXEC ADMIN ASST II",
                                        "ELVA NUNO O DONNELL|(818) 374-5066|Elva.Nuno-ODonnell@lacity.org|CITY PLANNER",
                                        "DAN ODONNELL|(818) 374-5036|DAN.ODONNELL@LACITY.ORG|CITY PLANNER",
                                        "JULIET OH|(213) 978-1186|JULIET.OH@LACITY.ORG|PLANNING ASSISTANT",
                                        "DAVID OLIVO|(213) 978-1205|David.Olivo@lacity.org|CITY PLANNER",
                                        "RENATA OOMS|(213) 978-1222|RENATA.OOMS@LACITY.ORG|PLANNING ASSISTANT",
                                        "ANNA ORELLANA|(213) 978-1227|ANNA.ORELLANA@LACITY.ORG|SR ADMINISTRATIVE CLERK",
                                        "CRISTINA ORELLANA|(818) 374-5030||ADMINISTRATIVE CLERK",
                                        "FELIPE ORTEGA|(213) 202-5435||ADMINISTRATIVE CLERK",
                                        "CRUZ ORTIZ|(213) 978-1440|Cruz.Ortiz@lacity.org|GEOG INFO SYS SUPVR I",
                                        "MARIA ORTIZ|(213) 978-1291|Maria.Ortiz@lacity.org|MANAGEMENT ANALYST II",
                                        "BEATRICE PACHECO|(213) 978-1260|Beatrice.Pacheco@lacity.org|CH CLERK",
                                        "CONNI PALLINI TIPTON|(213) 978-1179|Conni.Pallini-Tipton@lacity.org|SR CITY PLANNER",
                                        "CHRISTINA PARK|() -||CITY PLANNING ASSOC",
                                        "PHYLLIS PARKER|(213) 202-5460|PHYLLIS.PARKER@LACITY.ORG|CITY PLANNER",
                                        "SIMON PASTUCHA|(213) 978-0628|Simon.Pastucha@lacity.org|SR CITY PLANNER",
                                        "SARAH PEARSON|(213) 473-9983|SARAH.MOLINA-PEARSON@LACITY.ORG|CITY PLANNER",
                                        "DAVID PENA|() -||PLANNING ASSISTANT",
                                        "ALFREDO PEREZ|(213) 473-0376|ALFREDO.PEREZ@LACITY.ORG|CITY PLANNING ASSOC",
                                        "KATHERINE PETERSON|(213) 978-1472|Katherine.Peterson@lacity.org|CITY PLANNING ASSOC",
                                        "JOJO PEWSAWANG|(213) 978-1214|JOJO.PEWSAWANG@LACITY.ORG|CITY PLANNING ASSOC",
                                        "NATALIE PHAM|(213) 978-1288||MANAGEMENT ANALYST II",
                                        "CHRISTOPHE PINA|(213) 978-1012|CHRISTOPHER.PINA@LACITY.ORG|CITY PLANNING ASSOC",
                                        "FELICIDAD PINGOL|(213) 978-1294|FELICIDAD.PINGOL@LACITY.ORG|COMMISSION EXEC ASST I",
                                        "HADAR PLAFKIN|(213) 978-1370|HADAR.PLAFKIN@LACITY.ORG|CITY PLANNER",
                                        "MARITZA PRZEKOP|(213) 482-7079|MARITZA.PRZEKOP@LACITY.ORG|CITY PLANNER",
                                        "LILY QUAN|(213) 978-1127|LILY.QUAN@LACITY.ORG|EXEC ADMIN ASST III",
                                        "MATTHEW QUAN|(213) 978-1320|matthew.quan@lacity.org|CITY PLANNING ASSOC",
                                        "VINCENT QUITORIANO|(213) 202-5420|VINCENT.QUITORIANO@LACITY.ORG|CITY PLANNING ASSOC",
                                        "FRANKLIN QUON|(213) 202-5421|FRANK.QUON@LACITY.ORG|CITY PLANNER",
                                        "MARY QUON|(213) 978-1393|Mary.Quon@lacity.org|SECRETARY",
                                        "JESSE RAMOS|() -||CITY PLANNING ASSOC",
                                        "JESUS RAMOS|(213) 978-1547|jesus.ramos@lacity.org|GEOG INFO SYS SUPVR I",
                                        "LOUISA RANICK|(213) 978-0634|LOUISA.RANICK@LACITY.ORG|GRAPHICS DESIGNER II",
                                        "CHARLIE RAUSCH|(213) 978-1306|Charlie.Rausch@lacity.org|ASSOC ZONING ADMINSTR",
                                        "MARIA REYES|(213) 978-1160|MARIA.REYES@LACITY.ORG|PROJECT ASSISTANT",
                                        "CORII RICHARDSON|() -|CORII.RICHARDSON@LACITY.ORG|STUDENT PROF WORKER",
                                        "MARY RICHARDSON|(213) 978-1478|MARY.RICHARDSON@LACITY.ORG|CITY PLANNING ASSOC",
                                        "KIRAN RISHI|(213) 978-1169|KIRAN.RISHI@LACITY.ORG|PLANNING ASSISTANT",
                                        "FAISAL ROBLE|(213) 978-1168|Faisal.Roble@lacity.org|PR CITY PLANNER",
                                        "ANDY RODRIGUEZ|(213) 482-0376|ANDY.RODRIGUEZ@LACITY.ORG|CITY PLANNING ASSOC",
                                        "CLAUDIA RODRIGUEZ|() -||CITY PLANNING ASSOC",
                                        "NELSON RODRIGUEZ|(818) 374-9903|NELSON.RODRIGUEZ@LACITY.ORG|CITY PLANNING ASSOC",
                                        "ISAIAH ROSS|(213) 978-1368|ISAIAH.ROSS@LACITY.ORG|PLANNING ASSISTANT",
                                        "KEVIN ROTH|() -||PR CLERK",
                                        "TOM ROTHMANN|(213) 978-1891|TOM.ROTHMANN@LACITY.ORG|PR CITY PLANNER",
                                        "LILIAN RUBIO|(213) 978-1840|LILIAN.RUBIO@LACITY.ORG|PLANNING ASSISTANT",
                                        "SHANNON RYAN|(213) 978-3304|SHANNON.RYAN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "NICOLE SABUTIS|(213) 978-1436|NICOLE.SABUTIS@LACITY.ORG|GEOG INFO SPECIALIST",
                                        "MARIANA SALAZAR|(213) 202-5408||CITY PLANNER",
                                        "BRYAN SALGADO|(213) 978-1230|bryan.salgado@lacity.org|STUDENT PROF WORKER",
                                        "JENNIFER SANCHEZ|(818) 374-5047||STUDENT PROF WORKER",
                                        "LOURDES SANCHEZ|(213) 978-1252|Lourdes.Sanchez@lacity.org|SR ADMINISTRATIVE CLERK",
                                        "NICOLE SANCHEZ|(213) 978-3034|NICOLE.SANCHEZ@LACITY.ORG|PLANNING ASSISTANT",
                                        "SANTOS SANCHEZ|() -||CITY PLANNING ASSOC",
                                        "CHRISTINE SAPONARA|(213) 978-1363|Christine.Saponara@lacity.org|CITY PLANNER",
                                        "STELLA SARGSYAN|() -||STUDENT PROF WORKER",
                                        "COURTNEY SCHOENWALD|(818) 374-9904|COURTNEY.SCHOENWALD@LACITY.ORG|CITY PLANNING ASSOC",
                                        "GREG SHOOP|(213) 978-1243|Greg.Shoop@lacity.org|CITY PLANNER",
                                        "ROWLEN SHUE|(213) 978-1409|ROWLEN.SHUE@LACITY.ORG|SR SYSTEMS ANALYST I",
                                        "COURTNEY SHUM|(213) 978-1916|COURTNEY.SHUM@LACITY.ORG|CITY PLANNING ASSOC",
                                        "MICHAEL SIN|(213) 978-1345|MICHAEL.SIN@LACITY.ORG|PLANNING ASSISTANT",
                                        "MICHELLE SINGH|(213) 978-1166|MICHELLE.SINGH@LACITY.ORG|CITY PLANNER",
                                        "DIAN SIPES|() -||CITY PLANNING ASSOC",
                                        "MAY SIRINOPWONGSAGON|(213) 978-1372|MAY.SIRINOPWONGSAGON@LACITY.ORG|CITY PLANNER",
                                        "KORY SIRKIN|(213) 978-1431|kory.sirkin@lacity.org|GEOG INFO SPECIALIST",
                                        "DYLAN SITTIG|(213) 978-9701|DYLAN.SITTIG@LACITY.ORG|CITY PLANNING ASSOC",
                                        "DANIEL SKOLNICK|(818) 374-7556|Daniel.Skolnick@lacity.org|CITY PLANNING ASSOC",
                                        "BLAIR SMITH|(213) 978-1174|blair.smith@lacity.org|PLANNING ASSISTANT",
                                        "LYNDA SMITH|(213) 978-1196|Lynda.Smith@lacity.org|CITY PLANNER",
                                        "DAVID SOLAIMAN TEHRANI|(213) 978-1193|DAVID.SOLAIMAN-TEHRANI@LACITY.ORG|PLANNING ASSISTANT",
                                        "HAGU SOLOMON-CARY|(213) 978-1394|HAGU.SOLOMON-CARY@LACITY.ORG|CITY PLANNER",
                                        "DAVID SOMERS|(213) 978-3307|DAVID.SOMERS@LACITY.ORG|CITY PLANNER",
                                        "MIGUEL SOTELO|() -||ADMINISTRATIVE CLERK",
                                        "VANESSA SOTO|(213) 202-5409|VANESSA.SOTO@LACITY.ORG|CITY PLANNER",
                                        "TONY STAPLES|(213) 978-1257|Tony.Staples@lacity.org|ADMINISTRATIVE CLERK",
                                        "ERIN STRELICH|(213) 978-1351|ERIN.STRELICH@LACITY.ORG|CITY PLANNING ASSOC",
                                        "EVA SUN|(213) 978-3305|eva.sun@lacity.org|SR SYSTEMS ANALYST II",
                                        "ESTHER TAM|(213) 978-1381||SYSTEMS PROGRAMMER II",
                                        "DAVID TERUKINA|(213) 978-1427|david.terukina@lacity.org|SR SYSTEMS ANALYST II",
                                        "RICK TORRES|(818) 374-5024|Rick.Torres@lacity.org|CITY PLANNING ASSOC",
                                        "FERNANDO TOVAR|(213) 978-1303|Fernando.Tovar@lacity.org|ASSOC ZONING ADMINSTR",
                                        "DUKE TRAN|(213) 978-1411|Duke.Tran@lacity.org|SYSTEMS ANALYST II",
                                        "KENTON TRINH|(213) 978-1290|KENTON.TRINH@LACITY.ORG|PLANNING ASSISTANT",
                                        "KELVIN TSAN|() -||SYSTEMS ANALYST II",
                                        "JACK TSAO|() -|JACK.TSAO@LACITY.ORG|OPER & STATS RES ANL II",
                                        "FAE TSUKAMOTO|(213) 978-1420|FAE.TSUKAMOTO@LACITY.ORG|GEOG INFO SYS SUPVR II",
                                        "JORDANN TURNER|(213) 978-1365|Jordann.Turner@lacity.org|CITY PLANNER",
                                        "ONDREA TYE|(213) 978-1197|Ondrea.Tye@lacity.org|CITY PLANNING ASSOC",
                                        "HAYDEE URITA LOPEZ|(213) 978-1325|Haydee.Urita-Lopez@lacity.org|CITY PLANNER",
                                        "TINA VACHARKULKSEMSUK|(213) 202-5423|TINA.VACHARKULKSEMSUK@LACITY.ORG|CITY PLANNER",
                                        "LIDIA VAIZ|() -||GEOG INFO SPECIALIST",
                                        "VICTOR VALLEJO|(213) 978-1453|VICTOR.VALLEJO@LACITY.ORG|CITY PLANNING ASSOC",
                                        "HERMAN VAN BUREN|(213) 482-7074|HERMAN.VANBUREN@LACITY.ORG|CITY PLANNER",
                                        "CASSANDRA VAN DER ZWEEP|(213) 482-7078|CASSANDRA.ZWEEP@LACITY.ORG|CITY PLANNING ASSOC",
                                        "JAMES VAN GERPEN|(213) 978-1399|james.vangerpen@lacity.org|DIR OF SYSTEMS",
                                        "JOEY VASQUEZ|(213) 978-1487|Joey.Vasquez@lacity.org|CITY PLANNING ASSOC",
                                        "RUBEN VASQUEZ|() -||CITY PLANNING ASSOC",
                                        "PAUL VERGER|(213) 202-5417|PAUL.VERGER@LACITY.ORG|SYSTEMS ANALYST II",
                                        "ANNA VIDAL|(818) 374-5029|ANNA.VIDAL@LACITY.ORG|CITY PLANNER",
                                        "ADAM VILLANI|(818) 374-5067|ADAM.VILLANI@LACITY.ORG|CITY PLANNER",
                                        "CAM VUONG|(213) 978-1466|CAM.VUONG@LACITY.ORG|SYSTEMS PROGRAMMER I",
                                        "WANDA WALKER|(213) 978-1215|Wanda.Walker@lacity.org|SR ADMINISTRATIVE CLERK",
                                        "IRIS WAN|(213) 978-1397|IRIS.WAN@LACITY.ORG|CITY PLANNING ASSOC",
                                        "LISA WEBBER|(213) 978-1274|Lisa.Webber@lacity.org|DEPUTY DIR OF PLANNING",
                                        "CRAIG WEBER|(213) 978-1311|CRAIG.WEBER@LACITY.ORG|PR CITY PLANNER",
                                        "STEVE WECHSLER|(213) 978-1391|STEVEN.WECHSLER@LACITY.ORG|CITY PLANNING ASSOC",
                                        "DAVID WEINTRAUB|(213) 978-3094|DAVID.WEINTRAUB@LACITY.ORG|ASSOC ZONING ADMINSTR",
                                        "PATRICK WHALEN|() -||PLANNING ASSISTANT",
                                        "SUSAN WHISNANT|(818) 374-1121|Susan.Whisnant@lacity.org|CITY PLANNER",
                                        "ROCKY WILES|(213) 202-5401|ROCKY.WILES@LACITY.ORG|STRUCTRL ENGRG ASSC III",
                                        "JAMES WILLIAMS|(213) 978-1295|JAMES.K.WILLIAMS@LACITY.ORG|COMMISSION EXEC ASST II",
                                        "QIUANA WILLIAMS|() -||CITY PLANNING ASSOC",
                                        "TRACY WILLIAMS|(818) 374-5031||PLANNING ASSISTANT",
                                        "HANNA WINZENRIED|(213) 978-1997||STUDENT PROF WORKER",
                                        "ALYCIA WITZLING|() -||CITY PLANNING ASSOC",
                                        "MARC WOERSCHING|(818) 374-9919|MARC.WOERSCHING@LACITY.ORG|CITY PLANNER",
                                        "BRIDGETTE WOOTEN|(213) 482-7076|Bridgette.Wooten@lacity.org|CITY PLANNING ASSOC",
                                        "DWAYNE WYATT|(213) 202-5413|DWAYNE.WYATT@LACITY.ORG|CITY PLANNING ASSOC",
                                        "LINN WYATT|(213) 978-1416|Linn.Wyatt@lacity.org|CH ZONING ADMINSTR",
                                        "CHERRY YAP|(213) 978-1164|Cherry.Yap@lacity.org|SR ADMINISTRATIVE CLERK",
                                        "LIVEA YEH|(213) 978-1268|Livea.Yeh@lacity.org|SR MGMT ANALYST I",
                                        "MAYA ZAITZEVSKY|(818) 374-5069|Maya.Zaitzevsky@lacity.org|ASSOC ZONING ADMINSTR",
                                        "MILENA ZASADZIEN|(818) 374-5046|MILENA.ZASADZIEN@LACITY.ORG|CITY PLANNER",
                                        "DEVON ZATORSKI|() -|devon.zatorski@lacity.org|STUDENT PROF WORKER",
                                        "JAN ZATORSKI|(213) 978-1273|Jan.Zatorski@lacity.org|DEPUTY DIR OF PLANNING",
                                        "SUSAN ZERMENO|(213) 202-5452|SUSAN.ZERMENO@LACITY.ORG|CITY PLANNING ASSOC"];
var assignment_extra = ["Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Boyle Heights| Kiran Rishi |213-978-1169",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Boyle Heights| Alex Heath |213-978-0627",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Boyle Heights| Unit Head, Haydee Urita-Lopez |213-978-1325",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Central City/Central City North| Tal Harari|213-978-1204",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Central City/Central City North| Clare Kelly |213-978-1207",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Central City/Central City North| Brittany Arceneaux |213-978-1911",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Central City/Central City North| Unit Head, Bryan Eck |213-978-1304",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|CRA Transition| Giselle Corella |213-978-1357",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|CRA Transition| Katherine Peterson |213-978-1472",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|CRA Transition| Unit Head, Christine Saponara |213-978-1363",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Granada Hills|Priya Mehendale |213-978-1380",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Granada Hills| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|High Speed Rail|Bryan Eck |213-978-1304",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|High Speed Rail| Unit Head, Patricia Diefenderfer |213-978-1170",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Hollywood/Wilshire|Linda Lou |213-978-1473",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Hollywood/Wilshire| Priya Mehendale |213-978-1380",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Hollywood/Wilshire| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Hollywood| Linda Lou|213-978-1473",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Hollywood| Elizabeth Gallardo |213-978-1297",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Hollywood| Priya Mehendale |213-978-1380",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Hollywood| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|LAX|David Olivo |213-978-1205",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|LAX| Unit Head, Jonathan Hershey |213-978-1337",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Metro Transit Oriented Districts (TOD)| Lameese Chang |213-978-1178",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Metro Transit Oriented Districts (TOD)| Andrew Jorgensen |213-978-1281",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Metro Transit Oriented Districts (TOD)| Laura Krawcyzk |213-978-1212",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Metro Transit Oriented Districts (TOD)| David Olivo |213-978-1205",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Metro Transit Oriented Districts (TOD)| James Owen |213-978-1221",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Metro Transit Oriented Districts (TOD)| Dylan Sittig |213-473-9701",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Metro Transit Oriented Districts (TOD)| Unit Head, Patricia Diefenderfer |213-978-1170",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Neighborhood Conservation|Christine Saponara |213-978-1363",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Neighborhood Conservation| Unit Head, Patricia Diefenderfer |213-978-1170",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|San Pedro/Harbor| Esther Amaya |213-978-1211",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|San Pedro/Harbor| Priya Mehendale |213-978-1380",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|San Pedro/Harbor| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|San Pedro| Esther Amaya |213-978-1211",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|San Pedro| Elizabeth Gallardo |213-978-1297",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|San Pedro| Priya Mehendale |213-978-1380",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|San Pedro| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|South LA| Melissa Alofaituli |213-978-1201",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|South LA| Reuben Caldwell |213-978-1209",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|South LA| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Southeast LA| Marie Cobian |213-978-0626",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Southeast LA| Reuben Caldwell |213-978-1209",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Southeast LA| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Sylmar New Com Plan|Priya Mehendale |213-978-1380",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Sylmar New Com Plan| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Valley|Adam Villani |818-374-5067",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Valley| Unit Head, Jonathan Hershey |213-978-1337",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Venice Local Coastal Program| Hagu Solomon-Carey |213-978-1394",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Venice Local Coastal Program| Antonio Isaia |213-978-1353",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Venice Local Coastal Program| Laura MacPherson |213-978-1187",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|Venice Local Coastal Program| Unit Head, Jonathan Hershey |213-978-1337",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|West| Steven Katigbak |213-978-1349",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|West| Renata Ooms |213-978-1222",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|West| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|West Adams-Baldwin Hills-Leimert| Reuben Caldwell |213-978-1209",
"Community Plans\nDivision Manager, Criag Weber - 213-978-1311\nGeneral Information  - 213-978-6364|West Adams-Baldwin Hills-Leimert| Unit Head, Conni Pallini-Tipton |213-978-1179",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Demographics|Angela Chang |213-978-1434",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Demographics| Unit Head, Jack Tsao |213-978-1367",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|General Plan/CEQA Thresholds|Outreach, Fabiola Inzunza |213-978-1302",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|General Plan/CEQA Thresholds|Policy, Lena Mik |213-978-2717",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|General Plan/CEQA Thresholds|Policy, Jason Douglas |213-978-1917",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|CEQA|Maidel Luevano |213-978-1492",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|CEQA| Unit Head, Diana Kitching |213-978-1308",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Housing Planner| Cally Hardy |213-978-1643",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Housing Planner| William Hsu |213-978-1558",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Housing Planner| Unit Head, Matthew Glesne |213-978-2666",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Mobility|My La |213-978-1194",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Mobility| Qiuana Williams |213-978-1912",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|Mobility| Unit Head, David Somers |213-978-3307",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|River|Chris Pina |213-978-2023",
"Citywide Policy\nDivision Manager, Ken Bernstein  - 213-978-1181\nSection Head, Claire Bowin - 213-978-1213\nGeneral Information  - 213-978-1164|River| Unit Head, David Somers |213-978-3307",
"Office of Historic Resources (OHR)\nDivision Manager, Ken Bernstein  - 213-978-1181\nGeneral Information  - 213-978-1200|N/A|SurveyLA, Janet Hansen |213-978-1191",
"Office of Historic Resources (OHR)\nDivision Manager, Ken Bernstein  - 213-978-1181\nGeneral Information  - 213-978-1200|N/A|Architect, Lambert Giessinger |213-978-1183",
"Office of Historic Resources (OHR)\nDivision Manager, Ken Bernstein  - 213-978-1181\nGeneral Information  - 213-978-1200|N/A|Preservation Planner, Sara Cruz |213-978-1189",
"Office of Historic Resources (OHR)\nDivision Manager, Ken Bernstein  - 213-978-1181\nGeneral Information  - 213-978-1200|N/A|Preservation Planner, Melissa Jones, |213-978-1192",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Proposed 27 th & 28 th Streets, Kimberly Henry |213-978-1216",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|52 ND Place/Tifal Brothers Tract, Bradley Furuya |213-978-1218",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Adams Normandie, Ariane Briski |213-978-1391",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Angelino Heights, Christina Park |213-473-9987",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Balboa Highlands, Christina Park |213-473-9987",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Banning Park, Bradley Furuya |213-978-1218",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Carthay Circle, Blair Smith |213-978-1174",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Carthay Square, Blair Smith |213-978-1174",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Country Club Park, Bradley Furuya |213-978-1218",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Gregory Ain Mar Vista Tract, Lydia Chapman |213-978-1797",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|El Sereno  - Berkshire, Patrick Whalen |213-978-1220",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Hancock Park, Kimberly Henry |213-978-1216",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Harvard Heights, Ariane Briski |213-978-1391",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Highland Park-Garvanza, Patrick Whalen |213-978-1220",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Hollywood Grove, Ariane Briski |213-978-1391",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|HPOZ Interim Control Ordinance, Bradley Furuya |213-978-1218",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Jefferson Park, Lydia Chapman |213-978-1797",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|La Fayette Square, Christina Park |213-473-9987",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Lincoln Heights, Blair Smith |213-978-1174",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Melrose Hill, Lydia Chapman |213-978-1797",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Miracle Mile North, Christina Park|213-473-9987",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|**North University Park, Blair Smith |213-978-1174",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Pico Union, Christina Park |213-473-9987",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|South Carthay, Blair Smith |213-978-1174",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Spaulding Square, Ariane Briski |213-978-1391",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Stonehurst, Bradley Furuya |213-978-1218",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|University Park, Ariane Briski|213-978-1391",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Van Nuys, Patrick Whalen |213-978-1220",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Vinegar Hill, Bradley Furuya |213-978-1218",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|West Adams Terrace, Lydia Chapman |213-978-1797",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Western Heights, Christina Park |213-473-9987",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Whitley Heights, Kimberly Henry |213-978-1216",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Wilshire Park, Bradley Furuya |213-978-1218",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Windsor Square, Kimberly Henry |213-978-1216",
"OHR Historic Preservation Overlay Zones (HPOZ) Unit\nDivision Manager, Ken Bernstein  - 213-978-1181\nUnit Head, Naomi Guth - 213-978-1198\nGeneral Information  - 213-978-6364|N/A|Windsor Village, Bradley Furuya |213-978-1218",
"Zoning Administration Division\nChief Zoning Administrator, Linn Wyatt  - 213-978-1318\nGeneral Information  - 213-978-1318|N/A|Sr City Planner, Jon Foreman |213-978-1387",
"Zoning Administration Division\nChief Zoning Administrator, Linn Wyatt  - 213-978-1318\nGeneral Information  - 213-978-1318|N/A|Management Support -Hearing Coordinator, Stacy Munoz |213-978-1354",
"Zoning Administration Division\nChief Zoning Administrator, Linn Wyatt  - 213-978-1318\nGeneral Information  - 213-978-1318|N/A|Hearing Coordinator, Lynda Smith |213-978-1310",
"Zoning Administration Division\nChief Zoning Administrator, Linn Wyatt  - 213-978-1318\nGeneral Information  - 213-978-1318|N/A|Administrative Clerk, Vacant |213-978-1471",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|re:Code LA Unit 1| Erin Coleman |213-978-1338",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|re:Code LA Unit 1| Bonnie Kim |213-978-1330",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|re:Code LA Unit 1| Unit Head, Erick Lopez |213-978-1323",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|re:Code LA Unit 2| Esther Ahn |213-978-1486",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|re:Code LA Unit 2| Jaime Espinoza |213-978-1250",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|re:Code LA Unit 2| Unit Head, Deborah Kahen |213-978-1202",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|Targeted Code Amendments| Niall Huffman |213-978-3405",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|Targeted Code Amendments| Yi Lu |213-978-1287",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|Targeted Code Amendments| Shannon Ryan |213-978-3304",
"Code Studies\nDivision Manager, Tom Rothmann  - 213-978-1891|Targeted Code Amendments| Unit Head, Phyllis Nathanson |213-978-1474",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Expedited Processing Section|General Information |213-473-9984",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Expedited Processing|Sr City Planner, Nick Hendricks |213-978-1383",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Expedited Processing|Administrative Support, Brenda Kahinju|213-978-1316",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Major Projects|General Information |213-978-1332",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Major Projects|Metro, Luci Ibarra |213-978-1378",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Major Projects|Valley, Elva Nuno-O'Donnell|818-374-5056",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Major Projects|Environmental Analysis, Karen Hoo |213-978-1331",
"Expediting/Major Projects\nDivision Manager, Charlie Rausch  - 213-978-1306|Major Projects|Environmental Clearance, Hadar Plafkin |213-978-1370",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|Section Head, David Terukina |213-978-1427",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|BuildLA, eFile, PCTS, PDIS, Charles Norman |213-202-5422",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|Cybersecurity, Esther Tam |213-978-1381",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|Database Architect, Ming Dai |213-978-1428",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|eForms, Web, Rowlen Shue |213-978-1409",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|Infrastructure, Cam Vuong |213-978-1466",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|ZIMAS, Tim Ky |213-978-1423",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Systems Section|GIS Section, Betty Dong |213-978-1392",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Data Maintenance Unit|Fae Tsukamoto |213-978-1420",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Data Maintenance Unit| General Plans/ Land Use, Cruz Ortiz |213-978-1440",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Data Maintenance Unit| SurveyLA/Radius Maps, David Dieudonne |213-978-1432",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Data Maintenance Unit| ZIMAS/Citywide Data, Vacant |213-978-XXXX",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Data Maintenance Unit| Zoning/Cases, Nicole Sabutis (Acting) |213-978-1436",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Product Unit|Charles Lee |213-978-1441",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Product Unit| Case Support, Cuong Fan |213-978-1468",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Product Unit| Data Analytics, Jesus Ramos |213-978-1547",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Product Unit| re:Code LA, Gary Himan|213-978-1425",
"Information Technologies Division\nDirector of Systems, James VanGerpen  - 978-1399\nGeneral Information  - 213-978-1393\nHelp Desk Helpline  - 213-978-1455|Graphic Services|Elvia Hernandez |213-978-0639",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Development Service Centers|",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|General Information  - Metro Public Counter, 4 th Fl |213-482-7077",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Metro Counter, Nora Dresser |213-482-7079",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Metro Counter, Maritza Przekop |213-482-0482",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Metro Counter, Herman Van Buren |213-482-7074",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Metro Counter Housing Unit, Ulises Gonzalez |213-202-5414",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Metro Counter Wireless Unit, Tina Vacharkulksemsuk|213-202-5423",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Case Management, 10 th Fl|",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|City Planner, Kit Awakuni |213-482-0441",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Planning Assistant, Vacant |213-482-XXXX",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Condition Compliance / Nuisance Abatement / Revocations|",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|General Information, 5 th Fl |213-202-5464",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Sr Planner, Bob Duenas |213-202-5460",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Sr Administrative Clerk, Melvina Adlerberg |213-202-5434",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Administrative Clerk, Felipe Ortega |213-202-5435",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|City Planner, Iris Awakuni |213-202-5447",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|BESt, Vanessa Soto |213-202-5409",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|MViP, Mariana Valdivia |213-202-5408",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Nuisance Abatement / Revocations, Tim Fargo |213-202-5407",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|General Information  - Valley Public Counter, Rm 251 |818-374-5050/5051",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Sr Planner, Ralph Avila |818-374-9915",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Valley Counter, Herminigildo Agustin |818-374-5028",
"Development Services Division\nDivision Manager, Estineh Mailian - 213-482-0421|N/A|Valley Counter, Susan Whisnant |818-374-1121",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|City Planning Commission, James Williams|213-978-1295",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|Central APC, Renee Glasco |213-978-1134",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|Cultural Heritage, Judi Clarke, |213-978-1128",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|East Los Angeles APC, Harold Arrivillaga |213-978-1296",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|Harbor APC, Judi Clarke, |213-978-1128",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|North Valley APC, Renee Glasco |213-978-1134",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|South Los Angeles, Renee Glasco |213-978-1134",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|South Valley, Judi Clarke |213-978-1128",
"Commission\nUnit Head, Rocky Wiles - 213-978-1389\nGeneral Information  - 213-978-1300|N/A|West Los Angeles APC, Harold Arrivillaga |213-978-1296"];


var searchStyle = {
	highlightStyle: "color:#ff9c00;font-weight:bold;",
	tdStyle: ""
}

function toggleCheckBoxes()
{
	var text = jQuery('input[type="text"]')[0].value;
	if(text.length >= 2) showSearchResults(text);
	else {
		if(original_html != null) jQuery('#tblResults')[0].innerHTML = original_html;
	}
}

function showSearchResults(searchString) {
	searchString = limitAcceptableCharacters(searchString);
	var target = jQuery('#tblResults');
	if(original_html == null) original_html = target[0].innerHTML;
	tableHTML = "";
	if(jQuery("#check1")[0].checked == true) {
		tableHTML += getDirectoryResults(searchString);
		tableHTML += getSectionBreak(); 
		}
	if(jQuery("#check2")[0].checked == true) {
		tableHTML += getEmployeeResults(searchString);
		tableHTML += getSectionBreak(); 
		}
	if(jQuery("#check3")[0].checked == true) {
		tableHTML += getAssignmentListResults(searchString);
		tableHTML += getSectionBreak(); 
		}
	
	target[0].innerHTML = tableHTML;
}

function getSectionBreak() {
	return "<tr style='margin-top:10px;margin-bottom:10px;'><td style='" + searchStyle.tdStyle + "'><span class='span-flush' style='font-size:30px;'>&nbsp;</span></td></tr>";
}

function limitAcceptableCharacters(searchString) {
	var acceptable = "abcdefghijklmnopqrstuvwxyz1234567890-.' ";
	var returnString = "";
	for(i = 0; i < searchString.length; i++)
	{
		if(acceptable.indexOf(searchString[i]) >= 0) returnString += searchString[i];
	}
	return returnString;
}

function getDirectoryResults(searchString) {

	var returnString = "<tr style='margin-top:10px;margin-bottom:10px;'><td style='" + searchStyle.tdStyle + "'><span class='span-flush' style='font-size:30px;'>Department Directory:</span></td></tr>";
	var matched = [];
	for(i = 0; i < dept_dir.length; i++)
	{
		//find everything that matches, categories are repeated on every row so the entire category should match
		if(dept_dir[i].toUpperCase().indexOf(searchString.toUpperCase()) >= 0)
		{
			matched.push(dept_dir[i]);
		}
	}
	
	//--------------------------------
	//now break them out hierarctically for display
	var prevCat = "-1|-1";
	for(i = 0; i < matched.length; i++)
	{
		var cat = matched[i].split("~")[0];
		if(prevCat != cat) 
		{
			if(prevCat.split("|")[0] != cat.split("|")[0])
			{
				//add top-level category
				var catLevel1 = cat.split("|")[0];
				returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-flush'>" + 
					getHighlightedText(catLevel1, searchString, searchStyle.highlightStyle) + "</span><span class='span-phone'>&nbsp;</span></td></tr>";
			}
			var indentText = "span-indent1";
			if(prevCat.split("|")[1] != cat.split("|")[1] && cat.split("|")[1] != "N/A")
			{
				var catLevel2 = cat.split("|")[1];
				returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-indent1'>" + 
					getHighlightedText(catLevel2, searchString, searchStyle.highlightStyle) + "</span><span class='span-phone'>&nbsp;</span></td></tr>";
				indentText = "span-indent2";
			}
		}
		var parts = (matched[i].split("~")[1]).split("|");
		returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='" + indentText + "'>" + 
			getHighlightedText(parts[0], searchString, searchStyle.highlightStyle) + 
			"</span><span class='span-phone'>" + getHighlightedText(parts[1], searchString, searchStyle.highlightStyle) + "</span></td></tr>";
		prevCat = cat;
	}
	return returnString;
}

function getAssignmentListResults(searchString) {

	var returnString = "";
	
	for(i = 0; i < assignment_list.length; i++)
	{
		if(assignment_list[i].toUpperCase().indexOf(searchString.toUpperCase()) >= 0)
		{
		if(assignment_list[i][0] == "1") {
			var parts = assignment_list[i].split("|");
			//var parts = assignment_list[i].split("|");
			returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-flush'>" + 
				getHighlightedText(parts[1], searchString, searchStyle.highlightStyle) + 
				"</span><span class='span-phone'>" + getHighlightedText(parts[2], searchString, searchStyle.highlightStyle) + "</span></td></tr>";
			var j = 1;
			while(i + j < assignment_list.length)
			{
				if(assignment_list[i+j][0] == "1") break;
				var parts = assignment_list[i+j].split("|");
				returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-indent1'>" + 
				getHighlightedText(parts[1], searchString, searchStyle.highlightStyle) + 
				"</span><span class='span-phone'>" + getHighlightedText(parts[2], searchString, searchStyle.highlightStyle) + "</span></td></tr>";
				j+= 1;
			}
		}
		else {
			var parts = assignment_list[i].split("|");
			var tempText = "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-indent1'>" + 
				getHighlightedText(parts[1], searchString, searchStyle.highlightStyle) + 
				"</span><span class='span-phone'>" + getHighlightedText(parts[2], searchString, searchStyle.highlightStyle) + "</span></td></tr>";
			//backward
			var j = 1;
			while(i - j >= 0)
			{
				if(assignment_list[i-j][0] == "1") break;
				j+= 1;
			}
			var parts = assignment_list[i-j].split("|");
			returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-flush'>" + 
			getHighlightedText(parts[1], searchString, searchStyle.highlightStyle) + 
			"</span><span class='span-phone'>" + getHighlightedText(parts[2], searchString, searchStyle.highlightStyle) + "</span></td></tr>";
			returnString += tempText;
			
		}
		
		}
	}
	
	//adding the heading for the Geo Team
	if(returnString.length > 0) returnString = "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-flush' style='font-size:30px;'>Geo-Team</span></td></tr>" + returnString;
	returnString = "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-flush' style='font-size:30px;'>Assignment List:</span></td></tr>" + returnString;
	returnString += getAssignmentListResultsExtra(searchString);
	return returnString;
}

function getAssignmentListResultsExtra(searchString) {
	var returnString = "";
	var matched = [];
	for(i = 0; i < assignment_extra.length; i++)
	{
		//find everything that matches, categories are repeated on every row so the entire category should match
		if(assignment_extra[i].toUpperCase().indexOf(searchString.toUpperCase()) >= 0)
		{
			matched.push(assignment_extra[i]);
		}
	}
	
	//--------------------------------
	//now break them out hierarctically for display
	var prevCat = "-1|-1";
	for(i = 0; i < matched.length; i++)
	{
		var cat = matched[i].split("|")[0] + "|" + matched[i].split("|")[1];
		if(prevCat != cat) 
		{
			if(prevCat.split("|")[0] != cat.split("|")[0])
			{
				//add top-level category
				var catLevel1 = (cat.split("|")[0]);
				var catParts = catLevel1.split("\n");
				catParts[0] = "<span style='font-size:30px;'>" + catParts[0] + "</span>";
				catLevel1 = catParts.join("<br/>");
				returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-flush'>" + 
					getHighlightedText(catLevel1, searchString, searchStyle.highlightStyle) + "</span><span class='span-phone'>&nbsp;</span></td></tr>";
			}
			var indentText = "span-indent1";
			if(prevCat.split("|")[1] != cat.split("|")[1] && cat.split("|")[1] != "N/A")
			{
				var catLevel2 = cat.split("|")[1];
				returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='span-indent1'>" + 
					getHighlightedText(catLevel2, searchString, searchStyle.highlightStyle) + "</span><span class='span-phone'>&nbsp;</span></td></tr>";
				indentText = "span-indent2";
			}
		}
		var parts = [matched[i].split("|")[2], matched[i].split("|")[3]];
		returnString += "<tr><td style='" + searchStyle.tdStyle + "'><span class='" + indentText + "'>" + 
			getHighlightedText(parts[0], searchString, searchStyle.highlightStyle) + 
			"</span><span class='span-phone'>" + getHighlightedText(parts[1], searchString, searchStyle.highlightStyle) + "</span></td></tr>";
		prevCat = cat;
	}
	return returnString;
}

function getEmployeeResults(searchString) {

	var returnString = "<tr style='margin-top:10px;margin-bottom:10px;'><td style='" + searchStyle.tdStyle + "'><span class='span-flush' style='font-size:30px;'>Employee Directory:</span></td></tr>";
	returnString += "<tr style='margin-top:10px;margin-bottom:10px;'><td style='" + searchStyle.tdStyle + "'><table style='width:100%;font-size:18px;'>";
	var matched = [];
	for(i = 0; i < employees.length; i++)
	{
		if(employees[i].toUpperCase().indexOf(searchString.toUpperCase()) >= 0)
		{
			var lineText = getHighlightedText(employees[i], searchString, searchStyle.highlightStyle);
			var parts = lineText.split("|");
			returnString += "<tr><td><img src='../images/people/avatar.png' width='24' alt='full name'  ></td>" + "<td class='employee_td'>" + parts[0] + "</td><td class='employee_td'>" + parts[2] + "</td><td class='employee_td'>" + parts[3] + "</td><td class='employee_td' style='text-align:right;padding-right:0px;'>" + parts[1] + "</td></tr>";
		}
	}
	returnString += "</table></td></tr>";
	return returnString;
	
}

function getHighlightedText(searchText, searchString, formatting) {
	var returnString = 
	searchText.replace((new RegExp(searchString, "ig")), function (match) {
		return "<span style='" + formatting + "'>" + match + "</span>";
	}); 
	return returnString;
}

function test_onkeyup(e)
		{
			var key;
			var sender = null;
			if (window.event)
			{
				key = window.event.keyCode;   //IE
				sender = window.event.srcElement;
			}
			else
			{
				key = e.which;   //firefox
				sender = e.target;
			}

			if (key == 13) {
				executeFunction();
			}
			else if (key == 16) {
				//do nothing
			}
			else {
				//if (sender.caseSearchTypeAheadButton == null) sender.caseSearchTypeAheadButton = new caseSearchTypeAheadButton();
				var text = sender.value;
				if(text.length >= 2) showSearchResults(text);
				else {
					if(original_html != null) jQuery('#tblResults')[0].innerHTML = original_html;
				}
			}

		};
</script>
	<!-- title-bar -->
	<div id="title-bar">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-8 col-xs-12">
    				<h1>Contact Us</h1>
    			</div>
    			
    			<!-- breadcrumb -->
    			<?php include_once '../includes/breadcrumbAbout.php';  ?>
    		</div>
    		
    		<div class="bottom" style="padding-top:20px;"></div>
    		
    	</div>
	</div><!-- //End title-bar -->
	
	<div class="clear"></div>
	
	<!-- contain -->
	<div class="container-fluid section-padding-inner">
		<div class="row">
			
			<!-- left side -->
        	<div class="col-md-4 search-directories" id="search-directories">
        		<h3>Search Our Directories</h3>
        		<label for="search_text" class="sr-only">Enter: Department, Employee Name, or Assignment</label>
        		<input type="text" class="form-control" id="search_text" placeholder="Enter: Department, Employee Name, or Assignment" onkeyup="test_onkeyup(event);">
        
        		<div style='margin-top:10px;margin-bottom:-10px;'><span>Search In:</span></div>
        		<div class="checkbox checkbox-checked">
        		  <label class='active' for="department directory">
        		  <input id="check1" class="yyy" type="checkbox" checked='checked' value="" onchange='toggleCheckBoxes();'>
        		  <span class="label-padding">Department Directory</span></label>
        		</div>
        		<div class="checkbox">
        		  <label class="active" for="employee directory">
        		  <input id="check2" class="yyy"  type="checkbox" checked='checked' value="" onchange='toggleCheckBoxes();'>
        		  <span class="label-padding">Employee Directory</span></label>
        		</div>
        		<div class="checkbox">
        		  <label class="active" for="assignment list">
        		  <input id="check3" class="yyy"  type="checkbox" checked='checked' value="" onchange='toggleCheckBoxes();'>
        		  <span class="label-padding">Assignment List</span></label>
        		</div>
				
        	
        		<!-- Important numbers -->
        		<div class="row">
        			<div class="col-md-12">
        				<h4>Important Numbers</h4>
        				<ul>
        					<li><div class="row"><div class="col-md-8">Development Services Center (Metro)</div> <div class="col-md-4 float-right" style="padding-left:45px;">(213) 482-7077</div></div></li>
        					<li><div class="row"><div class="col-md-8">Development Services Center (Valley)</div> <div class="col-md-4 float-right" style="padding-left:45px;">(818) 374-5050</div></div></li>
        					<li><div class="row"><div class="col-md-8">TTY</div> <div class="col-md-4 float-right" style="padding-left:45px;">(213) 473-9741</div></div></li>
        					<li><div class="row"><div class="col-md-8">Department Emergency Hotline</div> <div class="col-md-4 float-right" style="padding-left:45px;">(213) 978-2991</div></div></li>
        					<li><div class="row"><div class="col-md-8">Telecode/Cellular Phone Administrator</div> <div class="col-md-4 float-right" style="padding-left:45px;">(213) 978-1248 </div></div></li>
        					<li><div class="row"><div class="col-md-8">CitiFone Coordinator</div> <div class="col-md-4 float-right" style="padding-left:45px;">(213) 978-1259 </div></div></li>
        				</ul>
        			</div>
        			
        			<div class="col-md-12">
        				<p class="bottom"></p>
        				<h4>Important Email</h4>
        				<ul>
        					<li>General Info <span class="float-right" style="padding-left:45px;"><a href="mailto:planning-info@lacity.org?subject=General Info">planning-info@lacity.org</a></span></li>
        					<li>ZIMAS Help <span class="float-right" style="padding-left:45px;"><a href="mailto:zimas@lacity.org?subject=ZIMAS Help">	zimas@lacity.org</a></span></li>
        				</ul>
        			</div>
        			
        			<!-- Location -->
        			<div class="col-md-12">
        				<p class="bottom"></p>
        				
        				<h4>Locations</h4> 
        				
        				<span>
        					<small>Please select below location to see address in detail.</small>
        					<ul>
        						<li><a href="#" id="l-1"><i class="fa fa-map" aria-hidden="true"></i> City Hall Offices</a></li>
        						<li><a href="#" id="l-2"><i class="fa fa-map" aria-hidden="true"></i> DSC Metro (Figueroa Plaza)</a></li>
        						<li><a href="#" id="l-3"><i class="fa fa-map" aria-hidden="true"></i> DSC Valley (Marvin Braude Building)</a></li>
        					</ul>
        				</span>
        				
        				<p class="bottom"></p>
        				
        				<!-- city hall -->
        				<div id="map-1">
            				<address>
            					<p>
        						<i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;&nbsp; 200 N. Spring St. - Los Angeles  <br>
        							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Los Angeles, CA 90012
        						</p>
        						<p><i class="fa fa-phone" aria-hidden="true"></i> &nbsp; <a href="#" style="color:#30c2a5 !important;">213 978 1415 /</a> <a href="tel:+12139781255" style="color:#30c2a5 !important;">213 978 1255</a></p>
        						<p><i class="fa fa-print" aria-hidden="true"></i> &nbsp; <a href="#" style="color:#30c2a5 !important;">213 978 1263</a></p>
        						<!--  <p><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; <a href="mailto:planning@lacity.org?subject=Request for information" target="_top" style="color:#30c2a5 !important;">planning@lacity.org</a></p> -->
        						<p><i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp; Hours: Mon - Thurs (8:30 am to 4:00 pm) / Fri (8:30 am to 3:00 pm)</p>
        					</address>
        					
        					<p class="bottom"></p>
        					
            				<div>
        						<iframe class="google-map-border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.606080026404!2d-118.24543008411332!3d34.05397448060548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64f395f4df1%3A0xa210ca08f4b2deda!2sLos+Angeles+City+Hall%2C+200+N+Spring+St%2C+Los+Angeles%2C+CA+90012!5e0!3m2!1sen!2sus!4v1487031683436" 
    								width="100%" name="200 N spring st." seamless></iframe> 
            				</div>
            			</div>
            				
        				<!-- DSC Metro (Figueroa Plaza) -->
        				<div id="map-2">
            				<address>
            					<p>
        						<i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;&nbsp;  201 N. Figueroa St - 4th Floor  <br>
        							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Los Angeles, CA 90012
        						</p>
        						<p><i class="fa fa-phone" aria-hidden="true"></i> &nbsp; <a href="tel:+12134827077" style="color:#30c2a5 !important;">213 482 7077</a></p>
        						<p><i class="fa fa-print" aria-hidden="true"></i> &nbsp; <a href="fax:+12134827080" style="color:#30c2a5 !important;">213 482 7080</a></p>
        						<p><i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp; Hours: Mon, Tues, Thurs & Fri (7:30 am to 4:30 pm) / Wed (9:00 am to 4:30 pm)</p>
        					</address>
        					
        					<p class="bottom"></p>
        					
            				<div>
        						<iframe class="google-map-border" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13221.907624149031!2d-118.250412!3d34.057287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c653235a4601%3A0x8c6d4a0f2f2d51a1!2s201+N+Figueroa+St%2C+Los+Angeles%2C+CA+90012!5e0!3m2!1sen!2sus!4v1487032025323" 
    								width="100%" name="201 N Figueroa st"  seamless></iframe> 
            				</div>
            			</div>
            				
        				<!-- DSC Valley (Marvin Braude Building) -->
        				<div id="map-3">
            				<address>
            					<p>
        						<i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;&nbsp;  6262 Van Nuys Blvd. <br>
        							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Van Nuys, CA 91401
        						</p>
        						<p><i class="fa fa-phone" aria-hidden="true"></i> &nbsp; <a href="tel:+18183745050" style="color:#30c2a5 !important;">818 374 5050</a></p>
        						<p><i class="fa fa-print" aria-hidden="true"></i> &nbsp; <a href="fax:+1818-375075" style="color:#30c2a5 !important;">818 374 5075</a></p>
        						<p><i class="fa fa-clock-o" aria-hidden="true"></i> &nbsp; Hours: Mon, Tues, Thurs & Fri (7:30 am to 4:30 pm) / Wed (9:00 am to 4:30 pm)</p>
        					</address>
        					
        					<p class="bottom"></p>
        					
            				<div>
    							<iframe class="google-map-border" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3301.2149146743022!2d-118.44721295239259!3d34.166422527612866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29706f2a8165b%3A0xf8ad98c560f35b7b!2s6262+Van+Nuys+Blvd%2C+Van+Nuys%2C+CA+91401!5e0!3m2!1sen!2sus!4v1487032163805" 
    								width="100%" name="van nuys"  seamless></iframe> 
            				</div>
        				</div>
        			</div> <!-- //END locatioin -->
        			
        			<p class="bottom"></p>
        				
        		</div>
        	</div> <!-- //END leftside -->
            
            <!-- Right side -->
        	<div class="col-md-8">
        		<div style='padding-left:20px; padding-right:20px;'>
        			<table id = 'tblResults' class="table table-responsive table-hover">
        				<tr>
        					<td>
        						<span class='span-flush' style='font-size:30px;'>Department Numbers:</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Commission Secreteriat</span>
        						<span class='span-phone'>(213) 978-1300</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Executive Management</span>
        						<span class='span-phone'>(213) 978-1271</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>External Affairs</span><span class='span-phone'>(213) 978-1324</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Administrative Services Division</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Administrative Services Section</span>
        						<span class='span-phone'>(213) 978-1206</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Accounting &amp; Purchasing</span>
        						<span class='span-phone'>(213) 978-1268</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Department Operations Section</span>
        						<span class='span-phone'>(213) 978-1260</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Personnel Services Section</span>
        						<span class='span-phone'>(213) 978-1772</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Information technologies Division</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>General Information/Helpdesk</span>
        						<span class='span-phone'>(213) 978-1455</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Historic Resources Division</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>General Information</span>
        						<span class='span-phone'>(213) 978-6364</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Office of Historic Resources</span>
        						<span class='span-phone'>(213) 978-1191</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Citywide Policy</span>
        						<span class='span-phone'>(213) 978-1213</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Community Planning Division</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>General Information</span>
        						<span class='span-phone'>(213) 978-1164</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Code Studies (re:Code LA)</span>
        						<span class='span-phone'>(213) 978-1891</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Project Planning Division</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Major Projects &amp; EIR General Information</span>
        						<span class='span-phone'>(213) 978-1332</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Central Projects Planning General Information</span>
        						<span class='span-phone'>(213) 978-1160</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>West/Costal &amp; South Project Planning General Information</span>
        						<span class='span-phone'>(213) 978-1160</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Valley Project Planning General Information</span>
        						<span class='span-phone'>(818) 374-9941</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Valley Project Planning General Information</span>
        						<span class='span-phone'>(818) 374-9941</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Expedited Processing Section General Information</span>
        						<span class='span-phone'>(213) 473-9984</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Zoning Administration Division</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>General Information</span>
        						<span class='span-phone'>(213) 978-1318</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-flush'>Development Service Center Division</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>General Information - Metro</span>
        						<span class='span-phone'>(213) 482-7077</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>General Information - Valley</span>
        						<span class='span-phone'>(818) 374-5050</span>
        					</td>
        				</tr>
        				<tr>
        					<td>
        						<span class='span-indent1'>Condition Compliance / Nuisance Abatement / Revoction Section</span>
        						<span class='span-phone'>(213) 202-5464</span>
        					</td>
        				</tr>
        				<tr><td></td></tr>
        			</table>
        		</div>
        	</div>	<!-- //END rightside -->
		
		</div>
	</div>	<!-- //End container -->

    <!-- footer section -->
	<?php include_once '../includes/footer.php'; ?>
    