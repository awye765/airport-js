'use strict';

describe("Feature Test:", function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe("Fair conditions:", function() {

    beforeEach(function(){
      spyOn(Math, "random").and.returnValue(0);
    });

    it("Planes can be instructed to land at an airport", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("Planes can be instructed to take off from an airport", function() {
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    });

  });

  describe("Stormy conditions:", function(){

    it("blocks take off when weather is stormy", function() {
      spyOn(Math, "random").and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, "isStormy").and.returnValue(true)
      expect(function(){ plane.takeOff(); }).toThrowError('cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });

    it("blocks landing when weather is stormy", function(){
      spyOn(airport._weather, "isStormy").and.returnValue(true)
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
      expect(plane._location).not.toEqual(airport);
    });

  });

});
