import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import colors from '@colors';
import logo from '@images/logo.png';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const navItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Characters',
    path: '/characters',
  },
];

const NavBar = () => {
  return (
    <AppBar
      component='nav'
      color='transparent'
      style={{
        boxShadow: 'none',
      }}
    >
      <Toolbar className={styles.container}>
        <Link to='/'>
          <img src={logo} alt='logo' className={styles.logo} />
        </Link>
        <Stack direction='row' spacing={2}>
          {navItems.map((item) => (
            <Link to={item.path} key={item.path} className={styles.link}>
              <Typography
                variant='h5'
                style={{
                  color: colors.primary,
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
