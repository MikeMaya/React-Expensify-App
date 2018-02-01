import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <h1>
            Viewing {props.expensesCount} 
            {props.expensesCount === 1 ? ' expense ':' expenses '}
            totalling {numeral(props.expensesTotal / 100).format("$0,0.00")}
            
        </h1>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses= selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);