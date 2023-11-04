import { FeedbackButtonFlex, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <FeedbackButtonFlex>
      {options.map(option => (
        <FeedbackButton
          key={option}
          onClick={() => onClickFeedback(option)}
          $variant={option}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackButtonFlex>
  );
};
