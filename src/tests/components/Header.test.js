import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper; 

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout = {startLogout}/> );
});

test('Render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Call StartLogut on Click button', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});