import React from 'react';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('No expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('Add up a single expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});

test('Add up Multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});