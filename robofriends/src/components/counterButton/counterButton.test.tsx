import React from 'react';


import { shallow, mount, render } from 'enzyme';
import CounterButton from './counterButton';
import '../../setupTests';

it('try out the snapshot yo', () => {
    const mockColor = 'red';
    expect(mount(<CounterButton color={mockColor}/>).debug()).toMatchSnapshot();
})