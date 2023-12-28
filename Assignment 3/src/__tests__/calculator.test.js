import TestRenderer from 'react-test-renderer';
import Calculator from '../Pages/Calculator/Calculator';

describe('Test Calculator component', () => {
  it('should renders Calculator component', () => {
    const calculatorComponent = TestRenderer.create(<Calculator />).toJSON();
    expect(calculatorComponent).toMatchSnapshot();
  });
});
