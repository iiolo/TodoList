import React, { useReducer, createContext, useContext, useRef/*id 관리 위한 것, 바로 변화시킬 수 있는 값으로 관리 */ } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

function todoReducer(state, action) {
  switch (action.type) {
    //   새로운 항목 생성
    case 'CREATE':
      return state.concat(action.todo);

    //   껐다켰다
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    //   지우기
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);

    default:
        // 처리할 수 없는 action  왔을 경우
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// createContext
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// custom hook
// 이렇게 선언시 쓰고 싶은 곳에서 const state = useTodoState(); 작성하면 쓸 수 있음
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

// 새로운 항목 만들어질 때 마다 그다음 아이디 관리해주는 Hook
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}