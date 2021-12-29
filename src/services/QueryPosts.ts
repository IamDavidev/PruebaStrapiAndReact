import { gql } from '@apollo/client';
// import {gql} from 'graphql-tag'

export const GetPosts = gql`
  query {
    posts {
      data {
        id
        attributes {
          title
          content
          date
          categories{
            data{
              id
              attributes{
                name
              }
            }
          }
          image{
            data{
              id
              attributes{
                name
                formats
              }
            }
          }
        }
      }
    }
  }
`;
