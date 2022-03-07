import { gql } from "@apollo/client";

export const INSERT_ONE_CHECK_IN = gql`
  mutation InsertOneCheckIn(
    $comment: String
    $imageURL: String
    $name: String
    $createdAt: timestamptz
  ) {
    insert_check_in_one(
      object: {
        comment: $comment
        image_url: $imageURL
        name: $name
        created_at: $createdAt
      }
    ) {
      id
    }
  }
`;
