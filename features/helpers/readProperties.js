var propertiesReader = require('properties-reader');
var properties = propertiesReader('./resources/global.properties');

function getKeyWords(keyWords) {
    this.keyWords = properties.get(keyWords);
    return this.keyWords;
  }
  module.exports = getKeyWords;