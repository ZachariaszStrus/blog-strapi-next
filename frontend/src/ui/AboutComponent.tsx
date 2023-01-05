import { FC } from "react";
import { About } from "@api";
import { Text } from "./Text";
import * as React from "react";
import ContentWrapper from "./ContentWrapper";
import { Block } from "./Block";

export interface AboutComponentProps extends Pick<About, "title" | "blocks"> {}

export const AboutComponent: FC<AboutComponentProps> = ({ title, blocks }) => {
  return (
    <ContentWrapper>
      <Text h2>{title}</Text>
      {blocks?.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </ContentWrapper>
  );
};
