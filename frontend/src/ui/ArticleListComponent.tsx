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
    <div className="flex flex-col relative group pointer-events-none ">
      <div
        className={
          "bg-background-dark  group-hover:opacity-100 rounded-lg border border-gray-700 absolute h-full w-full z-20 "
        }
      />
      <span className="w-0 h-full bg-primary-300 absolute top-[-1px] left-[-1px] duration-300 transition-all group-hover:w-[calc(100%_+_2px)] group-hover:h-[calc(100%_+_2px)] z-10 rounded-lg" />
      <div className={"z-30 py-4 px-6"}>
        <Text h3>{title}</Text>
        <Text faded className="pb-3">
          {description}
        </Text>
        <div className="flex justify-between items-center">
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
