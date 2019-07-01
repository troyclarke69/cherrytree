	//requester.js
	//Methods for php/sqlite - projects.php
	
	//return list of projects into table
	
	// handles the event to load projects
	import React, { Component } from 'react';
	
	export function getOutput() {
		
		var test3 = document.getElementById('projects');
			test3.innerHTML = "getRequest";

	  getRequest(
		  'http://triosdevelopers.com/~T.Clarke/phpTest/projects.php' + '?show=1' , //- gets list of projects
		   drawOutput,  // handle successful request
		   drawError    // handle error
	  );
	  
	  return false;
	}


	// handles drawing an error message
	function drawError() {
		var container = document.getElementById('output');
		container.innerHTML = 'OOoops!: there was an error in getting the timesheet list!';
	}
	// handles the response, adds the html
	function drawOutput(responseText) {
		
		var test3 = document.getElementById('projects');
		test3.innerHTML = "drawOutput"; 
		
		//ajax.php has returned us a (html) table (string) - filtered timesheet list
		var container = document.getElementById('projects');
		container.innerHTML = responseText;
	}
	
	function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error != 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
	
	req.open("POST", url, true);	
    req.send(null);
    return req;
}