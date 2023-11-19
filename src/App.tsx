import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage';
import Layout from '@components/layout';
import Characters from './pages/Characters';

const routes = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'characters',
        element: <Characters />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={routes}></RouterProvider>;

export default App;
