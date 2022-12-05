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
    <SyntaxHighlighter language={lang || "dax"} style={dracula}>
      {content}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
