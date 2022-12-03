import { PropsWithChildren } from "react";
import * as React from "react";
import NextLink, { LinkProps } from "next/link";

export const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => (
  <NextLink
    {...props}
    className="text-base py-0.5 border-b border-b-2 border-transparent hover:border-b-primary-300 cursor-pointer"
  >
    {children}
  </NextLink>
);
