import clsx from 'clsx'
import React, { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Syntax: FC<{ className?: string }> = ({ children, className }) => {
  a11yDark['pre[class*="language-"]'].margin = 0
  return (
    <div className={clsx('overflow-hidden rounded-xl relative', className)}>
      <SyntaxHighlighter language='jsx' style={a11yDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Syntax
