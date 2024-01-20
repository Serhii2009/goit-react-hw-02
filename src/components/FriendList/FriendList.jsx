import css from "./FriendList.module.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map((friend) => (
      <li key={friend.id}>
        <FriendListItem friend={friend} />
      </li>
    ))}
  </ul>
);
