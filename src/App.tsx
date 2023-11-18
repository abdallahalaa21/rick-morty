import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage';
import Layout from '@components/layout';

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
        element: <>characters</>,
      },
    ],
  },
]);

const App = () => <RouterProvider router={routes}></RouterProvider>;

export default App;
