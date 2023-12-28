import TestRenderer from 'react-test-renderer';
import Quotes from '../Pages/Quotes/Quotes';

describe('Test Quotes component', () => {
  beforeEach(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0.86);
  });

  it('should render Quotes component', () => {
    const quoteComponent = TestRenderer.create(<Quotes />).toJSON();
    expect(quoteComponent).toMatchSnapshot();
  });
});
