import { ArrowUpRight, Clock } from "lucide-react";

interface ArticleProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  icon: string;
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  gradient,
  icon,
}: ArticleProps) {
  return (
    <article className="card group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
      <div
        className={`h-48 flex items-center justify-center text-4xl text-white ${gradient}`}
      >
        {icon}
      </div>
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
          {category}
        </span>
        <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-[var(--accent)] transition">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {date} • {readTime}
          </span>
          <span className="flex items-center gap-1 font-medium text-[var(--accent)]">
            Read <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}