window.onload = function() {
  document.body.addEventListener("mousemove", function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(`x座標: ${x}, y座標: ${y}`);
  });
}

// function $(id) {
//   return document.getElementById(id);
// }

// function addEvent(element, eventType, handler) {
//   if(element.addEventListener) {
//     element.addEventListener(eventType, handler, false);
//   }
//   else if(element.attachEvent) {
//     element.attachEvent('on' + eventType, handler);
//   }
// }

// addEvent(window, 'load', function() {
//   addEvent($('box'), 'mousemove', mouseColour);
// });

// var $colour = '#000000';

// function setVal(val, min, max) {
//   if(val < min) {
//     return min;
//   }
//   else if(val > max) {
//     return max;
//   }
//   else {
//     return val;
//   }
// }

// function ascendingSort(a, b) {
//   return a - b;
// }

// function calcPer(num, term) {
//   return Math.round(num / term * 100);
// }

// function mouseColour(event) {
//   var maxW = $('box').clientWidth  - 1;
//   var maxH = $('box').clientHeight - 1;

//   var x = setVal(event.offsetX, 0, maxW);
//   var y = setVal(event.offsetY, 0, maxH);

  var calcXTerm = Math.round(maxW / 6);
//   var xTerm;
//   if     (x <= calcXTerm * 1) { xTerm = 1; }
//   else if(x <= calcXTerm * 2) { xTerm = 2; }
//   else if(x <= calcXTerm * 3) { xTerm = 3; }
//   else if(x <= calcXTerm * 4) { xTerm = 4; }
//   else if(x <= calcXTerm * 5) { xTerm = 5; }
//   else if(x <= calcXTerm * 6) { xTerm = 6; }

//   var xPerR, xPerG, xPerB;
//   if(xTerm == 1) {
//     xPerR = 100;
//     xPerG = calcPer(x, calcXTerm);
//     xPerB = 0;
//   }
//   else if(xTerm == 2) {
//     xPerR = calcPer(calcXTerm * 2 - x, calcXTerm);
//     xPerG = 100;
//     xPerB = 0;
//   }
//   else if(xTerm == 3) {
//     xPerR = 0;
//     xPerG = 100;
//     xPerB = calcPer(x - calcXTerm * 2, calcXTerm);
//   }
//   else if(xTerm == 4) {
//     xPerR = 0;
//     xPerG = calcPer(calcXTerm * 4 - x, calcXTerm);
//     xPerB = 100;
//   }
//   else if(xTerm == 5) {
//     xPerR = calcPer(x - calcXTerm * 4, calcXTerm);
//     xPerG = 0;
//     xPerB = 100;
//   }
//   else if(xTerm == 6) {
//     xPerR = 100;
//     xPerG = 0;
//     xPerB = calcPer(calcXTerm * 6 - x, calcXTerm);
//   }

//   var calcYTerm = Math.round(maxH / 3);
//   var yTerm;
//   if     (y <= calcYTerm * 1) { yTerm = 1; }
//   else if(y <= calcYTerm * 2) { yTerm = 2; }
//   else if(y <= calcYTerm * 3) { yTerm = 3; }

//   var yPer;
//   var yAdd;
//   if(yTerm == 1) {
//     yPer = Math.round(calcPer(calcYTerm - y, calcYTerm) * -0.4);
//     yAdd = 0;
//   }
//   else if(yTerm == 2) {
//     yPer = calcPer(y - calcYTerm, calcYTerm);
//     yAdd = 0;
//   }
//   else if(yTerm == 3) {
//     yPer = 100;
//     yAdd = Math.round(calcPer(y - calcYTerm * 2, calcYTerm) * 2.55);
//   }

//   var colArry = new Array(xPerR, xPerG, xPerB);
//   colArry.sort(ascendingSort);

//   var maxCol = colArry[2];
//   var midCol = colArry[1];
//   var minCol = colArry[0];

//   var maxAdjust = Math.round((255 / 100) * yPer);
//   if(maxCol + maxAdjust > 255) {
//     maxAdjust = 255 - maxCol;
//   }
//   var midAdjust = Math.round(maxAdjust / (maxCol / midCol));
//   var minAdjust = Math.round(maxAdjust / (maxCol / minCol));

//   var maxColFix = setVal(maxCol + yAdd + maxAdjust, 0, 255);
//   var midColFix = setVal(midCol + yAdd + midAdjust, 0, 255);
//   var minColFix = setVal(minCol + yAdd + minAdjust, 0, 255);

//   var tenR, tenG, tenB;
//   if(xPerR == maxCol) {
//     tenR = maxColFix;
//     if(xPerG == midCol) {
//       tenG = midColFix;
//       tenB = minColFix;
//     }
//     else {
//       tenG = minColFix;
//       tenB = midColFix;
//     }
//   }
//   else if(xPerG == maxCol) {
//     tenG = maxColFix;
//     if(xPerR == midCol) {
//       tenR = midColFix;
//       tenB = minColFix;
//     }
//     else {
//       tenR = minColFix;
//       tenB = midColFix;
//     }
//   }
//   else if(xPerB == maxCol) {
//     tenB = maxColFix;
//     if(xPerR == midCol) {
//       tenR = midColFix;
//       tenG = minColFix;
//     }
//     else {
//       tenR = minColFix;
//       tenG = midColFix;
//     }
//   }

//   var hexR = tenR.toString(16); if(tenR <= 15) { hexR = '0' + hexR; }
//   var hexG = tenG.toString(16); if(tenG <= 15) { hexG = '0' + hexG; }
//   var hexB = tenB.toString(16); if(tenB <= 15) { hexB = '0' + hexB; }

//   var displayColour = '#' + hexR + hexG + hexB;
//   $('colour').style.color = yTerm == 1 ? '#ffffff' : yTerm == 2 ? '#888888' : '#000000';
//   document.body.style.backgroundColor = $('colour').innerHTML = $colour = displayColour;
// }

