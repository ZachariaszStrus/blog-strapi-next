import Head from "next/head";
import { useEffect, useState } from "react";

export const CommentsGiscus = () => {
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return isClientSide ? (
    <>
      <Head>
        <script
          src="https://giscus.app/client.js"
          data-repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
          data-repo-id={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
          data-category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
          data-category-id={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
          data-mapping="pathname"
          data-strict="1"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="dark"
          data-lang="en"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <div className="giscus" />
    </>
  ) : null;
};
