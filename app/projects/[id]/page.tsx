'use client';

import { useParams } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import CloudCircuitIcon from '@/components/CloudCircuitIcon';
import Link from 'next/link';
import { articles } from '../page';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = articles.find((a) => a.id === id);

  if (!project) {
    return (
      <PageWrapper>
        <section className="px-15 py-40 text-center">
          <h1 className="text-4xl font-bold mb-8">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="relative w-full px-15 py-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <CloudCircuitIcon className="w-64 h-64" />
          </div>

          {/* Breadcrumb */}
          <Link 
            href="/projects" 
            className="text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-black transition-colors no-underline mb-12 inline-block"
          >
            ← Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: project.categoryColor }}
            >
              {project.category}
            </span>
            <h1 className="text-5xl font-black text-black mt-4 mb-6 leading-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <span>{project.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className={`w-full aspect-video bg-gradient-to-br ${project.gradient} rounded-2xl mb-16 shadow-2xl`} />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium mb-10">
              {project.description}
            </p>
            <div className="h-px bg-gray-100 w-full mb-10" />
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
              {project.fullContent}
            </p>
            
            <div className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-4">Key Takeaways</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-black font-bold">01.</span>
                  Strategic integration of emerging technologies is no longer optional for leadership.
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-bold">02.</span>
                  User-centric design combined with high-performance engineering drives engagement.
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-bold">03.</span>
                  Agile methodologies allow for rapid iteration and market responsiveness.
                </li>
              </ul>
            </div>
          </div>
          
          {/* Footer Navigation */}
          <div className="mt-24 pt-12 border-t border-gray-100 flex justify-between items-center">
            <Link 
              href="/projects" 
              className="text-sm font-bold text-black hover:opacity-70 transition-opacity no-underline"
            >
              ← All Projects
            </Link>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
