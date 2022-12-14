import { Header } from "@api";
import React from "react";
import { Text } from "./Text";
import NextLink from "next/link";
import { routes } from "@utils";
import { usePathname } from "next/navigation";

interface BlogTitleProps {
  header: Header;
}

const BlogTitle = ({ header }: BlogTitleProps) => {
  const pathname = usePathname();

  return (
    <NextLink
      className={`space-y-2 ${
        pathname === routes.home()
          ? "pointer-events-none"
          : "pointer-events-auto"
      }`}
      href={routes.home()}
    >
      <Text h1>{header.title}</Text>
      <Text h3 faded>
        {header.subtitle}
      </Text>
    </NextLink>
  );
};

export default BlogTitle;
