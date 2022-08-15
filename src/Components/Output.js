import styled from "styled-components"

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

function Output() {
  return (
    <DisplayOperand>
        <Previous></Previous>
        <Current></Current>
    </DisplayOperand>
  )
}

export default Output