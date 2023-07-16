let Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should return the correct sum of numbers', async () => {
      let sum = await calculator.add(1, 2, 3);
      expect(sum).toBe(6);
    });

    it('should return 0 when no numbers are passed', async () => {
      let sum = await calculator.add();
      expect(sum).toBe(0);
    });

    it('should return the number itself when only one number is passed', async () => {
      let sum = await calculator.add(5);
      expect(sum).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should return the correct multiplication result of numbers', async () => {
      let multiply = await calculator.multiply(2, 3, 4);
      expect(multiply).toBe(24);
    });

    it('should return 1 when no numbers are passed', async () => {
      let multiply = await calculator.multiply();
      expect(multiply).toBe(1);
    });

    it('should return 0 when 0 is passed', async () => {
      let multiply = await calculator.multiply(0, 2, 3);
      expect(multiply).toBe(0);
    });
  });

  describe('subtraction', () => {
    it('should return the correct subtraction result', async () => {
      let difference = await calculator.subtraction(5, 2);
      expect(difference).toBe(3);
    });
  });

  describe('divide', () => {
    it('should return the correct division result', async () => {
      let quotient = await calculator.divide(10, 2);
      expect(quotient).toBe(5);
    });
  });

  describe('exponentiation', () => {
    it('should return the correct exponentiation result', async () => {
      let result = await calculator.exponentiation(3);
      expect(result).toBe(9);
    });
  });
});