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

  return (
    <div className="flex flex-col flex-1 gap-4">
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
      <div className="flex justify-center items-center gap-x-4">
        {prevPage ? (
          <Link href={routes.articleList(prevPage)}>
            <ChevronLeftIcon className="w-6 h-6" />
          </Link>
        ) : (
          <div className="w-6 h-6" />
        )}
        <Text p>
          {page}
          <span>
            {" / "}
            {page}
          </span>
        </Text>
        {nextPage ? (
          <Link href={routes.articleList(nextPage)}>
            <ChevronRightIcon className="w-6 h-6" />
          </Link>
        ) : (
          <div className="w-6 h-6" />
        )}
      </div>
    </div>
  );
};
