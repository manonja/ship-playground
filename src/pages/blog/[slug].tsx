import React from "react";
import { useStringParam } from "src/utils/utils";
const BlogSinglePage = () => {
  const slug = useStringParam("slug");
  return <div> Blog post: {slug} </div>;
};

export default BlogSinglePage;
