const assert = require('assert');
const math = require('../../main/shared/math.js');

describe('The math module', () => {
  describe('Add', () => {
    it('should return 3 when 1 and 2 are passed.', () => {
      assert.equal(math.Add(1, 2), 3);
    });
  });

  describe('Subtract', () => {
    it('should return -1 when 1 and 2 are passed.', () => {
      assert.equal(math.Subtract(1, 2), -1);
    });

    it('should return 1 when 2 and 1 are passed.', () => {
      assert.equal(math.Subtract(2, 1), 1);
    });
  });

  describe('Multiply', () => {
    it('should return 2 when 1 and 2 are passed.', () => {
      assert.equal(math.Multiply(1, 2), 2);
    });
  });

  describe('Divide', () => {
    it('should return .5 when 1 and 2 are passed.', () => {
      assert.equal(math.Divide(1, 2), .5);
    });

    it('should throw a divide by zero error when 0 is passed as the divisor.', () => {
      assert.throws(() => {
        math.Divide(1, 0);
      }, /^Error: Divide by Zero$/);
    });
  });
});
