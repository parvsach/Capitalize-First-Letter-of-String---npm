var expect = require("chai").expect;
var CapitalizeFirstLetter = require('../index');

describe('#CapitalizeFirstLetter()', function() {
  it('should return empty string for null param', function() {
    let output = CapitalizeFirstLetter(null);
    expect(output).to.be.equals('');
  });

  it('should return empty string for undefined param', function() {
    let output = CapitalizeFirstLetter(undefined);
    expect(output).to.be.equals('');
  });

  it('should return empty string for array/object param', function() {
    let array = new Array();
    let output = CapitalizeFirstLetter(array);
    expect(output).to.be.equals('');
    let object = new Object();
    output = CapitalizeFirstLetter(object);
    expect(output).to.be.equals('');
  });

  it('should return correct value for any string as param', function() {
    let output = CapitalizeFirstLetter('hello world');
    expect(output).to.be.equals('Hello world');
  });
});
