const romansList = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const arabicList = [1000, 900, 500, 400, 100 ,90 , 50, 40, 10, 9, 5, 4, 1];

exports.romanToInt = function (romanNum){
  var numberInt = 0;
  for (var i = 0; i <= arabicList.length; i++){
    while(romanNum.indexOf(romansList[i]) === 0){
      numberInt += arabicList[i];
      romanNum = romanNum.replace(romansList[i], '');
    }
  }
  return numberInt;
}

exports.intToRoman = function (arabicNum){
  var numberRoman = '';
  var i = 0;
  for (var i = 0; i <= arabicList.length; i++){
    while(arabicNum % arabicList[i] < arabicNum){
      numberRoman += romansList[i];
      arabicNum -= arabicList[i];
    }
  }
  return numberRoman;
}
