'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */

mongoose.connect("mongodb://radulop:zheSHWAW9@ds047095.mongolab.com:47095/censpring2016", function(err, db) {
  require('fs').readFile('listings.json', 'utf8', function(err, data){
    var listings = JSON.parse(data);

    for (var i = 0; i < listings.entries.length; i++) {
      var newListing = new Listing();
      newListing.code = listings.entries[i].code;
      newListing.name = listings.entries[i].name;
      newListing.coordinates = listings.entries[i].coordinates;
      newListing.address = listings.entries[i].address; 

      newListing.save(function(err, s) {
        console.log(s);
      })
  }
  })

});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */