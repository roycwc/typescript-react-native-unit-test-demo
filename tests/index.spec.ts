import {assert, expect} from 'chai'
import { take, delay, put, call } from "redux-saga/effects";
import {cloneableGenerator } from "@redux-saga/testing-utils";
import { mySaga, MyAction, getUserName } from '../src';
const {createSagaTestEngine} = require('redux-saga-test-engine');

describe('mySaga', ()=>{
  it('should have side effects in order', ()=>{
    const iterator = cloneableGenerator(mySaga)();
    
    assert.deepEqual(
      iterator.next().value,
      delay(100)
    );
    assert.deepEqual(
      iterator.next().value,
      put(MyAction.updateDetail())
    );
    assert.deepEqual(
      iterator.next().value,
      call(getUserName, 123)
    );

    const iterator2 = iterator.clone()

    assert.deepEqual(
      iterator.next('john').value,
      undefined
    );

    assert.deepEqual(
      iterator2.next('roy').value,
      put(MyAction.greet(`hello roy`))
    );
  });

  it('should have side effects in any order', ()=>{
    const collectEffects = createSagaTestEngine(['PUT', 'CALL']);
    const effects = collectEffects(mySaga,[
      [call(getUserName, 123), 'roy']
    ]);
    
    // order does not matter
    expect(effects).to.deep.include.members([
      put(MyAction.greet(`hello roy`)),
      call(getUserName, 123),
      put(MyAction.updateDetail())
    ]);
  })
});