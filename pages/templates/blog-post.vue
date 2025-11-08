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
      <!-- =========== Blog Post Content Area =========== -->
      <article class="py-16 sm:py-20 lg:py-28">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <!-- Metadata and Title -->
          <div class="text-center">
            <span
              class="brand-bg/10 accent-2-text brand-border/20 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset"
            >
              Design & Workflow
            </span>
            <h1
              class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            >
              The Science of Color in Project Management
              <!-- Gradient uses Brand Color and Accent 2 -->
              <span class="brand-gradient block bg-clip-text text-transparent">
                Boosting Team Focus with Visual Cues
              </span>
            </h1>
            <p class="mt-6 text-base text-slate-500">
              By
              <a href="#" class="brand-text hover-accent-2 font-medium"
                >Alex Johnson</a
              >
              <span class="mx-1">|</span> October 26, 2025
              <span class="mx-1">|</span> 8 min read
            </p>
          </div>

          <!-- Feature Image -->
          <figure class="mt-12">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-slate-900/10"
              src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370"
              alt="A vibrant, organized project dashboard using color coding."
            />
            <figcaption class="mt-3 text-center text-sm italic text-slate-500">
              Visual cues in your dashboard can dramatically improve flow and
              focus.
            </figcaption>
          </figure>

          <!-- Article Body -->
          <div class="prose prose-lg mt-12 max-w-none text-slate-700">
            <h2>Why Color Isn't Just for Aesthetics</h2>
            <p>
              In the world of fast-paced software development and complex
              projects, friction is the enemy. While we often focus on
              optimizing task flow and reducing meeting times, the simple power
              of visual organization—specifically, color coding—is frequently
              overlooked. At ColorInspi, we believe color is a functional, not
              just aesthetic, tool.
            </p>

            <p>
              Studies show that the human brain processes visual information
              60,000 times faster than text. By leveraging distinct color
              palettes, teams can instantly categorize tasks, identify priority
              levels, and understand the status of a project without reading a
              single word.
            </p>

            <!-- Pull Quote using Accent 1 border and Brand text -->
            <blockquote
              class="accent-border-1 border-l-4 p-4 italic text-slate-800"
            >
              <p>
                "Color is the quickest way to convey information. A
                well-designed color scheme removes cognitive load, allowing team
                members to focus on execution rather than interpretation."
              </p>
              <footer class="brand-text mt-2 text-sm font-semibold">
                — Sarah Chen, Lead UX Researcher
              </footer>
            </blockquote>

            <h2>Implementing a Dynamic Color Strategy</h2>
            <p>
              Our platform allows you to map specific project attributes to
              dynamic color schemes. For instance, high-priority tasks always
              use your
              <span class="brand-text font-semibold">Primary Brand Color</span>,
              while tasks in the 'Review' stage utilize the contrasting
              <span class="accent-2-text font-semibold">Accent 2 Color</span>.
              This consistency is key to muscle memory.
            </p>
            <p>
              This isn't about arbitrary choices; it's about adopting a system.
              Our algorithm automatically generates harmonious color palettes
              (Monochromatic, Analogous, Triadic) based on your core selection,
              ensuring that even complex dashboards remain visually appealing
              and, most importantly, readable.
            </p>

            <h3>Benefits for Cross-Functional Teams</h3>
            <p>
              For large organizations, different departments often use different
              terminology. A "high-risk bug" to a developer might simply be
              "urgent" to marketing. By unifying these states under a single
              color scheme,
              <a href="#" class="brand-text hover-accent-1 font-medium"
                >collaboration is streamlined</a
              >
              and onboarding new team members becomes significantly faster.
            </p>

            <!-- In-Content CTA using Accent 3 for background -->
            <div class="accent-bg-3/10 rounded-lg p-6 text-center">
              <h4 class="brand-text text-xl font-bold">
                Ready to visualize your success?
              </h4>
              <p class="mt-2 text-slate-700">
                See how dynamic color schemes can transform your team's
                efficiency.
              </p>
              <a
                href="#"
                class="brand-bg hover-brand-dark focus-outline-brand mt-4 inline-block rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200"
              >
                Explore ColorInspi Today
              </a>
            </div>

            <h2>The Future of Visual Workflow</h2>
            <p>
              The movement towards hyper-efficient digital workspaces means
              every element must serve a clear purpose. ColorInspi is committed
              to providing tools that are not only powerful in their features
              but also intuitive in their design. Start utilizing the inherent
              logic of color, and watch your project clarity soar.
            </p>
          </div>

          <!-- Author/Share Block -->
          <div
            class="mt-16 border-t border-slate-200 pt-10 sm:flex sm:items-center sm:justify-between"
          >
            <div class="flex items-center gap-x-4">
              <img
                class="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Alex Johnson"
              />
              <div>
                <div class="font-semibold text-slate-900">Alex Johnson</div>
                <div class="text-sm text-slate-600">
                  Product Marketer @ ColorInspi
                </div>
              </div>
            </div>
            <div class="mt-6 flex gap-x-4 sm:mt-0">
              <span class="text-slate-600">Share:</span>
              <a href="#" class="brand-text hover-accent-2">
                <span class="sr-only">Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
              <a href="#" class="brand-text hover-accent-2">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.41v-5.618c0-1.336-.239-2.254-1.34-2.254-1.34 0-1.55 1.054-1.55 2.203v5.669h-3.41V9.26h3.41v1.547h.047c.48-1.026 1.765-1.743 3.327-1.743 3.559 0 4.204 2.333 4.204 6.758v5.17h-3.41zM5.337 7.133a1.85 1.85 0 01-1.85-1.85c0-1.024.826-1.85 1.85-1.85s1.85.826 1.85 1.85c0 1.024-.826 1.85-1.85 1.85zm1.705 13.319h-3.41V9.26h3.41v11.192z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      <!-- =========== CTA Section (Reused) =========== -->
      <section class="brand-bg">
        <div
          class="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8"
        >
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">Ready to simplify your projects?</span>
            <span class="block">Try ColorInspi today.</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-white opacity-90">
            No credit card required. Experience truly visual management.
          </p>
          <!-- Button text uses Accent 1 -->
          <a
            href="#"
            class="accent-1-text mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium transition-colors hover:bg-slate-50 sm:w-auto"
          >
            Start your free 14-day trial
          </a>
        </div>
      </section>
    </main>

    <!-- =========== Footer (Reused) =========== -->
    <footer class="bg-slate-900">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <a href="#" class="text-3xl font-bold text-white">✨ ColorInspi</a>
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
