import { type } from "os";

// 액션 타입
// enum actionTypes {
//     INCREASE = "INCREASE",
//     DECREASE = "DECREASE",
//     INCREASE_BY = "INCREASE_BY"
// }

export const INCREASE = 'INCREASE' as const;
export const DECREASE = 'DECREASE' as const;
export const INCREASE_BY = 'INCREASE_BY' as const;

// 액션 생성자
export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff,
})

// 액션 타입에서 뒤에 as const 를 쓰지 않으면 ReturnType가 제대로 작동 안함
type CounterAction = 
    ReturnType<typeof increase> |
    ReturnType<typeof decrease> |
    ReturnType<typeof increaseBy>;

// 초기 상태 값 설정 
type InitialType = {
    count: number
}

const initialState: InitialType  = {
    count: 0
}

// const counterReducer = (state: InitialType = initialState, action: CounterAction) => {
//     switch (action.type) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// }

function counterReducer(state: InitialType = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return {
                count: state.count + 1,
            }
        case DECREASE:
            return {
                count: state.count - 1,
            }
        case INCREASE_BY: 
            return {
                count: state.count + action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default counterReducer;