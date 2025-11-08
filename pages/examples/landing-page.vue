<template>
  <div :style="{ '--brand-color': currentColor }">
    <!-- =========== Header =========== -->
    <header
      class="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur-lg"
    >
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-shrink-0">
            <a href="#" class="brand-text text-2xl font-bold">
              ✨ ColorInspi
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                class="hover-brand rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Features</a
              >
              <a
                href="#testimonials"
                class="hover-brand rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Testimonials</a
              >
              <a
                href="#pricing"
                class="hover-brand rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Pricing</a
              >
              <a
                href="#"
                class="hover-brand rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Contact</a
              >
            </div>
          </div>
          <div class="hidden md:block">
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
          <a
            href="#features"
            class="hover-brand block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
            >Features</a
          >
          <a
            href="#testimonials"
            class="hover-brand block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
            >Testimonials</a
          >
          <a
            href="#pricing"
            class="hover-brand block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
            >Pricing</a
          >
          <a
            href="#"
            class="hover-brand block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200"
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
      <!-- =========== Hero Section =========== -->
      <section class="py-20 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <p
              class="brand-text text-base font-semibold uppercase tracking-wider"
            >
              The future of teamwork
            </p>
            <h1
              class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Organize projects, tasks, and teams.
              <span class="brand-gradient block bg-clip-text text-transparent">
                All in one place.
              </span>
            </h1>
            <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              ColorInspi is the ultimate project management tool designed to
              help your team collaborate seamlessly, track progress
              effortlessly, and achieve goals faster than ever.
            </p>
            <div class="mt-10 flex justify-center gap-x-6">
              <a
                href="#"
                class="brand-bg hover-brand-dark focus-outline-brand rounded-md px-5 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Start your 14-day free trial
              </a>
              <a
                href="#"
                class="group flex items-center gap-x-2 text-base font-semibold leading-6 text-slate-700"
              >
                Learn more
                <span class="transition-transform group-hover:translate-x-1"
                  >→</span
                >
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- =========== Features Section =========== -->
      <section id="features" class="bg-white py-20 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2
              class="brand-text text-base font-semibold uppercase tracking-wider"
            >
              Powerful Features
            </h2>
            <p
              class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Everything you need to ship better products
            </p>
            <p class="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              We've packed ColorInspi with features that remove friction from
              your workflow and let you focus on what matters.
            </p>
          </div>
          <div class="mt-12">
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div class="pt-6">
                <div
                  class="flow-root rounded-lg border border-slate-200 bg-slate-50 px-6 pb-8 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div class="-mt-6">
                    <div>
                      <span
                        class="brand-bg inline-flex items-center justify-center rounded-md p-3 shadow-lg"
                      >
                        <svg
                          class="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-bold tracking-tight text-slate-900"
                    >
                      Task Management
                    </h3>
                    <p class="mt-5 text-base text-slate-600">
                      Create, assign, and track tasks with customizable boards.
                      Use Kanban, lists, or calendar views to manage your work
                      your way.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6">
                <div
                  class="flow-root rounded-lg border border-slate-200 bg-slate-50 px-6 pb-8 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div class="-mt-6">
                    <div>
                      <span
                        class="brand-bg inline-flex items-center justify-center rounded-md p-3 shadow-lg"
                      >
                        <svg
                          class="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3 3 0 0110.5 9.75v-.75a3 3 0 013-3h.75a3 3 0 013 3v.75a3 3 0 01-3 3h-.75a3 3 0 01-3-3zM9 11.25v1.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3v-1.5a3 3 0 013-3h1.5a3 3 0 013 3z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-bold tracking-tight text-slate-900"
                    >
                      Team Collaboration
                    </h3>
                    <p class="mt-5 text-base text-slate-600">
                      Communicate in real-time with integrated chat, share
                      files, and hold video meetings without ever leaving the
                      app.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6">
                <div
                  class="flow-root rounded-lg border border-slate-200 bg-slate-50 px-6 pb-8 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div class="-mt-6">
                    <div>
                      <span
                        class="brand-bg inline-flex items-center justify-center rounded-md p-3 shadow-lg"
                      >
                        <svg
                          class="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-bold tracking-tight text-slate-900"
                    >
                      Advanced Reporting
                    </h3>
                    <p class="mt-5 text-base text-slate-600">
                      Get insights into your team's performance with
                      customizable dashboards and detailed reports on project
                      progress and resource allocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- =========== Testimonials Section =========== -->
      <section id="testimonials" class="py-20 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2
              class="brand-text text-base font-semibold uppercase tracking-wider"
            >
              Don't just take our word for it
            </h2>
            <p
              class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Trusted by teams at the world's best companies
            </p>
          </div>
          <div
            class="mx-auto mt-16 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-2"
          >
            <div
              class="flex flex-col rounded-lg border border-slate-200 bg-white p-8 shadow-sm"
            >
              <blockquote class="text-lg text-slate-600">
                <p>
                  "ColorInspi has completely transformed how our team works. The
                  ability to see everything in one place has made us more
                  efficient and our projects are consistently delivered on
                  time."
                </p>
              </blockquote>
              <div class="mt-6 flex items-center gap-x-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Sarah Dayan"
                />
                <div>
                  <div class="font-semibold text-slate-900">Sarah Dayan</div>
                  <div class="text-slate-600">
                    Project Manager, Innovate Inc.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col rounded-lg border border-slate-200 bg-white p-8 shadow-sm"
            >
              <blockquote class="text-lg text-slate-600">
                <p>
                  "The collaboration features are a game-changer. We've cut down
                  on so many meetings because we can communicate and share files
                  directly within our tasks. It's brilliant."
                </p>
              </blockquote>
              <div class="mt-6 flex items-center gap-x-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Michael Foster"
                />
                <div>
                  <div class="font-semibold text-slate-900">Michael Foster</div>
                  <div class="text-slate-600">
                    Lead Developer, TechSolutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- =========== CTA Section =========== -->
      <section id="pricing" class="brand-bg">
        <div
          class="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8"
        >
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block">Start your free trial today.</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-white opacity-90">
            No credit card required. Cancel anytime.
          </p>
          <a
            href="#"
            class="brand-text mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium transition-colors hover:bg-slate-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </section>
    </main>

    <!-- =========== Footer =========== -->
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
definePageMeta({
  layout: 'example',
})

const isMobileMenuOpen = ref(false)
const currentColor = ref('rgb(79, 70, 229)') // Default indigo-600

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  const stored = localStorage.getItem('currentColor')
  if (stored) {
    try {
      const parsed = JSON.parse(stored)
      currentColor.value = parsed.code
    } catch (e) {
      currentColor.value = stored
    }
  }
})
</script>

<style scoped>
/* Brand color utilities using CSS custom properties */
.brand-text {
  color: var(--brand-color);
}

.brand-bg {
  background-color: var(--brand-color);
}

.hover-brand:hover {
  color: var(--brand-color);
}

.hover-brand-dark:hover {
  background-color: color-mix(in srgb, var(--brand-color) 85%, black);
}

.focus-ring-brand:focus {
  --tw-ring-color: var(--brand-color);
}

.focus-outline-brand:focus-visible {
  outline-color: var(--brand-color);
}

.brand-gradient {
  background-image: linear-gradient(
    to right,
    var(--brand-color),
    color-mix(in srgb, var(--brand-color), #ec4899 50%)
  );
}
</style>
