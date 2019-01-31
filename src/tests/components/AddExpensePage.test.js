import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render AddExpensePage correctly', () => {
    const onSubmit = jest.fn();
    const history = {push:jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});


test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push : jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    console.log(wrapper);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});