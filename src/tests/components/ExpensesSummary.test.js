import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses'

test('Render Expenses Summary - Single Expense', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expensesCount={1} 
            expensesTotal={9568}
        />);
    expect(wrapper).toMatchSnapshot();
});

test('Render Expenses Summary - Multiple Expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expensesCount={2} 
            expensesTotal={9568}
        />);
    expect(wrapper).toMatchSnapshot();
});