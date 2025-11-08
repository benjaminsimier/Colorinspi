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
    <!-- =========== Header (Updated with Cart Button) =========== -->
    <header
      class="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur-lg"
    >
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-shrink-0">
            <a href="/" class="brand-text text-2xl font-bold">
              ✨ ColorInspi Store
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Using Accent 1 for nav link hover -->
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Shop</a
              >
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Collections</a
              >
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >About</a
              >
              <a
                href="#"
                class="hover-accent-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors"
                >Contact</a
              >
            </div>
          </div>
          <div class="flex items-center">
            <!-- Shopping Cart Icon / Toggle Cart -->
            <button
              @click="toggleCart"
              class="brand-text hover:accent-1 group inline-flex items-center gap-x-2 rounded-md p-2 text-sm font-medium transition-colors"
              aria-label="Open shopping cart"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.528a.75.75 0 00-.728-.568H8.814a.75.75 0 00-.728.568l-1.83 6.657a.75.75 0 00.728.932h12.871a.75.75 0 00.728-.932l-1.83-6.657z"
                />
              </svg>
              ({{ cartItems.length }})
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-16">
      <!-- =========== Product Detail Section =========== -->
      <section class="py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-16">
            <!-- Column 1: Product Gallery (Updated to use Vue state) -->
            <div>
              <!-- Main Image -->
              <div
                class="h-[380px] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-slate-200"
              >
                <img
                  :src="mainImage"
                  alt="ColorInspi Pro Tablet"
                  class="h-full w-full object-cover object-center transition-opacity duration-500"
                />
              </div>
              <!-- Thumbnails -->
              <div class="mt-6 grid grid-cols-4 gap-4">
                <div
                  v-for="(image, index) in galleryImages"
                  :key="index"
                  @click="setMainImage(image.full)"
                  class="cursor-pointer overflow-hidden rounded-lg transition duration-300"
                  :class="[
                    image.full === mainImage
                      ? 'brand-border ring-2 ring-opacity-100'
                      : 'hover:brand-border ring-1 ring-slate-200 hover:ring-2',
                  ]"
                >
                  <img
                    :src="image.thumb"
                    :alt="image.alt"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <!-- Column 2: Product Info and Purchase -->
            <div class="mt-10 lg:mt-0">
              <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">
                ColorInspi Pro Tablet
              </h1>

              <!-- Price -->
              <p class="brand-text mt-4 text-4xl font-extrabold">
                $499.00
                <span class="ml-2 text-base text-slate-500 line-through"
                  >$699.00</span
                >
              </p>

              <!-- Reviews/Rating (Reused logic) -->
              <div class="mt-4 flex items-center">
                <div class="flex items-center">
                  <svg
                    class="accent-1-text h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="accent-1-text h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="accent-1-text h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="accent-1-text h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    class="h-5 w-5 text-slate-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm font-medium text-slate-600">
                  4.2 out of 5 stars
                </p>
                <a
                  href="#reviews"
                  class="brand-text hover-accent-1 ml-3 text-sm font-medium"
                  >See all 128 reviews</a
                >
              </div>

              <!-- Short Description (Reused) -->
              <div class="mt-6 space-y-6">
                <p class="text-base text-slate-700">
                  The ultimate portable workstation designed for visual
                  thinkers. Pre-loaded with dynamic color scheme tools and built
                  for fluid multitasking across design and project management
                  apps.
                </p>
              </div>

              <!-- Options/Variants (Placeholder) -->
              <div class="mt-8">
                <h3 class="text-sm font-medium text-slate-900">Color</h3>
                <div class="mt-2 flex items-center space-x-3">
                  <!-- Color Swatch 1 uses Accent 2 -->
                  <label
                    class="accent-2-text relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-2 focus:outline-none"
                  >
                    <input
                      type="radio"
                      name="color-choice"
                      value="Midnight Blue"
                      class="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      :style="{ 'background-color': 'var(--accent-2)' }"
                      class="h-8 w-8 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                  <!-- Color Swatch 2 uses Brand Color -->
                  <label
                    class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-1 ring-slate-300 focus:outline-none"
                  >
                    <input
                      type="radio"
                      name="color-choice"
                      value="Crimson Red"
                      class="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      :style="{ 'background-color': 'var(--brand-color)' }"
                      class="h-8 w-8 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                </div>
              </div>

              <!-- Purchase Controls -->
              <div class="mt-10">
                <div class="flex items-center gap-x-4">
                  <!-- Quantity Input -->
                  <input
                    type="number"
                    min="1"
                    value="1"
                    class="focus:brand-border focus:ring-brand w-20 rounded-md border border-slate-300 p-3 text-center text-lg font-medium text-slate-900"
                  />

                  <!-- Add to Cart CTA uses Brand color -->
                  <button
                    type="submit"
                    class="brand-bg hover-brand-dark flex flex-1 items-center justify-center rounded-md px-8 py-3 text-base font-medium text-white shadow-md transition-all duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <!-- Guarantees/Delivery Info (Reused) -->
              <div class="mt-8 border-t border-slate-200 pt-8">
                <div class="flex items-center gap-x-3">
                  <svg
                    class="accent-1-text h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 18L10.5 16.5m0 0l-2.25-2.25M12 21.75l-1.5-1.5m1.5 1.5l1.5-1.5M12 21.75V16.5m0 0l-2.25 2.25M12 16.5l2.25 2.25M10.5 16.5l-2.25 2.25M13.5 16.5l2.25 2.25M8.25 18h7.5"
                    />
                  </svg>
                  <span class="text-sm text-slate-600"
                    >Free 3-Day Shipping on all orders.</span
                  >
                </div>
                <div class="mt-3 flex items-center gap-x-3">
                  <svg
                    class="brand-text h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <span class="text-sm text-slate-600"
                    >30-Day Money Back Guarantee.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- =========== Product Tabs (Description & Reviews) - FUNCTIONAL =========== -->
      <section class="bg-slate-50 py-20 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <!-- Tab Navigation -->
          <div class="border-b border-slate-200">
            <nav class="-mb-px flex space-x-8">
              <!-- Tab 1: Product Details -->
              <button
                @click="changeTab('details')"
                :class="[
                  activeTab === 'details'
                    ? 'brand-border brand-text'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700',
                ]"
                class="whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium transition-colors"
              >
                Product Details
              </button>
              <!-- Tab 2: Specifications -->
              <button
                @click="changeTab('specs')"
                :class="[
                  activeTab === 'specs'
                    ? 'brand-border brand-text'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700',
                ]"
                class="whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium transition-colors"
              >
                Specifications
              </button>
              <!-- Tab 3: Reviews -->
              <button
                @click="changeTab('reviews')"
                :class="[
                  activeTab === 'reviews'
                    ? 'brand-border brand-text'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700',
                ]"
                id="reviews"
                class="whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium transition-colors"
              >
                Customer Reviews (128)
              </button>
            </nav>
          </div>

          <!-- Tab Content: Product Details -->
          <div
            v-if="activeTab === 'details'"
            class="prose prose-lg mt-8 max-w-none text-slate-700"
          >
            <h2>Detailed Overview</h2>
            <p>
              The ColorInspi Pro Tablet is engineered for peak creative
              performance. Featuring a retina-grade display optimized for color
              accuracy and a custom GPU for rendering complex visual projects
              without lag. Its lightweight chassis makes it the perfect
              companion for on-the-go professionals.
            </p>
            <ul>
              <li class="brand-text font-medium">
                Ultra-low latency stylus support.
              </li>
              <li>Integrated collaboration suite with real-time sync.</li>
              <li class="accent-2-text font-medium">
                Battery life up to 18 hours.
              </li>
            </ul>

            <h3>Optimized for Visual Workflow</h3>
            <p>
              Every aspect of the device is tuned to support the ColorInspi
              ecosystem, ensuring smooth interaction with dynamic color tools
              and high-fidelity graphics processing. This isn't just a tablet;
              it's a dedicated canvas for your most ambitious projects.
            </p>
          </div>

          <!-- Tab Content: Specifications -->
          <div
            v-if="activeTab === 'specs'"
            class="prose prose-lg mt-8 max-w-none text-slate-700"
          >
            <h2>Technical Specifications</h2>
            <dl class="divide-y divide-slate-200">
              <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-slate-900">Display</dt>
                <dd class="mt-1 sm:col-span-2 sm:mt-0">
                  12.9" ProMotion Retina XDR
                </dd>
              </div>
              <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="brand-text font-medium">Processor</dt>
                <dd class="mt-1 sm:col-span-2 sm:mt-0">
                  ColorInspi M3 Pro Chip (8-Core)
                </dd>
              </div>
              <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-slate-900">Storage</dt>
                <dd class="mt-1 sm:col-span-2 sm:mt-0">256GB / 512GB / 1TB</dd>
              </div>
              <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="accent-2-text font-medium">Battery</dt>
                <dd class="mt-1 sm:col-span-2 sm:mt-0">
                  Up to 18 hours (web browsing)
                </dd>
              </div>
              <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-slate-900">Weight</dt>
                <dd class="mt-1 sm:col-span-2 sm:mt-0">1.5 lbs (680 g)</dd>
              </div>
            </dl>
          </div>

          <!-- Tab Content: Customer Reviews -->
          <div
            v-if="activeTab === 'reviews'"
            class="prose prose-lg mt-8 max-w-none text-slate-700"
          >
            <h2>Customer Reviews (128)</h2>
            <p class="brand-text text-xl font-bold">Overall Rating: 4.2 / 5</p>

            <div class="space-y-8 divide-y divide-slate-200">
              <!-- Review 1 -->
              <div class="pt-6">
                <div class="flex items-center space-x-2">
                  <div class="flex items-center">
                    <svg
                      class="accent-1-text h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="accent-1-text h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="accent-1-text h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="accent-1-text h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 text-slate-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-900">— Sarah L.</p>
                </div>
                <h4 class="mt-2 text-lg font-bold">
                  Unmatched color accuracy for designers!
                </h4>
                <p class="mt-1 text-base">
                  The display on this tablet is genuinely phenomenal. The
                  ability to switch between color profiles for different
                  projects seamlessly has cut my pre-press time in half. A
                  must-have for anyone serious about visual work.
                </p>
              </div>
              <!-- Review 2 -->
              <div class="pt-6">
                <div class="flex items-center space-x-2">
                  <div class="flex items-center">
                    <svg
                      class="accent-1-text h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="accent-1-text h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="accent-1-text h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 text-slate-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 text-slate-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1.25l2.83 5.75 6.33.918-4.58 4.46.918 6.33-5.5-2.9-5.5 2.9.918-6.33-4.58-4.46 6.33-.918L10 1.25z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-900">
                    — Michael G.
                  </p>
                </div>
                <h4 class="accent-2-text mt-2 text-lg font-bold">
                  Great device, but stylus is sold separately.
                </h4>
                <p class="mt-1 text-base">
                  The performance is top-notch, especially the processor
                  handling multiple high-res applications. My only
                  disappointment was finding out the stylus (essential for
                  design) is an additional purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Related Products Section (Reused) -->
      <section class="py-20 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold tracking-tight text-slate-900">
            Related Products
          </h2>
          <div
            class="mt-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8"
          >
            <div class="group relative">
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-100 transition-shadow duration-300 group-hover:shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Product 1"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-slate-700">
                    <a href="#" class="group-hover:brand-text">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Pro Stylus Pen
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-slate-500">Accessories</p>
                </div>
                <p class="brand-text text-sm font-medium">$99.00</p>
              </div>
            </div>
            <div class="group relative">
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-100 transition-shadow duration-300 group-hover:shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1746645524470-41dd97d4db58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2148"
                  alt="Product 2"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-slate-700">
                    <a href="#" class="group-hover:brand-text">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Ergonomic Dock
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-slate-500">Hardware</p>
                </div>
                <p class="brand-text text-sm font-medium">$149.00</p>
              </div>
            </div>
            <div class="group relative">
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-100 transition-shadow duration-300 group-hover:shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1661431507807-c6b4622cf1d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370"
                  alt="Product 3"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-slate-700">
                    <a href="#" class="group-hover:brand-text">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Color Calibrator
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-slate-500">Tools</p>
                </div>
                <p class="brand-text text-sm font-medium">$299.00</p>
              </div>
            </div>
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

    <!-- =========== Sidebar Cart Overlay =========== -->
    <div
      :class="{
        'pointer-events-auto': isCartOpen,
        'pointer-events-none': !isCartOpen,
      }"
      class="fixed inset-0 z-[60] overflow-hidden"
    >
      <!-- Background Overlay (for closing cart on click outside) -->
      <div
        @click="toggleCart"
        :class="{ 'opacity-100': isCartOpen, 'opacity-0': !isCartOpen }"
        class="absolute inset-0 bg-slate-900/50 transition-opacity duration-500"
        aria-hidden="true"
      ></div>

      <!-- Slide-Out Panel -->
      <div
        :class="{
          'translate-x-0': isCartOpen,
          'translate-x-full': !isCartOpen,
        }"
        class="fixed inset-y-0 right-0 flex max-w-full pl-10 transition-transform duration-500 sm:pl-16"
      >
        <div class="w-screen max-w-md">
          <div
            class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
          >
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="brand-text text-lg font-bold" id="slide-over-title">
                  Shopping Cart ({{ cartItems.length }})
                </h2>
                <div class="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    @click="toggleCart"
                    class="relative -m-2 p-2 text-slate-400 hover:text-slate-500"
                  >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Cart Item List -->
              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-slate-200">
                    <li
                      v-for="item in cartItems"
                      :key="item.id"
                      class="flex py-6"
                    >
                      <div
                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-200"
                      >
                        <img
                          :src="item.image"
                          :alt="item.name"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div
                            class="flex justify-between text-base font-medium text-slate-900"
                          >
                            <h3>
                              <a href="#">{{ item.name }}</a>
                            </h3>
                            <p class="ml-4">${{ item.price.toFixed(2) }}</p>
                          </div>
                          <p class="mt-1 text-sm text-slate-500">
                            {{ item.variant }}
                          </p>
                        </div>
                        <div
                          class="flex flex-1 items-end justify-between text-sm"
                        >
                          <p class="text-slate-500">Qty {{ item.quantity }}</p>

                          <div class="flex">
                            <!-- Remove button uses Accent 2 hover -->
                            <button
                              type="button"
                              class="accent-2-text hover:accent-1-text font-medium transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Cart Summary and CTAs -->
            <div class="border-t border-slate-200 px-4 py-6 sm:px-6">
              <div
                class="flex justify-between text-base font-medium text-slate-900"
              >
                <p>Subtotal</p>
                <p>${{ cartTotal.toFixed(2) }}</p>
              </div>
              <p class="mt-0.5 text-sm text-slate-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="brand-bg hover-brand-dark flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
                >
                  Checkout
                </a>
              </div>
              <div
                class="mt-6 flex justify-center text-center text-sm text-slate-500"
              >
                <p>
                  or
                  <button
                    type="button"
                    @click="toggleCart"
                    class="brand-text hover-accent-1 font-medium transition-colors"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

