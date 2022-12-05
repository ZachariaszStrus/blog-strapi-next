import { ArticleList } from "@ui";
import { api, ArticleEntity } from "@api";
import { GetStaticProps } from "next/types";
import { FC } from "react";
import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { routes } from "@utils";

interface ArticleListPageProps {
  articles: ArticleEntity[];
  page: number;
  pageCount: number;
}

interface ArticleListPageQuery extends ParsedUrlQuery {
  page: string;
}

export const getStaticPaths: GetStaticPaths<
  ArticleListPageQuery
> = async () => {
  const response = await api.articleList({ page: 1 });

  const paths =
    Array.from({ length: response.articles?.meta?.pagination?.pageCount || 0 })
      .map((_, i) => (i + 1).toString())
      .slice(1)
      .map((page) => ({
        params: {
          page,
        },
      })) || [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ArticleListPageProps,
  ArticleListPageQuery
> = async ({ params = { page: "1" } }) => {
  const { page } = params;

  if (page === "1") {
    return {
      redirect: {
        destination: routes.home(),
        permanent: false,
      },
    };
  }

  const response = await api.articleList({ page: Number(page) });

  if (!response.articles?.data || !response.articles?.meta) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: response.articles.data,
      ...response.articles.meta.pagination,
    },
  };
};

const ArticleListPage: FC<ArticleListPageProps> = ({
  articles,
  page,
  pageCount,
}) => {
  return <ArticleList articles={articles} page={page} pageCount={pageCount} />;
};
export default ArticleListPage;
