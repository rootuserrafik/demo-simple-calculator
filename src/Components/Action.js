import Button from "./Button"
import styled from "styled-components";
import Output from "./Output";

const Wrapper = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
  & :nth-last-child(1){
    grid-column: span 2;
  }
`;

function Action() {
  return (
    <Wrapper>
        <Output/>
        <Button actionName="AC" />
        <Button actionName="DEL" />
        <Button actionName="%" />
        <Button actionName="/" />
        <Button actionName="1" />
        <Button actionName="2" />
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