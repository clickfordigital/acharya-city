import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  User, 
  X, 
  Sparkles, 
  Flame, 
  Share2,
  Calendar
} from 'lucide-react';
import { BLOG_POSTS } from '../data/astrologyData';
import { BlogPost } from '../types';

export const LatestBlogsSection: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % BLOG_POSTS.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + BLOG_POSTS.length) % BLOG_POSTS.length);
  };

  return (
    <section className="py-12 sm:py-16 bg-amber-50/30 border-t border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading with Gold Divider Accent matching screenshot */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-amber-900 tracking-tight">
            Latest Blogs
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
        </div>

        {/* Blog Cards Grid */}
        <div className="relative">
          {/* Left / Right Carousel Trigger Buttons */}
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              aria-label="Previous blog"
              className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-700 hover:text-amber-800 hover:border-amber-400 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              aria-label="Next blog"
              className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-700 hover:text-amber-800 hover:border-amber-400 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((blog) => (
              <article
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                {/* Visual Header / Graphic Card */}
                <div className={`relative h-48 bg-gradient-to-br ${blog.imageTheme} p-6 flex flex-col justify-between text-white overflow-hidden`}>
                  {/* Decorative Radial Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.2),transparent_70%)]" />
                  
                  {/* Category Badge matching screenshot */}
                  <div className="relative z-10">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-600/90 text-white shadow-xs">
                      {blog.category}
                    </span>
                  </div>

                  {/* Sacred Silhouette / Typography preview */}
                  <div className="relative z-10 space-y-1 text-center py-2">
                    <div className="text-xs uppercase tracking-widest text-amber-200 font-serif-heading font-medium">
                      Acharya Ganesh Vedic Wisdom
                    </div>
                    <div className="text-base sm:text-lg font-bold font-serif-heading text-white line-clamp-2">
                      {blog.title}
                    </div>
                  </div>

                  {/* Read Time indicator */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-amber-200/90">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                    <span className="underline group-hover:text-amber-100 font-medium">Read Article →</span>
                  </div>
                </div>

                {/* Body Content & Excerpt */}
                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold font-serif-heading text-stone-900 group-hover:text-amber-900 transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-stone-600 uppercase tracking-wide leading-relaxed line-clamp-3 font-normal">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Author Byline matching screenshot */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <div className="flex items-center gap-1.5 font-medium text-stone-700">
                      <span>By <strong className="text-stone-900">{blog.author}</strong></span>
                    </div>
                    <span className="text-[11px] text-stone-400">{blog.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-6">
            {BLOG_POSTS.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === 0 ? 'w-5 bg-amber-700' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Blog Article Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200">
            {/* Modal Header */}
            <div className={`p-6 bg-gradient-to-r ${selectedBlog.imageTheme} text-white relative`}>
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white mb-2">
                {selectedBlog.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading leading-tight">
                {selectedBlog.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-amber-200/90 pt-3">
                <span>By {selectedBlog.author}</span>
                <span>•</span>
                <span>{selectedBlog.readTime}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
              <p className="font-semibold text-stone-900 italic border-l-4 border-amber-600 pl-3">
                "{selectedBlog.excerpt}"
              </p>

              <div className="space-y-3 font-normal text-stone-800">
                <p>{selectedBlog.content}</p>
                <p>
                  At <strong>Acharya Ganesh</strong>, we ensure all rituals and remedies are tailored directly to your astrological birth chart and current planetary periods (Mahadasha & Antardasha).
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-stone-500">
                  Published by <strong>Acharya Ganesh Vedic Research Team</strong>
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
