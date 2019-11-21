/*
Intermediate Algorithm Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

For example:

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([
                {name: "iss", avgAlt: 413.6}, 
                {name: "hubble", avgAlt: 556.7}, 
                {name: "moon", avgAlt: 378632.553}
              ]) 
should return [
                {name : "iss", orbitalPeriod: 5557}, 
                {name: "hubble", orbitalPeriod: 5734}, 
                {name: "moon", orbitalPeriod: 2377399}
              ].
*/ 
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  //Takes the altitude as a parameter and returns the orbital period of an object.
  function toOrbit(alt){
    return Math.round(Math.PI*2*(Math.sqrt(Math.pow(earthRadius+alt, 3)/GM)));
  }
  /* create a new array containing the object's name key and value and the new 
  orbitalPeriod key and it's corresponding value. */
  let newArr = arr.map(obj => {
    return {'name': obj.name, 'orbitalPeriod': toOrbit(obj.avgAlt)}
  });
    
  return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);