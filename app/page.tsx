import { allPosts } from 'content-collections'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-900">
          🍳 This site is currently cooking. Check out the{' '}
          <a
            href="https://github.com/delbaoliveira/website"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-red-700"
          >
            GitHub repo
          </a>{' '}
          for updates.
        </p>
      </div>

      <header className="mb-12">
        <h1 className="mb-2 text-4xl font-bold">Blog</h1>
        <p className="text-gray-600">Poems, thoughts, and musings about code</p>
      </header>

      <div className="space-y-8">
        {allPosts.map((post) => (
          <article key={post._meta.path}>
            <Link
              href={`/${post._meta.path}`}
              className="group block hover:opacity-80 transition-opacity"
            >
              <h2 className="mb-2 text-2xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
