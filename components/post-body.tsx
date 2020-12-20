import hljs from 'highlight.js'
import markdownStyles from './markdown-styles.module.css'
import 'highlight.js/styles/default.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const highlightedCode = hljs.highlightAuto(`
  def hello
    put
  end
    `).value
  console.log("highlightedCode:\n", highlightedCode)
  return (
    <div className="max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
