'use strict';

describe ("Weather", function() {
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });

  it ("returns stormy randomly", function() {
    spyOn(Math, "random").and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it ("returns not stormy randomly", function() {
    spyOn(Math, "random").and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });

});
