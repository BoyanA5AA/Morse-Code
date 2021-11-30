"use strict";

var morseCode = "A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----";
var morseList = morseCode.split("|");

for (var i = 0; i < morseList.length; i++) {
  morseList[i] = morseList[i].split(";");
  $("ul.translist").append("<li>" + morseList[i][0] + "  " + morseList[i][1] + "</li>");
}

function findCode(letter) {
  for (var i = 0; i < morseList.length; i++) {
    if (morseList[i][0] == letter) {
      return morseList[i][1];
    }
  }

  return letter;
}

function findLetter(code) {
  for (var i = 0; i < morseList.length; i++) {
    if (morseList[i][1] == code) {
      return morseList[i][0];
    }
  }

  return code;
}

function translateToMorse(text) {
  text = text.toUpperCase();
  var result = "";

  for (var i = 0; i < text.length; i++) {
    result += findCode(text[i]) + " ";
  }

  return result;
}

function translateToEng(text) {
  text = text.split(" ");
  var result = "";

  for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
    result += findLetter(text[i]);
    console.log(findLetter(text[i]));
  }

  return result;
}

$("#btnMorse").click(function () {
  var input = $("#input").val();
  $("#output").val(translateToMorse(input));
  $(".symbol").velocity({
    rotateZ: ["0deg", "360deg"]
  });
});
$("#btnEng").click(function () {
  var input = $("#output").val();
  $("#input").val(translateToEng(input));
  $(".symbol").velocity({
    rotateZ: ["0deg", "360deg"]
  });
});
$("#input").keyup(function () {
  var original = $("#input").val();
  var newtext = original.toUpperCase().split(" ").join("");
  $("#input").val(newtext);
});