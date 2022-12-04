import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import dax from "react-syntax-highlighter/dist/cjs/languages/prism/dax";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import ReactMarkdown from "react-markdown";
import { ComponentSharedCodeBlock } from "@api";

SyntaxHighlighter.registerLanguage("dax", dax);
SyntaxHighlighter.registerLanguage("python", python);

interface CodeBlockProps
  extends Pick<ComponentSharedCodeBlock, "lang" | "content"> {}

const CodeBlock: React.FC<CodeBlockProps> = ({ lang, content }) => {
  const toCode = (code: string) => `~~~\n${code}`;
  return (
    <ReactMarkdown
      components={{
        code({ children }) {
          return (
            <SyntaxHighlighter language={lang || "dax"} style={dracula}>
              {String(children)}
            </SyntaxHighlighter>
          );
        },
      }}
    >
      {toCode(content)}
    </ReactMarkdown>
  );
};

export default CodeBlock;
