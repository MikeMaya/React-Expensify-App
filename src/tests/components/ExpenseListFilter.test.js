import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters= {filters}
            setTextFilter= {setTextFilter}
            sortByAmount= {sortByAmount}
            sortByDate= {sortByDate}
            setStartDate= {setStartDate}
            setEndDate= {setEndDate}
        />
    );
});
test('Render Expense List Filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Render Expense List Filters with Alt Data', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Handle Text Change', () => {
    const value= 'Some text value';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Handle Sort By Date', () => {
    const value= 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select') .simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Handle Sort By Amount', () => {
    const value= 'amount';
    wrapper.find('select') .simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Handle Dates Change', () => {
    const startDate= moment(0);
    const endDate= moment(0).add(3,'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
 
test('Handle on Focus Change', () => {
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});