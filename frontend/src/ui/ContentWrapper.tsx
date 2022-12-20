import { FC, ReactNode } from "react";
import * as React from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col rounded-lg bg-gradient-to-b from-background-dark py-6 px-4 md:px-8 lg:px-6">
      {children}
    </div>
  );
};

export default ContentWrapper;
