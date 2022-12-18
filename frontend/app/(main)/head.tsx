import { api } from "@api";

export default async function Head() {
  const response = await api.globalDetails();
  const global = response.global?.data?.attributes;

  if (!global) {
    return null;
  }

  return (
    <>
      <title>{global.siteName}</title>
      {global.favicon?.data?.attributes?.url && (
        <link
          rel="shortcut icon"
          // @ts-ignore
          precedence="default"
          href={global.favicon?.data?.attributes?.url}
        />
      )}
    </>
  );
}
