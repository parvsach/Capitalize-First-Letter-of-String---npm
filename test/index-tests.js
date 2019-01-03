var expect = require("chai").expect;
var CapitalizeFirstLetterOfString = require('../index');

describe('#CapitalizeFirstLetterOfString()', function() {
  it('should return empty string for null param', function() {
    let output = CapitalizeFirstLetterOfString(null);
    expect(output).to.be.equals('');
  });

  it('should return empty string for undefined param', function() {
    let output = CapitalizeFirstLetterOfString(undefined);
    expect(output).to.be.equals('');
  });

  it('should return empty string for array/object param', function() {
    let array = new Array();
    let output = CapitalizeFirstLetterOfString(array);
    expect(output).to.be.equals('');
    let object = new Object();
    output = CapitalizeFirstLetterOfString(object);
    expect(output).to.be.equals('');
  });

  it('should return correct value for any string as param', function() {
    let output = CapitalizeFirstLetterOfString('hello world');
    expect(output).to.be.equals('Hello world');
  });
});
