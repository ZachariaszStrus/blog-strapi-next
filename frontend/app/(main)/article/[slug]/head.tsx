import { api } from "@api";

export default async function Head({ params }: { params: { slug: string } }) {
  const response = await api.articleDetails({ slug: params.slug || "" });
  const article = response?.article?.data?.attributes;

  if (!article) {
    return null;
  }

  return (
    <>
      <title>{article.title}</title>
    </>
  );
}