import App, { AppProps } from "next/app";
import Head from "next/head";
import { api, Global, Header, About } from "@api";
import { MainTemplate } from "@ui";

import "../styles/globals.css";

interface PageProps {
  global?: Global | null;
  header?: Header | null;
  about?: About | null;
}

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  const { global, header, about } = pageProps;

  return (
    <>
      <Head>
        <title>{global?.siteName}</title>
        <link
          rel="shortcut icon"
          href={global?.favicon?.data?.attributes?.url}
        />
      </Head>
      <MainTemplate header={header} isAboutInfoAvailable={!!about}>
        <Component {...pageProps} />
      </MainTemplate>
    </>
  );
};

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  const [responseGlobal, responseHeader, responseAbout] = await Promise.all([
    api.globalDetails(),
    api.headerDetails(),
    api.aboutDetails(),
  ]);

  const pageProps: PageProps = {
    global: responseGlobal.global?.data?.attributes,
    header: responseHeader.header?.data?.attributes,
    about: responseAbout.about?.data?.attributes,
  };

  return {
    ...appProps,
    pageProps,
  };
};

export default MyApp;
