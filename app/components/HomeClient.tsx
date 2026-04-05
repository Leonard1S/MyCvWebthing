'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Briefcase, MapPin, Mail, ChevronRight, GraduationCap, Target, Compass, Quote, User, Phone, Sword, Shield, Trophy } from 'lucide-react';
import type { PersonalData, Experience } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

interface HomeClientProps {
  personalData: PersonalData;
  experiences: Experience[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomeClient({ personalData, experiences }: HomeClientProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-col relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" 
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section - Redesigned for CV */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:pb-40 border-b border-border">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Picture Placeholder - RPG Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative shrink-0 group"
            >
              {/* LVL 1 Badge */}
              <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 z-20 bg-primary px-4 py-2 rounded-xl shadow-lg border-2 border-primary-foreground/20 rotate-12 font-black text-sm text-primary-foreground flex items-center gap-2"
              >
                <Trophy className="h-4 w-4" />
                LVL 1 PLAYER
              </motion.div>

              {/* Character Stats floating around */}
              <div className="absolute -left-12 top-10 z-10 hidden xl:block">
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Sword className="h-4 w-4" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">ATK</p>
                    <p className="text-sm font-black italic">99+</p>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -left-8 bottom-10 z-10 hidden xl:block">
                <motion.div 
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">DEF</p>
                    <p className="text-sm font-black italic">85</p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Frame Elements (Chinese/Oriental Inspired) */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-[40px] -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <div className="absolute -inset-4 border-2 border-accent/20 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-500" />

              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-[32px] border-4 border-primary shadow-2xl z-10 bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 flex items-center justify-center">
                  <Image 
                    src={personalData.hero_image || "/placeholder-user.png"} 
                    alt={personalData.name}
                    width={320}
                    height={320}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Chinese Calligraphy Style Corner Elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-foreground/40 rounded-tl-xl m-2" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-foreground/40 rounded-br-xl m-2" />
              </div>

              {/* Quote below picture */}
              {personalData.quote && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 max-w-[320px] text-center italic text-muted-foreground relative"
                >
                  <Quote className="absolute -top-4 -left-2 h-6 w-6 text-primary/10 -rotate-12" />
                  "{personalData.quote}"
                </motion.div>
              )}
            </motion.div>

            <motion.div variants={stagger} className="max-w-3xl text-center lg:text-left">
              <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary ring-1 ring-inset ring-primary/20">
                <GraduationCap className="h-4 w-4" />
                {personalData.school} and {personalData.grade}
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
                {personalData.name}
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-6 text-2xl font-bold gradient-text">
                Grade 12 Student | English, Economy, Informatics, and Cooking
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-8 text-lg text-muted-foreground leading-relaxed">
                {personalData.description}
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  View My Skills
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="flex gap-4">
                  {personalData.github && (
                    <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary hover:text-primary hover:shadow-md">
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                  {personalData.linkedin && (
                    <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-primary hover:text-primary hover:shadow-md">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-80 lg:left-3/4">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-30" />
        </div>
      </section>

      {/* Mission, Vision, Goals Section */}
      <section className="py-24 sm:py-32 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border border-border bg-background/50 hover:border-primary/30 transition-all hover:shadow-xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "{personalData.mission}"
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-10 rounded-3xl border border-border bg-background/50 hover:border-primary/30 transition-all hover:shadow-xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "{personalData.vision}"
              </p>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-3xl border border-border bg-background/50 hover:border-primary/30 transition-all hover:shadow-xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Key Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                {personalData.goals}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - Refined for Student CV */}
      {experiences.length > 0 && (
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pengalaman Praktis</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Pengalaman praktis saya, mulai dari magang hingga aktivitas kreatif pribadi.
              </p>
            </motion.div>

            <div className="mt-16 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col gap-6 rounded-3xl border border-border bg-background p-10 transition-all hover:border-primary/50 hover:shadow-2xl sm:flex-row sm:items-start sm:gap-12"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground shadow-lg shadow-primary/5 relative overflow-hidden">
                    {exp.image_url ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={exp.image_url} 
                          alt={exp.position}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback if image file is missing
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'flex items-center justify-center w-full h-full text-primary';
                              fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <GraduationCap className="h-8 w-8" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      {exp.duration && (
                        <span className="inline-flex items-center rounded-full bg-muted px-4 py-1 text-sm font-bold text-primary ring-1 ring-inset ring-primary/10">
                          {exp.duration}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-lg font-bold text-muted-foreground">{exp.company}</p>
                    <p className="mt-6 text-muted-foreground leading-relaxed max-w-4xl text-lg">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Info Section */}
      <section className="py-24 sm:py-32 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 mx-auto">
                <User className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hubungi <span className="text-primary">Saya</span></h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Saya saat ini sedang mencari peluang baru. Jangan ragu untuk menghubungi saya melalui saluran berikut.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="glass p-8 rounded-3xl border border-border bg-background/50 flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="font-bold text-base mt-1 break-all">{personalData.email}</p>
                  </div>
                </div>

                <div className="glass p-8 rounded-3xl border border-border bg-background/50 flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="font-bold text-lg mt-1">{personalData.phone}</p>
                  </div>
                </div>
                
                <div className="glass p-8 rounded-3xl border border-border bg-background/50 flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-bold text-lg mt-1">Surabaya, Indonesia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
