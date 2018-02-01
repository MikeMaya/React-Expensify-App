export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((prev, act) => prev+act, 0);
};

