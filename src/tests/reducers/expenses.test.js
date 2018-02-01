import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Remove expense by id', () => {
    const action= {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not Remove expense if id not found', () => {
    const action= {
        type: 'REMOVE_EXPENSE',
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Add an expense', () => {
    const expense = {
        id: 4,
        description: 'Tape',
        note: '',
        amount: 125,
        createdAt: 0
    };
    const action= {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Edit an Expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            note: 'new value'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([{
        id : '1', 
        description: 'Gum',
        note: 'new value',
        amount: 195,
        createdAt: 0
    }, expenses[1], expenses[2]]);
});

test('Not Edit an Expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'new value'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
}); 