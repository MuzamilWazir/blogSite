"use client";

import { ExternalLink, Star } from "lucide-react";

interface ToolProps {
  name: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export default function ToolCard({
  name,
  description,
  category,
  url,
  tags,
  featured,
}: ToolProps) {
  return (
    <div
      className={`card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative ${
        featured ? "ring-2 ring-[var(--accent)]" : ""
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </span>
      )}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            {category}
          </span>
          <h3 className="mt-1 text-xl font-bold">{name}</h3>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="text-sm text-muted mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-[var(--background)] border border-[var(--border)] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}