import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PlanClient from './PlanClient'

export const metadata = {
  title: 'MVP Plan - APIPortal Pro',
  description: 'Plan detallado para el desarrollo de APIPortal Pro | Detailed development plan for APIPortal Pro',
}

export default function PlanPage() {
  const markdownPath = path.join(process.cwd(), 'MVP.md')
  const markdownContent = fs.readFileSync(markdownPath, 'utf-8')

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28">
      <div className="container py-12">
        <PlanClient>
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
                h3: ({children}) => <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">{children}</h3>,
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
                table: ({children}) => (
                  <div className="overflow-x-auto my-6 rounded-xl shadow-sm border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">{children}</table>
                  </div>
                ),
                th: ({children}) => (
                  <th className="px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    {children}
                  </th>
                ),
                td: ({children}) => (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b border-gray-100">
                    {children}
                  </td>
                ),
                hr: () => (
                  <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </article>
        </PlanClient>
      </div>
    </main>
  )
}