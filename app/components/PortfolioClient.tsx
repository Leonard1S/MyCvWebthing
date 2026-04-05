'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import type { Skill, Project } from '@/lib/data';
import Image from 'next/image';

interface PortfolioClientProps {
  skills: Skill[];
  projects: Project[];
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function PortfolioClient({ skills, projects }: PortfolioClientProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const withBasePath = (url?: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    const normalized = url.startsWith('/') ? url : `/${url}`;
    return `${basePath}${normalized}`;
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-col"
    >
      {/* Page Title */}
      <section id="top" className="relative overflow-hidden py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Portofolio <span className="gradient-text">Akademik</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Kumpulan keterampilan dan pencapaian akademis saya di mata pelajaran pilihan saya.
            </p>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 sm:py-32 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Code2 className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Penguasaan Mata Pelajaran</h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {Object.entries(groupedSkills).map(([category, categorySkills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-foreground mb-10 flex items-center justify-between">
                  {category}
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {categorySkills.length} Skills
                  </span>
                </h3>
                <div className="space-y-8">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono font-bold text-primary">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects.length > 0 && (
        <section id="projects" className="py-24 sm:py-32 border-t border-border bg-background">
          <div className="container mx-auto px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proyek Unggulan</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Pilihan dari proyek akademis dan pribadi saya baru-baru ini.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-3xl border border-border bg-muted/30 transition-all hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="aspect-video w-full bg-muted relative overflow-hidden">
                    {project.image_url ? (
                      <Image
                        src={withBasePath(project.image_url)}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center text-muted-foreground font-medium italic';
                            fallback.innerText = 'Project Showcase';
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center text-muted-foreground font-medium italic">
                        Project Showcase
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech_stack.split(',').map((tech) => (
                        <span
                          key={tech.trim()}
                          className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

    </motion.div>
  );
}
