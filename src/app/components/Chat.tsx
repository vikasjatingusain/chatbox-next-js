import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export default function Chat({ role, content }: { role: string; content: string }) {
  const isUser = role === 'user';
  return (
    <div className={`py-2 px-4 my-2 rounded-lg max-w-3xl ${isUser ? 'bg-gray-500 text-white self-end' : 'bg-gray-400 text-black self-start'}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}