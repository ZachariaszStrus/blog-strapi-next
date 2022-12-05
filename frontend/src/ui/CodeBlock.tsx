import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import dax from "react-syntax-highlighter/dist/cjs/languages/prism/dax";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import { ComponentSharedCodeBlock } from "@api";

SyntaxHighlighter.registerLanguage("dax", dax);
SyntaxHighlighter.registerLanguage("python", python);

interface CodeBlockProps
  extends Pick<ComponentSharedCodeBlock, "lang" | "content"> {}

const CodeBlock: React.FC<CodeBlockProps> = ({ lang, content }) => {
  return (
    <div className="rounded-xl mx-auto bg-gradient-to-r  p-[2px] from-secondary-200 via-primary-300 to-primary-600">
      <div className={"bg-[#282a36] px-2 py-[1px] rounded-xl"}>
        <SyntaxHighlighter
          language={lang || "dax"}
          style={dracula}
          wrapLongLines
        >
          {content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
