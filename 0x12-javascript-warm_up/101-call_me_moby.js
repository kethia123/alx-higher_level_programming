#!/usr/bin/node
;(function (x, theFunction) {
    while (x > 0) {
        theFunction.call();
        x--;
    }
  }())
