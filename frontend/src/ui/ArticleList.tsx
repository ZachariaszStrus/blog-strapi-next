import { ArticleListComponent } from "./ArticleListComponent";
import { ArticleEntity } from "@api";
import { Text } from "@ui";
import { routes } from "@utils";
import { FC } from "react";
import { Link } from "./Link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface HomeProps {
  articles: ArticleEntity[];
  page: number;
  pageCount: number;
}

export const ArticleList: FC<HomeProps> = ({ articles, pageCount, page }) => {
  const prevPage = page === 1 ? undefined : page - 1;
  const nextPage = page === pageCount ? undefined : page + 1;

  // todo: create base content wrapper - for handling px-4 md:px-8
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 md:px-8 lg:px-0">
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
      <div className="flex items-center justify-center gap-x-4">
        {prevPage ? (
          <Link href={routes.articleList(prevPage)}>
            <ChevronLeftIcon className="h-6 w-6" />
          </Link>
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
          <Link href={routes.articleList(nextPage)}>
            <ChevronRightIcon className="h-6 w-6" />
          </Link>
        ) : (
          <div className="h-6 w-6" />
        )}
      </div>
    </div>
  );
};
