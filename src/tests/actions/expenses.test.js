import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

//test('Add Expense action object - Empty object',() => {
//    const expenseDate = {
//        description: 'Rent',
//        amount: 109500,
//        createdAt: 1000,
//        note: 'This was last month rent'
//    };
//    const action = addExpense(expenseDate);
//    expect(action).toEqual({
//        type: 'ADD_EXPENSE',
//        expense: {
//            ...expenseDate,
//            id: expect.any(String)
//        }
//    });
//});

test('Add Expense action object - Provided values', () => {
    const action= addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }); 
});

test('Add expense with defaults to database and sotre', () => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }); 
});