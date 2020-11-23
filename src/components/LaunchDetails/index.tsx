import React from "react";
import { idText } from "typescript";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetail";

const LaunchDetailsContainer = () => {
  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: "13" },
  });
  if (loading) {
    return <div>Data is loading</div>;
  }
  if (error) {
    return <div>There is an error</div>;
  }
  if (!data) {
    return <div>Please Seleck a mission for it's details</div>;
  }

  return <LaunchDetails data={data} />;
};

export default LaunchDetailsContainer;