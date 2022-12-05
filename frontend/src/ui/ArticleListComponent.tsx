import * as React from "react";
import { FC } from "react";
import { Article } from "@api";
import { Link } from "./Link";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { Text } from "./Text";
import { routes } from "@utils";

interface ArticleListProps
  extends Pick<Article, "title" | "slug" | "description" | "createdAt"> {}

export const ArticleListComponent: FC<ArticleListProps> = ({
  title,
  slug,
  description,
  createdAt,
}) => (
  <div className="flex flex-col bg-background-dark bg-opacity-90 py-4 px-6 rounded-lg border border-gray-700">
    <Text h3>{title}</Text>
    <Text faded className="pb-3">
      {description}
    </Text>
    <div className="flex justify-between items-center">
      <Text c faded>
        {format(parseISO(createdAt), "PPP")}
      </Text>
      <Link href={routes.articleDetails(slug)}>read more</Link>
    </div>
  </div>
);
