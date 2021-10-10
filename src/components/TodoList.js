import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;// 자신이 차지할 수있는 모든 영역 차지
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;// 항목 많아지면 스크롤 바 보여줌
  //background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text ="프로젝트 생성하기" done={true}/>
            <TodoItem text ="프로젝트 생성하기" done={true}/>
            <TodoItem text ="프로젝트 생성하기" done={false}/>
            <TodoItem text ="프로젝트 생성하기" done={false}/>
        </TodoListBlock>
    );
}

export default TodoList;