import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
import { render } from '@testing-library/react';
import counterReducer, { increase, decrease, increaseBy } from './modules/counter';
import Counter from '../src/components/Counter';
// import { UseSelector,useDispatch, useSelector } from './mock/react-redux';
// import { useSelector } from 'react-redux';

// 액션 생성 함수 ㅇ
// 리듀서
// 프리젠테이셔널(Presentational) 컴포넌트
// 컨테이너(Container) 컴포넌트

describe('액션 생성자가 액션을 정상적으로 생성한다.', () => {
  it('increase 액션 생성 함수는 액션을 의도한대로 생성해야 한다.', () => {
    expect(increase()).toEqual({
      type: "INCREASE",
    })
  })

  it('decrease 액션 생성 함수는 액션을 의도한대로 생성해야 한다.', () => {
    expect(decrease()).toEqual({
      type: "DECREASE",
    })
  })

  it('increaseBy 액션 생성 함수는 액션을 의도한대로 생성해야 한다.', () => {
    expect(increaseBy(5)).toEqual({
      type: "INCREASE_BY",
      payload: 5
    })
  })
})

describe('reducer는 input값에 따른 올바른 state를 리턴한다.', () => {
  it('increase should return 1', () => {
    const state = {
      count: 0
    };
    const action = {
      type: 'INCREASE',
      // payload?: '',
    }
    const results = counterReducer(state, action);
    const expected = { count: 1 };
    expect(results).toEqual(expected);
  })

  it('decrease should return -1', () => {
    const state = {
      count: 0
    };
    const action = {
      type: 'DECREASE',
      // payload?: '',
    }
    const results = counterReducer(state, action);
    const expected = { count: -1 };
    expect(results).toEqual(expected);
  })

  it('increaseBy should return 5', () => {
    const state = {
      count: 0
    };
    const action = {
      type: 'INCREASE_BY',
      payload: 5,
    }
    const results = counterReducer(state, action);
    const expected = { count: 5 };
    expect(results).toEqual(expected);
  })

  it('action에 빈 객체를 넣어주면 initialState가 반환되어야 한다', () => {
    const state = { count: 0 };
    const action = {};
    
    const results = counterReducer(state, action);
    const expected = { count: 0 };

    expect(results).toEqual(expected);
  })
})

// jest.mock('react-redux');

// describe('useSelector 테스트', () => {
//   it('test', () => {
//     const tasks = [
//       {type: 'INCREASE'},
//       {type: 'DECREASE'},
//       {type: 'INCREASE_BY'},
//     ];

//     useSelector.mockImplementation((selector) => selector({
//       tasks,
//     }));

//     // const {getBy}
//   })
// })