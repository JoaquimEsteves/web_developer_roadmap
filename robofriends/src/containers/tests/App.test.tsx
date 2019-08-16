import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { robotProps } from '../../components/cardList/robots';
import { AppProps } from '../../state_management/types';
import { App } from '../App';
import '../../setupTests';

let wrapper: ShallowWrapper<any, any>;

beforeEach(() => {
    const exampleProps: AppProps = {
        error: '',
        onRequestRobots: jest.fn(),
        isPending: false,
        onSearchChange: jest.fn(),
        robots: [],
        searchField: 'yo',
    }
    wrapper = shallow(<App {...exampleProps} />);
})


it('App with no Store', () => {
    expect(wrapper.debug()).toMatchSnapshot();
})

it('App filter my stuff yo', () => {
    const yo_list: robotProps[] = [
        { 'email': 'yo', id: 0, name: 'yo', 'username': 'yo' },
        { 'email': 'yay', id: 1, name: 'yay', 'username': 'yay' },
    ];
    const exampleProps: AppProps = {
        error: '',
        onRequestRobots: jest.fn(),
        isPending: false,
        onSearchChange: jest.fn(),
        robots: yo_list,
        searchField: 'yo',
    }
    const instance = shallow(<App {...exampleProps} />).instance() as App;
    expect(instance.filterRobots(yo_list)).toEqual([{ 'email': 'yo', id: 0, name: 'yo', 'username': 'yo' }]);
})

it('App is pending branch', () => {
    const exampleProps: AppProps = {
        error: 'yo',
        onRequestRobots: jest.fn(),
        isPending: true,
        onSearchChange: jest.fn(),
        robots: [],
        searchField: 'yo',
    }
    const wrapper = shallow(<App {...exampleProps} />);
    expect(wrapper.find('h1').text().includes('Yo, loading')).toBe(true);
})