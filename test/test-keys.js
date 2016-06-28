var expect    = require("chai").expect;

var objects = require("../src/index");


describe("Objects utils Keys testing", function() { 
  describe("cleanEmptyKeys function test", function() {
    it("test all possibles object's key values", function() {
    	var o = {"a": 1, "b": "test", "c": false, "d": null, "e": [], "f": {"aa":1, "bb":null}};
    	objects.Keys.cleanEmptyKeys(o);
    	
    	expect(o.a).to.equals(1);
    	expect(o.b).to.equals("test");
    	expect(o.c).to.equals(false);
    	
    	expect(o.d).to.equals(undefined);
    	expect(o.e instanceof Array).to.equals(true);
    	expect(o.f.aa).to.equals(1);
    	expect(o.f.bb).to.equals(undefined); 
    });
  });
  
  
  
  describe("replaceEmptyKeys function test", function() {
    it("test replaceEmptyKeys with a string token", function() { 
    	var TOKEN = 'TOKEN';
    	
    	var o = {"a": 1, "c": false, "d": null, "f": {"aa":1, "bb":null}};
    	objects.Keys.replaceEmptyKeys(o, TOKEN);
    	
    	expect(o.a).to.equals(1); 
    	expect(o.c).to.equals(false); 
    	expect(o.d).to.equals(TOKEN); 
    	
    	expect(o.f.aa).to.equals(1);
    	expect(o.f.bb).to.equals(TOKEN); 
    });
  });
  
  
  
  describe("applyOnEmptyKeys function test", function() {
    it("test applyOnEmptyKeys, assign 99 to all empty keys", function() { 
    	var THE_VALUE = 99;
    	var callbackFunc = function(instanceObj, fieldName){
    		instanceObj[fieldName] = THE_VALUE;
    	};
    	
    	var o = {"a": 1, "b": "test", "c": false, "d": null, "e": [], "f": {"aa":1, "bb":null}};
    	objects.Keys.applyOnEmptyKeys(o, callbackFunc);
    	
    	expect(o.a).to.equals(1);
    	expect(o.b).to.equals("test");
    	expect(o.c).to.equals(false);
    	
    	expect(o.d).to.equals(THE_VALUE);
    	expect(o.e instanceof Array).to.equals(true);
    	expect(o.f.aa).to.equals(1);
    	expect(o.f.bb).to.equals(THE_VALUE); 
    });
  }); 
});


