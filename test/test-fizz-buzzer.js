const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should check if number is divisible by 3, 5, or both', function() {
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 1, expected: 1}
    ];

    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['1', 'a', false];

    badInputs.forEach(input => {
      expect(() => {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
