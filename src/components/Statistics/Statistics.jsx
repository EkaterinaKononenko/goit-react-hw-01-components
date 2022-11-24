import PropTypes from 'prop-types';
import {
  StatSection,
  StatList,
  StatItem,
  StatLabel,
  StatPercents,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <StatList className="stat-list">
        {stats.map(stat => (
          <StatItem className="item" key={stat.id}>
            <StatLabel className="label">{stat.label}</StatLabel>
            <StatPercents className="percentage">
              {stat.percentage}%
            </StatPercents>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
