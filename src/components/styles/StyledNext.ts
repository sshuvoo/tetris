import styled from 'styled-components';

interface StyledNextProps {
  width: number;
  height: number;
}

export const StyledNext = styled.div<StyledNextProps>`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(10vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 10vw;
  background: #111;
`;
