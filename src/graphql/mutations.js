/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDesk = /* GraphQL */ `
  mutation CreateDesk(
    $input: CreateDeskInput!
    $condition: ModelDeskConditionInput
  ) {
    createDesk(input: $input, condition: $condition) {
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
export const updateDesk = /* GraphQL */ `
  mutation UpdateDesk(
    $input: UpdateDeskInput!
    $condition: ModelDeskConditionInput
  ) {
    updateDesk(input: $input, condition: $condition) {
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
export const deleteDesk = /* GraphQL */ `
  mutation DeleteDesk(
    $input: DeleteDeskInput!
    $condition: ModelDeskConditionInput
  ) {
    deleteDesk(input: $input, condition: $condition) {
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
