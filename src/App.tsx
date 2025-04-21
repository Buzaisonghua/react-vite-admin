import Router from '@/routers/index';
import AuthRouter from '@/routers/utils/authRouter';
import store from '@/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </HashRouter>
    </Provider>
  );
}

export default App;
