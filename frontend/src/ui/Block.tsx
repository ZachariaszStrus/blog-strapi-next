import { ArticleBlocksDynamicZone } from "@api";
import MediaBlock from "./MediaBlock";
import RichText from "./RichText";
import CodeBlock from "./CodeBlock";
import * as React from "react";

export const Block = ({
  block,
}: {
  block: ArticleBlocksDynamicZone | null;
}) => {
  switch (block?.__typename) {
    case "ComponentSharedMedia":
      return <MediaBlock {...block} />;
    case "ComponentSharedRichText":
      return <RichText {...block} />;
    case "ComponentSharedCodeBlock":
      // maxWidth necessary - otherwise SyntaxHighlighter is too wide on smaller screens
      return (
        <div style={{ maxWidth: "calc(100vw - 64px)" }}>
          <CodeBlock {...block} />
        </div>
      );
    default:
      return null;
  }
};
