'use strict';

function Airport()  {
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane)  {
  if(this.isStormy()) {
    throw new Error("cannot land during storm");
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if(this.isStormy()) {
    throw new Error("cannot take off during storm");
  }
  this._hangar.pop();
};

Airport.prototype.isStormy = function(){
  return false;
};
