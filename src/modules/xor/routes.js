import Singleplayer from './components/singleplayer';
import Multiplayer from './components/multiplayer';
import Spectator from './components/spectator';

const routes = [
  {
    path: '/',
    text: 'Singleplayer',
    component: Singleplayer,
  },
  {
    path: '/multiplayer',
    text: 'Multiplayer',
    component: Multiplayer,
  },
  {
    path: '/spectator',
    text: 'Spectator',
    component: Spectator,
  },
];

export default routes;
