const ufoData = `
ca    9305
fl    3773
tx    3570
wa    3453
ny    3093
az    2621
il    2587
pa    2519
oh    2397
mi    1974
nc    1721
or    1657
mo    1546
co    1474
in    1358
va    1356
nj    1339
ga    1313
wi    1304
ma    1280
tn    1161
mn    1056
sc    1031
ct     938
ky     901
nv     876
md     852
nm     785
ok     756
ut     730
ia     698
ar     650
al     649
ks     638
me     605
la     578
id     539
nh     528
mt     491
wv     475
ms     400
ne     395
hi     309
ak     308
vt     300
ri     279
wy     196
sd     189
de     174
nd     131
dc      93
`;

// https://developers.google.com/public-data/docs/canonical/countries_csv
const geoData = `
AK 	63.588753 	-154.493062 	Alaska
AL 	32.318231 	-86.902298 	Alabama
AR 	35.20105 	-91.831833 	Arkansas
AZ 	34.048928 	-111.093731 	Arizona
CA 	36.778261 	-119.417932 	California
CO 	39.550051 	-105.782067 	Colorado
CT 	41.603221 	-73.087749 	Connecticut
DC 	38.905985 	-77.033418 	District of Columbia
DE 	38.910832 	-75.52767 	Delaware
FL 	27.664827 	-81.515754 	Florida
GA 	32.157435 	-82.907123 	Georgia
HI 	19.898682 	-155.665857 	Hawaii
IA 	41.878003 	-93.097702 	Iowa
ID 	44.068202 	-114.742041 	Idaho
IL 	40.633125 	-89.398528 	Illinois
IN 	40.551217 	-85.602364 	Indiana
KS 	39.011902 	-98.484246 	Kansas
KY 	37.839333 	-84.270018 	Kentucky
LA 	31.244823 	-92.145024 	Louisiana
MA 	42.407211 	-71.382437 	Massachusetts
MD 	39.045755 	-76.641271 	Maryland
ME 	45.253783 	-69.445469 	Maine
MI 	44.314844 	-85.602364 	Michigan
MN 	46.729553 	-94.6859 	Minnesota
MO 	37.964253 	-91.831833 	Missouri
MS 	32.354668 	-89.398528 	Mississippi
MT 	46.879682 	-110.362566 	Montana
NC 	35.759573 	-79.0193 	North Carolina
ND 	47.551493 	-101.002012 	North Dakota
NE 	41.492537 	-99.901813 	Nebraska
NH 	43.193852 	-71.572395 	New Hampshire
NJ 	40.058324 	-74.405661 	New Jersey
NM 	34.97273 	-105.032363 	New Mexico
NV 	38.80261 	-116.419389 	Nevada
NY 	43.299428 	-74.217933 	New York
OH 	40.417287 	-82.907123 	Ohio
OK 	35.007752 	-97.092877 	Oklahoma
OR 	43.804133 	-120.554201 	Oregon
PA 	41.203322 	-77.194525 	Pennsylvania
PR 	18.220833 	-66.590149 	Puerto Rico
RI 	41.580095 	-71.477429 	Rhode Island
SC 	33.836081 	-81.163725 	South Carolina
SD 	43.969515 	-99.901813 	South Dakota
TN 	35.517491 	-86.580447 	Tennessee
TX 	31.968599 	-99.901813 	Texas
UT 	39.32098 	-111.093731 	Utah
VA 	37.431573 	-78.656894 	Virginia
VT 	44.558803 	-72.577841 	Vermont
WA 	47.751074 	-120.740139 	Washington
WI 	43.78444 	-88.787868 	Wisconsin
WV 	38.597626 	-80.454903 	West Virginia
WY 	43.075968 	-107.290284 	Wyoming
`;

// https://dewiki.de/Lexikon/Liste_der_Bundesstaaten_der_Vereinigten_Staaten_nach_Einwohnerzahl
const usaPopData = `
California	37.253.956
Texas	25.145.561
Florida	18.801.310
New York	19.378.102
Pennsylvania	12.702.379
Illinois	12.830.632
Ohio	11.536.504
Georgia	9.687.371
North Carolina	9.535.483
Michigan	9.883.640
New Jersey	8.791.894
Virginia	8.001.024
Washington	6.724.540
Arizona	6.392.017
Massachusetts	6.547.629
Tennessee	6.346.105
Indiana	6.483.802
Maryland	5.773.552
Missouri	5.988.927
Wisconsin	5.686.986
Colorado	5.029.196
Minnesota	5.303.925
South Carolina	4.625.364
Alabama	4.779.736
Louisiana	4.533.372
Kentucky	4.339.367
Oregon	3.831.074
Oklahoma	3.751.351
Connecticut	3.574.097
Puerto Rico	3.725.789
Utah	2.763.885
Iowa	3.046.355
Nevada	2.700.551
Arkansas	2.988.248
Mississippi	2.967.297
Kansas	2.853.118
New Mexico	2.059.179
Nebraska	1.826.341
Idaho	1.567.582
West Virginia	1.852.994
Hawaii	1.360.301
New Hampshire	1.316.470
Maine	1.328.361
Rhode Island	1.052.567
Montana	989.415
Delaware	897.934
South Dakota	814.180
North Dakota	672.591
Alaska	710.231
Vermont	625.741
Wyoming	563.626
District of Columbia	689.545
`;