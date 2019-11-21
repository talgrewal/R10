import ApolloClient from 'apollo-boost';
var {graphql, buildSchema} = require('graphql');
import {gql} from 'apollo-boost';

export default new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

export const ALL_DATA_QUERY = gql`
  query {
    allSessions {
      id
      description
      location
      speaker {
        id
        bio
        image
        name
        url
      }
      startTime
      title
    }
  }
`;
