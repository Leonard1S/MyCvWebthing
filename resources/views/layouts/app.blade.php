<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aurelio Sugiarto - CV Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <style>
        :root {
            --primary: #e11d48;
            --accent: #f43f5e;
        }
        .gradient-text {
            background: linear-gradient(to right, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        [x-cloak] { display: none !important; }
    </style>
</head>
<body class="bg-[#fdfcfb] dark:bg-[#09090b] text-[#1c1917] dark:text-[#fafafa] transition-colors duration-300">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
            <a href="{{ route('home') }}" class="text-2xl font-bold tracking-tighter gradient-text">
                Aurelio
            </a>
            <nav class="flex items-center gap-8 text-sm font-medium">
                <a href="{{ route('home') }}" class="{{ request()->routeIs('home') ? 'text-rose-600' : 'text-gray-500 hover:text-rose-600' }} transition-colors">Home</a>
                <a href="{{ route('portfolio') }}" class="{{ request()->routeIs('portfolio') ? 'text-rose-600' : 'text-gray-500 hover:text-rose-600' }} transition-colors">Portfolio</a>
            </nav>
        </div>
    </header>

    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="border-t bg-white dark:bg-zinc-950 py-20">
        <div class="container mx-auto px-4 sm:px-8 text-center">
            <h2 class="text-2xl font-bold tracking-tighter gradient-text mb-4">Aurelio Sugiarto</h2>
            <p class="text-sm text-gray-500 mb-8">© 2026 Aurelio Sugiarto. All rights reserved.</p>
            <div class="flex justify-center gap-6">
                <a href="{{ $personalData->github ?? '#' }}" target="_blank" class="text-gray-400 hover:text-rose-600 transition-colors">GitHub</a>
                <a href="{{ $personalData->linkedin ?? '#' }}" target="_blank" class="text-gray-400 hover:text-rose-600 transition-colors">LinkedIn</a>
                <a href="mailto:{{ $personalData->email ?? '' }}" class="text-gray-400 hover:text-rose-600 transition-colors">Email</a>
            </div>
        </div>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            once: true,
        });
    </script>
</body>
</html>
