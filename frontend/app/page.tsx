import { ArticleList } from "@ui";
import { api } from "@api";

const HomePage = async () => {
  const response = await api.articleList({ page: 1 });

  if (!response.articles?.data || !response.articles?.meta) {
    return {
      notFound: true,
    };
  }

  const articles = response.articles.data;
  const { pageCount } = response.articles.meta.pagination;

  return <ArticleList articles={articles} page={1} pageCount={pageCount} />;
};
export default HomePage;
