import user from './layout/user.json';
import data from './layout/data.json'
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

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
        height: '100vh',
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
    </div>
  );
};
