import styled from 'styled-components';

export const FeedbackButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FeedbackButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 100px;
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  background-color: ${props => {
    switch (props.$variant) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'orange';
      case 'bad':
        return 'red';
      default:
        return 'grey';
    }
  }};
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;
