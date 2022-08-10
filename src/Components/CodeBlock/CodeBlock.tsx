import { FC } from 'react';

import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

const CodeBlock: FC<CodeProps> = function ({
	node,
	inline,
	className,
	children,
	...props
}) {
	const match = /language-(\w+)/.exec(className || '');
	const language = match?.[1];
	SyntaxHighlighter.registerLanguage('javascript', js);

	return !inline && match ? (
		<SyntaxHighlighter
			style={oneDark}
			language={language}
			PreTag="div"
			showLineNumbers
			{...props}
		>
			{String(children).replace(/\n$/, '')}
		</SyntaxHighlighter>
	) : (
		<code className={className} {...props}>
			{children}
		</code>
	);
};

export default CodeBlock;