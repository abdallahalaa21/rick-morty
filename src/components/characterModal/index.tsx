import { useQuery } from '@apollo/client';
import { Backdrop, Box, Fade, Grid, Modal, Typography } from '@mui/material';
import Loader from '@components/loader';
import styles from './styles.module.css';
import bg from '@images/background.png';
import colors from '@colors';
import { useMemo } from 'react';
import getCharacterById from '../../graphql/getCharacterById.gql';

type Props = {
  open: boolean;
  handleClose: () => void;
  id: string;
};

const CharacterModal = ({ open, handleClose, id }: Props) => {
  const { loading, error, data } = useQuery(getCharacterById, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id,
    },
    skip: !id,
  });

  const values = useMemo(
    () => [
      {
        label: 'status',
        value: data?.character?.status,
      },
      {
        label: 'species',
        value: data?.character?.species,
      },
      {
        label: 'gender',
        value: data?.character?.gender,
      },
      {
        label: 'location',
        value: data?.character?.location?.name,
      },
      {
        label: 'origin',
        value: data?.character?.origin?.name,
      },
    ],
    [data]
  );

  if (error) return <p>Error :</p>;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        ) : (
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <img src={data?.character?.image} width={'100%'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  id='modal-modal-title'
                  variant='h3'
                  component='h2'
                  style={{
                    margin: 'auto',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    padding: 2,
                    paddingTop: 20,
                  }}
                >
                  {data?.character?.name}
                </Typography>
                {values?.map((item) => (
                  <Grid container spacing={1} mt={1} key={item.label}>
                    <Grid item xs={4}>
                      <Typography variant='h5'>{item.label}:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant='h6'>{item.value}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        )}
      </Fade>
    </Modal>
  );
};

export default CharacterModal;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  backgroundImage: `url(${bg})`,
  border: '2px solid #000',
  boxShadow: 24,
  color: colors.primary,
};
