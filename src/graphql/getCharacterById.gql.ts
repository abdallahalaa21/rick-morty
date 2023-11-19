import { gql } from '../__generated__/gql';

const getCharacterById = gql(`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
      }
    }
  }`);
export default getCharacterById;
