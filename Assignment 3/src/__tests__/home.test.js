import TestRenderer from 'react-test-renderer';
import Home from '../Pages/Home/Home';

describe('Test Home component', () => {
  it('should renders Home component', () => {
    const homeComponent = TestRenderer.create(<Home />).toJSON();
    expect(homeComponent).toMatchSnapshot();
  });
});
