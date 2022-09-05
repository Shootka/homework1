import user from './layout/user.json';
import Profile from './components/Profile/Profile';

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

    </div>
  );
};
