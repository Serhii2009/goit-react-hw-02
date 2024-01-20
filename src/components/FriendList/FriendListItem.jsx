import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => (
  <div className={css.item}>
    <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
    <p className={css.name}>{name}</p>
    <p
      className={clsx({
        [css.isOnline]: isOnline,
        [css.isOffline]: !isOnline,
      })}
    >
      {isOnline ? "Online" : "Offline"}
    </p>
  </div>
);
