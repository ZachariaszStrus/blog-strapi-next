import { api } from "@api";
import {
  ArticleDetailsComponent,
  ArticleDetailsComponentProps,
  CommentsGiscus,
} from "@ui";
import type { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

interface ArticleDetailsProps {
  article: ArticleDetailsComponentProps;
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
      <div className="flex w-full flex-col">
        {article && (
          <ArticleDetailsComponent
            title={article.title}
            blocks={article.blocks}
            createdAt={article.createdAt}
          />
        )}
        <div className="mt-8">
          <CommentsGiscus />
        </div>
      </div>
    </>
  );
};
export default ArticleDetails;
