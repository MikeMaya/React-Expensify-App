import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div className = "page-header">
        <div className = "content-container"> 
            <h1 className="page-header__title">
                Viewing <span>{props.expensesCount} </span>
                {props.expensesCount === 1 ? ' expense ':' expenses '}
                totalling <span>{numeral(props.expensesTotal / 100).format("$0,0.00")}</span>
            </h1>
            <div className="page_header__actions">
                <Link className="button" to="/create">Add expense</Link>
            </div>
        </div>
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