import uuid from 'uuid';
import database from '../firebase/firebase.js';

//ADD_EXPENSE
export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense
});
//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export //EDIT_EXPENSE
const editExpense = (id, updates)=> ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description= '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = {description, note, amount, createdAt};

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });
    }
};