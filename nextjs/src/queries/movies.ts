import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query Movies {
    movies {
      platform
      title
      id
    }
  }
`;
