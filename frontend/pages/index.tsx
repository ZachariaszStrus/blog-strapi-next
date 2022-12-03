import { ArticleListComponent, MainTemplate } from "@ui";
import { ArticleEntity, api } from "@api";
import { GetStaticProps } from "next/types";
import { FC } from "react";

interface HomeProps {
  articles: ArticleEntity[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.articleList();

  if (!response.articles?.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: response.articles?.data,
    },
  };
};

const Home: FC<HomeProps> = ({ articles }) => {
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
    </div>
  );
};
export default Home;
