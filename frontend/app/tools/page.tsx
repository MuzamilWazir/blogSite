"use client";

import { useState } from "react";
import { tools, categories } from "@/lib/data";
import ToolCard from "@/components/ToolCard";
import { Search, Sparkles } from "lucide-react";

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = tools.filter((tool: typeof tools[number]) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.some((t: string) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory =
      activeCategory === "All" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filtered.filter((t: typeof tools[number]) => t.featured);
  const regular = filtered.filter((t: typeof tools[number]) => !t.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
          <Sparkles className="text-[--accent]" size={32} />
          AI Tools Directory
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Discover and use the best artificial intelligence tools for work, creativity, coding, and research. Updated weekly.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-xl mx-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            size={18}
          />
          <input
            type="text"
            placeholder="Search tools by name, tag, or use case..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[--card] border border-[--border] focus:outline-none focus:border-[--accent] transition"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[--accent] text-white"
                  : "bg-[--card] border border-[--border] text-muted hover:border-[--accent]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-muted">
        Showing {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
      </div>

      {/* Featured Section */}
      {featured.length > 0 && activeCategory === "All" && !search && (
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles size={20} className="text-[--accent]" />
            Featured Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((tool: typeof tools[number]) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>
      )}

      {/* All Tools */}
      <section>
        <h2 className="text-xl font-bold mb-4">
          {search || activeCategory !== "All" ? "Results" : "All Tools"}
        </h2>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" && !search ? regular : filtered).map(
              (tool: typeof tools[number]) => (
                <ToolCard key={tool.id} {...tool} />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-20 text-muted">
            <p className="text-lg mb-2">No tools found</p>
            <p className="text-sm">Try adjusting your search or category filter</p>
          </div>
        )}
      </section>

      {/* Submit CTA */}
      <section className="mt-16 card rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Know a great AI tool?</h2>
        <p className="text-muted mb-4">
          Submit your tool to our directory and reach thousands of tech enthusiasts.
        </p>
        <button className="px-6 py-3 bg-[--accent] text-white rounded-xl font-medium hover:opacity-90 transition">
          Submit a Tool
        </button>
      </section>
    </div>
  );
}