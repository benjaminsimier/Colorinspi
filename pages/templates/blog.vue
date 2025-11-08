<template>
  <div
    :style="{
      '--brand-color': currentColor.code,
      // Pulling accents from the active scheme array
      '--accent-1': activeScheme[0] ? activeScheme[0].code : '#3b82f6',
      '--accent-2': activeScheme[1] ? activeScheme[1].code : '#4f46e5',
      '--accent-3': activeScheme[2] ? activeScheme[2].code : '#1e40af',
    }"
  >
    <!-- =========== Header (Reused) =========== -->
    <header
      class="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur-lg"
    >
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-shrink-0">
            <a href="/" class="brand-text text-2xl font-bold">
              ✨ ColorInspi
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Using Accent 1 for nav link hover -->
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Features</a
              >
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Blog</a
              >
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Pricing</a
              >
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Contact</a
              >
            </div>
          </div>
          <div class="hidden md:block">
            <!-- Primary CTA uses brand-bg and brand-dark hover (now controlled by Accent 3) -->
            <a
              href="#"
              class="brand-bg hover-brand-dark inline-block rounded-md px-4 py-2 text-sm font-medium text-white transition-all duration-200"
            >
              Get Started Free
            </a>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              @click="toggleMobileMenu"
              type="button"
              class="focus-ring-brand inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-controls="mobile-menu"
              :aria-expanded="isMobileMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                :class="{ hidden: !isMobileMenuOpen, block: isMobileMenuOpen }"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
        class="md:hidden"
      >
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <!-- Using Accent 1 for mobile menu hover -->
          <a
            href="#"
            class="hover-accent-1 block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
            >Features</a
          >
          <a
            href="#"
            class="hover-accent-1 block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
            >Blog</a
          >
          <a
            href="#"
            class="hover-accent-1 block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
            >Pricing</a
          >
          <a
            href="#"
            class="hover-accent-1 block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
            >Contact</a
          >
        </div>
        <div class="border-t border-slate-200 pb-3 pt-4">
          <div class="px-2">
            <a
              href="#"
              class="brand-bg hover-brand-dark block w-full rounded-md px-4 py-2 text-left text-base font-medium text-white transition-all duration-200"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="pt-16">
      <!-- =========== Blog Header Section (Reused) =========== -->
      <section class="py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <!-- Subtitle uses Brand Text -->
          <p
            class="brand-text text-base font-semibold uppercase tracking-wider"
          >
            Insights & Inspiration
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            The ColorInspi Blog
          </h1>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            Stay up to date with the latest trends in visual project management,
            team collaboration, and design psychology.
          </p>
        </div>
      </section>

      <!-- =========== Blog List and Sidebar (UPDATED CARDS) =========== -->
      <section class="pb-20 sm:pb-24 lg:pb-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <!-- Blog Articles (Main Content - Col 8) -->
            <div class="lg:col-span-8">
              <div class="grid gap-x-8 gap-y-16 sm:grid-cols-2">
                <!-- Blog Card 1: Enhanced Design -->
                <article
                  class="hover:accent-border-1 group flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div class="relative w-full">
                    <img
                      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2294"
                      alt=""
                      class="aspect-[16/10] w-full object-cover transition duration-300 group-hover:opacity-90"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex items-center gap-x-4 text-xs">
                      <!-- Category Tag using Brand colors -->
                      <a
                        href="#"
                        class="brand-bg/10 brand-text hover:brand-bg relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                        >Development</a
                      >
                      <time datetime="2024-10-26" class="text-xs text-slate-500"
                        >Oct 26, 2024</time
                      >
                    </div>
                    <div class="relative">
                      <h3
                        class="group-hover:brand-text mt-3 text-xl font-bold leading-7 text-slate-900 transition-colors duration-200"
                      >
                        <a href="#">
                          <span class="absolute inset-0"></span>
                          How to integrate ColorInspi with GitHub Actions
                        </a>
                      </h3>
                      <p class="mt-3 text-base leading-6 text-slate-600">
                        Automate your task status updates and sync commits
                        directly to your project board for seamless CI/CD
                        tracking.
                      </p>
                    </div>
                    <div class="mt-5">
                      <!-- "Read article" uses Accent 2 for visual pop -->
                      <a
                        href="#"
                        class="accent-2-text hover:accent-1 text-sm font-semibold transition-colors group-hover:underline"
                      >
                        Read article <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </article>

                <!-- Blog Card 2: Enhanced Design -->
                <article
                  class="hover:accent-border-1 group flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div class="relative w-full">
                    <img
                      src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370"
                      alt=""
                      class="aspect-[16/10] w-full object-cover transition duration-300 group-hover:opacity-90"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex items-center gap-x-4 text-xs">
                      <a
                        href="#"
                        class="brand-bg/10 brand-text hover:brand-bg relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                        >Design</a
                      >
                      <time datetime="2024-10-20" class="text-xs text-slate-500"
                        >Oct 20, 2024</time
                      >
                    </div>
                    <div class="relative">
                      <h3
                        class="group-hover:brand-text mt-3 text-xl font-bold leading-7 text-slate-900 transition-colors duration-200"
                      >
                        <a href="#">
                          <span class="absolute inset-0"></span>
                          Choosing the right color scheme for clarity
                        </a>
                      </h3>
                      <p class="mt-3 text-base leading-6 text-slate-600">
                        Explore our guide on monochromatic, analogous, and
                        triadic palettes and when to use them for project
                        clarity.
                      </p>
                    </div>
                    <div class="mt-5">
                      <a
                        href="#"
                        class="accent-2-text hover:accent-1 text-sm font-semibold transition-colors group-hover:underline"
                      >
                        Read article <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </article>

                <!-- Blog Card 3: Enhanced Design -->
                <article
                  class="hover:accent-border-1 group flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div class="relative w-full">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370"
                      alt=""
                      class="aspect-[16/10] w-full object-cover transition duration-300 group-hover:opacity-90"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex items-center gap-x-4 text-xs">
                      <a
                        href="#"
                        class="brand-bg/10 brand-text hover:brand-bg relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                        >Productivity</a
                      >
                      <time datetime="2024-10-15" class="text-xs text-slate-500"
                        >Oct 15, 2024</time
                      >
                    </div>
                    <div class="relative">
                      <h3
                        class="group-hover:brand-text mt-3 text-xl font-bold leading-7 text-slate-900 transition-colors duration-200"
                      >
                        <a href="#">
                          <span class="absolute inset-0"></span>
                          5 ways to eliminate internal meetings using async
                          tools
                        </a>
                      </h3>
                      <p class="mt-3 text-base leading-6 text-slate-600">
                        Learn how to leverage features like collaborative
                        documents and integrated chat to cut down on unnecessary
                        meetings.
                      </p>
                    </div>
                    <div class="mt-5">
                      <a
                        href="#"
                        class="accent-2-text hover:accent-1 text-sm font-semibold transition-colors group-hover:underline"
                      >
                        Read article <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </article>

                <!-- Blog Card 4: Enhanced Design -->
                <article
                  class="hover:accent-border-1 group flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div class="relative w-full">
                    <img
                      src="https://images.unsplash.com/photo-1581091870598-36ce9bad5c77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370"
                      alt=""
                      class="aspect-[16/10] w-full object-cover transition duration-300 group-hover:opacity-90"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex items-center gap-x-4 text-xs">
                      <a
                        href="#"
                        class="brand-bg/10 brand-text hover:brand-bg relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                        >Strategy</a
                      >
                      <time datetime="2024-10-10" class="text-xs text-slate-500"
                        >Oct 10, 2024</time
                      >
                    </div>
                    <div class="relative">
                      <h3
                        class="group-hover:brand-text mt-3 text-xl font-bold leading-7 text-slate-900 transition-colors duration-200"
                      >
                        <a href="#">
                          <span class="absolute inset-0"></span>
                          Scaling project management: From 10 to 100 people
                        </a>
                      </h3>
                      <p class="mt-3 text-base leading-6 text-slate-600">
                        The key pitfalls to avoid and the structure you need to
                        maintain efficiency as your company expands rapidly.
                      </p>
                    </div>
                    <div class="mt-5">
                      <a
                        href="#"
                        class="accent-2-text hover:accent-1 text-sm font-semibold transition-colors group-hover:underline"
                      >
                        Read article <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </article>
                <!-- More articles would follow here -->
              </div>
            </div>

            <!-- Sidebar (Categories & CTA - Reused) -->
            <aside class="mt-16 lg:col-span-4 lg:mt-0">
              <!-- Search (Neutral) -->
              <div class="mb-10 rounded-lg bg-slate-50 p-6 shadow-sm">
                <h3 class="mb-4 text-lg font-semibold text-slate-900">
                  Search Blog
                </h3>
                <div class="flex">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    class="w-full rounded-l-md border border-slate-300 p-2 text-sm focus:border-slate-500 focus:ring-slate-500"
                  />
                  <button
                    class="brand-bg hover-brand-dark rounded-r-md px-4 text-white transition-colors"
                  >
                    Go
                  </button>
                </div>
              </div>

              <!-- Categories List -->
              <div
                class="rounded-lg bg-white p-6 shadow-md ring-1 ring-slate-200"
              >
                <h3
                  class="accent-2-text mb-6 text-lg font-bold uppercase tracking-wider"
                >
                  Categories
                </h3>
                <ul class="space-y-3">
                  <li>
                    <!-- Category link uses brand text on hover -->
                    <a
                      href="#"
                      class="hover:brand-text text-slate-700 transition-colors"
                      >Productivity (8)</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:brand-text text-slate-700 transition-colors"
                      >Design & UX (14)</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:brand-text text-slate-700 transition-colors"
                      >Engineering (5)</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:brand-text text-slate-700 transition-colors"
                      >Announcements (3)</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:brand-text text-slate-700 transition-colors"
                      >Customer Stories (7)</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Sidebar CTA -->
              <div class="brand-bg mt-10 rounded-lg p-8 text-center shadow-xl">
                <h3 class="text-2xl font-bold text-white">
                  Unlock Visual Efficiency
                </h3>
                <p class="mt-3 text-white opacity-80">
                  Try ColorInspi free for 14 days and see the difference a truly
                  visual workflow makes.
                </p>
                <a
                  href="#"
                  class="accent-1-text mt-6 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium transition-colors hover:bg-slate-50"
                >
                  Get Started Now
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- =========== Footer (Reused) =========== -->
      <footer class="bg-slate-900">
        <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8 xl:col-span-1">
              <a href="#" class="text-3xl font-bold text-white"
                >✨ ColorInspi</a
              >
              <p class="text-base text-slate-400">
                The best way to organize, manage, and scale your team's work.
              </p>
              <div class="flex space-x-6">
                <a href="#" class="text-slate-400 hover:text-white">
                  <span class="sr-only">Facebook</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" class="text-slate-400 hover:text-white">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
                <a href="#" class="text-slate-400 hover:text-white">
                  <span class="sr-only">GitHub</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3
                    class="text-sm font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Solutions
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Marketing</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Analytics</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Commerce</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Insights</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3
                    class="text-sm font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Support
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Pricing</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Documentation</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Guides</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >API Status</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3
                    class="text-sm font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Company
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >About</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Blog</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Jobs</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Press</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3
                    class="text-sm font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Legal
                  </h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Claim</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Privacy</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base text-slate-400 hover:text-white"
                        >Terms</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 border-t border-slate-700 pt-8">
            <p class="text-base text-slate-400 xl:text-center">
              &copy; 2025 ColorInspi, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  layout: 'example',
})