// === Cart State and Logic ===
const isCartOpen = ref(false)

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
}

// Simulated Cart Data
const cartItems = ref([
  {
    id: 1,
    name: 'Pro Tablet',
    href: '#',
    price: 499.0,
    quantity: 1,
    variant: 'Midnight Blue',
    image:
      'https://images.unsplash.com/flagged/photo-1574507926668-26e97fb1041f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2834',
  },
  {
    id: 2,
    name: 'Pro Stylus Pen',
    href: '#',
    price: 99.0,
    quantity: 2,
    variant: 'White',
    image:
      'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=150&h=150&q=80',
  },
])

const cartTotal = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
})
// ==================================

// === Image Gallery State ===
const galleryImages = [
  {
    full: 'https://images.unsplash.com/flagged/photo-1574507926668-26e97fb1041f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2834',
    thumb:
      'https://images.unsplash.com/flagged/photo-1574507926668-26e97fb1041f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2834',
    alt: 'ColorInspi Pro Tablet Main',
  },
  {
    full: 'https://images.unsplash.com/photo-1607452284716-051f853690e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2280',
    thumb:
      'https://images.unsplash.com/photo-1607452284716-051f853690e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2280',
    alt: 'ColorInspi Pro Tablet Closeup',
  },
  {
    full: 'https://images.unsplash.com/photo-1607452258653-8a9a2eed4669?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370',
    thumb:
      'https://images.unsplash.com/photo-1607452258653-8a9a2eed4669?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370',
    alt: 'ColorInspi Pro Tablet Lifestyle',
  },
  {
    full: 'https://images.unsplash.com/photo-1589070265406-1f9e9b5a141f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2832',
    thumb:
      'https://images.unsplash.com/photo-1589070265406-1f9e9b5a141f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2832',
    alt: 'ColorInspi Pro Tablet Back View',
  },
]

const mainImage = ref(galleryImages[0].full)

const setMainImage = (url: string) => {
  mainImage.value = url
}
// ==================================

// === Tab Logic ===
const activeTab = ref('details')

const changeTab = (tabName: string) => {
  activeTab.value = tabName
}
// ======================

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

/* Accent BG for Feature/Integration section */
.accent-2-bg {
  background-color: var(--accent-2);
}

.accent-bg-3\/10 {
  background-color: color-mix(in srgb, var(--accent-3) 10%, transparent);
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
.hover-accent-1-text:hover {
  color: var(--accent-1);
}

/* --- New Accent 2 Classes (Index 1 of active scheme) --- */
.accent-2-text {
  color: var(--accent-2);
}
.hover-accent-2:hover {
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
/* Utility for Woo-style aspect ratios - defined to prevent errors */
.aspect-h-1 {
  /* Generic aspect ratio override for placeholder images */
  aspect-ratio: 1 / 1;
}
.aspect-w-1 {
  /* Generic aspect ratio override for placeholder images */
  width: 100%;
}
</style>
