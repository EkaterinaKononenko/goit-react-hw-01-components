import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
//import Friends from './FriendList/FriendList';
//import TransactionHistory from './TransactionHistory/TransactionHistory'
import user from '../data/user.json';
import data from '../data/data.json';
//import friends from '../data/friends.json';
//import FriendList from './FriendList/FriendList';
//import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
    </div>
  );
}
