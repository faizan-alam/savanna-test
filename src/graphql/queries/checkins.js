import { gql } from "@apollo/client";

export const GET_ALL_CHECK_INS = gql`
  query AllCheckIns {
    check_in(distinct_on: []) {
      comment
      created_at
      id
      image_url
      name
    }
  }
`;
