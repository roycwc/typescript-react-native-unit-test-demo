import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {app as App, AppProps } from '../src/App'
import { View, Text, Button } from 'react-native';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<App>', ()=>{
  it('should render the app', ()=>{
    const spy = sinon.spy();
    const props:AppProps = {
      count:10,
      increment:spy
    }
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find(View)).to.have.lengthOf(1);
    expect((wrapper.find(Text).props() as any).children).eq(10);
    
    (wrapper.find(Button).props() as any).onPress();
    expect(spy.called).to.be.true;
  })
})