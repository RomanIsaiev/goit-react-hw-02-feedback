import { FeedbackButtonFlex, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  optionsOnGood,
  optionsOnNeutral,
  optionsOnBad,
}) => {
  return (
    <FeedbackButtonFlex>
      <FeedbackButton onClick={optionsOnGood} $variant="good">
        Good
      </FeedbackButton>
      <FeedbackButton onClick={optionsOnNeutral} $variant="neutral">
        Neutral
      </FeedbackButton>
      <FeedbackButton onClick={optionsOnBad} $variant="bad">
        Bad
      </FeedbackButton>
    </FeedbackButtonFlex>
  );
};
