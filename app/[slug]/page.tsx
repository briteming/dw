import { allPosts } from 'content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._meta.path }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = allPosts.find((post) => post._meta.path === slug)

  if (!post) {
    notFound()
  }

  return { title: post.title, description: post.description }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = allPosts.find((post) => post._meta.path === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <div className="prose prose-slate max-w-none">
        <MDXContent code={post.mdx} />
      </div>
    </article>
  )
}
