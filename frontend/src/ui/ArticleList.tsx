import { ArticleListComponent } from "./ArticleListComponent";
import { ArticleEntity } from "@api";
import { Text } from "@ui";
import { routes } from "@utils";
import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import NextLink from "next/link";

interface HomeProps {
  articles: ArticleEntity[];
  page: number;
  pageCount: number;
}

export const ArticleList: FC<HomeProps> = ({ articles, pageCount, page }) => {
  const prevPage = page === 1 ? undefined : page - 1;
  const nextPage = page === pageCount ? undefined : page + 1;

  return (
    <div className="flex flex-1 flex-col px-8 lg:px-0">
      <div className="flex flex-1 flex-col gap-4">
        {articles?.map(
          (article) =>
            article.attributes && (
              <ArticleListComponent
                key={article.id}
                title={article.attributes.title}
                createdAt={article.attributes.createdAt}
                description={article.attributes.description}
                slug={article.attributes.slug}
              />
            )
        )}
      </div>
      <div className="mt-8 mb-2 flex items-center justify-center gap-x-4">
        {prevPage ? (
          <NextLink href={routes.articleList(prevPage)}>
            <ChevronLeftIcon className="h-6 w-6" />
          </NextLink>
        ) : (
          <div className="h-6 w-6" />
        )}
        <Text pb>
          {page}
          <Text p faded span>
            {" / "}
            {pageCount}
          </Text>
        </Text>
        {nextPage ? (
          <NextLink href={routes.articleList(nextPage)}>
            <ChevronRightIcon className="h-6 w-6" />
          </NextLink>
        ) : (
          <div className="h-6 w-6" />
        )}
      </div>
    </div>
  );
};
