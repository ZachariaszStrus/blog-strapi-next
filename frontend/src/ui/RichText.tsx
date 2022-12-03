import React, { FC } from "react";
import { ComponentSharedRichText } from "api";
import ReactMarkdown from "react-markdown";

interface RichTextProps extends Pick<ComponentSharedRichText, "body"> {}

const RichText: FC<RichTextProps> = ({ body }) => {
  return <ReactMarkdown className="prose prose-invert">{body}</ReactMarkdown>;
};

export default RichText;
