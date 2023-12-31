import { Outlet } from 'react-router-dom';
import NavBar from '@components/navBar';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
