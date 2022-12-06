import { api } from "@api";
import { ArticleContentComponent, ArticleContentProps } from "@ui";
import type { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

interface ArticleDetailsProps {
  article: ArticleContentProps;
}

interface ArticleDetailsQuery extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<ArticleDetailsQuery> = async () => {
  const response = await api.articleSlugList();

  const paths =
    response.articles?.data
      ?.map(({ attributes }) => attributes?.slug || "")
      .filter((slug) => slug !== "")
      .map((slug) => ({
        params: {
          slug,
        },
      })) || [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ArticleDetailsProps,
  ArticleDetailsQuery
> = async ({ params }) => {
  const response = await api.articleDetails({ slug: params?.slug || "" });

  if (!response?.article?.data?.attributes) {
    return { notFound: true };
  }

  return {
    props: { article: response.article.data.attributes },
  };
};

const ArticleDetails: FC<ArticleDetailsProps> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      {article && (
        <ArticleContentComponent
          title={article.title}
          blocks={article.blocks}
          createdAt={article.createdAt}
        />
      )}
    </>
  );
};
export default ArticleDetails;
