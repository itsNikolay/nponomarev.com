import markdownStyles from './markdown-styles.module.css'
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import ruby from 'highlight.js/lib/languages/ruby';
import erb from 'highlight.js/lib/languages/erb';
import {useEffect} from 'react';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('erb', erb);
import 'highlight.js/styles/railscasts.css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
