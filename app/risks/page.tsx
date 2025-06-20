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
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="container py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </Link>
        
        <article className="prose prose-lg max-w-none bg-white rounded-lg shadow-lg p-8 md:p-12">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({children}) => <h1 className="text-4xl font-bold text-primary mb-8">{children}</h1>,
              h2: ({children}) => <h2 className="text-3xl font-bold text-primary mt-12 mb-6">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">{children}</h3>,
              h4: ({children}) => <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">{children}</h4>,
              ul: ({children}) => <ul className="space-y-2 my-4">{children}</ul>,
              ol: ({children}) => <ol className="space-y-2 my-4 list-decimal list-inside">{children}</ol>,
              li: ({children}) => <li className="ml-6 list-disc marker:text-primary">{children}</li>,
              p: ({children}) => <p className="my-4 text-gray-700 leading-relaxed">{children}</p>,
              strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
              code: ({children}) => <code className="bg-gray-100 px-2 py-1 rounded text-sm">{children}</code>,
              pre: ({children}) => <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6">{children}</pre>,
              blockquote: ({children}) => (
                <blockquote className="border-l-4 border-primary pl-6 italic my-6 text-gray-600">
                  {children}
                </blockquote>
              ),
              hr: () => <hr className="my-8 border-gray-300" />,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  )
}