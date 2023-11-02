import { FeedbackCounter } from './FeedbackCounter/FeedbackCounter';
import styled from 'styled-components';

const MainComponentStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  padding: 100px;
  background-color: aliceblue;
`;

export const App = () => {
  return (
    <MainComponentStyle>
      <FeedbackCounter />
    </MainComponentStyle>
  );
};
