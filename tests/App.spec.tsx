import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {app as App, AppProps, CustomView } from '../src/App'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { CustomComponent } from '../src/CustomComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('<App>', ()=>{
  it('should render the app', ()=>{
    const spy = sinon.spy();
    const props:AppProps = {
      count:10,
      increment:spy
    }
    const wrapper = shallow(<App {...props}/>);
    expect((wrapper.find(Text).props() as any).children).eq(10);
    expect(wrapper.find(CustomView)).to.have.lengthOf(1);
    expect(wrapper.find(CustomComponent)).to.have.lengthOf(1);
    expect((wrapper.find(CustomComponent).props() as any).text).eq('11');
    (wrapper.find(TouchableOpacity).props() as any).onPress();
    expect(spy.called).to.be.true;
  })
})