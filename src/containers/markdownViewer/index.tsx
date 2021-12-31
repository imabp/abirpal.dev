import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
interface MarkdownViewerProps {
  mdx: string;
  className?: string;
}
const MarkdownViewer = ({ mdx, className }: MarkdownViewerProps) => (
  <div className={`prose ${className ? className : ""}`}>
    <ReactMarkdown remarkPlugins={[gfm]}>{mdx}</ReactMarkdown>
  </div>
);
export default MarkdownViewer;
