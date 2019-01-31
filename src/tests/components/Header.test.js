import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('shoud render Header correctly',()=> {
  
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
   
   
    // expect(wrapper.find('h1').text()).toBe('Expensify');
   
    // const renderer = new ReactShallowRenderrer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // //console.log(renderer.getRenderOutput());
})