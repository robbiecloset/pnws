import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPosts.map((post: Post) => ({ slug: post.slug }))

const Post = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post: Post) => post.slug === params.slug)

  if (post === undefined) {
    return (
      <div>Can't find that post!</div>
    )
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h3>{post.title}</h3>
      </div>

      <Content />
    </article>
  )
}

export default Post
