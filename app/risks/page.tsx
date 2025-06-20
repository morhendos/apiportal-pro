import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

export const metadata = {
  title: 'Marketplace Risks & Challenges - APIPortal Pro',
  description: 'Understanding the challenges of building a successful real estate marketplace and our strategies to overcome them.',
}

export default function RisksPage() {
  const markdownPath = path.join(process.cwd(), 'public', 'marketplace-risks.md')
  const markdownContent = fs.readFileSync(markdownPath, 'utf-8')

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28">
      <div className="container py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-all duration-300 group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-medium">Back to Home</span>
        </Link>
        
        <article className="prose prose-lg max-w-none bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({children}) => (
                <h1 className="text-5xl font-bold mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    {children}
                  </span>
                </h1>
              ),
              h2: ({children}) => (
                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-4"></span>
                  {children}
                </h2>
              ),
              h3: ({children}) => (
                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                  <span className="text-blue-600 mr-3">#</span>
                  {children}
                </h3>
              ),
              h4: ({children}) => <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">{children}</h4>,
              ul: ({children}) => <ul className="space-y-2 my-4">{children}</ul>,
              ol: ({children}) => <ol className="space-y-2 my-4 list-decimal list-inside">{children}</ol>,
              li: ({children}) => (
                <li className="ml-6 text-gray-700 leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">•</span>
                  <span>{children}</span>
                </li>
              ),
              p: ({children}) => <p className="my-4 text-gray-700 leading-relaxed">{children}</p>,
              strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
              code: ({children}) => (
                <code className="bg-gradient-to-r from-blue-50 to-indigo-50 px-2 py-1 rounded text-sm font-mono text-blue-700">
                  {children}
                </code>
              ),
              pre: ({children}) => (
                <pre className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl overflow-x-auto my-6 shadow-lg">
                  {children}
                </pre>
              ),
              blockquote: ({children}) => (
                <blockquote className="border-l-4 border-gradient-to-b from-blue-600 to-indigo-600 pl-6 italic my-6 text-gray-600 bg-gradient-to-r from-blue-50 to-transparent py-4 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              hr: () => (
                <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  )
}