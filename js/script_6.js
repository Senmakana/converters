// The following is for homepage
function gObj(obj) {return document.getElementById(obj);}
function popMenu(inval){
	htmlVal = "";
	for (i = 0; i < allA.length; i++) {
		if (inval == allA[i][0][0]){
			htmlVal = htmlVal + "<li id='menuon'><a href='javascript:popMenu(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}else{
			htmlVal = htmlVal + "<li><a href='javascript:popMenu(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}
	}
	htmlVal = "<ul>" + htmlVal + "</ul>";
	document.getElementById("menu").innerHTML = htmlVal;
}

function popMenuSmall(inval){
	tA[0] = new Array("Temp","tA");
	htmlVal = "";
	for (i = 0; i < allA.length; i++) {

		if (inval == allA[i][0][0]){
			htmlVal = htmlVal + "<li id='menuon'><a href='javascript:popMenuSmall(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}else{
			htmlVal = htmlVal + "<li><a href='javascript:popMenuSmall(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}
	}
	htmlVal = "<ul>" + htmlVal + "</ul>";
	document.getElementById("menu").innerHTML = htmlVal;
}


var lA = new Array();
lA[0] = new Array("Length","lA");
lA[1] = new Array("Meter","iv","iv");
lA[2] = new Array("Kilometer","iv*1000","iv/1000");
lA[3] = new Array("Centimeter","iv*0.01","iv/0.01");
lA[4] = new Array("Millimeter","iv*0.001","iv/0.001");
lA[5] = new Array("Micrometer","iv*0.000001","iv/0.000001");
lA[6] = new Array("Nanometer","iv*0.000000001","iv/0.000000001");
lA[7] = new Array("Mile","iv*1609.35","iv/1609.35");
lA[8] = new Array("Yard","iv*0.9144","iv/0.9144");
lA[9] = new Array("Foot","iv*0.3048","iv/0.3048");
lA[10] = new Array("Inch","iv*0.0254","iv/0.0254");
lA[11] = new Array("Light Year","iv*9.46066e+15","iv/9.46066e+15");

var tA = new Array();
tA[0] = new Array("Temperature","tA");
tA[1] = new Array("Celsius","iv","iv");
tA[2] = new Array("Kelvin", "iv - 273.15", "iv + 273.15");
tA[3] = new Array("Fahrenheit", "5/9*(iv-32)", "9/5*iv + 32");

var aA = new Array();
aA[0] = new Array("Area","aA");
aA[1] = new Array("Square Meter","iv","iv");
aA[2] = new Array("Square Kilometer", "iv*1000000", "iv/1000000");
aA[3] = new Array("Square Centimeter", "iv*0.0001", "iv/0.0001");
aA[4] = new Array("Square Millimeter", "iv*0.000001", "iv/0.000001");
aA[5] = new Array("Square Micrometer", "iv*0.000000000001", "iv/0.000000000001");
aA[6] = new Array("Hectare", "iv*10000", "iv/10000");
aA[7] = new Array("Square Mile", "iv*2589990", "iv/2589990");
aA[8] = new Array("Square Yard", "iv*0.83612736", "iv/0.83612736");
aA[9] = new Array("Square Foot", "iv*0.09290304", "iv/0.09290304");
aA[10] = new Array("Square Inch", "iv*0.000645160", "iv/0.000645160");
aA[11] = new Array("Acre", "iv*4046.8564224", "iv/4046.8564224");

var vA = new Array();
vA[0] = new Array("Volume","vA");
vA[1] = new Array("Cubic Meter","iv","iv");
vA[2] = new Array("Cubic Kilometer", "iv*1000000000", "iv/1000000000");
vA[3] = new Array("Cubic Centimeter", "iv*0.000001", "iv/0.000001");
vA[4] = new Array("Cubic Millimeter", "iv*1.0e-9", "iv/1.0e-9");
vA[5] = new Array("Liter", "iv*0.001", "iv/0.001");
vA[6] = new Array("Milliliter", "iv*0.000001", "iv/0.000001");
vA[7] = new Array("US Gallon", "iv*0.00378541", "iv/0.00378541");
vA[8] = new Array("US Quart", "iv*0.0009463525", "iv/0.0009463525");
vA[9] = new Array("US Pint", "iv*0.00047317625", "iv/0.00047317625");
vA[10] = new Array("US Cup", "iv*0.000236588125", "iv/0.000236588125");
vA[11] = new Array("US Fluid Ounce", "iv*0.000029573515625", "iv/0.000029573515625");
vA[12] = new Array("US Table Spoon", "iv*0.0000147867578125", "iv/0.0000147867578125");
vA[13] = new Array("US Tea Spoon", "iv*4.9289192708333333333333333333333e-6", "iv/4.9289192708333333333333333333333e-6");
vA[14] = new Array("Imperial Gallon", "iv*0.00454609", "iv/0.00454609");
vA[15] = new Array("Imperial Quart", "iv*0.0011365225", "iv/0.0011365225");
vA[16] = new Array("Imperial Pint", "iv*0.00056826125", "iv/0.00056826125");
vA[17] = new Array("Imperial Fluid Ounce", "iv*0.0000284130625", "iv/0.0000284130625");
vA[18] = new Array("Imperial Table Spoon", "iv*0.0000177581640625", "iv/0.0000177581640625");
vA[19] = new Array("Imperial Tea Spoon", "iv*5.9193880208333333333333333333333e-6", "iv/5.9193880208333333333333333333333e-6");
vA[20] = new Array("Cubic Mile", "iv*4.16818e+9", "iv/4.16818e+9");
vA[21] = new Array("Cubic Yard", "iv*0.764554857984", "iv/0.764554857984");
vA[22] = new Array("Cubic Foot", "iv*0.028316846592", "iv/0.028316846592");
vA[23] = new Array("Cubic Inch", "iv*0.000016387064", "iv/0.000016387064");

var wA = new Array();
wA[0] = new Array("Weight","wA");
wA[1] = new Array("Kilogram","iv","iv");
wA[2] = new Array("Gram", "iv*0.001", "iv/0.001");
wA[3] = new Array("Milligram", "iv*0.000001", "iv/0.000001");
wA[4] = new Array("Metric Ton", "iv*1000", "iv/1000");
wA[5] = new Array("Long Ton", "iv*1016.04608", "iv/1016.04608");
wA[6] = new Array("Short Ton", "iv*907.184", "iv/907.184");
wA[7] = new Array("Pound", "iv*0.453592", "iv/0.453592");
wA[8] = new Array("Ounce", "iv*0.0283495", "iv/0.0283495");
wA[9] = new Array("Carrat", "iv*0.0002", "iv/0.0002");
wA[10] = new Array("Atomic Mass Unit", "iv*1.6605401999104288e-27", "iv/1.6605401999104288e-27");

var mA = new Array();
mA[0] = new Array("Time","mA");
mA[1] = new Array("Second","iv","iv");
mA[2] = new Array("Millisecond", "iv*0.001", "iv/0.001");
mA[3] = new Array("Microsecond", "iv*0.000001", "iv/0.000001");
mA[4] = new Array("Nanosecond", "iv*0.000000001", "iv/0.000000001");
mA[5] = new Array("Picosecond", "iv*0.000000000001", "iv/0.000000000001");
mA[6] = new Array("Minute", "iv*60", "iv/60");
mA[7] = new Array("Hour", "iv*3600", "iv/3600");
mA[8] = new Array("Day", "iv*86400", "iv/86400");
mA[9] = new Array("Week", "iv*604800", "iv/604800");
mA[10] = new Array("Month", "iv*2629800", "iv/2629800");
mA[11] = new Array("Year", "iv*31557600", "iv/31557600");

allA = new Array(lA,tA,aA,vA,wA,mA);

function isNum(sText){
	var ValidChars = "0123456789.-";
	var Char;
	if (sText.length < 1) return false;
	for (i = 0; i < sText.length; i++) {
		Char = sText.charAt(i);
		if (ValidChars.indexOf(Char) == -1) return false;
	}
	return true;
}

function showSel(aName){
	document.calForm.calFrom.length = 0;
	document.calForm.calTo.length = 0;
	for(i=1; i<aName.length; i++){
		document.calForm.calFrom.options[(i-1)] = new Option(aName[i][0],i);
		document.calForm.calTo.options[(i-1)] = new Option(aName[i][0],i);
	}
	document.calForm.calFrom.options[0].selected = true;
	document.calForm.calTo.options[1].selected = true;
	document.calForm.toVal.value = "";
	currentAName = aName;
	calcul();
}

function calVal(id, iv){
	eval("rv = (" + currentAName[id][2] + ");");
	return gnumberFormatHome(rv);
}
function cleanNumberInputHome(inVal){
	var tempVal	= inVal+"";
	while ((tempVal.indexOf(" ")>-1)||(tempVal.indexOf("	")>-1)||(tempVal.indexOf(",")>-1)){
		tempVal = tempVal.replace(" ", "").replace("	", "").replace(",", "");
	}
	return tempVal;
}
function isNumberHome(val) {
    val = val + "";
    if (val.length < 1) return false;
    if (isNaN(val)) {
        return false;
    } else {
        return true;
    }
}
function gnumberFormatHome(valToBeFormated){
	var gniTotalDigits = 12;
	var gniPareSize = 12;
	var valStr = "" + valToBeFormated;
	if (valStr.indexOf("N")>=0 || (valToBeFormated == 2*valToBeFormated && valToBeFormated == 1+valToBeFormated)) return "Error ";
	var i = valStr.indexOf("e")
	if (i>=0){
		var expStr = valStr.substring(i+1,valStr.length);
		if (i>11) i=11;  // max 11 digits
		valStr = valStr.substring(0,i);
		if (valStr.indexOf(".")<0){
			valStr += ".";
		}else{
			// remove trailing zeros
			j = valStr.length-1;
			while (j>=0 && valStr.charAt(j)=="0") --j;
			valStr = valStr.substring(0,j+1);
		}
		valStr += "E" + expStr;
	}else{
		var valNeg = false;
		if (valToBeFormated < 0){
			valToBeFormated = -valToBeFormated;
			valNeg = true;
		}
		var valInt = Math.floor(valToBeFormated);
		var valFrac = valToBeFormated - valInt;
		var prec = gniTotalDigits - (""+valInt).length - 1;	// how many digits available after period

		var mult = " 1000000000000000000".substring(1,prec+2);
		if ((mult=="")||(mult==" ")){
			mult = 1;
		}else{
			mult = parseInt(mult);
		}
		var frac = Math.floor(valFrac * mult + 0.5);
		valInt = Math.floor(Math.floor(valToBeFormated * mult + .5) / mult);
		if (valNeg)
			valStr = "-" + valInt;
		else
			valStr = "" + valInt;
		var fracStr = "00000000000000"+frac;
		fracStr = fracStr.substring(fracStr.length-prec, fracStr.length);
		i = fracStr.length-1;

		// remove trailing zeros unless fixed during entry.
		while (i>=0 && fracStr.charAt(i)=="0") --i;
		fracStr = fracStr.substring(0,i+1);
		if (i>=0) valStr += "." + fracStr;
	}
	return valStr;
}
function calcul(){
	selectFrom = document.calForm.calFrom;
	selectTo = document.calForm.calTo;
	fromVal = cleanNumberInputHome(document.calForm.fromVal.value);
	selectFromID = 0;
	selectToID = 0;
	selectFromVal = "";
	selectToVal = "";
	stdval = 0;
	for (var i = 0; i < selectFrom.options.length; i++) {
		if(selectFrom.options[i].selected) {
			selectFromID = selectFrom.options[i].value;
			selectFromVal = selectFrom.options[i].text;
		}
	}
	for (var i = 0; i < selectTo.options.length; i++) {
		if(selectTo.options[i].selected) {
			selectToID = selectTo.options[i].value;
			selectToVal = selectTo.options[i].text;
		}
	}

	var tempIndex = fromVal.indexOf("/");
	var fromVal4Exp = fromVal;
	if (tempIndex>0){
		var tempArray = fromVal.split("/");
		if (tempArray.length==2){
			if (isNumber(tempArray[0])){
				if (isNumber(tempArray[1])){
					fromVal = parseFloat(tempArray[0])/parseFloat(tempArray[1]);
				}else{
					fromVal = tempArray[0];
					fromVal4Exp = tempArray[0];
				}
				fromVal += "";
			}
		}
	}

	if ((selectFromID>0) && (isNumberHome(fromVal))){
		iv = parseFloat(fromVal);
		stdval = 0;
		eval("stdval = " + currentAName[selectFromID][1]+ ";");

		document.calForm.calTo.length = 0;
		for(i=1; i<currentAName.length; i++){
			tempVal = calVal(i, stdval);
			selectTo.options[(i-1)] = new Option(currentAName[i][0] + " (" + tempVal + ")",i);
			if (selectToID == i) {
				selectTo.options[(i-1)].selected = true;
				document.calForm.toVal.value = tempVal;
				document.getElementById("calResults").innerHTML = "<font color='red'><b>Result:</b></font> " + fromVal4Exp + " " + selectFromVal + " = " + tempVal + " " + currentAName[i][0];
			}
		}
	}
	if ((!(isNumberHome(fromVal)))||(selectFromID<1)){
		for(i=1; i<currentAName.length; i++){
			tempVal = calVal(i, stdval);
			selectTo.options[(i-1)] = new Option(currentAName[i][0],i);
			if (selectToID == i) {
				selectTo.options[(i-1)].selected = true;
				document.calForm.toVal.value = "";
				document.getElementById("calResults").innerHTML = "";
			}
		}
		if ((fromVal+"").length>0){
			document.getElementById("calResults").innerHTML = "<font color='red'>Please provide a valid number!</font>";
		}
	}
}

if ((typeof isMobile !== 'undefined')&&(isMobile)) {
	popMenuSmall("Length");
}else{
	popMenu("Length");
}
currentAName = lA;
showSel(lA);

var allunitsstr = ['meter [m]{Length}','kilometer [km]{Length}','decimeter [dm]{Length}','centimeter [cm]{Length}','millimeter [mm]{Length}','micrometer [&#181;m]{Length}','nanometer [nm]{Length}','mile [mi, mi(Int)]{Length}','yard [yd]{Length}','foot [ft]{Length}','inch [in]{Length}','light year [ly]{Length}','square meter [m^2]{Area}','square kilometer [km^2]{Area}','square centimeter [cm^2]{Area}','square millimeter [mm^2]{Area}','square micrometer [&#181;m^2]{Area}','hectare [ha]{Area}','acre [ac]{Area}','square mile [mi^2]{Area}','square yard [yd^2]{Area}','square foot [ft^2]{Area}','square inch [in^2]{Area}','kilogram [kg]{Weight And Mass}','gram [g]{Weight And Mass}','milligram [mg]{Weight And Mass}','ton (metric) [t]{Weight And Mass}','pound [lbs]{Weight And Mass}','ounce [oz]{Weight And Mass}','carat [car, ct]{Weight And Mass}','ton (short) [ton (US)]{Weight And Mass}','ton (long) [ton (UK)]{Weight And Mass}','Atomic mass unit [u]{Weight And Mass}','cubic meter [m^3]{Volume}','cubic kilometer [km^3]{Volume}','cubic centimeter [cm^3]{Volume}','cubic millimeter [mm^3]{Volume}','liter [L, l]{Volume}','milliliter [mL]{Volume}','gallon (US) [gal (US)]{Volume}','quart (US) [qt (US)]{Volume}','pint (US) [pt (US)]{Volume}','cup (US){Volume}','tablespoon (US){Volume}','teaspoon (US){Volume}','cubic mile [mi^3]{Volume}','cubic yard [yd^3]{Volume}','cubic foot [ft^3]{Volume}','cubic inch [in^3]{Volume}','kelvin [K]{Temperature}','Celsius [&#176;C]{Temperature}','Fahrenheit [&#176;F]{Temperature}','pascal [Pa]{Pressure}','kilopascal [kPa]{Pressure}','bar{Pressure}','psi [psi]{Pressure}','ksi [ksi]{Pressure}','Standard atmosphere [atm]{Pressure}','joule [J]{Energy}','kilojoule [kJ]{Energy}','kilowatt-hour [kW*h]{Energy}','watt-hour [W*h]{Energy}','calorie (nutritional){Energy}','horsepower (metric) hour{Energy}','Btu (IT) [Btu (IT), Btu]{Energy}','Btu (th) [Btu (th)]{Energy}','binary{Numbers}','octal{Numbers}','decimal{Numbers}','hexadecimal{Numbers}','second [s]{Time}','millisecond [ms]{Time}','minute [min]{Time}','hour [h]{Time}','day [d]{Time}','week{Time}','month{Time}','year [y]{Time}','decade{Time}','century{Time}','millennium{Time}','newton [N]{Force}','kilonewton [kN]{Force}','gram-force [gf]{Force}','kilogram-force [kgf]{Force}','ton-force (metric) [tf]{Force}','degree [&#176;]{Angle}','radian [rad]{Angle}','grad [^g]{Angle}','minute [\']{Angle}','second [&#34;]{Angle}','meter/second [m/s]{Speed}','kilometer/hour [km/h]{Speed}','mile/hour [mi/h]{Speed}','USD [United States Dollar]{Currency}','EUR [Euro]{Currency}','AUD [Australian Dollar]{Currency}','CAD [Canadian Dollar]{Currency}','CHF [Swiss Franc]{Currency}','CNY [Chinese Yuan]{Currency}','EUR [Euro]{Currency}','GBP [British Pound Sterling]{Currency}','INR [Indian Rupee]{Currency}','JPY [Japanese Yen]{Currency}','MXN [Mexican Peso]{Currency}','exameter [Em]{Length}','petameter [Pm]{Length}','terameter [Tm]{Length}','gigameter [Gm]{Length}','megameter [Mm]{Length}','hectometer [hm]{Length}','dekameter [dam]{Length}','micron [&#181;]{Length}','picometer [pm]{Length}','femtometer [fm]{Length}','attometer [am]{Length}','megaparsec [Mpc]{Length}','kiloparsec [kpc]{Length}','parsec [pc]{Length}','astronomical unit [AU, UA]{Length}','league [lea]{Length}','nautical league (UK){Length}','nautical league (int.){Length}','league (statute) [st.league]{Length}','nautical mile (UK) [NM (UK)]{Length}','nautical mile (international){Length}','mile (statute) [mi, mi (US)]{Length}','mile (US survey) [mi]{Length}','mile (Roman){Length}','kiloyard [kyd]{Length}','furlong [fur]{Length}','furlong (US survey) [fur]{Length}','chain [ch]{Length}','chain (US survey) [ch]{Length}','rope{Length}','rod [rd]{Length}','rod (US survey) [rd]{Length}','perch{Length}','pole{Length}','fathom [fath]{Length}','fathom (US survey) [fath]{Length}','ell{Length}','foot (US survey) [ft]{Length}','link [li]{Length}','link (US survey) [li]{Length}','cubit (UK){Length}','hand{Length}','span (cloth){Length}','finger (cloth){Length}','nail (cloth){Length}','inch (US survey) [in]{Length}','barleycorn{Length}','mil [mil, thou]{Length}','microinch{Length}','angstrom [A]{Length}','a.u. of length [a.u., b]{Length}','X-unit [X]{Length}','fermi [F, f]{Length}','arpent{Length}','pica{Length}','point{Length}','twip{Length}','aln{Length}','famn{Length}','caliber [cl]{Length}','centiinch [cin]{Length}','ken{Length}','Russian archin{Length}','Roman actus{Length}','vara de tarea{Length}','vara conuquera{Length}','vara castellana{Length}','cubit (Greek){Length}','long reed{Length}','reed{Length}','long cubit{Length}','handbreadth{Length}','fingerbreadth{Length}','Planck length{Length}','Electron radius (classical){Length}','Bohr radius [b, a.u.]{Length}','Earth\'s equatorial radius{Length}','Earth\'s polar radius{Length}','Earth\'s distance from sun{Length}','Sun\'s radius{Length}','square hectometer [hm^2]{Area}','square dekameter [dam^2]{Area}','square decimeter [dm^2]{Area}','square nanometer [nm^2]{Area}','are [a]{Area}','barn [b]{Area}','square mile (US survey){Area}','square foot (US survey){Area}','circular inch{Area}','township{Area}','section{Area}','acre (US survey) [ac]{Area}','rood{Area}','square chain [ch^2]{Area}','square rod{Area}','square rod (US survey){Area}','square perch{Area}','square pole{Area}','square mil [mil^2]{Area}','circular mil{Area}','homestead{Area}','sabin{Area}','arpent{Area}','cuerda{Area}','plaza{Area}','varas castellanas cuad{Area}','varas conuqueras cuad{Area}','Electron cross section{Area}','exagram [Eg]{Weight And Mass}','petagram [Pg]{Weight And Mass}','teragram [Tg]{Weight And Mass}','gigagram [Gg]{Weight And Mass}','megagram [Mg]{Weight And Mass}','hectogram [hg]{Weight And Mass}','dekagram [dag]{Weight And Mass}','decigram [dg]{Weight And Mass}','centigram [cg]{Weight And Mass}','microgram [&#181;g]{Weight And Mass}','nanogram [ng]{Weight And Mass}','picogram [pg]{Weight And Mass}','femtogram [fg]{Weight And Mass}','attogram [ag]{Weight And Mass}','dalton{Weight And Mass}','kilogram-force square second/meter{Weight And Mass}','kilopound [kip]{Weight And Mass}','kip{Weight And Mass}','slug{Weight And Mass}','pound-force square second/foot{Weight And Mass}','pound (troy or apothecary){Weight And Mass}','poundal [pdl]{Weight And Mass}','ton (assay) (US) [AT (US)]{Weight And Mass}','ton (assay) (UK) [AT (UK)]{Weight And Mass}','kiloton (metric) [kt]{Weight And Mass}','quintal (metric) [cwt]{Weight And Mass}','hundredweight (US){Weight And Mass}','hundredweight (UK){Weight And Mass}','quarter (US) [qr (US)]{Weight And Mass}','quarter (UK) [qr (UK)]{Weight And Mass}','stone (US){Weight And Mass}','stone (UK){Weight And Mass}','tonne [t]{Weight And Mass}','pennyweight [pwt]{Weight And Mass}','scruple (apothecary) [s.ap]{Weight And Mass}','grain [gr]{Weight And Mass}','gamma{Weight And Mass}','talent (Biblical Hebrew){Weight And Mass}','mina (Biblical Hebrew){Weight And Mass}','shekel (Biblical Hebrew){Weight And Mass}','bekan (Biblical Hebrew){Weight And Mass}','gerah (Biblical Hebrew){Weight And Mass}','talent (Biblical Greek){Weight And Mass}','mina (Biblical Greek){Weight And Mass}','tetradrachma (Biblical Greek){Weight And Mass}','didrachma (Biblical Greek){Weight And Mass}','drachma (Biblical Greek){Weight And Mass}','denarius (Biblical Roman){Weight And Mass}','assarion (Biblical Roman){Weight And Mass}','quadrans (Biblical Roman){Weight And Mass}','lepton (Biblical Roman){Weight And Mass}','Planck mass{Weight And Mass}','Electron mass (rest){Weight And Mass}','Muon mass{Weight And Mass}','Proton mass{Weight And Mass}','Neutron mass{Weight And Mass}','Deuteron mass{Weight And Mass}','Earth\'s mass{Weight And Mass}','Sun\'s mass{Weight And Mass}','cubic decimeter [dm^3]{Volume}','exaliter [EL]{Volume}','petaliter [PL]{Volume}','teraliter [TL]{Volume}','gigaliter [GL]{Volume}','megaliter [ML]{Volume}','kiloliter [kL]{Volume}','hectoliter [hL]{Volume}','dekaliter [daL]{Volume}','deciliter [dL]{Volume}','centiliter [cL]{Volume}','microliter [&#181;L]{Volume}','nanoliter [nL]{Volume}','picoliter [pL]{Volume}','femtoliter [fL]{Volume}','attoliter [aL]{Volume}','cc [cc, cm^3]{Volume}','drop{Volume}','barrel (oil) [bbl (oil)]{Volume}','barrel (US) [bbl (US)]{Volume}','barrel (UK) [bbl (UK)]{Volume}','gallon (UK) [gal (UK)]{Volume}','quart (UK) [qt (UK)]{Volume}','pint (UK) [pt (UK)]{Volume}','cup (metric){Volume}','cup (UK){Volume}','fluid ounce (US) [fl oz (US)]{Volume}','fluid ounce (UK) [fl oz (UK)]{Volume}','tablespoon (metric){Volume}','tablespoon (UK){Volume}','dessertspoon (US){Volume}','dessertspoon (UK){Volume}','teaspoon (metric){Volume}','teaspoon (UK){Volume}','gill (US) [gi]{Volume}','gill (UK) [gi (UK)]{Volume}','minim (US){Volume}','minim (UK){Volume}','ton register [ton reg]{Volume}','ccf{Volume}','hundred-cubic foot{Volume}','acre-foot [ac*ft]{Volume}','acre-foot (US survey){Volume}','acre-inch [ac*in]{Volume}','dekastere{Volume}','stere [st]{Volume}','decistere{Volume}','cord [cd]{Volume}','tun{Volume}','hogshead{Volume}','board foot{Volume}','dram [dr]{Volume}','cor (Biblical){Volume}','homer (Biblical){Volume}','bath (Biblical){Volume}','hin (Biblical){Volume}','cab (Biblical){Volume}','log (Biblical){Volume}','Taza (Spanish){Volume}','Earth\'s volume{Volume}','Rankine [&#176;R]{Temperature}','Reaumur [&#176;r]{Temperature}','Triple point of water{Temperature}','exapascal [EPa]{Pressure}','petapascal [PPa]{Pressure}','terapascal [TPa]{Pressure}','gigapascal [GPa]{Pressure}','megapascal [MPa]{Pressure}','hectopascal [hPa]{Pressure}','dekapascal [daPa]{Pressure}','decipascal [dPa]{Pressure}','centipascal [cPa]{Pressure}','millipascal [mPa]{Pressure}','micropascal [&#181;Pa]{Pressure}','nanopascal [nPa]{Pressure}','picopascal [pPa]{Pressure}','femtopascal [fPa]{Pressure}','attopascal [aPa]{Pressure}','newton/square meter{Pressure}','newton/square centimeter{Pressure}','newton/square millimeter{Pressure}','kilonewton/square meter{Pressure}','millibar [mbar]{Pressure}','microbar [&#181;bar]{Pressure}','dyne/square centimeter{Pressure}','kilogram-force/square meter{Pressure}','kilogram-force/sq. cm{Pressure}','kilogram-force/sq. millimeter{Pressure}','gram-force/sq. centimeter{Pressure}','ton-force (short)/sq. foot{Pressure}','ton-force (short)/sq. inch{Pressure}','ton-force (long)/square foot{Pressure}','ton-force (long)/square inch{Pressure}','kip-force/square inch{Pressure}','pound-force/square foot{Pressure}','pound-force/square inch{Pressure}','poundal/square foot{Pressure}','torr [Torr]{Pressure}','centimeter mercury (0&#176;C){Pressure}','millimeter mercury (0&#176;C){Pressure}','inch mercury (32&#176;F) [inHg]{Pressure}','inch mercury (60&#176;F) [inHg]{Pressure}','centimeter water (4&#176;C){Pressure}','millimeter water (4&#176;C){Pressure}','inch water (4&#176;C) [inAq]{Pressure}','foot water (4&#176;C) [ftAq]{Pressure}','inch water (60&#176;F) [inAq]{Pressure}','foot water (60&#176;F) [ftAq]{Pressure}','atmosphere technical [at]{Pressure}','gigajoule [GJ]{Energy}','megajoule [MJ]{Energy}','millijoule [mJ]{Energy}','microjoule [&#181;J]{Energy}','nanojoule [nJ]{Energy}','attojoule [aJ]{Energy}','megaelectron-volt [MeV]{Energy}','kiloelectron-volt [keV]{Energy}','electron-volt [eV]{Energy}','erg{Energy}','gigawatt-hour [GW*h]{Energy}','megawatt-hour [MW*h]{Energy}','kilowatt-second [kW*s]{Energy}','watt-second [W*s]{Energy}','newton meter [N*m]{Energy}','horsepower hour [hp*h]{Energy}','kilocalorie (IT) [kcal (IT)]{Energy}','kilocalorie (th) [kcal (th)]{Energy}','calorie (IT) [cal (IT), cal]{Energy}','calorie (th) [cal (th)]{Energy}','mega Btu (IT) [MBtu (IT)]{Energy}','ton-hour (refrigeration){Energy}','fuel oil equivalent @kiloliter{Energy}','fuel oil equivalent @barrel (US){Energy}','gigaton [Gton]{Energy}','megaton [Mton]{Energy}','kiloton [kton]{Energy}','ton (explosives){Energy}','dyne centimeter [dyn*cm]{Energy}','gram-force meter [gf*m]{Energy}','gram-force centimeter{Energy}','kilogram-force centimeter{Energy}','kilogram-force meter{Energy}','kilopond meter [kp*m]{Energy}','pound-force foot [lbf*ft]{Energy}','pound-force inch [lbf*in]{Energy}','ounce-force inch [ozf*in]{Energy}','foot-pound [ft*lbf]{Energy}','inch-pound [in*lbf]{Energy}','inch-ounce [in*ozf]{Energy}','poundal foot [pdl*ft]{Energy}','therm{Energy}','therm (EC){Energy}','therm (US){Energy}','Hartree energy{Energy}','Rydberg constant{Energy}','base-2{Numbers}','base-3{Numbers}','base-4{Numbers}','base-5{Numbers}','base-6{Numbers}','base-7{Numbers}','base-8{Numbers}','base-9{Numbers}','base-10{Numbers}','base-11{Numbers}','base-12{Numbers}','base-13{Numbers}','base-14{Numbers}','base-15{Numbers}','base-16{Numbers}','base-17{Numbers}','base-18{Numbers}','base-19{Numbers}','base-20{Numbers}','base-21{Numbers}','base-22{Numbers}','base-23{Numbers}','base-24{Numbers}','base-25{Numbers}','base-26{Numbers}','base-27{Numbers}','base-28{Numbers}','base-29{Numbers}','base-30{Numbers}','base-31{Numbers}','base-32{Numbers}','base-33{Numbers}','base-34{Numbers}','base-35{Numbers}','base-36{Numbers}','microsecond [&#181;s]{Time}','nanosecond [ns]{Time}','picosecond [ps]{Time}','femtosecond [fs]{Time}','attosecond [as]{Time}','shake{Time}','month (synodic){Time}','year (Julian){Time}','year (leap){Time}','year (tropical){Time}','year (sidereal){Time}','day (sidereal){Time}','hour (sidereal){Time}','minute (sidereal){Time}','second (sidereal){Time}','fortnight{Time}','septennial{Time}','octennial{Time}','novennial{Time}','quindecennial{Time}','quinquennial{Time}','Planck time{Time}','exanewton [EN]{Force}','petanewton [PT]{Force}','teranewton [TN]{Force}','giganewton [GN]{Force}','meganewton [MN]{Force}','hectonewton [hN]{Force}','dekanewton [daN]{Force}','decinewton [dN]{Force}','centinewton [cN]{Force}','millinewton [mN]{Force}','micronewton [&#181;N]{Force}','nanonewton [nN]{Force}','piconewton [pN]{Force}','femtonewton [fN]{Force}','attonewton [aN]{Force}','dyne [dyn]{Force}','joule/meter [J/m]{Force}','joule/centimeter [J/cm]{Force}','ton-force (short){Force}','ton-force (long) [tonf (UK)]{Force}','kip-force [kipf]{Force}','kilopound-force [kipf]{Force}','pound-force [lbf]{Force}','ounce-force [ozf]{Force}','poundal [pdl]{Force}','pound foot/square second{Force}','pond [p]{Force}','kilopond [kp]{Force}','gon{Angle}','sign{Angle}','mil{Angle}','revolution [r]{Angle}','circle{Angle}','turn{Angle}','quadrant{Angle}','right angle{Angle}','sextant{Angle}','meter/hour [m/h]{Speed}','meter/minute [m/min]{Speed}','kilometer/minute [km/min]{Speed}','kilometer/second [km/s]{Speed}','centimeter/hour [cm/h]{Speed}','centimeter/minute [cm/min]{Speed}','centimeter/second [cm/s]{Speed}','millimeter/hour [mm/h]{Speed}','millimeter/minute [mm/min]{Speed}','millimeter/second [mm/s]{Speed}','foot/hour [ft/h]{Speed}','foot/minute [ft/min]{Speed}','foot/second [ft/s]{Speed}','yard/hour [yd/h]{Speed}','yard/minute [yd/min]{Speed}','yard/second [yd/s]{Speed}','mile/minute [mi/min]{Speed}','mile/second [mi/s]{Speed}','knot [kt, kn]{Speed}','knot (UK) [kt (UK)]{Speed}','Velocity of light in vacuum{Speed}','Cosmic velocity - first{Speed}','Cosmic velocity - second{Speed}','Cosmic velocity - third{Speed}','Earth\'s velocity{Speed}','Velocity of sound in pure water{Speed}','Velocity of sound in sea water (20&#176;C, 10 meter deep){Speed}','Mach (20&#176;C, 1 atm){Speed}','Mach (SI standard){Speed}','AED [United Arab Emirates Dirham]{Currency}','AFN [Afghan Afghani]{Currency}','ALL [Albanian Lek]{Currency}','AMD [Armenian Dram]{Currency}','ANG [Netherlands Antillean Guilder]{Currency}','AOA [Angolan Kwanza]{Currency}','ARS [Argentine Peso]{Currency}','AWG [Aruban Florin]{Currency}','AZN [Azerbaijani Manat]{Currency}','BAM [Bosnia-Herzegovina Convertible Mark]{Currency}','BBD [Barbadian Dollar]{Currency}','BDT [Bangladeshi Taka]{Currency}','BGN [Bulgarian Lev]{Currency}','BHD [Bahraini Dinar]{Currency}','BIF [Burundian Franc]{Currency}','BMD [Bermudan Dollar]{Currency}','BND [Brunei Dollar]{Currency}','BOB [Bolivian Boliviano]{Currency}','BRL [Brazilian Real]{Currency}','BSD [Bahamian Dollar]{Currency}','BTC [Bitcoin]{Currency}','BTN [Bhutanese Ngultrum]{Currency}','BWP [Botswanan Pula]{Currency}','BYR [Belarusian Ruble]{Currency}','BZD [Belize Dollar]{Currency}','CDF [Congolese Franc]{Currency}','CLF [Chilean Unit of Account (UF)]{Currency}','CLP [Chilean Peso]{Currency}','COP [Colombian Peso]{Currency}','CRC [Costa Rican Col\\u00f3n]{Currency}','CUC [Cuban Convertible Peso]{Currency}','CUP [Cuban Peso]{Currency}','CVE [Cape Verdean Escudo]{Currency}','CZK [Czech Republic Koruna]{Currency}','DJF [Djiboutian Franc]{Currency}','DKK [Danish Krone]{Currency}','DOP [Dominican Peso]{Currency}','DZD [Algerian Dinar]{Currency}','EEK [Estonian Kroon]{Currency}','EGP [Egyptian Pound]{Currency}','ERN [Eritrean Nakfa]{Currency}','ETB [Ethiopian Birr]{Currency}','FJD [Fijian Dollar]{Currency}','FKP [Falkland Islands Pound]{Currency}','GEL [Georgian Lari]{Currency}','GGP [Guernsey Pound]{Currency}','GHS [Ghanaian Cedi]{Currency}','GIP [Gibraltar Pound]{Currency}','GMD [Gambian Dalasi]{Currency}','GNF [Guinean Franc]{Currency}','GTQ [Guatemalan Quetzal]{Currency}','GYD [Guyanaese Dollar]{Currency}','HKD [Hong Kong Dollar]{Currency}','HNL [Honduran Lempira]{Currency}','HRK [Croatian Kuna]{Currency}','HTG [Haitian Gourde]{Currency}','HUF [Hungarian Forint]{Currency}','IDR [Indonesian Rupiah]{Currency}','ILS [Israeli New Sheqel]{Currency}','IMP [Manx pound]{Currency}','IQD [Iraqi Dinar]{Currency}','IRR [Iranian Rial]{Currency}','ISK [Icelandic Kr\\u00f3na]{Currency}','JEP [Jersey Pound]{Currency}','JMD [Jamaican Dollar]{Currency}','JOD [Jordanian Dinar]{Currency}','KES [Kenyan Shilling]{Currency}','KGS [Kyrgystani Som]{Currency}','KHR [Cambodian Riel]{Currency}','KMF [Comorian Franc]{Currency}','KPW [North Korean Won]{Currency}','KRW [South Korean Won]{Currency}','KWD [Kuwaiti Dinar]{Currency}','KYD [Cayman Islands Dollar]{Currency}','KZT [Kazakhstani Tenge]{Currency}','LAK [Laotian Kip]{Currency}','LBP [Lebanese Pound]{Currency}','LKR [Sri Lankan Rupee]{Currency}','LRD [Liberian Dollar]{Currency}','LSL [Lesotho Loti]{Currency}','LTL [Lithuanian Litas]{Currency}','LVL [Latvian Lats]{Currency}','LYD [Libyan Dinar]{Currency}','MAD [Moroccan Dirham]{Currency}','MDL [Moldovan Leu]{Currency}','MGA [Malagasy Ariary]{Currency}','MKD [Macedonian Denar]{Currency}','MMK [Myanma Kyat]{Currency}','MNT [Mongolian Tugrik]{Currency}','MOP [Macanese Pataca]{Currency}','MRO [Mauritanian Ouguiya]{Currency}','MTL [Maltese Lira]{Currency}','MUR [Mauritian Rupee]{Currency}','MVR [Maldivian Rufiyaa]{Currency}','MWK [Malawian Kwacha]{Currency}','MYR [Malaysian Ringgit]{Currency}','MZN [Mozambican Metical]{Currency}','NAD [Namibian Dollar]{Currency}','NGN [Nigerian Naira]{Currency}','NIO [Nicaraguan C\\u00f3rdoba]{Currency}','NOK [Norwegian Krone]{Currency}','NPR [Nepalese Rupee]{Currency}','NZD [New Zealand Dollar]{Currency}','OMR [Omani Rial]{Currency}','PAB [Panamanian Balboa]{Currency}','PEN [Peruvian Nuevo Sol]{Currency}','PGK [Papua New Guinean Kina]{Currency}','PHP [Philippine Peso]{Currency}','PKR [Pakistani Rupee]{Currency}','PLN [Polish Zloty]{Currency}','PYG [Paraguayan Guarani]{Currency}','QAR [Qatari Rial]{Currency}','RON [Romanian Leu]{Currency}','RSD [Serbian Dinar]{Currency}','RUB [Russian Ruble]{Currency}','RWF [Rwandan Franc]{Currency}','SAR [Saudi Riyal]{Currency}','SBD [Solomon Islands Dollar]{Currency}','SCR [Seychellois Rupee]{Currency}','SDG [Sudanese Pound]{Currency}','SEK [Swedish Krona]{Currency}','SGD [Singapore Dollar]{Currency}','SHP [Saint Helena Pound]{Currency}','SLL [Sierra Leonean Leone]{Currency}','SOS [Somali Shilling]{Currency}','SRD [Surinamese Dollar]{Currency}','STD [S\\u00e3o Tom\\u00e9 and Pr\\u00edncipe Dobra]{Currency}','SVC [Salvadoran Col\\u00f3n]{Currency}','SYP [Syrian Pound]{Currency}','SZL [Swazi Lilangeni]{Currency}','THB [Thai Baht]{Currency}','TJS [Tajikistani Somoni]{Currency}','TMT [Turkmenistani Manat]{Currency}','TND [Tunisian Dinar]{Currency}','TOP [Tongan Pa\\u02bbanga]{Currency}','TRY [Turkish Lira]{Currency}','TTD [Trinidad and Tobago Dollar]{Currency}','TWD [New Taiwan Dollar]{Currency}','TZS [Tanzanian Shilling]{Currency}','UAH [Ukrainian Hryvnia]{Currency}','UGX [Ugandan Shilling]{Currency}','UYU [Uruguayan Peso]{Currency}','UZS [Uzbekistan Som]{Currency}','VEF [Venezuelan Bol\\u00edvar Fuerte]{Currency}','VND [Vietnamese Dong]{Currency}','VUV [Vanuatu Vatu]{Currency}','WST [Samoan Tala]{Currency}','XAF [CFA Franc BEAC]{Currency}','XAG [Silver (troy ounce)]{Currency}','XAU [Gold (troy ounce)]{Currency}','XCD [East Caribbean Dollar]{Currency}','XDR [Special Drawing Rights]{Currency}','XOF [CFA Franc BCEAO]{Currency}','XPD [Palladium Ounce]{Currency}','XPF [CFP Franc]{Currency}','XPT [Platinum Ounce]{Currency}','YER [Yemeni Rial]{Currency}','ZAR [South African Rand]{Currency}','ZMK [Zambian Kwacha (pre-2013)]{Currency}','ZMW [Zambian Kwacha]{Currency}','ZWL [Zimbabwean Dollar]{Currency}','none{Prefixes}','yotta [Y]{Prefixes}','zetta [Z]{Prefixes}','exa [E]{Prefixes}','peta [P]{Prefixes}','tera [T]{Prefixes}','giga [G]{Prefixes}','mega [M]{Prefixes}','kilo [k]{Prefixes}','hecto [h]{Prefixes}','deka [da]{Prefixes}','deci [d]{Prefixes}','centi [c]{Prefixes}','milli [m]{Prefixes}','micro [&#181;]{Prefixes}','nano [n]{Prefixes}','pico [p]{Prefixes}','femto [f]{Prefixes}','atto [a]{Prefixes}','zepto [z]{Prefixes}','yocto [y]{Prefixes}','meter/square second{Acceleration}','decimeter/square second{Acceleration}','kilometer/square second{Acceleration}','hectometer/square second{Acceleration}','dekameter/square second{Acceleration}','centimeter/square second{Acceleration}','millimeter/square second{Acceleration}','micrometer/square second{Acceleration}','nanometer/square second{Acceleration}','picometer/square second{Acceleration}','femtometer/square second{Acceleration}','attometer/square second{Acceleration}','gal [Gal]{Acceleration}','galileo [Gal]{Acceleration}','mile/square second [mi/s^2]{Acceleration}','yard/square second{Acceleration}','foot/square second [ft/s^2]{Acceleration}','inch/square second [in/s^2]{Acceleration}','Acceleration of gravity [g]{Acceleration}','ampere/meter [A/m]{Magnetic Field Strength}','ampere turn/meter [At/m]{Magnetic Field Strength}','kiloampere/meter [kA/m]{Magnetic Field Strength}','oersted [Oe]{Magnetic Field Strength}','kelvin [K]{Temperature Interval}','degree Celsius [&#176;C]{Temperature Interval}','degree centigrade [&#176;C]{Temperature Interval}','degree Fahrenheit [&#176;F]{Temperature Interval}','degree Rankine [&#176;R]{Temperature Interval}','degree Reaumur [&#176;r]{Temperature Interval}','coulomb/kilogram [C/kg]{Radiation Exposure}','millicoulomb/kilogram [mC/kg]{Radiation Exposure}','microcoulomb/kilogram [&#181;C/kg]{Radiation Exposure}','roentgen [R]{Radiation Exposure}','tissue roentgen{Radiation Exposure}','parker{Radiation Exposure}','rep{Radiation Exposure}','kelvin/watt [K/W]{Thermal Resistance}','degree Fahrenheit hour/Btu (IT){Thermal Resistance}','degree Fahrenheit hour/Btu (th){Thermal Resistance}','degree Fahrenheit second/Btu (IT){Thermal Resistance}','degree Fahrenheit second/Btu (th){Thermal Resistance}','watt/square meter [W/m^2]{Heat Flux Density}','kilowatt/square meter{Heat Flux Density}','watt/square centimeter{Heat Flux Density}','watt/square inch [W/in^2]{Heat Flux Density}','joule/second/square meter{Heat Flux Density}','kilocalorie (IT)/hour/square meter{Heat Flux Density}','kilocalorie (IT)/hour/square foot{Heat Flux Density}','calorie (IT)/second/square centimeter{Heat Flux Density}','calorie (IT)/minute/square centimeter{Heat Flux Density}','calorie (IT)/hour/square centimeter{Heat Flux Density}','calorie (th)/second/square centimeter{Heat Flux Density}','calorie (th)/minute/square centimeter{Heat Flux Density}','calorie (th)/hour/square centimeter{Heat Flux Density}','dyne/hour/centimeter{Heat Flux Density}','erg/hour/square millimeter{Heat Flux Density}','foot pound/minute/square foot{Heat Flux Density}','horsepower/square foot{Heat Flux Density}','horsepower (metric)/square foot{Heat Flux Density}','Btu (IT)/second/square foot{Heat Flux Density}','Btu (IT)/minute/square foot{Heat Flux Density}','Btu (IT)/hour/square foot{Heat Flux Density}','Btu (th)/second/square inch{Heat Flux Density}','Btu (th)/second/square foot{Heat Flux Density}','Btu (th)/minute/square foot{Heat Flux Density}','Btu (th)/hour/square foot{Heat Flux Density}','CHU/hour/square foot{Heat Flux Density}','cubic meter/kilogram{Specific Volume}','cubic centimeter/gram{Specific Volume}','liter/kilogram [L/kg]{Specific Volume}','liter/gram [L/g]{Specific Volume}','cubic foot/kilogram [ft^3/kg]{Specific Volume}','cubic foot/pound [ft^3/lb]{Specific Volume}','gallon (US)/pound{Specific Volume}','gallon (UK)/pound{Specific Volume}','kilogram/pascal/second/square meter{Permeability}','permeability (0&#176;C){Permeability}','permeability (23&#176;C){Permeability}','permeability inches (0&#176;C){Permeability}','permeability inches (23&#176;C){Permeability}','candle (international) [c]{Luminous Intensity}','candle (German) [c (German)]{Luminous Intensity}','candle (UK) [c (UK)]{Luminous Intensity}','decimal candle{Luminous Intensity}','candle (pentane){Luminous Intensity}','pentane candle (10 candle power){Luminous Intensity}','hefner candle{Luminous Intensity}','carcel unit{Luminous Intensity}','bougie decimal{Luminous Intensity}','lumen/steradian [lm/sr]{Luminous Intensity}','cubic meter/second [m^3/s]{Flow}','cubic meter/day [m^3/d]{Flow}','cubic meter/hour [m^3/h]{Flow}','cubic meter/minute{Flow}','cubic centimeter/day{Flow}','cubic centimeter/hour{Flow}','cubic centimeter/minute{Flow}','cubic centimeter/second{Flow}','liter/day [L/d]{Flow}','liter/hour [L/h]{Flow}','liter/minute [L/min]{Flow}','liter/second [L/s]{Flow}','milliliter/day [mL/d]{Flow}','milliliter/hour [mL/h]{Flow}','milliliter/minute [mL/min]{Flow}','milliliter/second [mL/s]{Flow}','gallon (US)/day [gal (US)/d]{Flow}','gallon (US)/hour [gal (US)/h]{Flow}','gallon (US)/minute{Flow}','gallon (US)/second{Flow}','gallon (UK)/day [gal (UK)/d]{Flow}','gallon (UK)/hour [gal (UK)/h]{Flow}','gallon (UK)/minute{Flow}','gallon (UK)/second{Flow}','kilobarrel (US)/day{Flow}','barrel (US)/day [bbl (US)/d]{Flow}','barrel (US)/hour [bbl (US)/h]{Flow}','barrel (US)/minute{Flow}','barrel (US)/second{Flow}','acre-foot/year [ac*ft/y]{Flow}','acre-foot/day [ac*ft/d]{Flow}','acre-foot/hour [ac*ft/h]{Flow}','hundred-cubic foot/day{Flow}','hundred-cubic foot/hour{Flow}','hundred-cubic foot/minute{Flow}','ounce/hour [oz/h]{Flow}','ounce/minute [oz/min]{Flow}','ounce/second [oz/s]{Flow}','ounce (UK)/hour [oz (UK)/h]{Flow}','ounce (UK)/minute{Flow}','ounce (UK)/second{Flow}','cubic yard/hour [yd^3/h]{Flow}','cubic yard/minute{Flow}','cubic yard/second [yd^3/s]{Flow}','cubic foot/hour [ft^3/h]{Flow}','cubic foot/minute [ft^3/min]{Flow}','cubic foot/second [ft^3/s]{Flow}','cubic inch/hour [in^3/h]{Flow}','cubic inch/minute [in^3/min]{Flow}','cubic inch/second [in^3/s]{Flow}','pound/second (Gasoline at 15.5%b0C){Flow}','pound/minute (Gasoline at 15.5%b0C){Flow}','pound/hour (Gasoline at 15.5%b0C){Flow}','pound/day (Gasoline at 15.5%b0C){Flow}','kilogram/second (Gasoline at 15.5%b0C){Flow}','kilogram/minute (Gasoline at 15.5%b0C){Flow}','kilogram/hour (Gasoline at 15.5%b0C){Flow}','kilogram/day (Gasoline at 15.5%b0C){Flow}','weber [Wb]{Magnetic Flux}','milliweber [mWb]{Magnetic Flux}','microweber [&#181;Wb]{Magnetic Flux}','volt second [V*s]{Magnetic Flux}','unit pole{Magnetic Flux}','megaline{Magnetic Flux}','kiloline{Magnetic Flux}','line{Magnetic Flux}','maxwell [Mx]{Magnetic Flux}','tesla square meter [T*m^2]{Magnetic Flux}','tesla square centimeter{Magnetic Flux}','gauss square centimeter{Magnetic Flux}','Magnetic flux quantum{Magnetic Flux}','coulomb/meter [C/m]{Linear Charge Density}','coulomb/centimeter [C/cm]{Linear Charge Density}','coulomb/inch [C/in]{Linear Charge Density}','abcoulomb/meter [abC/m]{Linear Charge Density}','abcoulomb/centimeter{Linear Charge Density}','abcoulomb/inch [abC/in]{Linear Charge Density}','lux [lx]{Illumination}','meter-candle [m*c]{Illumination}','centimeter-candle [cm*c]{Illumination}','foot-candle [ft*c, fc]{Illumination}','flame{Illumination}','phot [ph]{Illumination}','nox{Illumination}','candela steradian/sq. meter{Illumination}','lumen/square meter [lm/m^2]{Illumination}','lumen/square centimeter{Illumination}','lumen/square foot [lm/ft^2]{Illumination}','watt/sq. cm (at 555 nm){Illumination}','ohm meter{Electric Resistivity}','ohm centimeter{Electric Resistivity}','ohm inch{Electric Resistivity}','microhm centimeter{Electric Resistivity}','microhm inch{Electric Resistivity}','abohm centimeter{Electric Resistivity}','statohm centimeter{Electric Resistivity}','circular mil ohm/foot{Electric Resistivity}','watt [W]{Power}','exawatt [EW]{Power}','petawatt [PW]{Power}','terawatt [TW]{Power}','gigawatt [GW]{Power}','megawatt [MW]{Power}','kilowatt [kW]{Power}','hectowatt [hW]{Power}','dekawatt [daW]{Power}','deciwatt [dW]{Power}','centiwatt [cW]{Power}','milliwatt [mW]{Power}','microwatt [&#181;W]{Power}','nanowatt [nW]{Power}','picowatt [pW]{Power}','femtowatt [fW]{Power}','attowatt [aW]{Power}','horsepower [hp, hp (UK)]{Power}','horsepower (550 ft*lbf/s){Power}','horsepower (metric){Power}','horsepower (boiler){Power}','horsepower (electric){Power}','horsepower (water){Power}','pferdestarke (ps){Power}','Btu (IT)/hour [Btu/h]{Power}','Btu (IT)/minute [Btu/min]{Power}','Btu (IT)/second [Btu/s]{Power}','Btu (th)/hour [Btu (th)/h]{Power}','Btu (th)/minute{Power}','Btu (th)/second [Btu (th)/s]{Power}','MBtu (IT)/hour [MBtu/h]{Power}','MBH{Power}','ton (refrigeration){Power}','kilocalorie (IT)/hour [kcal/h]{Power}','kilocalorie (IT)/minute{Power}','kilocalorie (IT)/second{Power}','kilocalorie (th)/hour{Power}','kilocalorie (th)/minute{Power}','kilocalorie (th)/second{Power}','calorie (IT)/hour [cal/h]{Power}','calorie (IT)/minute [cal/min]{Power}','calorie (IT)/second [cal/s]{Power}','calorie (th)/hour [cal (th)/h]{Power}','calorie (th)/minute{Power}','calorie (th)/second{Power}','foot pound-force/hour{Power}','foot pound-force/minute{Power}','foot pound-force/second{Power}','pound-foot/hour [lbf*ft/h]{Power}','pound-foot/minute{Power}','pound-foot/second{Power}','erg/second [erg/s]{Power}','kilovolt ampere [kV*A]{Power}','volt ampere [V*A]{Power}','newton meter/second{Power}','joule/second [J/s]{Power}','exajoule/second [EJ/s]{Power}','petajoule/second [PJ/s]{Power}','terajoule/second [TJ/s]{Power}','gigajoule/second [GJ/s]{Power}','megajoule/second [MJ/s]{Power}','kilojoule/second [kJ/s]{Power}','hectojoule/second [hJ/s]{Power}','dekajoule/second [daJ/s]{Power}','decijoule/second [dJ/s]{Power}','centijoule/second [cJ/s]{Power}','millijoule/second [mJ/s]{Power}','microjoule/second [&#181;J/s]{Power}','nanojoule/second [nJ/s]{Power}','picojoule/second [pJ/s]{Power}','femtojoule/second [fJ/s]{Power}','attojoule/second [aJ/s]{Power}','joule/hour [J/h]{Power}','joule/minute [J/min]{Power}','kilojoule/hour [kJ/h]{Power}','kilojoule/minute [kJ/min]{Power}','meter/liter [m/L]{Fuel Consumption}','exameter/liter [Em/L]{Fuel Consumption}','petameter/liter [Pm/L]{Fuel Consumption}','terameter/liter [Tm/L]{Fuel Consumption}','gigameter/liter [Gm/L]{Fuel Consumption}','megameter/liter [Mm/L]{Fuel Consumption}','kilometer/liter [km/L]{Fuel Consumption}','hectometer/liter [hm/L]{Fuel Consumption}','dekameter/liter [dam/L]{Fuel Consumption}','centimeter/liter [cm/L]{Fuel Consumption}','mile (US)/liter [mi/L]{Fuel Consumption}','nautical mile/liter [n.mile/L]{Fuel Consumption}','nautical mile/gallon (US){Fuel Consumption}','kilometer/gallon (US){Fuel Consumption}','meter/gallon (US){Fuel Consumption}','meter/gallon (UK){Fuel Consumption}','mile/gallon (US){Fuel Consumption}','mile/gallon (UK){Fuel Consumption}','meter/cubic meter [m/m^3]{Fuel Consumption}','meter/cubic centimeter{Fuel Consumption}','meter/cubic yard [m/yd^3]{Fuel Consumption}','meter/cubic foot [m/ft^3]{Fuel Consumption}','meter/cubic inch [m/in^3]{Fuel Consumption}','meter/quart (US){Fuel Consumption}','meter/quart (UK){Fuel Consumption}','meter/pint (US) [m/pt (US)]{Fuel Consumption}','meter/pint (UK) [m/pt (UK)]{Fuel Consumption}','meter/cup (US){Fuel Consumption}','meter/cup (UK){Fuel Consumption}','meter/fluid ounce (US){Fuel Consumption}','meter/fluid ounce (UK){Fuel Consumption}','liter/meter [L/m]{Fuel Consumption}','liter/100 km [L/100 km]{Fuel Consumption}','gallon (US)/mile{Fuel Consumption}','gallon (US)/100 mi{Fuel Consumption}','gallon (UK)/mile{Fuel Consumption}','gallon (UK)/100 mi{Fuel Consumption}','joule/cubic meter [J/m^3]{Fuel Efficiency Volume}','joule/liter [J/L]{Fuel Efficiency Volume}','megajoule/cubic meter{Fuel Efficiency Volume}','kilojoule/cubic meter [kJ/m^3]{Fuel Efficiency Volume}','kilocalorie (IT)/cubic meter{Fuel Efficiency Volume}','calorie (IT)/cubic centimeter{Fuel Efficiency Volume}','therm/cubic foot [therm/ft^3]{Fuel Efficiency Volume}','therm/gallon (UK){Fuel Efficiency Volume}','Btu (IT)/cubic foot [Btu/ft^3]{Fuel Efficiency Volume}','Btu (th)/cubic foot{Fuel Efficiency Volume}','CHU/cubic foot [CHU/ft^3]{Fuel Efficiency Volume}','cubic meter/joule [m^3/J]{Fuel Efficiency Volume}','liter/joule [L/J]{Fuel Efficiency Volume}','gallon (US)/horsepower{Fuel Efficiency Volume}','gallon (US)/horsepower{Fuel Efficiency Volume}','length/length/kelvin [1/K]{Thermal Expansion}','length/length/degree Celsius{Thermal Expansion}','length/length/degree Fahrenheit{Thermal Expansion}','length/length/degree Rankine{Thermal Expansion}','length/length/degree Reaumur{Thermal Expansion}','watt/meter/K [W/(m*K)]{Thermal Conductivity}','watt/centimeter/&#176;C{Thermal Conductivity}','kilowatt/meter/K [kW/(m*K)]{Thermal Conductivity}','calorie (IT)/second/cm/&#176;C{Thermal Conductivity}','calorie (th)/second/cm/&#176;C{Thermal Conductivity}','kilocalorie (IT)/hour/meter/&#176;C{Thermal Conductivity}','kilocalorie (th)/hour/meter/&#176;C{Thermal Conductivity}','Btu (IT) inch/second/sq. foot/&#176;F{Thermal Conductivity}','Btu (th) inch/second/sq. foot/&#176;F{Thermal Conductivity}','Btu (IT) foot/hour/sq. foot/&#176;F{Thermal Conductivity}','Btu (th) foot/hour/sq. foot/&#176;F{Thermal Conductivity}','Btu (IT) inch/hour/sq. foot/&#176;F{Thermal Conductivity}','Btu (th) inch/hour/sq. foot/&#176;F{Thermal Conductivity}','pascal second [Pa*s]{Viscosity Dynamic}','kilogram-force second/square meter{Viscosity Dynamic}','newton second/square meter{Viscosity Dynamic}','millinewton second/sq. meter{Viscosity Dynamic}','dyne second/sq. centimeter{Viscosity Dynamic}','poise [P]{Viscosity Dynamic}','exapoise [EP]{Viscosity Dynamic}','petapoise [PP]{Viscosity Dynamic}','terapoise [TP]{Viscosity Dynamic}','gigapoise [GP]{Viscosity Dynamic}','megapoise [MP]{Viscosity Dynamic}','kilopoise [kP]{Viscosity Dynamic}','hectopoise [hP]{Viscosity Dynamic}','dekapoise [daP]{Viscosity Dynamic}','decipoise [dP]{Viscosity Dynamic}','centipoise [cP]{Viscosity Dynamic}','millipoise [mP]{Viscosity Dynamic}','micropoise [&#181;P]{Viscosity Dynamic}','nanopoise [nP]{Viscosity Dynamic}','picopoise [pP]{Viscosity Dynamic}','femtopoise [fP]{Viscosity Dynamic}','attopoise [aP]{Viscosity Dynamic}','pound-force second/sq. inch{Viscosity Dynamic}','pound-force second/sq. foot{Viscosity Dynamic}','poundal second/square foot{Viscosity Dynamic}','gram/centimeter/second{Viscosity Dynamic}','slug/foot/second{Viscosity Dynamic}','pound/foot/second{Viscosity Dynamic}','pound/foot/hour [lb/(ft*h)]{Viscosity Dynamic}','joule/kilogram [J/kg]{Fuel Efficiency Mass}','kilojoule/kilogram [kJ/kg]{Fuel Efficiency Mass}','calorie (IT)/gram [cal/g]{Fuel Efficiency Mass}','calorie (th)/gram [cal (th)/g]{Fuel Efficiency Mass}','Btu (IT)/pound [Btu/lb]{Fuel Efficiency Mass}','Btu (th)/pound [Btu (th)/lb]{Fuel Efficiency Mass}','kilogram/joule [kg/J]{Fuel Efficiency Mass}','kilogram/kilojoule [kg/kJ]{Fuel Efficiency Mass}','gram/calorie (IT) [g/cal]{Fuel Efficiency Mass}','gram/calorie (th) [g/cal (th)]{Fuel Efficiency Mass}','pound/Btu (IT) [lb/Btu]{Fuel Efficiency Mass}','pound/Btu (th) [lb/Btu (th)]{Fuel Efficiency Mass}','pound/horsepower/hour{Fuel Efficiency Mass}','gram/horsepower (metric)/hour{Fuel Efficiency Mass}','gram/kilowatt/hour{Fuel Efficiency Mass}','mol/second [mol/s]{Flow Molar}','examol/second [Emol/s]{Flow Molar}','petamol/second [Pmol/s]{Flow Molar}','teramol/second [Tmol/s]{Flow Molar}','gigamol/second [Gmol/s]{Flow Molar}','megamol/second [Mmol/s]{Flow Molar}','kilomol/second [kmol/s]{Flow Molar}','hectomol/second [hmol/s]{Flow Molar}','dekamol/second [damol/s]{Flow Molar}','decimol/second [dmol/s]{Flow Molar}','centimol/second [cmol/s]{Flow Molar}','millimol/second [mmol/s]{Flow Molar}','micromol/second [&#181;mol/s]{Flow Molar}','nanomol/second [nmol/s]{Flow Molar}','picomol/second [pmol/s]{Flow Molar}','femtomol/second [fmol/s]{Flow Molar}','attomol/second [amol/s]{Flow Molar}','mol/minute [mol/min]{Flow Molar}','mol/hour [mol/h]{Flow Molar}','mol/day [mol/d]{Flow Molar}','millimol/minute [mmol/min]{Flow Molar}','millimol/hour [mmol/h]{Flow Molar}','millimol/day [mmol/d]{Flow Molar}','kilomol/minute [kmol/min]{Flow Molar}','kilomol/hour [kmol/h]{Flow Molar}','kilomol/day [kmol/d]{Flow Molar}','radian/second [rad/s]{Velocity Angular}','radian/day [rad/d]{Velocity Angular}','radian/hour [rad/h]{Velocity Angular}','radian/minute [rad/min]{Velocity Angular}','degree/day [&#176;/d]{Velocity Angular}','degree/hour [&#176;/h]{Velocity Angular}','degree/minute [&#176;/min]{Velocity Angular}','degree/second [&#176;/s]{Velocity Angular}','revolution/day [r/d]{Velocity Angular}','revolution/hour [r/h]{Velocity Angular}','revolution/minute [r/min]{Velocity Angular}','revolution/second [r/s]{Velocity Angular}','dot/meter [dot/m]{Digital Image Resolution}','dot/millimeter [dot/mm]{Digital Image Resolution}','dot/inch [dot/in]{Digital Image Resolution}','pixel/inch [pixel/in]{Digital Image Resolution}','newton meter [N*m]{Torque}','newton centimeter [N*cm]{Torque}','newton millimeter [N*mm]{Torque}','kilonewton meter [kN*m]{Torque}','dyne meter [dyn*m]{Torque}','dyne centimeter [dyn*cm]{Torque}','dyne millimeter [dyn*mm]{Torque}','kilogram-force meter{Torque}','kilogram-force centimeter{Torque}','kilogram-force millimeter{Torque}','gram-force meter [gf*m]{Torque}','gram-force centimeter{Torque}','gram-force millimeter{Torque}','ounce-force foot [ozf*ft]{Torque}','ounce-force inch [ozf*in]{Torque}','pound-force foot [lbf*ft]{Torque}','pound-force inch [lbf*in]{Torque}','hertz [Hz]{Frequency Wavelength}','exahertz [EHz]{Frequency Wavelength}','petahertz [PHz]{Frequency Wavelength}','terahertz [THz]{Frequency Wavelength}','gigahertz [GHz]{Frequency Wavelength}','megahertz [MHz]{Frequency Wavelength}','kilohertz [kHz]{Frequency Wavelength}','hectohertz [hHz]{Frequency Wavelength}','dekahertz [daHz]{Frequency Wavelength}','decihertz [dHz]{Frequency Wavelength}','centihertz [cHz]{Frequency Wavelength}','millihertz [mHz]{Frequency Wavelength}','microhertz [&#181;Hz]{Frequency Wavelength}','nanohertz [nHz]{Frequency Wavelength}','picohertz [pHz]{Frequency Wavelength}','femtohertz [fHz]{Frequency Wavelength}','attohertz [aHz]{Frequency Wavelength}','cycle/second{Frequency Wavelength}','wavelength in exametres{Frequency Wavelength}','wavelength in petametres{Frequency Wavelength}','wavelength in terametres{Frequency Wavelength}','wavelength in gigametres{Frequency Wavelength}','wavelength in megametres{Frequency Wavelength}','wavelength in kilometres{Frequency Wavelength}','wavelength in hectometres{Frequency Wavelength}','wavelength in dekametres{Frequency Wavelength}','wavelength in metres [m]{Frequency Wavelength}','wavelength in decimetres{Frequency Wavelength}','wavelength in centimetres{Frequency Wavelength}','wavelength in millimetres{Frequency Wavelength}','wavelength in micrometres{Frequency Wavelength}','Electron Compton wavelength{Frequency Wavelength}','Proton Compton wavelength{Frequency Wavelength}','Neutron Compton wavelength{Frequency Wavelength}','gray/second [Gy/s]{Radiation}','exagray/second [EGy/s]{Radiation}','petagray/second [PGy/s]{Radiation}','teragray/second [TGy/s]{Radiation}','gigagray/second [GGy/s]{Radiation}','megagray/second [MGy/s]{Radiation}','kilogray/second [kGy/s]{Radiation}','hectogray/second [hGy/s]{Radiation}','dekagray/second [daGy/s]{Radiation}','decigray/second [dGy/s]{Radiation}','centigray/second [cGy/s]{Radiation}','milligray/second [mGy/s]{Radiation}','microgray/second [&#181;Gy/s]{Radiation}','nanogray/second [nGy/s]{Radiation}','picogray/second [pGy/s]{Radiation}','femtogray/second [fGy/s]{Radiation}','attogray/second [aGy/s]{Radiation}','rad/second [rd/s, rad/s]{Radiation}','joule/kilogram/second{Radiation}','watt/kilogram [W/kg]{Radiation}','sievert/second [Sv/s]{Radiation}','rem/second [rem/s]{Radiation}','bit [b]{Data Storage}','nibble{Data Storage}','byte [B]{Data Storage}','character{Data Storage}','word{Data Storage}','MAPM-word{Data Storage}','quadruple-word{Data Storage}','block{Data Storage}','kilobit [kb]{Data Storage}','kilobyte [kB]{Data Storage}','kilobyte (10^3 bytes){Data Storage}','megabit [Mb]{Data Storage}','megabyte [MB]{Data Storage}','megabyte (10^6 bytes){Data Storage}','gigabit [Gb]{Data Storage}','gigabyte [GB]{Data Storage}','gigabyte (10^9 bytes){Data Storage}','terabit [Tb]{Data Storage}','terabyte [TB]{Data Storage}','terabyte (10^12 bytes){Data Storage}','petabit [Pb]{Data Storage}','petabyte [PB]{Data Storage}','petabyte (10^15 bytes){Data Storage}','exabit [Eb]{Data Storage}','exabyte [EB]{Data Storage}','exabyte (10^18 bytes){Data Storage}','floppy disk (3.5&#34;, DD){Data Storage}','floppy disk (3.5&#34;, HD){Data Storage}','floppy disk (3.5&#34;, ED){Data Storage}','floppy disk (5.25&#34;, DD){Data Storage}','floppy disk (5.25&#34;, HD){Data Storage}','Zip 100{Data Storage}','Zip 250{Data Storage}','Jaz 1GB{Data Storage}','Jaz 2GB{Data Storage}','CD (74 minute){Data Storage}','CD (80 minute){Data Storage}','DVD (1 layer, 1 side){Data Storage}','DVD (2 layer, 1 side){Data Storage}','DVD (1 layer, 2 side){Data Storage}','DVD (2 layer, 2 side){Data Storage}','candela/square meter{Luminance}','candela/square centimeter{Luminance}','candela/square foot{Luminance}','candela/square inch{Luminance}','kilocandela/square meter{Luminance}','stilb [sb]{Luminance}','lumen/sq. meter/steradian{Luminance}','lumen/sq. cm/steradian{Luminance}','lumen/square foot/steradian{Luminance}','watt/sq. cm/steradian (at 555 nm){Luminance}','nit [nt]{Luminance}','millinit [mnt]{Luminance}','lambert [L]{Luminance}','millilambert [mL]{Luminance}','foot-lambert [fL]{Luminance}','apostilb{Luminance}','blondel{Luminance}','bril{Luminance}','skot{Luminance}','siemens [S]{Electric Conductance}','megasiemens [MS]{Electric Conductance}','kilosiemens [kS]{Electric Conductance}','millisiemens [mS]{Electric Conductance}','microsiemens [&#181;S]{Electric Conductance}','ampere/volt [A/V]{Electric Conductance}','mho{Electric Conductance}','gemmho{Electric Conductance}','micromho{Electric Conductance}','abmho{Electric Conductance}','statmho{Electric Conductance}','Quantized Hall conductance{Electric Conductance}','mol/cubic meter [mol/m^3]{Concentration Molar}','mol/liter [mol/L]{Concentration Molar}','mol/cubic centimeter{Concentration Molar}','mol/cubic millimeter{Concentration Molar}','kilomol/cubic meter{Concentration Molar}','kilomol/liter [kmol/L]{Concentration Molar}','kilomol/cubic centimeter{Concentration Molar}','kilomol/cubic millimeter{Concentration Molar}','millimol/cubic meter{Concentration Molar}','millimol/liter [mmol/L]{Concentration Molar}','millimol/cubic centimeter{Concentration Molar}','millimol/cubic millimeter{Concentration Molar}','becquerel [Bq]{Radiation Activity}','terabecquerel [TBq]{Radiation Activity}','gigabecquerel [GBq]{Radiation Activity}','megabecquerel [MBq]{Radiation Activity}','kilobecquerel [kBq]{Radiation Activity}','millibecquerel [mBq]{Radiation Activity}','curie [Ci]{Radiation Activity}','kilocurie [kCi]{Radiation Activity}','millicurie [mCi]{Radiation Activity}','microcurie [&#181;Ci]{Radiation Activity}','nanocurie [nCi]{Radiation Activity}','picocurie [pCi]{Radiation Activity}','rutherford{Radiation Activity}','one/second [1/s]{Radiation Activity}','disintegrations/second{Radiation Activity}','disintegrations/minute{Radiation Activity}','ohm{Electric Resistance}','megohm{Electric Resistance}','microhm{Electric Resistance}','volt/ampere [V/A]{Electric Resistance}','reciprocal siemens [1/S]{Electric Resistance}','abohm{Electric Resistance}','EMU of resistance{Electric Resistance}','statohm{Electric Resistance}','ESU of resistance{Electric Resistance}','Quantized Hall resistance{Electric Resistance}','kilogram/cubic meter{Density}','gram/cubic centimeter{Density}','kilogram/cubic centimeter{Density}','gram/cubic meter [g/m^3]{Density}','gram/cubic millimeter{Density}','milligram/cubic meter{Density}','milligram/cubic centimeter{Density}','milligram/cubic millimeter{Density}','exagram/liter [Eg/L]{Density}','petagram/liter [Pg/L]{Density}','teragram/liter [Tg/L]{Density}','gigagram/liter [Gg/L]{Density}','megagram/liter [Mg/L]{Density}','kilogram/liter [kg/L]{Density}','hectogram/liter [hg/L]{Density}','dekagram/liter [dag/L]{Density}','gram/liter [g/L]{Density}','decigram/liter [dg/L]{Density}','centigram/liter [cg/L]{Density}','milligram/liter [mg/L]{Density}','microgram/liter [&#181;g/L]{Density}','nanogram/liter [ng/L]{Density}','picogram/liter [pg/L]{Density}','femtogram/liter [fg/L]{Density}','attogram/liter [ag/L]{Density}','pound/cubic inch [lb/in^3]{Density}','pound/cubic foot [lb/ft^3]{Density}','pound/cubic yard [lb/yd^3]{Density}','pound/gallon (US){Density}','pound/gallon (UK){Density}','ounce/cubic inch [oz/in^3]{Density}','ounce/cubic foot [oz/ft^3]{Density}','ounce/gallon (US){Density}','ounce/gallon (UK){Density}','grain/gallon (US){Density}','grain/gallon (UK){Density}','grain/cubic foot [gr/ft^3]{Density}','ton (short)/cubic yard{Density}','ton (long)/cubic yard{Density}','slug/cubic foot [slug/ft^3]{Density}','psi/1000 feet{Density}','Earth\'s density (mean){Density}','coulomb [C]{Charge}','megacoulomb [MC]{Charge}','kilocoulomb [kC]{Charge}','millicoulomb [mC]{Charge}','microcoulomb [&#181;C]{Charge}','nanocoulomb [nC]{Charge}','picocoulomb [pC]{Charge}','abcoulomb [abC]{Charge}','EMU of charge{Charge}','statcoulomb [stC]{Charge}','ESU of charge{Charge}','franklin [Fr]{Charge}','ampere-hour [A*h]{Charge}','ampere-minute [A*min]{Charge}','ampere-second [A*s]{Charge}','faraday (based on carbon 12){Charge}','Elementary charge [e]{Charge}','kilogram/liter [kg/L]{Concentration Solution}','gram/liter [g/L]{Concentration Solution}','milligram/liter [mg/L]{Concentration Solution}','part/million (ppm){Concentration Solution}','grain/gallon (US) [gr/gal (US)]{Concentration Solution}','grain/gallon (UK) [gr/gal (UK)]{Concentration Solution}','pound/gallon (US){Concentration Solution}','pound/gallon (UK){Concentration Solution}','pound/million gallon (US){Concentration Solution}','pound/million gallon (UK){Concentration Solution}','pound/cubic foot [lb/ft^3]{Concentration Solution}','siemens/meter [S/m]{Electric Conductivity}','picosiemens/meter [pS/m]{Electric Conductivity}','mho/meter [mho/m]{Electric Conductivity}','mho/centimeter [mho/cm]{Electric Conductivity}','abmho/meter [abmho/m]{Electric Conductivity}','abmho/centimeter{Electric Conductivity}','statmho/meter [stmho/m]{Electric Conductivity}','statmho/centimeter{Electric Conductivity}','coulomb/square meter{Surface Charge Density}','coulomb/square centimeter{Surface Charge Density}','coulomb/square inch [C/in^2]{Surface Charge Density}','abcoulomb/square meter{Surface Charge Density}','abcoulomb/square centimeter{Surface Charge Density}','abcoulomb/square inch{Surface Charge Density}','joule/square meter [J/m^2]{Heat Density}','calorie (th)/square centimeter{Heat Density}','langley{Heat Density}','Btu (IT)/square foot{Heat Density}','Btu (th)/square foot{Heat Density}','liter [L,l]{Volume Dry}','barrel dry (US) [bbl dry (US)]{Volume Dry}','pint dry (US) [pt dry (US)]{Volume Dry}','quart dry (US) [qt dry (US)]{Volume Dry}','peck (US) [pk (US)]{Volume Dry}','peck (UK) [pk (UK)]{Volume Dry}','bushel (US) [bu (US)]{Volume Dry}','bushel (UK) [bu (UK)]{Volume Dry}','cor (Biblical){Volume Dry}','homer (Biblical){Volume Dry}','ephah (Biblical){Volume Dry}','seah (Biblical){Volume Dry}','omer (Biblical){Volume Dry}','cab (Biblical){Volume Dry}','log (Biblical){Volume Dry}','farad [F]{Electrostatic Capacitance}','exafarad [EF]{Electrostatic Capacitance}','petafarad [PF]{Electrostatic Capacitance}','terafarad [TF]{Electrostatic Capacitance}','gigafarad [GF]{Electrostatic Capacitance}','megafarad [MF]{Electrostatic Capacitance}','kilofarad [kF]{Electrostatic Capacitance}','hectofarad [hF]{Electrostatic Capacitance}','dekafarad [daF]{Electrostatic Capacitance}','decifarad [dF]{Electrostatic Capacitance}','centifarad [cF]{Electrostatic Capacitance}','millifarad [mF]{Electrostatic Capacitance}','microfarad [&#181;F]{Electrostatic Capacitance}','nanofarad [nF]{Electrostatic Capacitance}','picofarad [pF]{Electrostatic Capacitance}','femtofarad [fF]{Electrostatic Capacitance}','attofarad [aF]{Electrostatic Capacitance}','coulomb/volt [C/V]{Electrostatic Capacitance}','abfarad [abF]{Electrostatic Capacitance}','EMU of capacitance{Electrostatic Capacitance}','statfarad [stF]{Electrostatic Capacitance}','ESU of capacitance{Electrostatic Capacitance}','ampere/meter [A/m]{Linear Current Density}','ampere/centimeter [A/cm]{Linear Current Density}','ampere/inch [A/in]{Linear Current Density}','abampere/meter [abA/m]{Linear Current Density}','abampere/centimeter{Linear Current Density}','abampere/inch [abA/in]{Linear Current Density}','oersted [Oe]{Linear Current Density}','gilbert/centimeter [Gi/cm]{Linear Current Density}','ampere/square meter [A/m^2]{Surface Current Density}','ampere/square centimeter{Surface Current Density}','ampere/square inch [A/in^2]{Surface Current Density}','ampere/square mil [A/mi^2]{Surface Current Density}','ampere/cicular mil{Surface Current Density}','abampere/square centimeter{Surface Current Density}','twip{Typography}','meter [m]{Typography}','centimeter [cm]{Typography}','millimeter [mm]{Typography}','character (X){Typography}','character (Y){Typography}','pixel (X){Typography}','pixel (Y){Typography}','inch [in]{Typography}','pica (computer){Typography}','pica (printer\'s){Typography}','PostScript point{Typography}','point (computer){Typography}','point (printer\'s){Typography}','en{Typography}','volt [V]{Electric Potential}','watt/ampere [W/A]{Electric Potential}','abvolt [abV]{Electric Potential}','EMU of electric potential{Electric Potential}','statvolt [stV]{Electric Potential}','ESU of electric potential{Electric Potential}','bit/second [b/s]{Data Transfer}','byte/second [B/s]{Data Transfer}','kilobit/second (SI def.){Data Transfer}','kilobyte/second (SI def.){Data Transfer}','kilobit/second [kb/s]{Data Transfer}','kilobyte/second [kB/s]{Data Transfer}','megabit/second (SI def.){Data Transfer}','megabyte/second (SI def.){Data Transfer}','megabit/second [Mb/s]{Data Transfer}','megabyte/second [MB/s]{Data Transfer}','gigabit/second (SI def.){Data Transfer}','gigabyte/second (SI def.){Data Transfer}','gigabit/second [Gb/s]{Data Transfer}','gigabyte/second [GB/s]{Data Transfer}','terabit/second (SI def.){Data Transfer}','terabyte/second (SI def.){Data Transfer}','terabit/second [Tb/s]{Data Transfer}','terabyte/second [TB/s]{Data Transfer}','ethernet{Data Transfer}','ethernet (fast){Data Transfer}','ethernet (gigabit){Data Transfer}','OC1{Data Transfer}','OC3{Data Transfer}','OC12{Data Transfer}','OC24{Data Transfer}','OC48{Data Transfer}','OC192{Data Transfer}','OC768{Data Transfer}','ISDN (single channel){Data Transfer}','ISDN (dual channel){Data Transfer}','modem (110){Data Transfer}','modem (300){Data Transfer}','modem (1200){Data Transfer}','modem (2400){Data Transfer}','modem (9600){Data Transfer}','modem (14.4k){Data Transfer}','modem (28.8k){Data Transfer}','modem (33.6k){Data Transfer}','modem (56k){Data Transfer}','SCSI (Async){Data Transfer}','SCSI (Sync){Data Transfer}','SCSI (Fast){Data Transfer}','SCSI (Fast Ultra){Data Transfer}','SCSI (Fast Wide){Data Transfer}','SCSI (Fast Ultra Wide){Data Transfer}','SCSI (Ultra-2){Data Transfer}','SCSI (Ultra-3){Data Transfer}','SCSI (LVD Ultra80){Data Transfer}','SCSI (LVD Ultra160){Data Transfer}','IDE (PIO mode 0){Data Transfer}','IDE (PIO mode 1){Data Transfer}','IDE (PIO mode 2){Data Transfer}','IDE (PIO mode 3){Data Transfer}','IDE (PIO mode 4){Data Transfer}','IDE (DMA mode 0){Data Transfer}','IDE (DMA mode 1){Data Transfer}','IDE (DMA mode 2){Data Transfer}','IDE (UDMA mode 0){Data Transfer}','IDE (UDMA mode 1){Data Transfer}','IDE (UDMA mode 2){Data Transfer}','IDE (UDMA mode 3){Data Transfer}','IDE (UDMA mode 4){Data Transfer}','IDE (UDMA-33){Data Transfer}','IDE (UDMA-66){Data Transfer}','USB{Data Transfer}','firewire (IEEE-1394){Data Transfer}','T0 (payload){Data Transfer}','T0 (B8ZS payload){Data Transfer}','T1 (signal){Data Transfer}','T1 (payload){Data Transfer}','T1Z (payload){Data Transfer}','T1C (signal){Data Transfer}','T1C (payload){Data Transfer}','T2 (signal){Data Transfer}','T3 (signal){Data Transfer}','T3 (payload){Data Transfer}','T3Z (payload){Data Transfer}','T4 (signal){Data Transfer}','E.P.T.A. 1 (signal){Data Transfer}','E.P.T.A. 1 (payload){Data Transfer}','E.P.T.A. 2 (signal){Data Transfer}','E.P.T.A. 2 (payload){Data Transfer}','E.P.T.A. 3 (signal){Data Transfer}','E.P.T.A. 3 (payload){Data Transfer}','H0{Data Transfer}','H11{Data Transfer}','H12{Data Transfer}','Virtual Tributary 1 (signal){Data Transfer}','Virtual Tributary 1 (payload){Data Transfer}','Virtual Tributary 2 (signal){Data Transfer}','Virtual Tributary 2 (payload){Data Transfer}','Virtual Tributary 6 (signal){Data Transfer}','Virtual Tributary 6 (payload){Data Transfer}','STS1 (signal){Data Transfer}','STS1 (payload){Data Transfer}','STS3 (signal){Data Transfer}','STS3 (payload){Data Transfer}','STS3c (signal){Data Transfer}','STS3c (payload){Data Transfer}','STS12 (signal){Data Transfer}','STS24 (signal){Data Transfer}','STS48 (signal){Data Transfer}','STS192 (signal){Data Transfer}','STM-1 (signal){Data Transfer}','STM-4 (signal){Data Transfer}','STM-16 (signal){Data Transfer}','STM-64 (signal){Data Transfer}','volt/meter [V/m]{Electric Field Strength}','kilovolt/meter [kV/m]{Electric Field Strength}','kilovolt/centimeter [kV/cm]{Electric Field Strength}','volt/centimeter [V/cm]{Electric Field Strength}','millivolt/meter [mV/m]{Electric Field Strength}','microvolt/meter [&#181;/m]{Electric Field Strength}','kilovolt/inch [kV/in]{Electric Field Strength}','volt/inch [V/in]{Electric Field Strength}','volt/mil [V/mil]{Electric Field Strength}','abvolt/centimeter [abV/cm]{Electric Field Strength}','statvolt/centimeter [stV/cm]{Electric Field Strength}','statvolt/inch [stV/in]{Electric Field Strength}','newton/coulomb [N/C]{Electric Field Strength}','newton meter [N*m]{Moment Of Force}','kilonewton meter [kN*m]{Moment Of Force}','millinewton meter [mN*m]{Moment Of Force}','micronewton meter [&#181;N*m]{Moment Of Force}','ton-force (short) meter{Moment Of Force}','ton-force (long) meter{Moment Of Force}','ton-force (metric) meter{Moment Of Force}','kilogram-force meter [kgf*m]{Moment Of Force}','gram-force centimeter{Moment Of Force}','pound-force foot [lbf*ft]{Moment Of Force}','poundal foot [pdl*ft]{Moment Of Force}','poundal inch [pdl*in]{Moment Of Force}','watt/square meter/K{Heat Transfer Coefficient}','watt/square meter/%b0C{Heat Transfer Coefficient}','joule/second/square meter/K{Heat Transfer Coefficient}','calorie (IT)/second/square centimeter/%b0C{Heat Transfer Coefficient}','kilocalorie (IT)/hour/square meter/%b0C{Heat Transfer Coefficient}','kilocalorie (IT)/hour/square foot/%b0C{Heat Transfer Coefficient}','Btu (IT)/second/square foot/%b0F{Heat Transfer Coefficient}','Btu (th)/second/square foot/%b0F{Heat Transfer Coefficient}','Btu (IT)/hour/square foot/%b0F{Heat Transfer Coefficient}','Btu (th)/hour/square foot/%b0F{Heat Transfer Coefficient}','CHU/hour/square foot/%b0C{Heat Transfer Coefficient}','gram/second/square meter{Mass Flux Density}','kilogram/hour/square meter{Mass Flux Density}','kilogram/hour/square foot{Mass Flux Density}','kilogram/second/square meter{Mass Flux Density}','gram/second/sq. centimeter{Mass Flux Density}','pound/hour/square foot{Mass Flux Density}','pound/second/square foot{Mass Flux Density}','henry [H]{Inductance}','exahenry [EH]{Inductance}','petahenry [PH]{Inductance}','terahenry [TH]{Inductance}','gigahenry [GH]{Inductance}','megahenry [MH]{Inductance}','kilohenry [kH]{Inductance}','hectohenry [hH]{Inductance}','dekahenry [daH]{Inductance}','decihenry [dH]{Inductance}','centihenry [cH]{Inductance}','millihenry [mH]{Inductance}','microhenry [&#181;H]{Inductance}','nanohenry [nH]{Inductance}','picohenry [pH]{Inductance}','femtohenry [fH]{Inductance}','attohenry [aH]{Inductance}','weber/ampere [Wb/A]{Inductance}','abhenry [abH]{Inductance}','EMU of inductance{Inductance}','stathenry [stH]{Inductance}','ESU of inductance{Inductance}','tesla [T]{Magnetic Flux Density}','weber/square meter{Magnetic Flux Density}','weber/square centimeter{Magnetic Flux Density}','weber/square inch [Wb/in^2]{Magnetic Flux Density}','maxwell/square meter{Magnetic Flux Density}','maxwell/square centimeter{Magnetic Flux Density}','maxwell/square inch [Mx/in^2]{Magnetic Flux Density}','gauss [Gs, G]{Magnetic Flux Density}','line/square centimeter{Magnetic Flux Density}','line/square inch{Magnetic Flux Density}','gamma{Magnetic Flux Density}','coulomb/cubic meter [C/m^3]{Volume Charge Density}','coulomb/cubic centimeter{Volume Charge Density}','coulomb/cubic inch [C/in^3]{Volume Charge Density}','abcoulomb/cubic meter{Volume Charge Density}','abcoulomb/cubic centimeter{Volume Charge Density}','abcoulomb/cubic inch{Volume Charge Density}','ampere turn [At]{Magnetomotive Force}','kiloampere turn [kAt]{Magnetomotive Force}','milliampere turn [mAt]{Magnetomotive Force}','abampere turn [abAt]{Magnetomotive Force}','gilbert [Gi]{Magnetomotive Force}','square meter/second{Viscosity Kinematic}','square meter/hour [m^2/h]{Viscosity Kinematic}','square centimeter/second{Viscosity Kinematic}','square millimeter/second{Viscosity Kinematic}','square foot/second [ft^2/s]{Viscosity Kinematic}','square foot/hour [ft^2/h]{Viscosity Kinematic}','square inch/second [in^2/s]{Viscosity Kinematic}','stokes [St]{Viscosity Kinematic}','exastokes [ESt]{Viscosity Kinematic}','petastokes [PSt]{Viscosity Kinematic}','terastokes [TSt]{Viscosity Kinematic}','gigastokes [GSt]{Viscosity Kinematic}','megastokes [MSt]{Viscosity Kinematic}','kilostokes [kSt]{Viscosity Kinematic}','hectostokes [hSt]{Viscosity Kinematic}','dekastokes [daSt]{Viscosity Kinematic}','decistokes [dSt]{Viscosity Kinematic}','centistokes [cSt]{Viscosity Kinematic}','millistokes [mSt]{Viscosity Kinematic}','microstokes [&#181;St]{Viscosity Kinematic}','nanostokes [nSt]{Viscosity Kinematic}','picostokes [pSt]{Viscosity Kinematic}','femtostokes [fSt]{Viscosity Kinematic}','attostokes [aSt]{Viscosity Kinematic}','kilogram square meter{Moment Of Inertia}','kilogram square centimeter{Moment Of Inertia}','kilogram square millimeter{Moment Of Inertia}','gram square centimeter{Moment Of Inertia}','gram square millimeter{Moment Of Inertia}','kilogram-force meter square second{Moment Of Inertia}','kilogram-force centimeter square second{Moment Of Inertia}','ounce square inch [oz*in^2]{Moment Of Inertia}','ounce-force inch sq. second{Moment Of Inertia}','pound square foot [lb*ft^2]{Moment Of Inertia}','pound-force foot sq. second{Moment Of Inertia}','pound square inch [lb*in^2]{Moment Of Inertia}','pound-force inch sq. second{Moment Of Inertia}','slug square foot [slug*ft^2]{Moment Of Inertia}','joule/kilogram/K [J/(kg*K)]{Specific Heat Capacity}','joule/kilogram/&#176;C [J/(kg*&#176;C)]{Specific Heat Capacity}','joule/gram/&#176;C [J/(g*&#176;C)]{Specific Heat Capacity}','kilojoule/kilogram/K{Specific Heat Capacity}','kilojoule/kilogram/&#176;C{Specific Heat Capacity}','calorie (IT)/gram/&#176;C{Specific Heat Capacity}','calorie (IT)/gram/&#176;F{Specific Heat Capacity}','calorie (th)/gram/&#176;C{Specific Heat Capacity}','kilocalorie (IT)/kilogram/&#176;C{Specific Heat Capacity}','kilocalorie (th)/kilogram/&#176;C{Specific Heat Capacity}','kilocalorie (IT)/kilogram/K{Specific Heat Capacity}','kilocalorie (th)/kilogram/K{Specific Heat Capacity}','kilogram-force meter/kilogram/K{Specific Heat Capacity}','pound-force foot/pound/&#176;R{Specific Heat Capacity}','Btu (IT)/pound/&#176;F{Specific Heat Capacity}','Btu (th)/pound/&#176;F{Specific Heat Capacity}','Btu (IT)/pound/&#176;R{Specific Heat Capacity}','Btu (th)/pound/&#176;R{Specific Heat Capacity}','Btu (IT)/pound/&#176;C{Specific Heat Capacity}','CHU/pound/&#176;C [CHU/(lb*&#176;C)]{Specific Heat Capacity}','ampere [A]{Current}','kiloampere [kA]{Current}','milliampere [mA]{Current}','biot [Bi]{Current}','abampere [abA]{Current}','EMU of current{Current}','statampere [stA]{Current}','ESU of current{Current}','CGS e.m. unit{Current}','CGS e.s. unit{Current}','cubic meter [m^3]{Volume Lumber}','cubic foot [ft^3]{Volume Lumber}','cubic inch [in^3]{Volume Lumber}','board feet{Volume Lumber}','thousand board feet{Volume Lumber}','cord{Volume Lumber}','cord (80 cubic ft){Volume Lumber}','cord feet{Volume Lumber}','cunit{Volume Lumber}','pallet{Volume Lumber}','cross tie{Volume Lumber}','switch tie{Volume Lumber}','thousand square feet (1/8-inch panels){Volume Lumber}','thousand square feet (1/4-inch panels){Volume Lumber}','thousand square feet (3/8-inch panels){Volume Lumber}','thousand square feet (1/2-inch panels){Volume Lumber}','thousand square feet (3/4-inch panels){Volume Lumber}','Euro{Eu Currency}','Irish Pound{Eu Currency}','Deutsch Mark{Eu Currency}','Dutch Guilden{Eu Currency}','Finnish Mark{Eu Currency}','French Franc{Eu Currency}','Austrian Schilling{Eu Currency}','Belgian Franc{Eu Currency}','Luxembourg Franc{Eu Currency}','Spanish Peseta{Eu Currency}','Portuguese Escudo{Eu Currency}','Italian Lire{Eu Currency}','bel [B]{Sound}','decibel [dB]{Sound}','neper [Np]{Sound}','newton/meter [N/m]{Surface Tension}','millinewnon/meter [mN/m]{Surface Tension}','gram-force/centimeter{Surface Tension}','dyne/centimeter [dyn/cm]{Surface Tension}','erg/square centimeter{Surface Tension}','erg/square millimeter{Surface Tension}','poundal/inch [pdl/in]{Surface Tension}','pound-force/inch [lbf/in]{Surface Tension}','rad [rd]{Radiation Absorbed Dose}','millirad [mrd]{Radiation Absorbed Dose}','joule/kilogram [J/kg]{Radiation Absorbed Dose}','joule/gram [J/g]{Radiation Absorbed Dose}','joule/centigram [J/cg]{Radiation Absorbed Dose}','joule/milligram [J/mg]{Radiation Absorbed Dose}','gray [Gy]{Radiation Absorbed Dose}','exagray [EGy]{Radiation Absorbed Dose}','petagray [PGy]{Radiation Absorbed Dose}','teragray [TGy]{Radiation Absorbed Dose}','gigagray [GGy]{Radiation Absorbed Dose}','megagray [MGy]{Radiation Absorbed Dose}','kilogray [kGy]{Radiation Absorbed Dose}','hectogray [hGy]{Radiation Absorbed Dose}','dekagray [daGy]{Radiation Absorbed Dose}','decigray [dGy]{Radiation Absorbed Dose}','centigray [cGy]{Radiation Absorbed Dose}','milligray [mGy]{Radiation Absorbed Dose}','microgray [&#181;Gy]{Radiation Absorbed Dose}','nanogray [nGy]{Radiation Absorbed Dose}','picogray [pGy]{Radiation Absorbed Dose}','femtogray [fGy]{Radiation Absorbed Dose}','attogray [aGy]{Radiation Absorbed Dose}','kilogram/second [kg/s]{Flow Mass}','gram/second [g/s]{Flow Mass}','gram/minute [g/min]{Flow Mass}','gram/hour [g/h]{Flow Mass}','gram/day [g/d]{Flow Mass}','milligram/minute [mg/min]{Flow Mass}','milligram/hour [mg/h]{Flow Mass}','milligram/day [mg/d]{Flow Mass}','kilogram/minute [kg/min]{Flow Mass}','kilogram/hour [kg/h]{Flow Mass}','kilogram/day [kg/d]{Flow Mass}','exagram/second [Eg/s]{Flow Mass}','petagram/second [Pg/s]{Flow Mass}','teragram/second [Tg/s]{Flow Mass}','gigagram/second [Gg/s]{Flow Mass}','megagram/second [Mg/s]{Flow Mass}','hectogram/second [hg/s]{Flow Mass}','dekagram/second [dag/s]{Flow Mass}','decigram/second [dg/s]{Flow Mass}','centigram/second [cg/s]{Flow Mass}','milligram/second [mg/s]{Flow Mass}','microgram/second [&#181;g/s]{Flow Mass}','ton (metric)/second [t/s]{Flow Mass}','ton (metric)/minute [t/min]{Flow Mass}','ton (metric)/hour [t/h]{Flow Mass}','ton (metric)/day [t/d]{Flow Mass}','ton (short)/hour [ton (US)/h]{Flow Mass}','pound/second [lb/s]{Flow Mass}','pound/minute [lb/min]{Flow Mass}','pound/hour [lb/h]{Flow Mass}','pound/day [lb/d]{Flow Mass}','radian/square second{Acceleration Angular}','radian/square minute{Acceleration Angular}','revolution/square second{Acceleration Angular}','revolution/minute/second{Acceleration Angular}','revolution/square minute{Acceleration Angular}'];
var allpopularstr = ['length|centimeter [cm]|inch [in]|cm|inches','weight-and-mass|kilogram [kg]|pound [lbs]|kg|lbs','length|millimeter [mm]|inch [in]|mm|inches','length|meter [m]|foot [ft] [in]|meters|feet','length|kilometer [km]|mile [mi, mi(Int)]|km|miles','length|centimeter [cm]|foot [ft] [in]|cm|feet','weight-and-mass|gram [g]|ounce [oz]|grams|ounces','length|inch [in]|foot [ft] [in]|inches|feet','volume|liter [L, l]|gallon (US) [gal (US)]|liters|gallons','weight-and-mass|pound [lbs]|ounce [oz]|pounds|ounces','speed|mile/hour [mi/h]|kilometer/hour [km/h]|mph|kph','area|acre [ac]|square foot [ft^2]|acres|square feet','angle|radians|degrees|radians|degrees','power|horsepower [hp]|kilowatt [kW]|hp|kw','length|meter [m]|yard [yd]|meters|yards','volume|milliliter [mL]|cups|ml|cups','weight-and-mass|gram [g]|pound [lbs]|grams|pounds','weight-and-mass|gram [g]|kilogram [kg]|g|kg','weight-and-mass|gram [g]|milligrams|grams|milligrams','weight-and-mass|ounce [oz]|kilogram [kg]|oz|kg','weight-and-mass|pound [lbs]|stone|lbs|stone','weight-and-mass|ton|pound [lbs]|ton|lbs','length|millimeter [mm]|centimeter [cm]|mm|cm','length|centimeter [cm]|meter [m]|cm|m','length|centimeter [cm]|kilometer [km]|cm|km','length|millimeter [mm]|foot [ft] [in]|mm|feet','length|meter [m]|mile [mi, mi(Int)]|meters|miles','length|foot [ft] [in]|mile [mi, mi(Int)]|feet|miles','length|yard [yd]|foot [ft] [in]|yards|feet','length|inch [in]|meter [m]|inches|meters','length|millimeter [mm]|meter [m]|mm|m','length|kilometer [km]|meter [m]|km|m','length|inch [in]|yard [yd]|inches|yards','length|kilometer [km]|centimeter [cm]|km|cm','length|yard [yd]|mile [mi, mi(Int)]|yards|miles','volume|tablespoons|cups|tablespoons|cups','volume|milliliter [mL]|liter [L, l]|ml|l','volume|teaspoon|milliliter [mL]|teaspoon|ml','volume|liter [L, l]|quarts|liters|quarts','volume|cups|liter [L, l]|cups|liters','volume|pint|milliliter [mL]|pint|ml','volume|cubic centimeter [cm^3]|milliliter [mL]|cc|ml','volume|cubic centimeter [cm^3]|ounce [oz]|cc|oz','volume|cubic foot [ft^3]|gallon|cubic feet|gallon','volume|cubic foot [ft^3]|cubic yards|cubic feet|cubic yards','volume|cubic inches|gallon (US) [gal (US)]|cubic inches|gallons','volume|cubic inches|liter [L, l]|cubic inches|liters','volume|cups|quart|cups|quart','volume|cups|gallon|cups|gallon','volume|pint|cups|pint|cups','volume|quart|gallon|quart|gallon','volume|gallon|milliliter [mL]|gallon|ml','volume|liter|ounce [oz]|liter|ounces','volume|pints|liter [L, l]|pints|liters','volume|pints|gallon|pints|gallon','power|horsepower [hp]|watts|hp|watts','power|BTU|Ton|BTU|Ton','area|hectare [ha]|acre [ac]|hectare|acres','area|square foot [ft^2]|square meter|square feet|square meter','area|acre [ac]|square miles|acres|square miles','area|square foot [ft^2]|square yards|square feet|square yards','speed|meter per second|mile per hour|meters per second|miles per hour','speed|knot|mile per hour|knot|mph','speed|feet per second|mph|feet per second|mph','speed|meters per second|kilometer per hour|meters per second|kph','pressure|bar|psi|bar|psi','pressure|kilopascal [kPa]|psi|kpa|psi','temperature|Celsius|Fahrenheit|Celsius|Fahrenheit','temperature|Celsius|Kelvin|Celsius|Kelvin','temperature|Fahrenheit|Kelvin|Fahrenheit|Kelvin','numbers|binary|decimal|binary|decimal','numbers|decimal|hexadecimal|decimal|hex','numbers|binary|hexadecimal|binary|hex','data-storage|megabyte [MB]|gigabyte [GB]|MB|GB','data-storage|kilobyte [kB]|megabyte [MB]|KB|MB','data-storage|kilobyte [kB]|gigabyte [GB]|KB|GB','data-transfer|kilobit/second [kb/s]|megabit/second [Mb/s]|Kbps|Mbps','energy|kilojoule [kJ]|kilocalorie (th) [kcal (th)]|kJ|kcal','energy|kilocalorie (th) [kcal (th)]|calorie (th) [cal (th)]|kcal|cal','energy|joule [J]|kilojoule [kJ]|J|kJ','energy|calorie (th) [cal (th)]|joule [J]|cal|J','energy|foot-pound [ft*lbf]|newton meter [N*m]|ft lb|Nm','force|kilogram-force [kgf]|newtons|kg|newtons','force|newtons|pound-force [lbf]|newtons|lbs','current|milliampere [mA]|ampere [A]|milliamps|amps','time|minutes|hours [hr]|minutes|hours','time|hours [hr]|days|hours|days','time|seconds|days|seconds|days','time|minutes|days|minutes|days','time|days|months|days|months','time|days|years|days|years','time|minutes|seconds|minutes|seconds','time|milliseconds [ms]|seconds|milliseconds|seconds'];

var allunits = [];
var allunitslower = [];
for (i=0;i<allunitsstr.length;i++){
	var tempPos1 = allunitsstr[i].indexOf("{");
	var tempPos2 = allunitsstr[i].indexOf("}");
	var ucategory = allunitsstr[i].substring((tempPos1+1), tempPos2);
	var unitName = allunitsstr[i].substring(0, tempPos1);
	var tempPos3 = allunitsstr[i].indexOf("[");
	var uAbbrivation = "";
	if (tempPos3>0){
		uAbbrivation = unitName.substring((tempPos3+1));
	}
	var tempUnit = [unitName, ucategory];
	allunits.push(tempUnit);
	var tempUnit = [unitName.toLowerCase(), uAbbrivation.toLowerCase(), ucategory.toLowerCase()];
	allunitslower.push(tempUnit);
}
function createLinks(vname,vcat){
	tempIndex1 = vname.indexOf("[");
	tempIndex2 = vname.indexOf("]");
	if (tempIndex1>0){
		vname = vname.substring(0, tempIndex1)+vname.substring((tempIndex2+1));
		tempIndex1 = vname.indexOf("[");
		tempIndex2 = vname.indexOf("]");
		if (tempIndex1>0){
			vname = vname.substring(0, tempIndex1)+vname.substring((tempIndex2+1));
		}
	}
	vname = trimAll(vname.toLowerCase().replace(/[^a-zA-Z0-9]/g, " "));
	vcat = trimAll(vcat.toLowerCase().replace(/[^a-zA-Z0-9]/g, " "));
	vname = vname.replace(/[ ]/g, "-");
	vcat = vcat.replace(/[ ]/g, "-");
	vname = vname.replace("--", "-").replace("--", "-").replace("--", "-").replace("--", "-").replace("--", "-");
	vcat = vcat.replace("--", "-").replace("--", "-").replace("--", "-").replace("--", "-").replace("--", "-");
	return vcat+'/'+vname+'.htm';
}
function onePopLink(oPLStr, oPLType){
	var oPLOut = '';

	var oPLArray = oPLStr.split("|");
	var oPLOutP = '<a href="/'+createLinks(oPLArray[3]+'-to-'+oPLArray[4],oPLArray[0])+'">'+oPLArray[3]+' to '+oPLArray[4]+'</a>';
	var oPLOutR = '<a href="/'+createLinks(oPLArray[4]+'-to-'+oPLArray[3],oPLArray[0])+'">'+oPLArray[4]+' to '+oPLArray[3]+'</a>';
	if (oPLType=='P'){
		oPLOut = oPLOutP;
	}else if (oPLType=='R'){
		oPLOut = oPLOutR;
	}else{
		oPLOut = oPLOutP + ' or ' + oPLOutR;
	}
	return '<div>'+oPLOut+'</div>';;
}
function findUnit(){
	var fromVal = trimAll((document.getElementById("fromunit").value+"").toLowerCase());
	var toVal = trimAll((document.getElementById("tounit").value+"").toLowerCase());
	var popConv = '';
	if (fromVal.length>0){
		for (i=0;i<allpopularstr.length;i++){
			var oneLow = allpopularstr[i].toLowerCase();
			var oneLowArray = oneLow.split("|");
			var oneLowP1 = ' |'+oneLowArray[1] + '|'+oneLowArray[3];
			var oneLowP2 = ' |'+oneLowArray[2] + '|'+oneLowArray[4];

			if (toVal.length>0){
				if ((oneLowP1.indexOf(("|"+fromVal))>0)||(oneLowP1.indexOf(("["+fromVal))>0)){
					if ((oneLowP2.indexOf(("|"+toVal))>0)||(oneLowP2.indexOf(("["+toVal))>0)){
						popConv += onePopLink(allpopularstr[i], 'P');
					}
				}else{
					if ((oneLowP2.indexOf(("|"+fromVal))>0)||(oneLowP2.indexOf(("["+fromVal))>0)){
						if ((oneLowP1.indexOf(("|"+toVal))>0)||(oneLowP1.indexOf(("["+toVal))>0)){
							popConv += onePopLink(allpopularstr[i], 'R');
						}
					}
				}
			}else{
				if ((oneLowP1.indexOf(("|"+fromVal))>0)||(oneLowP1.indexOf(("["+fromVal))>0)){
					if ((oneLowP2.indexOf(("|"+fromVal))>0)||(oneLowP2.indexOf(("["+fromVal))>0)){
						popConv += onePopLink(allpopularstr[i], 'B');
					}else{
						popConv += onePopLink(allpopularstr[i], 'P');
					}
				}else{
					if ((oneLowP2.indexOf(("|"+fromVal))>0)||(oneLowP2.indexOf(("["+fromVal))>0)){
						popConv += onePopLink(allpopularstr[i], 'R');
					}
				}
			}
		}
	}else if (toVal.length>0){
		for (i=0;i<allpopularstr.length;i++){
			var oneLowArray = allpopularstr[i].toLowerCase().split("|");
			var oneLowP1 = ' |'+oneLowArray[1] + '|'+oneLowArray[3];
			var oneLowP2 = ' |'+oneLowArray[2] + '|'+oneLowArray[4];

			if ((oneLowP2.indexOf(("|"+toVal))>0)||(oneLowP2.indexOf(("["+toVal))>0)){
				if ((oneLowP1.indexOf(("|"+toVal))>0)||(oneLowP1.indexOf(("["+toVal))>0)){
					popConv += onePopLink(allpopularstr[i], 'B');
				}else{
					popConv += onePopLink(allpopularstr[i], 'P');
				}
			}else{
				if ((oneLowP1.indexOf(("|"+toVal))>0)||(oneLowP1.indexOf(("["+toVal))>0)){
					popConv += onePopLink(allpopularstr[i], 'R');
				}
			}
		}
	}
	if (popConv.length>1){
		popConv = "<span><b>Popular Conversions:</b></span>"+popConv+"<br><span><b>All Conversions:</b> (provide both units)</span>";
	}
	var fromMatchs = [];
	var fromCatgories = [];
	if (fromVal.length>0){
		for (i=0;i<allunitslower.length;i++){
			if ((allunitslower[i][0].indexOf(fromVal)==0)||(allunitslower[i][1].indexOf(fromVal)==0)){
				fromMatchs.push(allunits[i]);
				tempVal = '';
				if (fromCatgories.length>0){
					tempVal = fromCatgories[(fromCatgories.length-1)];
				}
				if (tempVal!=allunits[i][1]){
					fromCatgories.push(allunits[i][1]);
				}
			}
		}
		var tempResults = "";
		if (toVal.length>0){
			var totalCount = 0;
			for (i=0;i<fromMatchs.length;i++){
				for (j=0;j<allunitslower.length;j++){
					if (totalCount<50){
						if (fromMatchs[i][1]==allunits[j][1]){
							if ((allunitslower[j][0].indexOf(toVal)==0)||(allunitslower[j][1].indexOf(toVal)==0)){
								tempResults += '<div><a href="/'+createLinks((fromMatchs[i][0]+' to '+allunits[j][0]), allunits[j][1])+'">'+fromMatchs[i][0]+' to '+allunits[j][0]+"</a> <span><a href='/redirect.php?name=" + encodeURI(allunits[j][1]) + "'>" + allunits[j][1] + "</a></span></div>";
								totalCount++;
							}
						}
					}
				}
			}
			if (totalCount>=50) tempResults += '<div>...</div>';
			if (tempResults.length<3) tempResults = '<div>No unit name starts with "'+fromVal+'" and "'+toVal+'" found.</div>';
		}else{
			var totalCount = 0;
			for (i=0;i<fromMatchs.length;i++){
				if (totalCount<50){
					tempResults += '<div>'+fromMatchs[i][0]+" to <i>??</i> <span><a href='/redirect.php?name=" + encodeURI(fromMatchs[i][1]) + "'>" + fromMatchs[i][1] + "</a></span></div>";
					totalCount++;
				}
			}
			if (totalCount>=50) tempResults += '<div>...</div>';
			if (tempResults.length<3) tempResults = '<div>No unit name starts with "'+fromVal+'" found.</div>';
		}
		document.getElementById("futcResult").innerHTML = popConv+tempResults;
	}else{
		if (toVal.length>0){
			var totalCount = 0;
			var tempResults = "";
			for (i=0;i<allunitslower.length;i++){
				if (totalCount<50){
					if ((allunitslower[i][0].indexOf(toVal)==0)||(allunitslower[i][1].indexOf(toVal)==0)){
						tempResults += '<div><i>??</i> to '+allunits[i][0]+" <span><a href='/redirect.php?name=" + encodeURI(allunits[i][1]) + "'>" + allunits[i][1] + '</a></span></div>';
						totalCount++;
					}
				}
			}
			if (totalCount>=50) tempResults += '<div>...</div>';
			if (tempResults.length<3){
				if (popConv.length<3){
					document.getElementById("futcResult").innerHTML = '<div>No unit name starts with "'+toVal+'" found.</div>';
				}else{
					document.getElementById("futcResult").innerHTML = popConv;
				}
			}else{
				document.getElementById("futcResult").innerHTML = popConv+tempResults;
			}
		}else{
			document.getElementById("futcResult").innerHTML = "";
		}
	}
}