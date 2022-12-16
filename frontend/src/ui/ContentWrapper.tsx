import { FC, ReactNode } from "react";
import * as React from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col space-y-4 rounded-lg bg-gradient-to-b from-background-dark p-4 lg:p-6">
      {children}
    </div>
  );
};

export default ContentWrapper;
