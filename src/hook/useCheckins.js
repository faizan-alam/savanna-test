import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_CHECK_INS } from "../graphql/queries/checkins";

const useCheckins = () => {
  const [getData, { data, error, loading }] = useLazyQuery(GET_ALL_CHECK_INS);

  return [getData, { data: data?.check_in, error, loading }];
};

export default useCheckins;
