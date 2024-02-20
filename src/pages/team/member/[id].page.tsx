import React from "react";
import { useStringParam } from "src/utils/utils";
const MemberSinglePage = () => {
  const id = useStringParam("id");
  return <div> Team member post: {id} </div>;
};

export default MemberSinglePage;
