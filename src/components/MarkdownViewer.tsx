'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image'

export default function MarkdownViewer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      className="prose max-w-none p-4 lg:prose-xl"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={materialDark}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
          )
        },
        img: (image) => <Image className="max-h-60 w-full object-cover" src={image?.src || ''} alt={image?.alt || ''} width={800} height={600} />,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
