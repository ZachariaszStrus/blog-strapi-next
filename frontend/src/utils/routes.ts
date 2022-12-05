export const routes = {
  home: () => "/",
  articleDetails: (slug: string) => `/article/${slug}`,
  articleList: (page: number) => (page === 1 ? "/" : `/page/${page}`),
};
