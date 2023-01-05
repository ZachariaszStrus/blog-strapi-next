import { FC } from "react";
import { Article } from "@api";
import { Text } from "./Text";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import * as React from "react";
import ContentWrapper from "./ContentWrapper";
import { renderBlock } from "./utils";

export interface ArticleDetailsComponentProps
  extends Pick<Article, "title" | "blocks" | "createdAt"> {}

export const ArticleDetailsComponent: FC<ArticleDetailsComponentProps> = ({
  title,
  blocks,
  createdAt,
}) => {
  return (
    <ContentWrapper>
      <Text h2>{title}</Text>
      {createdAt && (
        <Text c faded className="pb-3">
          {format(parseISO(createdAt), "PPP")}
        </Text>
      )}
      {blocks?.map((block, index) => {
        return <div key={index}>{renderBlock(block)}</div>;
      })}
    </ContentWrapper>
  );
};
