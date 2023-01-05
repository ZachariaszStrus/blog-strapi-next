import { PropsWithChildren } from "react";
import * as React from "react";
import NextLink, { LinkProps } from "next/link";

export const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => (
  <NextLink
    {...props}
    className="border-b border-b-2 border-transparent py-0.5 text-base transition-all duration-100 ease-in hover:border-b-primary-300"
  >
    {children}
  </NextLink>
);
