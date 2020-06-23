import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

Enzyme.configure({ adapter: new Adapter() })

describe('App test suite', () => {
    test('should render the App component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    })
})