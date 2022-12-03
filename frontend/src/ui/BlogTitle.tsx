import { Header } from "@api";
import React from "react";
import { Text } from "./Text";

interface BlogTitleProps {
  header: Header;
}

const BlogTitle = ({ header }: BlogTitleProps) => {
  return (
    <div className="space-y-2">
      <Text h1>{header.title}</Text>
      <Text h3 faded>
        {header.subtitle}
      </Text>
    </div>
  );
};

export default BlogTitle;
