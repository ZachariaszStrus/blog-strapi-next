import { api } from "@api";
import DefaultTags from "../../../DefaultTags";

export default async function Head({ params }: { params: { slug: string } }) {
  const response = await api.articleDetails({ slug: params.slug || "" });
  const article = response?.article?.data?.attributes;

  return (
    <>
      <DefaultTags />
      {article?.title && <title>{article.title}</title>}
    </>
  );
}
