import {addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Remove Expense action object', () => {
    const action = removeExpense({id: '123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('Edit Expense action object', () => {
    const action = editExpense('123', {note: 'something new'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'something new'
        }
    }); 
});

test('Add Expense action object - Empty object',() => {
    const expenseDate = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    });
});

test('Add Expense action object - Provided values', () => {
    const action= addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    });
});