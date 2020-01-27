const     testCase = [
    // newA 260353617  c :  1219724213   newB 864521501  d :  100963588

    '260353617 864521501 1219724213 100963588',
    // ,'999979918 799217380 328414493 1895332726'
    // ,'837075400 1393063726 435762404 1572995934'
    // '174316173 621978209 97565578 1994707615'
    // ,'372624983 1118559144 1769896568 1215256055'
    // ,'1251763495 20568290 1718691747 1945773129'
    // ,'2093814335 608022578 2020603644 1766502656'
    // ,'1699548760 2098850540 1527528327 1959902376'
    // ,'815888392 599768892 2060865964 1815868309'
    // ,'1398986271 241796808 1563717386 88578022'
    // ,'1634860533 1999479789 1661573955 1809176705'
    // ,'473974350 1759139533 1656400671 846599332'
    // ,'730215028 1278813591 2061855386 1981978523'
    // ,'1299381880 1633063485 1780268003 1245712566'
    // ,'93602414 1653387998 864731573 1793151174'
    // ,'1604754890 244776252 1605569901 273159633'
    // ,'844545143 1518952216 2089027942 96047765'
    // ,'1760749023 1505261679 184625786 1248125908'
    // ,'1357257820 1846199741 909818964 1831232169'
    // ,'1457855625 418735987 530347852 40587004'
    // ,'1697549577 444719590 2022565526 849447808'
    // ,'2077783074 1655349880 2095160373 23901839'
    // ,'1161254230 812408298 1817053012 618525471'
    // ,'1057184549 1275139265 891685103 1901729691'
    // ,'646607832 833229396 1997777455 259873207'
    // ,'191007427 34919592 1507999114 1548265246'
    // ,'1881119332 270334429 1232013766 1191491308'
    // ,'689070415 1762361617 1232078312 239136343'
    // ,'59597558 1107160189 1088584150 2137380631'
    // ,'615026421 1036260875 13798822 1776280650'
    // ,'1848669172 1830851833 247322472 758370072'
    // ,'958507449 1139007574 512616114 1605115281'
    // ,'1972236970 362909920 1864988487 15760748'
    // ,'397829511 1225503952 1564025993 131465195'
    // ,'1495838380 648556110 1322956502 37425147'
    // ,'263434078 407551165 276561489 323031636'
    // ,'1514711354 1365145639 312928618 2129737774'
    // ,'253922865 326727439 1758534775 2102592036'
    // ,'10095624 2005857246 713478459 968603072'
    // ,'997381171 1226094572 426234704 822134492'
    // ,'1589004491 143739542 837895239 1986834001'
    // ,'1369243493 254437583 2118299195 717598225'
    // ,'902993692 1293772049 755023371 1166427770'
    // ,'1701323213 1031584859 1489459405 1068550918'
    // ,'249246849 1802388022 1050805043 503169713'
    // ,'2129115461 661856169 458278100 2139211084'
    // ,'520229766 1171756558 960330507 1517610937'
    // ,'250367481 1386565211 192261780 1839371971'
    // ,'1530304752 1030157019 1678722324 752064597'
    // ,'1284594601 1649537870 1469662821 40104645'
    // ,'795826270 77202543 1206532414 349665835'
    // ,'1108787401 548508170 1418216752 1358034250'
    // ,'203412543 321538147 1861203962 185044355'
    // ,'983394315 171998414 176771790 1503624081'
    // ,'1343754971 1137102297 873751369 1594122452'
    // ,'376183859 1066013148 1286010774 1906488610'
    // ,'2096170166 817249449 511069558 1233281119'
    // ,'319303671 1980732378 1273385763 1115129940'
    // ,'2057934920 332434528 1464795774 1019238673'
    // ,'880942697 735528878 229789274 1084355239'
    // ,'1057067024 2090993235 1269399594 2040461338'
    // ,'115508000 1446171383 1396601770 1459262971'
    // ,'435790031 122869490 905901774 811973889'
    // ,'1188882638 44428899 570978851 1137569155'
    // ,'861678348 1082048408 223366625 1180982018'
    // ,'915297138 1496752387 148628309 825748409'
    // ,'1829186914 1613424083 1844987081 562645962'
    // ,'201469312 2074776354 1647001201 1258536335'
    // ,'2018285941 768917146 1151514024 2133793940'
    // ,'67604880 400632146 1445573262 503394911'
    // ,'523501635 203991387 1315368799 1712384272'
    // ,'248420286 1886347649 702469779 1110098633'
    // ,'820912409 925836403 143597002 1736209546'
    // ,'275105142 292225310 414474306 2104292055'
    // ,'1905649392 111977739 519454369 2107118703'
    // ,'39270444 18971921 1218171389 2057556384'
    // ,'787889066 222201765 2043866676 855493945'
    // ,'622833910 1341956289 1358888855 1146335544'
    // ,'1545947676 526774006 711236168 1794367961'
    // ,'265638006 1413705946 756982945 1086550414'
    // ,'192058700 900579946 675276311 467163841'
    // ,'1192805255 1089750617 423972248 950970999'
    // ,'1201728355 943426616 910606053 1240998798'
    // ,'962398536 2128777442 1151071534 1750287601'
    // ,'203495558 1047454561 458297897 826329467'
    // ,'241927201 1817186752 1972665010 1787874876'
    // ,'196477109 536417529 1434759188 462115114'
    // ,'1950123474 44258484 1548665528 2142182174'
    // ,'944838429 76458190 461862366 2137643684'
    // ,'1166208806 885834613 941131034 220453512'
    // ,'1829261228 1851737086 1461452310 644176115'
    // ,'1833030879 465040195 246980067 2036526436'
    // ,'1512494755 705277964 715372254 1754421955'
    // ,'374981067 540553616 1394813183 571458175'
    // ,'1076971144 682088722 1033573288 879610970'
    // ,'726347206 434755167 874309495 1671185634'
    // ,'511213357 1336171860 1661345669 1677422162'
    // ,'74522825 454993054 1897875674 1903784052'
    // ,'159246492 1211844335 400476519 1992277370'
    // ,'1676884529 647456585 1881320158 1041895635'
];

export default testCase;