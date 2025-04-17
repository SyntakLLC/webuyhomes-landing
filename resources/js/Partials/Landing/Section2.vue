<template>
    <div class="py-12 bg-white container-size">
        <!-- Black Background Section -->
        <div class="p-12 mb-12 text-white bg-black rounded-size">
            <h1 class="mb-4 text-center heading-lg">
                Transform Your Home Sale
            </h1>
            <p class="max-w-3xl mx-auto mb-8 text-center">
                Experience a personalized approach to real estate with Homexe.
                We help you sell your home faster and for more money.
            </p>

            <!-- Before/After Stats -->
            <div class="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
                <div
                    class="p-6 text-center border border-white/20 rounded-size"
                >
                    <div class="mb-2 text-2xl font-bold">Before Marketing</div>
                    <ul class="space-y-2 text-gray-300">
                        <li>Standard Market Value</li>
                        <li>Basic Listing</li>
                        <li>As-Is Condition</li>
                    </ul>
                </div>
                <div
                    class="p-6 text-center border border-brand-500 bg-brand-500/10 rounded-size"
                >
                    <div class="mb-2 text-2xl font-bold">After Marketing</div>
                    <ul class="space-y-2 text-gray-300">
                        <li>Increased Market Value</li>
                        <li>Premium Exposure</li>
                        <li>Enhanced Presentation</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Options Cards -->
        <div class="grid gap-8 md:grid-cols-2">
            <!-- Market-Ready Card -->
            <div class="p-8 text-white bg-brand-500 rounded-size">
                <h2 class="mb-4 text-2xl font-bold">Market-Ready Sale</h2>
                <p class="mb-6">
                    Get your home market-ready and maximize its value with our
                    professional guidance.
                </p>

                <div class="space-y-4">
                    <div class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        <span>Professional Market Analysis</span>
                    </div>
                    <div class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        <span>Professional Photography</span>
                    </div>
                    <div class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        <span>Flexible Closing Timeline</span>
                    </div>
                </div>

                <Link href="/how-it-works">
                    <button
                        class="px-6 py-3 mt-8 font-bold transition-colors bg-white text-brand-500 rounded-size hover:bg-gray-100"
                    >
                        Learn More
                    </button>
                </Link>
            </div>

            <!-- Premium Marketing Card -->
            <div class="p-8 bg-gray-100 rounded-size">
                <h2 class="mb-4 text-2xl font-bold">Premium Marketing</h2>
                <p class="mb-6">
                    Perfect for sellers looking to maximize exposure and value
                    through enhanced marketing.
                </p>

                <div class="space-y-4 text-gray-700">
                    <div class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-6 h-6 mr-3 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        <span>Premium Marketing Exposure</span>
                    </div>
                    <div class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-6 h-6 mr-3 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        <span>Expert Guidance</span>
                    </div>
                    <div class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-6 h-6 mr-3 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        <span>"Fix and List" Option Available</span>
                    </div>
                </div>

                <Link href="/how-it-works">
                    <button
                        class="px-6 py-3 mt-8 font-bold text-white transition-colors bg-black rounded-size hover:bg-secondary-500"
                    >
                        Learn More
                    </button>
                </Link>
            </div>
        </div>

        <p class="mt-8 text-sm text-center text-gray-600">
            *Ask about our premium staging and renovation consultation services
        </p>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    name: "Section2",
    components: {
        Link,
    },
};
</script>
