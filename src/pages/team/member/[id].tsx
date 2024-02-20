import React from "react";
import { useStringParam } from "../../../utils/utils";
const MemberSinglePage = () => {
  const id = useStringParam("id");
  return <div> Team member post: {id} </div>;
};

export default MemberSinglePage;
