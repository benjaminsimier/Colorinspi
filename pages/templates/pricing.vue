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
    <!-- =========== Header (Untouched) =========== -->
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
                >Testimonials</a
              >
              <a
                href="#pricing-grid"
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
            >Testimonials</a
          >
          <a
            href="#pricing-grid"
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
      <!-- =========== Pricing Hero Section =========== -->
      <section class="py-20 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <!-- Subtitle uses Accent 2 -->
          <p
            class="accent-2-text text-base font-semibold uppercase tracking-wider"
          >
            Simple, Transparent Pricing
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Choose the plan that
            <!-- Gradient uses Brand Color and Accent 2 (from active scheme) -->
            <span class="brand-gradient block bg-clip-text text-transparent">
              powers your team.
            </span>
          </h1>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            Whether you're a small startup or a large enterprise, we have a plan
            built to fit your needs and scale with your success.
          </p>

          <!-- Pricing Toggle (Using Brand Colors) -->
          <div
            class="brand-bg/10 brand-text/20 mt-10 inline-flex rounded-full p-1 ring-1 ring-inset"
          >
            <!-- Button 1: Monthly -->
            <button
              @click="toggleBilling(true)"
              :class="[
                isMonthlyBilling
                  ? 'brand-bg text-white shadow-sm'
                  : 'text-slate-700 hover:bg-white/50',
              ]"
              class="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              Monthly billing
            </button>
            <!-- Button 2: Annual -->
            <button
              @click="toggleBilling(false)"
              :class="[
                !isMonthlyBilling
                  ? 'brand-bg text-white shadow-sm'
                  : 'text-slate-700 hover:bg-white/50',
              ]"
              class="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              Annual billing (Save 20%)
            </button>
          </div>
        </div>
      </section>

      <!-- =========== Pricing Grid Section =========== -->
      <section id="pricing-grid" class="bg-white pb-20 sm:pb-24 lg:pb-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <!-- Plan 1: Basic -->
            <div class="rounded-3xl p-8 ring-1 ring-slate-200 xl:p-10">
              <h3
                id="tier-basic"
                class="text-2xl font-bold tracking-tight text-slate-900"
              >
                Basic
              </h3>
              <p class="mt-4 text-sm leading-6 text-slate-600">
                Ideal for small teams and personal projects.
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span
                  class="text-4xl font-extrabold tracking-tight text-slate-900"
                  >${{ basicPrice.amount }}</span
                >
                <span class="text-sm font-semibold leading-6 text-slate-600">{{
                  basicPrice.period
                }}</span>
              </p>

              <!-- Secondary CTA uses Accent 1 for subtle focus -->
              <a
                href="#"
                aria-describedby="tier-basic"
                class="accent-1-text brand-bg/5 accent-border-1 hover:brand-bg mt-6 block rounded-md border py-2 text-center text-sm font-semibold leading-6 transition-colors hover:text-white"
              >
                Get started
              </a>

              <ul
                role="list"
                class="mt-8 space-y-3 text-sm leading-6 text-slate-600"
              >
                <li class="flex gap-x-3">
                  <!-- Icon uses Brand Color -->
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>5 active projects</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Standard support</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>10GB storage</span>
                </li>
              </ul>
            </div>

            <!-- Plan 2: Pro (Highlighted - uses Brand colors heavily) -->
            <div
              class="brand-border rounded-3xl p-8 shadow-xl ring-2 ring-inset xl:p-10"
            >
              <div class="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-pro"
                  class="brand-text text-2xl font-bold tracking-tight"
                >
                  Pro
                </h3>
                <p
                  class="brand-bg rounded-full px-2.5 py-1 text-xs font-semibold leading-5 text-white"
                >
                  Most popular
                </p>
              </div>
              <p class="mt-4 text-sm leading-6 text-slate-500">
                Everything you need to scale your growing team.
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="brand-text text-4xl font-extrabold tracking-tight"
                  >${{ proPrice.amount }}</span
                >
                <span class="brand-text text-sm font-semibold leading-6">{{
                  proPrice.period
                }}</span>
              </p>

              <!-- Primary CTA uses Brand BG and Accent 3 hover -->
              <a
                href="#"
                aria-describedby="tier-pro"
                class="brand-bg hover-brand-dark focus-outline-brand mt-6 block rounded-md px-5 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Buy Pro Plan
              </a>

              <ul
                role="list"
                class="brand-text mt-8 space-y-3 text-sm leading-6"
              >
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Unlimited active projects</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Priority 24/7 support</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>500GB storage</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Advanced reporting</span>
                </li>
              </ul>
            </div>

            <!-- Plan 3: Enterprise -->
            <div class="rounded-3xl p-8 ring-1 ring-slate-200 xl:p-10">
              <h3
                id="tier-enterprise"
                class="text-2xl font-bold tracking-tight text-slate-900"
              >
                Enterprise
              </h3>
              <p class="mt-4 text-sm leading-6 text-slate-600">
                Custom features and dedicated support for large organizations.
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span
                  class="text-4xl font-extrabold tracking-tight text-slate-900"
                  >Custom</span
                >
              </p>

              <!-- Secondary CTA uses Accent 1 text/hover -->
              <a
                href="#"
                aria-describedby="tier-enterprise"
                class="accent-1-text accent-border-1 hover:accent-border-1 mt-6 block rounded-md border py-2 text-center text-sm font-semibold leading-6 text-slate-900 transition-colors hover:bg-slate-50"
              >
                Contact sales
              </a>

              <ul
                role="list"
                class="mt-8 space-y-3 text-sm leading-6 text-slate-600"
              >
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Unlimited everything</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>SLA guarantees</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Single sign-on (SSO)</span>
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="brand-text h-6 w-5 flex-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- =========== FAQ Section =========== -->
      <section class="bg-slate-50 py-20 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <!-- Subtitle uses Accent 1 -->
            <h2
              class="accent-1-text text-base font-semibold uppercase tracking-wider"
            >
              Frequently asked questions
            </h2>
            <p
              class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Need more details? We've got you covered.
            </p>
          </div>

          <dl class="mx-auto mt-16 max-w-3xl space-y-6">
            <!-- FAQ Item 1 -->
            <div class="rounded-lg bg-white p-6 shadow">
              <dt class="text-lg font-medium text-slate-900">
                What is a "user" counted as?
              </dt>
              <dd class="mt-2 text-base text-slate-600">
                A user is any unique team member who requires access to the
                platform, including administrators, editors, and collaborators.
              </dd>
            </div>
            <!-- FAQ Item 2 (Uses brand text for emphasis) -->
            <div class="rounded-lg bg-white p-6 shadow">
              <dt class="brand-text text-lg font-medium">
                Can I switch plans anytime?
              </dt>
              <dd class="mt-2 text-base text-slate-600">
                Yes, you can upgrade, downgrade, or cancel your subscription at
                any time directly through your account dashboard. Changes take
                effect immediately for upgrades.
              </dd>
            </div>
            <!-- FAQ Item 3 -->
            <div class="rounded-lg bg-white p-6 shadow">
              <dt class="text-lg font-medium text-slate-900">
                Do you offer discounts for non-profits?
              </dt>
              <dd class="mt-2 text-base text-slate-600">
                We offer a 50% discount for registered non-profit organizations.
                Please contact our sales team to verify your status and apply
                the discount.
              </dd>
            </div>
            <!-- FAQ Item 4 (Uses accent 2 text for emphasis) -->
            <div class="rounded-lg bg-white p-6 shadow">
              <dt class="accent-2-text text-lg font-medium">
                Is there a free trial for the Pro plan?
              </dt>
              <dd class="mt-2 text-base text-slate-600">
                Absolutely! All paid plans come with a 14-day risk-free trial.
                No credit card is required to start the trial.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- =========== Final CTA Section (using original #pricing ID) =========== -->
      <section id="pricing" class="brand-bg">
        <div
          class="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8"
        >
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">Still deciding?</span>
            <span class="block">Start your free trial today.</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-white opacity-90">
            No credit card required. Cancel anytime.
          </p>
          <!-- Button text uses Accent 1 -->
          <a
            href="#"
            class="accent-1-text mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium transition-colors hover:bg-slate-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </section>
    </main>

    <!-- =========== Footer (Untouched) =========== -->
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
import { ref, computed, onMounted } from 'vue' // Explicitly import ref and computed

definePageMeta({
  layout: 'example',
})

// Assume useUserColorStore is defined elsewhere and contains settings and currentColor
declare const useUserColorStore: () => any

const userColorStore = useUserColorStore()

const isMobileMenuOpen = ref(false)

// === NEW: Pricing Toggle State ===
const isMonthlyBilling = ref(true)

const toggleBilling = (isMonthly: boolean) => {
  isMonthlyBilling.value = isMonthly
}

// Compute prices based on the billing state (simulating 20% annual discount)
const basicPrice = computed(() =>
  isMonthlyBilling.value
    ? { amount: 12, period: '/user/month' }
    : { amount: 10, period: '/user/month', notice: 'Billed annually at $120' }
)
const proPrice = computed(() =>
  isMonthlyBilling.value
    ? { amount: 29, period: '/user/month' }
    : { amount: 23, period: '/user/month', notice: 'Billed annually at $276' }
)
// =================================

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