// Assume useUserColorStore is defined elsewhere and contains settings and currentColor
declare const useUserColorStore: () => any

const userColorStore = useUserColorStore()

const isMobileMenuOpen = ref(false)

// 1. Compute the current mode safely
const currentMode = computed(
  () => userColorStore.settings?.mode || 'monochrome'
)

// Define a robust, comprehensive fallback for the color object
const FALLBACK_COLOR_DATA = {
  code: '#3b82f6', // Default brand color
  matchingColors: {
    monochrome: [{ code: '#3b82f6' }, { code: '#1e40af' }, { code: '#bfdbfe' }],
    analogic: [{ code: '#3b82f6' }, { code: '#4f46e5' }, { code: '#ef4444' }],
    complement: [{ code: '#3b82f6' }, { code: '#facc15' }, { code: '#14b8a6' }],
    triad: [{ code: '#3b82f6' }, { code: '#f43f5e' }, { code: '#14b8a6' }],
  },
}

const currentColor = computed(() => {
  // Use the stored color, or the full fallback structure
  return userColorStore.currentColor || FALLBACK_COLOR_DATA
})

// 2. Select the accent scheme array, guaranteeing it is a valid array of at least 3 items.
const activeScheme = computed(() => {
  const mode = currentMode.value

  // Safely attempt to retrieve the scheme for the current mode
  const colors = currentColor.value.matchingColors?.[mode]

  // Default to the monochrome scheme from the fallback data if the requested mode is missing,
  // or if the array is incomplete/null (which should prevent the 500 error).
  const defaultScheme = FALLBACK_COLOR_DATA.matchingColors.monochrome

  if (colors && colors.length >= 3) {
    return colors
  }

  // If data is null or incomplete, return a guaranteed safe default
  return defaultScheme
})

