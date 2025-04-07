import Router from '@/routers/index';
import AuthRouter from '@/routers/utils/authRouter';
import store from '@/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
