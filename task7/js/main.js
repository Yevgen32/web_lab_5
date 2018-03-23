function convertToRoman(n) {
	var alph = [["I",1], ["IV",4], ["V",5], ["IX",9], ["X",10], ["XL",40], ["L",50], ["XC",90], ["C",100], ["CD",400], ["D",500], ["CM",900], ["M",1000]];
    for(var j = alph.length - 1, i = arguments[0], n = ""; j != -1; j--) {
        if(~~(i / alph[j][1]) > 0) { n += alph[j][0]; i -= alph[j][1]; j++; }
    }
    return n;
}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask7() {
	assert(convertToRoman(1) == "I", "Case '#0'");
	assert(convertToRoman(5) == "V", "Case '#1'");
	assert(convertToRoman(10) == "X", "Case '#2'");
	assert(convertToRoman(15) == "XV", "Case '#3'");
	assert(convertToRoman(20) == "XX", "Case '#4'");
	assert(convertToRoman(40) == "XL", "Case '#5'");
	assert(convertToRoman(90) == "XC", "Case '#6'");
	assert(convertToRoman(101) == "CI", "Case '#7'");
	assert(convertToRoman(35) == "XXXV", "Case '#8'");
	assert(convertToRoman(132) == "CXXXII", "Case '#9'");
	assert(convertToRoman(281) == "CCLXXXI", "Case '#10'");
	assert(convertToRoman(276) == "CCLXXVI", "Case '#11'");
	assert(convertToRoman(299) == "CCXCIX", "Case '#12'");
	assert(convertToRoman(281) == "CCLXXXI", "Case '#13'");
	assert(convertToRoman(293) == "CCXCIII", "Case '#14'");
	assert(convertToRoman(101) == "CI", "Case '#15'");
	assert(convertToRoman(154) == "CLIV", "Case '#16'");
	assert(convertToRoman(216) == "CCXVI", "Case '#17'");
	assert(convertToRoman(71) == "LXXI", "Case '#18'");
	assert(convertToRoman(70) == "LXX", "Case '#19'");
	assert(convertToRoman(1077) == "MLXXVII", "Case '#20'");
	assert(convertToRoman(554) == "DLIV", "Case '#21'");
	assert(convertToRoman(1566) == "MDLXVI", "Case '#22'");
	assert(convertToRoman(1883) == "MDCCCLXXXIII", "Case '#23'");
	assert(convertToRoman(2294) == "MMCCXCIV", "Case '#24'");
	assert(convertToRoman(1802) == "MDCCCII", "Case '#25'");
	assert(convertToRoman(2762) == "MMDCCLXII", "Case '#26'");
	assert(convertToRoman(2306) == "MMCCCVI", "Case '#27'");
	assert(convertToRoman(1211) == "MCCXI", "Case '#28'");
	assert(convertToRoman(2754) == "MMDCCLIV", "Case '#29'");

	console.log("Done!");
}

runTask7();