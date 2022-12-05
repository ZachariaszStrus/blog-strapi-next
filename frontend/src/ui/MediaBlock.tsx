import React, { FC } from "react";
import { ComponentSharedMedia } from "api";

interface MediaBlockProps extends Pick<ComponentSharedMedia, "file"> {}

const MediaBlock: FC<MediaBlockProps> = ({ file }) => {
    return (
        <img
            src={file.data?.attributes?.url}
            alt={file.data?.attributes?.name}
            className={"max-w-full"}
        />
    );
};

export default MediaBlock;
