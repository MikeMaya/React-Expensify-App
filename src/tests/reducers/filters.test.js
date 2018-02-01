import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Set SortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('Set SortBy to date',() => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
}); 

test('Set Text Filter', () => {
    const text= 'Something to test';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER',text});
    expect(state.text).toBe(text);
});

test('Set StartDate Filter', () => {
    const startDate = moment(0).add(15,'days');
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
    expect(state.startDate).toEqual(startDate);
});

test('Set EndDate Filter', () => {
    const endDate = moment(0).add(25,'days');
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
    expect(state.endDate).toEqual(endDate);
});