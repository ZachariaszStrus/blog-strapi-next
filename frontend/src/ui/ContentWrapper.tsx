import { FC, ReactNode } from "react";
import * as React from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col p-4 lg:p-6 space-y-4 bg-gradient-to-b from-background-dark rounded-lg">
      {children}
    </div>
  );
};

export default ContentWrapper;
