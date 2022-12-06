import { FC, useCallback } from "react";
import { Article, ArticleBlocksDynamicZone } from "@api";
import RichText from "./RichText";
import CodeBlock from "./CodeBlock";
import MediaBlock from "./MediaBlock";
import { Text } from "./Text";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import * as React from "react";

export interface ContentComponentProps
  extends Pick<Article, "title" | "blocks" | "createdAt"> {}

export const ContentComponent: FC<ContentComponentProps> = ({
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
    <div className="flex flex-1 flex-col p-4 lg:p-6 space-y-4 bg-gradient-to-b from-background-dark rounded-lg">
      <Text h2>{title}</Text>
      {createdAt && (
        <Text c faded className={"pb-3"}>
          {format(parseISO(createdAt), "PPP")}
        </Text>
      )}
      {blocks?.map((block, index) => {
        return <div key={index}>{renderBlock(block)}</div>;
      })}
    </div>
  );
};
