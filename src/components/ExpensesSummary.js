import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <p>
            Viewing {props.expensesCount} 
            {props.expensesCount === 1 ? ' expense ':' expenses '}
            totalling {numeral(props.expensesTotal / 100).format("$0,0.00")}
            
        </p>
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