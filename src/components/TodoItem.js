import React from 'react';
import styled,{css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';



// 왼쪽에 있는 체크 아이콘
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  /* done 값이 있으면 테두리, 색상 변경 */
  ${props =>
    props.done &&
    css`
      border: 1px solid #9775fa;
      color: #9775fa;
    `}
`;

// 텍스트
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

// 쓰레기통 아이콘
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;//아이콘 크기
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;


// 위 세개 종합
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;