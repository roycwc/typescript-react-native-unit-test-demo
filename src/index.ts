import {take, call, delay, put} from 'redux-saga/effects';
import {action} from 'typesafe-actions';

export const MyActionTypes = {
  GET_DETAIL:'GET_DETAIL',
  UPDATE_DETAIL:'UPDATE_DETAIL',
  GREET:'GREET',
};

export const MyAction = {
  updateDetail: ()=> action(MyActionTypes.UPDATE_DETAIL,{}),
  greet: (text:string)=> action(MyActionTypes.GREET,{text}),
}

export const getUserName = (userId:number) => new Promise(resolve=> {
  setTimeout(()=>{resolve('roy')},100) 
});

export const mySaga = function*(){
  yield delay(100);
  yield put(MyAction.updateDetail());
  const username = yield call(getUserName, 123)
  if (username === 'roy'){
    yield put(MyAction.greet(`hello ${username}`));
  }
};