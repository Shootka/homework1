import user from './layout/user.json';
import data from './layout/data.json'
import friends from './layout/friends.json'
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

const {
  username,
  tag,
  location,
  avatar,
  stats,
} = user;


export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile tag={tag}
               username={username}
               location={location}
               stats={stats}
               avatar={avatar}
      />
      <Statistics title={'statistics'} stats={data} />
      <Statistics  stats={data} />
      <FriendList friends={friends}/>
    </div>
  );
};
