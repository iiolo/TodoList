import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md'
import { useTodoDispatch , useTodoNextId} from './TodoContext';

const CircleButton = styled.button`
  background: #9775fa;
  &:hover {
    background: #b197fc;
  }
  &:active {
    background: #845ef7;
  }

  z-index: 5; // 다른 내용을 가려야 하므로 설정
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;

  /* 가운데와 맨아래 */
  left: 50%;
  bottom: 0px;

  /* 더 정확한 버튼 위치 찾아가게 하기 */
  transform: translate(-50%, 50%);

  /* 아이콘  */
  font-size:60px;
  color: white;
  border-radius: 50%;
  
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

// 특정 폼 위치 지정
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

// 실제 인서트 폼 만들기
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  
  /* 둥근 모서리 삐져나오지 않게 하기 */
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  /* 상단 테두리 */
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;

  /* border-box 설정 안할 시 padding 했을 때 삐져나오게 됨 */
  box-sizing: border-box;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);

    // input에 대한 상태 관리
    const [value, setValue] = useState('');
  
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
  
    const onToggle = () => setOpen(!open);

    // input에 대한 상태 관리
    const onChange = e => setValue(e.target.value);


    const onSubmit = e => {
      e.preventDefault(); // 새로고침 방지
      dispatch({
        type: 'CREATE',
        todo: {
          id: nextId.current,
          text: value,
          done: false
        }
      });
      setValue('');
      setOpen(false);
      nextId.current += 1;
    };
  
    return (
      <>
        {open && (
          <InsertFormPositioner>
            <InsertForm onSubmit={onSubmit}>
              <Input
                autoFocus
                placeholder="할 일을 입력 후, Enter 를 누르세요"
                onChange={onChange}
                value={value}
              />
            </InsertForm>
          </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </>
    );
  }
  

export default React.memo(TodoCreate);