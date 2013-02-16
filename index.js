"use strict";

var numeric = require("numeric");

function resize1d(result, image) {
  var lim = Math.min(result.length, image.length);
  for(var i=0; i<lim; ++i) {
    result[i] = image[i];
  }
}

function resize2d(result, image) {
  var lim0 = Math.min(result.length, image.length);
  var lim1 = Math.min(result[0].length, image[0].length);
  for(var i=0; i<lim0; ++i) {
    var rr = result[i];
    var ii = image[i];
    for(var j=0; j<lim1; ++j) {
      rr[j] = ii[j];
    }
  }
}

function resizend(result, image, n) {
  if(n === 2) {
    resize2d(result, image);
    return;
  }
  var lim = Math.min(result.length, image.length);
  for(var i=0; i<lim; ++i) {
    resizend(result[i], image[i], n-1);
  }
}

function shapeEqual(a, b) {
  if(a.length !== b.length) {
    return false;
  }
  for(var i=0; i<a.length; ++i) {
    if(a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function clear(arr, n) {
  if(n === 1) {
    for(var i=0; i<arr.length; ++i) {
      arr[i] = 0;
    }
  } else {
    for(var i=0; i<arr.length; ++i) {
      clear(arr[i], n-1);
    }
  }
}

function resize(nres, image, result) {
  if(result && shapeEqual(nres, numeric.dim(result))) {
    clear(result, nres.length);
  } else {
    result = numeric.rep(nres, 0.0);
  }
  switch(nres.length) {
    case 0:
      break;
    case 1:
      resize1d(result, image);
      break;
    case 2:
      resize2d(result, image);
      break;
    default:
      resizend(result, image, nres.length);
      break;
  }
  return result;
}
module.exports = resize;