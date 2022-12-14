import { ArticleList } from "@ui";
import { api } from "@api";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const response = await api.articleList({ page: 1 });

  return (
    Array.from({ length: response.articles?.meta?.pagination?.pageCount || 0 })
      .map((_, i) => (i + 1).toString())
      .slice(1)
      .map((page) => ({
        page,
      })) || []
  );
};

const ArticleListPage = async ({ params }: { params: { page: string } }) => {
  const response = await api.articleList({ page: Number(params.page) });

  if (!response.articles?.data || !response.articles?.meta) {
    notFound();
  }

  const articles = response.articles.data;
  const { page, pageCount } = response.articles.meta.pagination;

  return <ArticleList articles={articles} page={page} pageCount={pageCount} />;
};
export default ArticleListPage;
