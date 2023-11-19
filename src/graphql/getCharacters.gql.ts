import gql from 'graphql-tag';

const getCharacters = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        next
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export default getCharacters;