onMounted(() => {
  userColorStore.loadFromStorage()
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
/* Brand color utilities using CSS custom properties */
.brand-text {
  color: var(--brand-color);
}

.brand-bg {
  background-color: var(--brand-color);
}
.brand-border {
  border-color: var(--brand-color);
}

/* --- New Accent 1 Classes (Index 0 of active scheme) --- */
.accent-1-text {
  color: var(--accent-1);
}
.accent-border-1 {
  border-color: var(--accent-1);
}
.hover-accent-1:hover {
  color: var(--accent-1);
}

/* --- New Accent 2 Classes (Index 1 of active scheme) --- */
.accent-2-text {
  color: var(--accent-2);
}
.hover-accent-2:hover {
  color: var(--accent-2);
}

/* --- New Accent 3 Classes (Index 2 of active scheme) --- */
.accent-bg-3\/10 {
  /* Used for subtle background elements, like in-content CTA */
  background-color: color-mix(in srgb, var(--accent-3) 10%, transparent);
}

.hover-brand:hover {
  color: var(--brand-color);
}

.hover-brand-dark:hover {
  /* Using Accent 3 (Index 2 of active scheme) */
  background-color: var(--accent-3);
}

.focus-ring-brand:focus {
  --tw-ring-color: var(--brand-color);
}

.focus-outline-brand:focus-visible {
  outline-color: var(--brand-color);
}

.brand-gradient {
  /* Dynamic gradient using the primary brand color and Accent 2 */
  background-image: linear-gradient(
    to right,
    var(--brand-color),
    var(--accent-2)
  );
}
</style>
