import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stats => (
          <li className="item" key={stats.id} id={stats.id}>
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.prototypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
