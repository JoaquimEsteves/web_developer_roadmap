import React from 'react';


import { shallow, mount } from 'enzyme';
import CounterButton from '../counterButton';
import '../../../setupTests';

it('try out the snapshot yo', () => {
    const mockColor = 'red';
    expect(mount(<CounterButton color={mockColor}/>).debug()).toMatchSnapshot();
})



it('Test Implements Counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
})