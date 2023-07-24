import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>Home page title content</h2>

      <div>
        {allPosts.map((post: Post) => (
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        ))}
      </div>
    </div>
  )
}
