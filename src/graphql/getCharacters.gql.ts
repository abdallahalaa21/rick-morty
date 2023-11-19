import { gql } from '../__generated__/gql';

const getCharacters = gql(`
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
`);

export default getCharacters;
