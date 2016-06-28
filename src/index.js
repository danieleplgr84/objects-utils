
function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

/////////////////////////////////////// Keys 
function ObjectKeys(){}
ObjectKeys.applyOnEmptyKeys= function(instanceObj, func){
	if( typeof(instanceObj)!=='undefined' && instanceObj!==null)  {
		if((typeof(instanceObj)==='object')){ 
			var _keys = Object.keys(instanceObj);
			if(_keys!==null && _keys.hasOwnProperty('length') && _keys.length>0) {
				// fetch object keys 
				for(var index in _keys){
					var fieldName = _keys[index];
					if(fieldName!==null && typeof(fieldName)=='string'){
						var fieldValue = instanceObj[fieldName];
						var _type = typeof(fieldValue);
						
						if(_type==='object' && fieldValue!==null){
							ObjectKeys.applyOnEmptyKeys(fieldValue, func);
						}
						
						else {
							// check is not boolean nor number, because for these types we want to hold the original value.
							if(_type!='boolean' && _type!='number'){
								// check whenever to replace the obj key value 
								if(_type==='null' || fieldValue===null || _type==='undefined' || fieldValue===''){
									if(typeof(func)==='function' && func!==null){
										func(instanceObj, fieldName);
									}
								} 
							} 
						}
					}
				}
			}	
		}
	} 
}
ObjectKeys.cleanEmptyKeys= function(instanceObj){
	ObjectKeys.applyOnEmptyKeys(instanceObj, function(instanceObj, fieldName){
		delete instanceObj[fieldName];
	});
};
ObjectKeys.replaceEmptyKeys = function(instanceObj, TOKEN_REPLACE){
	ObjectKeys.applyOnEmptyKeys(instanceObj, function(instanceObj, fieldName){
		instanceObj[fieldName] = TOKEN_REPLACE;
	});
};




/////////////////////////////////////// Maps 
function ObjectMaps(){}
ObjectMaps.createListAtKey = function(_map, _key){
	if(typeof(_map[_key])==='undefined' || 
			!(_map[_key] instanceof Array)){
		_map[_key] = [];
	}
	return _map[_key];
};

ObjectMaps.atKeyAddItemToList = function(_map, _key, _itemToPush){
	ObjectMaps.createListAtKey(_map, _key);
	_map[_key].push(_itemToPush);
};




exports.Keys = ObjectKeys;
exports.Maps = ObjectMaps;
