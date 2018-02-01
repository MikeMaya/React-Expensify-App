import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow( <AddExpensePage addExpense={addExpense} history={history} /> );
});

test('Render Add Expense Page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});