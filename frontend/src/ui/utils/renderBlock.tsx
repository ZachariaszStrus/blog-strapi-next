import { ArticleBlocksDynamicZone } from "@api";
import MediaBlock from "../MediaBlock";
import RichText from "../RichText";
import CodeBlock from "../CodeBlock";
import * as React from "react";

const renderBlock = (block: ArticleBlocksDynamicZone | null) => {
  switch (block?.__typename) {
    case "ComponentSharedMedia":
      return <MediaBlock {...block} />;
    case "ComponentSharedRichText":
      return <RichText {...block} />;
    case "ComponentSharedCodeBlock":
      return <CodeBlock {...block} />;
    default:
      return null;
  }
};

export default renderBlock;
