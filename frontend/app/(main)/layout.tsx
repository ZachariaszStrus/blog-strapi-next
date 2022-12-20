import { api, ComponentSharedSocialMediaItem } from "@api";
import { MainTemplate } from "@ui";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [responseHeader, responseAbout] = await Promise.all([
    api.headerDetails(),
    api.aboutDetails(),
    api.socialMedia(),
  ]);
  const header = responseHeader.header?.data?.attributes;
  const about = responseAbout.about?.data?.attributes;
  // todo: fix graphql typing
  const socialMedia = (responseSocial.socialMedia?.data?.attributes?.items ||
    []) as Pick<ComponentSharedSocialMediaItem, "title" | "icon" | "url">[];

  return (
    <MainTemplate
      header={header}
      isAboutInfoAvailable={!!about}
      socialMediaItems={socialMedia}
    >
      {children}
    </MainTemplate>
  );
}
