import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import gfm from "remark-gfm";
import ChatSVG from "./../../../public/v2/vectors/chat.svg"
interface MarkdownViewerProps {
  mdx: string;
  className?: string;
}
const config: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
  h1: ({ node, ...props }) => <div className="text-white text-fs44 font-bold" {...props}/>,
  h2: ({ node, ...props }) => <div className="text-white text-fs35  font-bold" {...props}/>,
  h3: ({ node, ...props }) => <div className="text-white text-fs24 font-bold" {...props}/>,
  h4: ({ node, ...props }) => <div className="text-white  text-fs18 font-bold" {...props} />,
  h5: ({ node, ...props }) => <div className="text-white text-fs16 font-bold" {...props} />,
  h6: ({ node, ...props }) => <div className="text-white  text-fs14 font-bold" {...props} />,
  blockquote: ({ node, ...props }) => <><Image height={20} width={20} src={ChatSVG} /><span className="text-primary" {...props} /></>,
  strong: ({ node, ...props }) => <><b className="text-primary" {...props} /></>,
  code: ({ node, ...props }) => <><code className="text-white font-bold" {...props} /></>,
}

const MarkdownViewer = ({ mdx, className }: MarkdownViewerProps) => (
  <div className={`prose text-white ${className ? className : ""}`}>
    <ReactMarkdown
      remarkPlugins={[gfm]}
      className="text-white"
      components={config}
    >{mdx}</ReactMarkdown>
  </div>
);
export default MarkdownViewer;
