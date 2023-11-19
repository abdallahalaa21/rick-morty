import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import Loader from '@components/loader';
import CharacterModal from '@components/characterModal';
import getCharacters from '../../graphql/getCharacters.gql';

const Characters = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState('');
  const { loading, error, data, fetchMore } = useQuery(getCharacters, {
    fetchPolicy: 'cache-and-network',
    variables: {
      page,
    },
  });

  const nextPage = useCallback(() => {
    if (data?.characters?.info?.next) {
      setPage((prev) => prev + 1);
    }
  }, [data]);

  const handleScroll = useCallback(() => {
    if (
      30 + window.innerHeight + document.documentElement.scrollTop <=
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    nextPage();
  }, [loading]);

  const selectCharacter = useCallback((id) => {
    setSelected(id);
  }, []);

  const handleClose = useCallback(() => {
    setSelected('');
  }, []);

  useEffect(() => {
    fetchMore({
      variables: {
        page,
      },
    });
  }, [page]);

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  if (loading && !data?.characters?.results?.length)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error) return <p>Error :</p>;

  return (
    <Container style={{ fontSize: '100px', marginTop: '140px' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      >
        {data?.characters?.results.map((character: any) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={character.id}
            onClick={() => selectCharacter(character.id)}
          >
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={character.image}
                  alt={character.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {character.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {loading && data?.characters?.results?.length ? <Loader multi /> : ''}
      <CharacterModal
        open={!!selected}
        handleClose={handleClose}
        id={selected}
      />
    </Container>
  );
};

export default Characters;
