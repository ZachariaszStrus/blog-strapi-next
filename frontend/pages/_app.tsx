import App, { AppProps } from "next/app";
import Head from "next/head";
import { api, Global, Header } from "api";

import "../styles/globals.css";
import { MainTemplate } from "ui";

interface PageProps {
  global?: Global | null;
  header?: Header | null;
}

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  const { global, header } = pageProps;

  return (
    <>
      <Head>
        <title>{global?.siteName}</title>
        <link
          rel="shortcut icon"
          href={global?.favicon?.data?.attributes?.url}
        />
      </Head>
      <MainTemplate header={header}>
        <Component {...pageProps} />
      </MainTemplate>
    </>
  );
};

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  const [responseGlobal, responseHeader] = await Promise.all([
    api.globalDetails(),
    api.headerDetails(),
  ]);

  const pageProps: PageProps = {
    global: responseGlobal.global?.data?.attributes,
    header: responseHeader.header?.data?.attributes,
  };

  return {
    ...appProps,
    pageProps,
  };
};

export default MyApp;
