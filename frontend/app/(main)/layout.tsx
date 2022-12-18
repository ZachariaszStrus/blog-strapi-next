import { api } from "@api";
import { MainTemplate } from "@ui";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [responseHeader, responseAbout] = await Promise.all([
    api.headerDetails(),
    api.aboutDetails(),
  ]);
  const header = responseHeader.header?.data?.attributes;
  const about = responseAbout.about?.data?.attributes;

  return (
    <MainTemplate header={header} isAboutInfoAvailable={!!about}>
      {children}
    </MainTemplate>
  );
}
