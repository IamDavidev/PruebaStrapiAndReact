import {gql} from '@apollo/client';
// import {gql} from 'graphql-tag'

export const GetPosts = gql`
  query {
    posts {
      id
      attributes {
        title
        content
        img
      }
    }
  }
`;
