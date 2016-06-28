# objects-utils 
###### Object's keys manipulation

# Overview
This is a collection of varius methods to manipulate objects in javascript. For now this module has only some methods to manipulates object's keys.

# Use Keys
```js
var objects = require('objects-utils');

// delete all empty keys of an object
var instance = {"a":1, "b": null, "c": 0, "d": {"ab": 45, "cd": null}};
objects.Keys.cleanEmptyKeys(instance);
// now the "b" key has been deleted: {"a":1, "c": 0, "d": {"ab": 45}}


// replace empty keys with a token
var instance = {"a":1, "b": null, "c": 0};
objects.Keys.replaceEmptyKeys(instance, 'MY_TOKEN');
// now the "b" key has been replaced with: {"a":1, "b": "MY_TOKEN", "c": 0}


// apply a specific callback on each key of the object
var instance = {"a":1, "b": null, "c": 0};
objects.Keys.applyOnEmptyKeys(instance, function(instance, fieldName){
	var the_key_value = instance[fieldName];
	// do what you want!
});

```


# Use Maps
```js
var objects = require('objects-utils');

// create list at object key
var map = {"a":1, "b": null, "c": 0, "d": {"ab": 45, "cd": null}};
objects.Maps.createListAtKey(map, "k");


// add item to list at key (create list if not exists)
var map2 = {"a":1, "b": null, "c": 0}; 
objects.Maps.atKeyAddItemToList(map2, 'k');  

```

