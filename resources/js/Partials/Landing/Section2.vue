<template>
    <div class="bg-white py-12 container-size">
        <!-- Black Background Section -->
        <div class="bg-black text-white p-12 rounded-size mb-12">
            <h1 class="heading-lg text-center mb-4">
                Transform Your Home Sale
            </h1>
            <p class="text-center mb-8 max-w-3xl mx-auto">
                Experience a personalized approach to real estate with Homexe.
                We help you sell your home faster and for more money.
            </p>

            <!-- Before/After Stats -->
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div
                    class="text-center p-6 border border-white/20 rounded-size"
                >
                    <div class="text-2xl font-bold mb-2">Before Marketing</div>
                    <ul class="space-y-2 text-gray-300">
                        <li>Standard Market Value</li>
                        <li>Basic Listing</li>
                        <li>As-Is Condition</li>
                    </ul>
                </div>
                <div
                    class="text-center p-6 border border-brand-500 bg-brand-500/10 rounded-size"
                >
                    <div class="text-2xl font-bold mb-2">After Marketing</div>
                    <ul class="space-y-2 text-gray-300">
                        <li>Increased Market Value</li>
                        <li>Premium Exposure</li>
                        <li>Enhanced Presentation</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Options Cards -->
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Market-Ready Card -->
            <div class="bg-brand-500 text-white p-8 rounded-size">
                <h2 class="text-2xl font-bold mb-4">Market-Ready Sale</h2>
                <p class="mb-6">
                    Get your home market-ready and maximize its value with our
                    professional guidance.
                </p>

                <div class="space-y-4">
                    <div class="flex items-center">
                        <svg
                            class="w-6 h-6 mr-3 flex-shrink-0"
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
                            class="w-6 h-6 mr-3 flex-shrink-0"
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
                            class="w-6 h-6 mr-3 flex-shrink-0"
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

                <button
                    class="mt-8 bg-white text-brand-500 px-6 py-3 rounded-size font-bold hover:bg-gray-100 transition-colors"
                >
                    Learn More
                </button>
            </div>

            <!-- Premium Marketing Card -->
            <div class="bg-gray-100 p-8 rounded-size">
                <h2 class="text-2xl font-bold mb-4">Premium Marketing</h2>
                <p class="mb-6">
                    Perfect for sellers looking to maximize exposure and value
                    through enhanced marketing.
                </p>

                <div class="space-y-4 text-gray-700">
                    <div class="flex items-center">
                        <svg
                            class="w-6 h-6 mr-3 flex-shrink-0 text-green-500"
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
                            class="w-6 h-6 mr-3 flex-shrink-0 text-green-500"
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
                            class="w-6 h-6 mr-3 flex-shrink-0 text-green-500"
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

                <button
                    class="mt-8 bg-black text-white px-6 py-3 rounded-size font-bold hover:bg-secondary-500 transition-colors"
                >
                    Learn More
                </button>
            </div>
        </div>

        <p class="text-center mt-8 text-sm text-gray-600">
            *Ask about our premium staging and renovation consultation services
        </p>
    </div>
</template>

<script>
export default {
    name: "Section2",
};
</script>
