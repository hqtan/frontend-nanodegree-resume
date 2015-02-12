function getRelationship(x, y){

  var xNan = isNaN(x);
  var yNan = isNaN(y);

  if (xNan && yNan) {
    return "Can't compare relationships because " + x + " and " + y + " are not numbers";
  }

  if (xNan) {
    return "Can't compare relationships because " + x + " is not a number";
  }
  
  if (yNan) {
    return "Can't compare relationships because " + y + " is not a number";
  }

  if (x < y) { return "<"; }
  if (x > y) { return ">"; }
  if (x == y) { return "="; }

  //console.log("x: " + x );
  //console.log("y: " + y );
}
