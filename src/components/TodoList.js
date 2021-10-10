import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;// 자신이 차지할 수있는 모든 영역 차지
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;// 항목 많아지면 스크롤 바 보여줌
  //background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
    // TodoContext에서 context api로 만든 custom hook 사용
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {/* 각 todo 데이터에 대하여 todo item으로 변환 */}
            {todos.map(todo => (
            <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;