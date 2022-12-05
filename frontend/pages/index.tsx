import { ArticleList } from "@ui";
import { api, ArticleEntity } from "@api";
import { GetStaticProps } from "next/types";
import { FC } from "react";

interface HomeProps {
  articles: ArticleEntity[];
  pageCount: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.articleList({ page: 1 });

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

const HomePage: FC<HomeProps> = ({ articles, pageCount }) => {
  return <ArticleList articles={articles} page={1} pageCount={pageCount} />;
};
export default HomePage;
