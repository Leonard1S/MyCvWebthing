@extends('layouts.app')

@section('content')
<div class="flex flex-col">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-24 sm:py-32 lg:pb-40 border-b">
        <div class="container mx-auto px-4 sm:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-16">
                <div data-aos="fade-right" class="relative shrink-0">
                    <div class="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-3xl border-4 border-rose-500/20 shadow-2xl">
                        <div class="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 flex items-center justify-center">
                            <img src="{{ asset($personalData->hero_image ?? 'img/profile-pic.png') }}" alt="{{ $personalData->name ?? '' }}" class="object-cover w-full h-full">
                        </div>
                    </div>
                    @if($personalData->quote)
                    <div data-aos="fade-up" data-aos-delay="400" class="mt-8 max-w-[320px] text-center italic text-gray-500">
                        "{{ $personalData->quote }}"
                    </div>
                    @endif
                </div>

                <div data-aos="fade-left" class="max-w-3xl text-center lg:text-left">
                    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-4 py-1.5 text-sm font-bold text-rose-600 ring-1 ring-inset ring-rose-500/20">
                        <span>🎓 {{ $personalData->school ?? '' }} • {{ $personalData->grade ?? '' }}</span>
                    </div>
                    <h1 class="text-5xl font-extrabold tracking-tight sm:text-7xl">
                        {{ $personalData->name ?? '' }}
                    </h1>
                    <p class="mt-6 text-2xl font-bold gradient-text">
                        {{ $personalData->role ?? '' }}
                    </p>
                    <p class="mt-8 text-lg text-gray-500 leading-relaxed">
                        {{ $personalData->description ?? '' }}
                    </p>
                    <div class="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                        <a href="{{ route('portfolio') }}" class="inline-flex items-center gap-2 rounded-full bg-rose-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-rose-700 hover:shadow-lg">
                            Explore My Work
                        </a>
                        <div class="flex gap-4">
                            <a href="{{ $personalData->github ?? '#' }}" target="_blank" class="inline-flex h-14 w-14 items-center justify-center rounded-full border bg-white dark:bg-zinc-900 transition-all hover:border-rose-500 hover:text-rose-600">
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 4.338 9.63 10.322 11.123.599.109.817-.259.817-.577 0-.285-.021-1.04-.032-2.04-4.172.906-5.052-2.01-5.052-2.01-.682-1.732-1.664-2.193-1.664-2.193-1.362-.93.103-.912.103-.912 1.506.106 2.3 1.546 2.3 1.546 1.338 2.29 3.507 1.628 4.361 1.244.136-.97.542-1.628 1.007-2.007-3.322-.378-6.816-1.66-6.816-7.392 0-1.632.583-2.966 1.542-4.011-.154-.378-.668-1.898.147-3.954 0 0 1.255-.402 4.11 1.532 1.192-.331 2.471-.497 3.743-.502 1.271.005 2.55.171 3.744.502 2.854-1.934 4.108-1.532 4.108-1.532.817 2.056.303 3.576.149 3.954.961 1.045 1.54 2.379 1.54 4.011 0 5.747-3.5 7.01-6.83 7.38.538.463 1.02 1.378 1.02 2.778 0 2.006-.018 3.623-.018 4.114 0 .323.214.692.825.574 12.008-3.993 16.338-8.317 16.338-13.623 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                            <a href="{{ $personalData->linkedin ?? '#' }}" target="_blank" class="inline-flex h-14 w-14 items-center justify-center rounded-full border bg-white dark:bg-zinc-900 transition-all hover:border-rose-500 hover:text-rose-600">
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission, Vision, Goals Section -->
    <section class="py-24 bg-gray-50 dark:bg-zinc-900/50 border-b">
        <div class="container mx-auto px-4 sm:px-8">
            <div class="grid gap-8 md:grid-cols-3">
                <div data-aos="fade-up" class="glass p-10 rounded-3xl border bg-white/50 dark:bg-black/50 transition-all hover:shadow-xl">
                    <h3 class="text-2xl font-bold mb-4 text-rose-600">Mission</h3>
                    <p class="text-gray-500 italic">"{{ $personalData->mission ?? '' }}"</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" class="glass p-10 rounded-3xl border bg-white/50 dark:bg-black/50 transition-all hover:shadow-xl">
                    <h3 class="text-2xl font-bold mb-4 text-rose-600">Vision</h3>
                    <p class="text-gray-500 italic">"{{ $personalData->vision ?? '' }}"</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" class="glass p-10 rounded-3xl border bg-white/50 dark:bg-black/50 transition-all hover:shadow-xl">
                    <h3 class="text-2xl font-bold mb-4 text-rose-600">Key Goals</h3>
                    <p class="text-gray-500">{{ $personalData->goals ?? '' }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section class="py-24">
        <div class="container mx-auto px-4 sm:px-8">
            <h2 data-aos="fade-up" class="text-3xl font-bold tracking-tight sm:text-4xl mb-16">Work Experience</h2>
            <div class="space-y-8">
                @foreach($experiences as $exp)
                <div data-aos="fade-up" class="group relative flex flex-col gap-6 rounded-3xl border p-10 transition-all hover:border-rose-500/50 hover:shadow-2xl sm:flex-row sm:items-start sm:gap-12">
                    <div class="flex-1">
                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h3 class="text-2xl font-bold">{{ $exp->position }}</h3>
                            <span class="inline-flex items-center rounded-full bg-rose-100 dark:bg-rose-900/30 px-4 py-1 text-sm font-bold text-rose-600">{{ $exp->duration }}</span>
                        </div>
                        <p class="mt-2 text-lg font-bold text-gray-500">{{ $exp->company }}</p>
                        <p class="mt-6 text-gray-500 leading-relaxed text-lg">{{ $exp->description }}</p>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Contact Info Section -->
    <section class="py-24 bg-gray-50 dark:bg-zinc-900/50 border-t">
        <div class="container mx-auto px-4 sm:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <div data-aos="fade-up">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Get in <span class="text-rose-600">Touch</span></h2>
                    <p class="mt-6 text-lg text-gray-500 leading-relaxed">
                        I am currently looking for professional opportunities and leadership roles. Feel free to reach out through the following channels.
                    </p>
                    
                    <div class="mt-12 grid gap-6 sm:grid-cols-3">
                        <div class="glass p-8 rounded-3xl border bg-white/50 dark:bg-black/50 flex flex-col items-center gap-4 transition-all hover:shadow-xl">
                            <div class="h-12 w-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                                <p class="font-bold text-base mt-1 break-all">{{ $personalData->email ?? '' }}</p>
                            </div>
                        </div>

                        <div class="glass p-8 rounded-3xl border bg-white/50 dark:bg-black/50 flex flex-col items-center gap-4 transition-all hover:shadow-xl">
                            <div class="h-12 w-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Phone</p>
                                <p class="font-bold text-lg mt-1">{{ $personalData->phone ?? '' }}</p>
                            </div>
                        </div>
                        
                        <div class="glass p-8 rounded-3xl border bg-white/50 dark:bg-black/50 flex flex-col items-center gap-4 transition-all hover:shadow-xl">
                            <div class="h-12 w-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 2.098 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                                <p class="font-bold text-lg mt-1">Surabaya, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
