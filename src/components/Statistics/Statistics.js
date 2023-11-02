import { StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatisticsList>
        <StatisticsListItem>Good: {good}</StatisticsListItem>
        <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
        <StatisticsListItem>Bad: {bad}</StatisticsListItem>
        <StatisticsListItem>Total: {total}</StatisticsListItem>
        <StatisticsListItem>
          Positive feedback: {positivePercentage > 0 ? positivePercentage : 0}%
        </StatisticsListItem>
      </StatisticsList>
    </div>
  );
};
