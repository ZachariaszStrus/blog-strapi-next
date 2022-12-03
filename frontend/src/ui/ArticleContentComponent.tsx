import { FC, useCallback } from "react";
import { Article, ArticleBlocksDynamicZone } from "@api";
import RichText from "./RichText";
import CodeBlock from "./CodeBlock";

export interface ArticleContentProps
  extends Pick<Article, "title" | "blocks"> {}

export const ArticleContentComponent: FC<ArticleContentProps> = ({
  title,
  blocks,
}) => {
  const renderBlock = useCallback((block: ArticleBlocksDynamicZone | null) => {
    switch (block?.__typename) {
      case "ComponentSharedMedia":
        return <div>Media block</div>;
      case "ComponentSharedRichText":
        return <RichText {...block} />;
      case "ComponentSharedCodeBlock":
        return <CodeBlock {...block} />;
      default:
        return null;
    }
  }, []);

  return (
    <div className="flex flex-col items-start py-5 space-x-8 space-y-4">
      <div className={"pb-3 text-2xl"}>{title}</div>
      {/*  TODO add info on publication time*/}
      {blocks?.map((block, index) => {
        console.log("block", block);
        return <div key={index}>{renderBlock(block)}</div>;
      })}
    </div>
  );
};
