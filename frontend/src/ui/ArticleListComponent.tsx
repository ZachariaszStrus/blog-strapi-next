import * as React from "react";
import { FC } from "react";
import { Article } from "@api";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { Text } from "./Text";
import { routes } from "@utils";
import NextLink from "next/link";

interface ArticleListProps
  extends Pick<Article, "title" | "slug" | "description" | "createdAt"> {}

export const ArticleListComponent: FC<ArticleListProps> = ({
  title,
  slug,
  description,
  createdAt,
}) => {
  return (
    <div className="group pointer-events-none relative flex flex-col ">
      <div
        className={
          "absolute  z-10 h-full w-full rounded-lg border border-gray-700 bg-background-dark group-hover:opacity-100"
        }
      />
      <span className="absolute top-[-1px] left-[-1px] z-0 h-full w-0 rounded-lg bg-gradient-to-br from-primary-200 to-primary-700 transition-all duration-300 group-hover:h-[calc(100%_+_2px)] group-hover:w-[calc(100%_+_2px)]" />
      <div className={"z-10 py-4 px-6"}>
        <Text h4>{title}</Text>
        <Text faded className="pb-3">
          {description}
        </Text>
        <div className="flex items-center justify-between">
          <Text c faded>
            {format(parseISO(createdAt), "PPP")}
          </Text>
          <div className={"pointer-events-auto"}>
            <NextLink
              href={routes.articleDetails(slug)}
              className={"text-base"}
            >
              read more
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};
