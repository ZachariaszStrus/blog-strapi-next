import { FC } from "react";
import { About } from "@api";
import * as React from "react";
import ContentWrapper from "./ContentWrapper";
import { Block } from "./Block";

export interface AboutComponentProps extends Pick<About, "blocks"> {}

export const AboutComponent: FC<AboutComponentProps> = ({ blocks }) => {
  return (
    <ContentWrapper>
      {blocks?.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </ContentWrapper>
  );
};
