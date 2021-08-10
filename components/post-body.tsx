import markdownStyles from './markdown-styles.module.css'
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import ruby from 'highlight.js/lib/languages/ruby';
import erb from 'highlight.js/lib/languages/erb';
import bash from 'highlight.js/lib/languages/bash';
import { useEffect } from 'react';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('erb', erb);
hljs.registerLanguage('bash', bash);
import 'highlight.js/styles/railscasts.css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostBody
