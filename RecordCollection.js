

/*

Basic JavaScript: Record Collection
You are given a JSON object representing a part of your musical album collection. 
Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id(like 2548), a property prop(like "artist"or "tracks"), 
and a value(like "Addicted to Love") to modify the data in this collection.

If propisn't "tracks"and valueisn't empty (""), update or set the valuefor that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If propis "tracks"but the album doesn't have a "tracks"property, create an empty array before adding the 
new value to the album's corresponding property.

If propis "tracks"and valueisn't empty (""), push the valueonto the end of the album's existing tracksarray.

If valueis empty (""), delete the given propproperty from the album.

Hints
Use bracket notationwhen accessing object properties with variables.

Push is an array method you can read about on Mozilla Developer Network.

You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.

*/




// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Setup ends
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if(prop != 'tracks' && value != ""){
    collection[id][prop] = value;
  }
  if(prop == 'tracks' && !collection[id].hasOwnProperty('tracks')){
    collection[id]['tracks'] = [];
    collection[id][prop][0] = value;
  }
  if(prop == 'tracks' && value != ""){
    collection[id][prop].push(value);
  }
  if(value == ""){
    delete collection[id][prop];
  }
  
  return collection;
}

updateRecords(5439, "artist", "ABBA");
