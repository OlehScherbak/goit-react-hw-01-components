import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from 'utils/colorRandomizer';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(stats => (
          <li
            className={css.item}
            key={stats.id}
            id={stats.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}</span>
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
