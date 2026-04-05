'use client';

import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  email?: string;
  github?: string;
  linkedin?: string;
}

export default function Footer({ email, github, linkedin }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t bg-background py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold tracking-tighter gradient-text">Aurelio</h2>
            <p className="mt-4 max-w-xs text-center text-sm text-muted-foreground md:text-left">
              Searching for high quality digital experiences with passion.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:items-end">
            <div className="flex gap-6">
              {email && (
                <a href={`mailto:${email}`} className="text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-6 w-6" />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                  <Github className="h-6 w-6" />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-10 text-xs font-medium text-muted-foreground sm:flex-row">
          <p>© 2026 Aurelius. All rights reserved.</p>
          <div className="flex gap-8">
            <p>Built with Next.js, Tailwind & SQLite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
