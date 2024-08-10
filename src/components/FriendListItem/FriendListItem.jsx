import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const isOnlineClsx = clsx(isOnline ? css.statusOnline : css.statusOffline);

  return (
    <div className={css.card}>
      <img src={avatar} alt={avatar} width="84" />
      <p className={css.text}>{name}</p>
      <p className={isOnlineClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
