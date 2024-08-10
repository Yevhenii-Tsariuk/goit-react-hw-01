import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.section}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.textName}>{name}</p>
        <p className={css.textTagLocation}>@{tag}</p>
        <p className={css.textTagLocation}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.spanText}>Followers</span>
          <span className={css.spanValue}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanText}>Views</span>
          <span className={css.spanValue}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.spanText}>Likes</span>
          <span className={css.spanValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
