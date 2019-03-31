import { func } from "prop-types";

var UserProfile = (function() {
    var loggedIn = false;
    var email = "";
    var name = "";
    var googleId = "";
    var fs = require("fs");
    
    var writeToStorage = function(object) { 
      fs.writeFile("./UserProfile.json", JSON.stringify(object), (err) => {
          if (err) {
              console.error(err);
              return;
          };
          console.log("File has been created");
      });
    }

    var getLoggedIn = function() {
      return loggedIn;    // Or pull this from cookie/localStorage
    };
  
    var setLoggedIn = function(loggedIn_) {
      loggedIn = loggedIn_;     
      if(loggedIn_ === false){
         email = "";
         name = "";
         googleId = "";
      }

      // Also set this in cookie/localStorage
    };

    var getEmail = function() {
        return email;    // Or pull this from cookie/localStorage
      };
    
      var setEmail = function(email_) {
        email = email_;     
        // Also set this in cookie/localStorage
      };

      var getName = function() {
        return name;    // Or pull this from cookie/localStorage
      };
    
      var setName = function(name_) {
        name = name_;     
        // Also set this in cookie/localStorage
      };

      var getGoogleId = function() {
        return googleId;    // Or pull this from cookie/localStorage
      };
    
      var setGoogleId = function(googleId_) {
        googleId = googleId_;     
        // Also set this in cookie/localStorage
      };
    
    return {
        getLoggedIn: getLoggedIn,
        setLoggedIn: setLoggedIn,
        getEmail: getEmail,
        setEmail: setEmail,
        getName: getName,
        setName: setName,
        getGoogleId: getGoogleId,
        setGoogleId: setGoogleId,
        writeToStorage: writeToStorage
    }
  
  })();
  
  export default UserProfile;