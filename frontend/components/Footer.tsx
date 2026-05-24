import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-[var(--accent)] mb-3">
              <Zap size={20} />
              TechPulse
            </Link>
            <p className="text-sm text-muted">
              Curating the best in tech news and AI tools for developers, founders, and innovators.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Content</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/" className="hover:text-[var(--accent)]">Latest News</Link></li>
              <li><Link href="/tools" className="hover:text-[var(--accent)]">AI Tools</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)]">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="#" className="hover:text-[var(--accent)]">About</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)]">Advertise</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="#" className="hover:text-[var(--accent)]">Privacy</Link></li>
              <li><Link href="#" className="hover:text-[var(--accent)]">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-muted">
          © 2026 TechPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}