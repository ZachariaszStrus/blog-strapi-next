import { FC, useCallback } from "react";
import { Article, ArticleBlocksDynamicZone } from "@api";
import RichText from "./RichText";
import CodeBlock from "./CodeBlock";
import MediaBlock from "./MediaBlock";
import { Text } from "./Text";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import * as React from "react";

export interface ArticleContentProps
  extends Pick<Article, "title" | "blocks" | "createdAt"> {}

export const ArticleContentComponent: FC<ArticleContentProps> = ({
  title,
  blocks,
  createdAt,
}) => {
  const renderBlock = useCallback((block: ArticleBlocksDynamicZone | null) => {
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
  }, []);

  return (
    <div className="flex flex-col  py-5 space-y-4 bg-background-dark lg:p-5 rounded-lg">
      <div className={"text-2xl"}>{title}</div>
      <Text c faded className={"pb-3"}>
        {format(parseISO(createdAt), "PPP")}
      </Text>
      {blocks?.map((block, index) => {
        return <div key={index}>{renderBlock(block)}</div>;
      })}
    </div>
  );
};
