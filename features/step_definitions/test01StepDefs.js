const { Given, Then, After, When } = require('cucumber');
const api = require('../helpers/apiMethods')
const expect = require("chai").expect;
const request = require('supertest');
const getKeyWords = require('../helpers/readProperties');
const { assert } = require('console');
var res;
var id;
var basicurl =getKeyWords('baseURL') + ':' + getKeyWords('port');

const  _hearders = {
    "Content-Type": "application/json"
}


    Given('open the local host url', async function() {
        // verify the server is up and running
        var url = basicurl+getKeyWords('toolItems');  
        // send a GET request                
        res = await api.GET(url, _hearders); 
        // verify the response code is 200
        expect(res.statusCode, 'status code is not as expected').equal(200);
        // verify that the response doesn't have any error
        expect(JSON.stringify(res.body), "no error is found in the response").not.contains("error");     
    });


    When('submit {string} create item request', async function(string) {
           // Create items

           //create url
        var createUrl = basicurl+getKeyWords('toolItems');

        //Payload to create a item
        var _body = {
        "description": string       
        };
        // submit post request
        res = await api.POST(createUrl, _hearders, _body);
        // get the Id of item from the response
        id= JSON.stringify(res.body);
        //Verify that the response code is 201
        expect(res.statusCode, 'status not OK').to.equal(201);
        // verify that the response doesn't have any error
        expect(JSON.stringify(res.body), "ERROR is detected in response").not.contains("error");
          
    });


    Then('verify the items are created', async function () {
        // verify the items are created or not
        var getIdUrl1 =(basicurl+getKeyWords('toolItemsid')).replace("{id}", id);
        // remove quote fron the url 
        var getIdUrl = getIdUrl1.replace(/"/g,"");
        // send GET method to verify that the item exists in the list
        res = await api.GET(getIdUrl, _hearders);
        //Verify that the response code is 200
        expect(res.statusCode, 'status not OK').equal(200);
         // verify that the response doesn't have any error
        expect(JSON.stringify(res.body), "ERROR is detected in response").not.contains("error");
    });

    When('send complete request {string}', async function (string) {
        // Write code here that turns the phrase above into concrete actions
        var compItemurl1 = (basicurl+getKeyWords('toolItemsid')).replace("{id}", id);
        // replace the quotes from the url
        var compItemurl = compItemurl1.replace(/"/g,"");
        // payload for complete item
        var _body = {
            "id": id.replace(/"/g,""),
            "description":string,
            "isCompleted": true   
            };
         //send a PUT request to complete the item
        res = await api.PUT(compItemurl, _hearders, _body);
         // Verify that the status code is 204
        expect(res.statusCode, 'status not OK').equal(204);
      });


    Then('verify the request is removed from show items {string}', async function (string) {
        // Write code here that turns the phrase above into concrete actions
        var getIdUrl1 =(basicurl+getKeyWords('toolItemsid')).replace("{id}", id);
        // Remove the quotes from url
        var getIdUrl = getIdUrl1.replace(/"/g,"");
        // send a GET request with id
        res = await api.GET(getIdUrl, _hearders);
        //  verify the status code is 200
        expect(res.statusCode, 'status not OK').equal(200);
        // verify item is removed from show items
        expect(JSON.stringify(res.body), "ERROR is detected in response").not.contains(string);
        // verify no error in response
        expect(JSON.stringify(res.body), "ERROR is detected in response").not.contains("error");
        
    });


	