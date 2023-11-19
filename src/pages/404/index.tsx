import { Container, Grid, Typography } from '@mui/material';
import notFoundImage from '@images/404.gif';
import colors from '@colors';

const NotFound = () => {
  return (
    <Container style={{ fontSize: '100px', marginTop: '20%' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={6}>
          <Typography
            color={colors.primary}
            style={{
              fontWeight: 'bold',
              fontSize: '100px',
              lineHeight: '117px',
              textAlign: 'center',
            }}
          >
            OOPS
          </Typography>
          <Typography
            color={colors.primary}
            style={{
              fontSize: '20px',
              lineHeight: '23px',
              textAlign: 'center',
            }}
          >
            We couldn`t find the page you were looking for
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <img src={notFoundImage} alt='404' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
