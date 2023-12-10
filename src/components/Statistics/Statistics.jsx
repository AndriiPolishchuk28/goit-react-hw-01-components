import { StatisticsWrapper, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title.length ? <h2 className="title">{title}</h2> : null}
      <StatList>
        {stats.map(item => {
          return (
            <li className="item" key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};
