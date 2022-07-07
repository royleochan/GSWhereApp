/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDesk = /* GraphQL */ `
  query GetDesk($id: ID!) {
    getDesk(id: $id) {
      id
      region
      country
      city
      building
      floor
      deskId
      createdAt
      updatedAt
    }
  }
`;
export const listDesks = /* GraphQL */ `
  query ListDesks(
    $filter: ModelDeskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDesks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        region
        country
        city
        building
        floor
        deskId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
