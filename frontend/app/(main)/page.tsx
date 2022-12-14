import { ArticleList } from "@ui";
import { api } from "@api";
import { notFound } from "next/navigation";

const HomePage = async () => {
  const response = await api.articleList({ page: 1 });

  if (!response.articles?.data || !response.articles?.meta) {
    notFound();
  }

  const articles = response.articles.data;
  const { pageCount } = response.articles.meta.pagination;

  return <ArticleList articles={articles} page={1} pageCount={pageCount} />;
};
export default HomePage;
