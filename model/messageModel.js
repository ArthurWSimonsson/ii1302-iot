const fetch = require("node-fetch");

/* Author Arthur Simonsson */
/* Fetches relevant information from database */

// https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome
// https://ii1302-door-com.eu-gb.mybluemix.net/api/message/welcome


exports.getWelcome = function() {
    return fetch('https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data;
    });
}

