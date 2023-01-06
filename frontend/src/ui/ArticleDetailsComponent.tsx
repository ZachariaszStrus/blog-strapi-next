import { FC } from "react";
import { Article } from "@api";
import { Text } from "./Text";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import * as React from "react";
import ContentWrapper from "./ContentWrapper";
import { Block } from "./Block";
import { CommentsGiscus } from "./CommentsGiscus";

export interface ArticleDetailsComponentProps
  extends Pick<Article, "title" | "blocks" | "createdAt"> {}

export const ArticleDetailsComponent: FC<ArticleDetailsComponentProps> = ({
  title,
  blocks,
  createdAt,
}) => {
  return (
    <ContentWrapper>
      <div className="mb-8 flex flex-col gap-y-4">
        <Text h2>{title}</Text>
        {createdAt && (
          <Text c faded className="pb-3">
            {format(parseISO(createdAt), "PPP")}
          </Text>
        )}
      </div>
      <div className="flex flex-col gap-y-8">
        {blocks?.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
      <div className="my-8">
        <CommentsGiscus />
      </div>
    </ContentWrapper>
  );
};
