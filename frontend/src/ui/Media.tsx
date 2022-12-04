import React, { FC } from "react";
import { ComponentSharedMedia } from "@api";

interface MediaProps extends Pick<ComponentSharedMedia, "file"> {}
//TODO
const Media: FC<MediaProps> = ({ file }) => {
  console.log({ file });
  return <div>media</div>;
};

export default Media;
