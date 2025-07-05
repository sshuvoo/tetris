import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  width: 80vw; /* Set width to 80% of viewport width */
  height: 90vh; /* Set height to 90% of viewport height */
  max-width: 900px;
  max-height: 95vh; /* Limit overall height to 95% of viewport height */
  box-sizing: border-box;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px; /* Add a gap between elements */
    flex-shrink: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    max-height: none; /* Remove max-height on smaller screens if stacking */
  }
`;
