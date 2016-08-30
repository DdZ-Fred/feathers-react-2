import io from 'socket.io-client';
import feathers from 'feathers/client';
import fSocketio from 'feathers-socketio/client';
import fHooks from 'feathers-hooks';
import fAuthentication from 'feathers-authentication/client';
// TODO: INTEGRATE with uWebSockets


export default function () {
  const SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'http://localhost';
  const PORT = process.env.PORT || 3030;

  const socket = io(`${SERVER_ADDRESS}:${PORT}`);
  const app = feathers()
    .configure(fSocketio(socket))
    .configure(fHooks())
    .configure(fAuthentication({
      storage: window.localStorage,
    }));

  return app;
}
