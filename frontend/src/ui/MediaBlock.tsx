import React, { FC } from "react";
import { ComponentSharedMedia } from "api";

interface MediaBlockProps extends Pick<ComponentSharedMedia, "file"> {}

const MediaBlock: FC<MediaBlockProps> = ({ file }) => {
  return (
    <div className="flex w-full justify-center">
      <img
        src={file.data?.attributes?.url}
        alt={file.data?.attributes?.name}
        className="max-w-full rounded-xl"
      />
    </div>
  );
};

export default MediaBlock;
