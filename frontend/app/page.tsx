"use client";

import { useState } from "react";
import { articles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import { TrendingUp, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "AI", "Hardware", "Software", "Security", "Space"];

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="mb-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
            Breaking News
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            OpenAI Unveils GPT-5: Multimodal Reasoning at Human Levels
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            The latest breakthrough in artificial intelligence brings unprecedented capabilities in reasoning, coding, and scientific discovery.
          </p>
          <div className="flex items-center gap-4 text-sm text-blue-100">
            <span>May 24, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--card)] border border-[var(--border)] text-muted hover:border-[var(--accent)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Trending */}
          <div className="card rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-[var(--accent)]" />
              Trending Now
            </h3>
            <div className="space-y-4">
              {[
                { num: "01", title: "TSMC Begins 2nm Production", reads: "45K" },
                { num: "02", title: "Firefox Introduces On-Device AI", reads: "38K" },
                { num: "03", title: "EU Passes AI Act Amendments", reads: "32K" },
                { num: "04", title: "Rust Adoption Hits All-Time High", reads: "28K" },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 items-start">
                  <span className="text-2xl font-bold text-[var(--accent)] opacity-30 leading-none">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-medium text-sm hover:text-[var(--accent)] cursor-pointer transition">
                      {item.title}
                    </h4>
                    <span className="text-xs text-muted">{item.reads} reads</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="card rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Mail size={20} className="text-[var(--accent)]" />
              Newsletter
            </h3>
            <p className="text-sm text-muted mb-4">
              Get the latest tech news and AI tools delivered daily.
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg bg-[var(--background)] border border-[var(--border)] px-3 py-2 text-sm mb-3 focus:outline-none focus:border-[var(--accent)]"
            />
            <button className="w-full bg-[var(--accent)] text-white rounded-lg py-2 text-sm font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}