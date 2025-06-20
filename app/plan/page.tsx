'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PlanPage() {
  const { t, language } = useLanguage()
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    // In a real app, you might fetch this from an API or have separate MD files
    // For now, we'll load the Spanish version and show a note for English
    fetch(language === 'en' ? '/MVP-EN.md' : '/MVP.md')
      .then(res => res.text())
      .then(text => setMarkdownContent(text))
      .catch(() => {
        // If English version doesn't exist, load Spanish with a note
        fetch('/MVP.md')
          .then(res => res.text())
          .then(text => {
            if (language === 'en') {
              setMarkdownContent(`> **Note:** This document is currently available in Spanish only. English translation coming soon.\n\n${text}`)
            } else {
              setMarkdownContent(text)
            }
          })
      })
  }, [language])

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
          {t.plan.backToHome}
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
              ol: ({children}) => <ol className="space-y-2 my-4">{children}</ol>,
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
              table: ({children}) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-gray-200">{children}</table>
                </div>
              ),
              th: ({children}) => (
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {children}
                </th>
              ),
              td: ({children}) => (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {children}
                </td>
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