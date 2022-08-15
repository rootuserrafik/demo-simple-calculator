import styled from "styled-components";

const CalBtn = styled.button`
  cursor: pointer;
  background: rgba(255, 255, 255, .75);
  font-size: 2rem;
  border: 1px solid #fff;
  &:hover, &:focus {
        background: rgba(255, 255, 255, 0.9);
    }
`;

function Button({actionName}) {
  return (
    <CalBtn>
        {actionName}
    </CalBtn>
  )
}

export default Button