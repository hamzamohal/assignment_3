import operate from '../Utils/operate';

describe('operate utility function', () => {
  it('should do add operation', () => {
    const addition = operate(50, 50, '+');
    expect(addition).toEqual('100');
  });

  it('should do substract operation', () => {
    const substraction = operate(50, 50, '-');
    expect(substraction).toEqual('0');
  });

  it('should do multiply operation', () => {
    const multiplication = operate(10, 10, 'x');
    expect(multiplication).toEqual('100');
  });

  it('should do divide operation', () => {
    const division = operate(120, 12, '/');
    expect(division).toEqual('10');
  });

  it('should return the remainder of a division', () => {
    const remainder = operate(9, 2, '%');
    expect(remainder).toEqual('1');
  });

  it('shouldn\'t divide a number by 0', () => {
    const divisionByZero = operate(15, 0, '/');
    const remainderOfNumDivisionByZero = operate(15, 0, '%');

    expect(divisionByZero).toBe("Can't divide by 0.");
    expect(remainderOfNumDivisionByZero).toBe("Can't find modulo as can't divide by 0.");
  });
});
