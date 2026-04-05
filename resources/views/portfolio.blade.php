@extends('layouts.app')

@section('content')
<div class="flex flex-col">
    <!-- Page Title -->
    <section class="relative overflow-hidden py-24 sm:py-32">
        <div class="container mx-auto px-4 sm:px-8">
            <div data-aos="fade-up" class="max-w-2xl">
                <h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl">
                    My <span class="gradient-text">Portfolio</span>
                </h1>
                <p class="mt-6 text-xl text-gray-500 leading-relaxed">
                    A showcase of my technical expertise and skills.
                </p>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="py-24 border-t bg-gray-50 dark:bg-zinc-900/30">
        <div class="container mx-auto px-4 sm:px-8">
            <h2 data-aos="fade-up" class="text-3xl font-bold tracking-tight sm:text-4xl mb-16 flex items-center gap-4">
                <span class="p-3 bg-rose-600 rounded-2xl text-white">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                Professional Skills
            </h2>

            <div class="grid gap-12 lg:grid-cols-2">
                @foreach($skills as $category => $categorySkills)
                <div data-aos="fade-up" class="rounded-3xl border bg-white dark:bg-zinc-900 p-8 shadow-sm transition-shadow hover:shadow-md">
                    <h3 class="text-xl font-bold mb-10 flex items-center justify-between">
                        {{ $category }}
                        <span class="text-xs font-semibold uppercase tracking-widest text-gray-400">
                            {{ count($categorySkills) }} Skills
                        </span>
                    </h3>
                    <div class="space-y-8">
                        @foreach($categorySkills as $skill)
                        <div class="space-y-3">
                            <div class="flex justify-between items-end">
                                <span class="text-sm font-bold">{{ $skill->name }}</span>
                                <span class="text-sm font-mono font-bold text-rose-600">{{ $skill->percentage }}%</span>
                            </div>
                            <div class="h-2.5 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-rose-600 to-pink-500 transition-all duration-1000" style="width: {{ $skill->percentage }}%"></div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>
</div>
@endsection
