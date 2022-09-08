var request = require('request');

/**
 * Function for GET method
 */
function GET(_url, _headers) {
    
    var options = {
        method: 'GET',
        url: _url,
        headers: _headers,
        json: true
    };
    
    return REQUEST(options);
}

/**
 * Function for POST method
 */
async function POST(_url, _headers, _body) {
    var options = {
        method: 'POST',
        url: _url,
        headers: _headers,
        body: _body,
        json: isJsonType(_body)
    };
    let promise = await REQUEST(options);
    return promise;
}

/**
 * Function for PUT method
 */
function PUT(_url, _headers, _body) {
    var options = {
        method: 'PUT',
        url: _url,
        headers: _headers,
        body: _body,
        json: isJsonType(_body)
    };
    return REQUEST(options);
}


/**
 * Function to check if body is JSON object
 */
function isJsonType(_body) {
    return (typeof (_body) == 'object')
}

/**
 * Helping Function for POST method
 */
function getResponse(options) {
    return REQUEST(options);
}

/**
 * suporting function for requesting API
 */
function REQUEST(options) {
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}

module.exports = { getResponse, GET, POST, PUT }