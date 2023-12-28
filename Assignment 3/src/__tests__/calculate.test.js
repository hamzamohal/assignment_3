import calculate from '../Utils/calculate';

describe('calculate utility function', () => {
  let params;

  beforeEach(() => {
    params = {
      total: null,
      next: null,
      operation: null,
    };
  });

  const testCalculation = (num1, operator, num2, result) => {
    const number1 = num1.toString();
    const number2 = num2.toString();

    number1.split('').forEach((num) => {
      params = calculate(params, num);
    });
    expect(params.next).toBe(number1);

    params = calculate(params, operator);
    expect(params.operation).toBe(operator);
    expect(params.next).toBe(null);
    expect(params.total).toBe(number1);

    number2.split('').forEach((num) => {
      params = calculate(params, num);
    });
    expect(params.next).toBe(number2);

    params = calculate(params, '=');
    expect(params.total).toEqual(result);
  };

  it('should do add operation', () => {
    testCalculation(20, '+', 25, '45');
  });

  it('should do substract operation', () => {
    testCalculation(12, '-', 15, '-3');
  });

  it('should do multiply operation', () => {
    testCalculation(10, 'x', 15, '150');
  });

  it('should do divide operation', () => {
    testCalculation(128, '/', 2, '64');
  });

  it('should return the remainder of a division', () => {
    testCalculation(129, '%', 2, '1');
  });

  it('shouldn\'t divide a number by 0', () => {
    testCalculation(15, '/', 0, "Can't divide by 0.");
  });

  it('shouldn\'t return a remainder of a division operation by 0', () => {
    testCalculation(15, '%', 0, "Can't find modulo as can't divide by 0.");
  });

  it('should do decimal numbers calculation', () => {
    testCalculation(2.5, '+', 1.8, '4.3');
  });

  it('should reset params object when passing "AC" as second argument', () => {
    params = calculate(params, '1');
    params = calculate(params, '5');
    params = calculate(params, '%');
    params = calculate(params, '0');
    params = calculate(params, 'AC');
    expect(params).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should switch the positiveness of a number', () => {
    params = calculate(params, '1');
    params = calculate(params, '5');
    params = calculate(params, '+/-');
    expect(params.next).toEqual('-15');

    params = calculate(params, '+/-');
    expect(params.next).toEqual('15');
  });
});
