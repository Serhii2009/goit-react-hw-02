import "./App.css";
import { FaAnglesDown } from "react-icons/fa6";

import userData from "./Profile/userData.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";

import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FaAnglesDown className="arrow-icon" />
      <FriendList friends={friends} />
      <FaAnglesDown className="arrow-icon" />
      <TransactionHistory items={transactions} />
    </div>
  );
};
