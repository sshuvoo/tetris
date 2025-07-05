import styled from 'styled-components';

interface StyledDisplayProps {
  gameOver?: boolean;
}

export const StyledDisplay = styled.div<StyledDisplayProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center; /* Center text horizontally */
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? '#FF0000' : '#E0E0E0')}; /* Brighter color for text */
  background: #1A1A1A; /* Slightly lighter dark background */
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1.2rem; /* Increased font size */
  font-weight: bold; /* Bold font weight */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Subtle text shadow */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3); /* Modern box shadow */
`;
