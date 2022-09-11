import Button from "./Button"
import styled from "styled-components";
import { useReducer } from "react";

const Wrapper = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
  & :nth-last-child(1){
    grid-column: span 2;
  }
`;

const DisplayOperand = styled.div`
    background: #122033;
    color: #fff;
    text-align: right;
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    padding: 0 0.8rem;
    word-wrap: break-word;
    word-break: break-all;
`;
const Previous = styled.h3`
    line-height: 0;
`;
const Current = styled.h1`
    line-height: 0;
`;

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, { type, paylod }) {
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        ...state, 
        currentOperand: `${state.currentOperand || "" }${paylod.actionName}`,
      }
    default:
  }
}

function Action() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});
  // dispatch({ type: ACTION.ADD_DIGIT, paylod: { actionName: 1 }})
  return (
    <Wrapper>
        <DisplayOperand>
            <Previous>{previousOperand} {operation}</Previous>
            <Current>{currentOperand}</Current>
        </DisplayOperand>
        <Button actionName="AC" dispatch={dispatch} />
        <Button actionName="DEL" dispatch={dispatch} />
        <Button actionName="%" dispatch={dispatch} />
        <Button actionName="/" dispatch={dispatch} />
        <Button actionName="1" dispatch={dispatch} />
        <Button actionName="2" dispatch={dispatch} />
        <Button actionName="3" />
        <Button actionName="X" />
        <Button actionName="4" />
        <Button actionName="5" />
        <Button actionName="6" />
        <Button actionName="-" />
        <Button actionName="7" />
        <Button actionName="8" />
        <Button actionName="9" />
        <Button actionName="+" />
        <Button actionName="0" />
        <Button actionName="." />
        <Button actionName="=" />
    </Wrapper>
  )
}

export default Action