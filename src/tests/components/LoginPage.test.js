import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin = {startLogin}/> );
});

test('Render Login Page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Call StartLogut on Click button', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});