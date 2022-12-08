import React, { FC } from "react";
import { ComponentSharedRichText } from "@api";
import Markdown from "markdown-to-jsx";

interface RichTextProps extends Pick<ComponentSharedRichText, "body"> {}

const RichText: FC<RichTextProps> = ({ body }) => {
  return <Markdown className="prose prose-invert max-w-none">{body}</Markdown>;
};

export default RichText;
