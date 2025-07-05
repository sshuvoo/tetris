import styled from 'styled-components';

interface StyledBoardProps {
  width: number;
  height: number;
}

export const StyledBoard = styled.div<StyledBoardProps>`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, 1fr);
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: auto; /* Let width be determined by aspect-ratio and height */
  height: 100%;
  aspect-ratio: 1 / 2; /* Maintain 1:2 aspect ratio */
  background: #111;
`;
