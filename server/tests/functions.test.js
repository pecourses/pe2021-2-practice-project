const { expect } = require('chai');
const { mapStringToValues } = require('./../utils/functions');

describe('Testing function.js', function () {
  describe('Testing mapStringToValues', function () {
    it('should return true:boolean when passed "true":string', function () {
      const result = mapStringToValues('true');
      expect(result).to.be.true;
    });
    it('should return false:boolean when passed "false":string', function () {
      const result = mapStringToValues('false');
      expect(result).to.be.false;
    });
    it('should return null when passed "null":string', function () {
      const result = mapStringToValues('null');
      expect(result).to.be.null;
    });
    it('should return undefined when passed "undefined":string', function () {
      const result = mapStringToValues('undefined');
      expect(result).to.be.undefined;
    });
    it('should return NaN when passed "NaN":string', function () {
      const result = mapStringToValues('NaN');
      expect(result).to.be.NaN;
    });
    it('should return the same valid string when passed any valid string', function () {
      const testString = 'test';
      const result = mapStringToValues(testString);
      expect(result).to.be.equal(testString);
    });
  });
});
