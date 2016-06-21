'use strict';

describe("Airport", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe("Fair conditions:", function(){

    beforeEach(function(){
      spyOn(Math, "random").and.returnValue(0);
    });

    it("has no planes by default", function(){
      expect(airport.planes()).toEqual([]);
    });

    it("can clear planes for landing", function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it("can clear planes for takeoff", function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });

    it("can check for stormy weather conditions", function(){
      expect(airport._weather.isStormy()).toBeFalsy();
    });

  });

  describe("under stormy conditions", function(){

    beforeEach(function(){
      spyOn(Math, "random").and.returnValue(1);
    });

    it("does not clear plane to take off", function(){
      expect(function(){ airport.clearForTakeoff(plane);}).toThrowError("cannot take off during storm");
    });

    it("does not clear plane to land", function(){
      expect(function(){ airport.clearForLanding(plane);}).toThrowError("cannot land during storm");
    });
  });
});
