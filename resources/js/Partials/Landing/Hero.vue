<template>
    <div class="bg-[#e8e8e8]">
        <div class="relative mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-16">
            <!-- Main Content -->
            <div class="flex flex-col container mx-auto lg:flex-row">
                <!-- Left Column -->
                <div class="lg:w-3/4 z-10 relative">
                    <h1
                        class="text-3xl md:text-4xl tracking-tight lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Easiest way to find
                        <br />
                        your dream place
                    </h1>

                    <p class="text-gray-600 text-lg max-w-md mb-12">
                        Your trusted partner in finding the perfect home. We'll
                        help you navigate every step of your real estate
                        journey.
                    </p>

                    <!-- Replace old search with Form component -->
                    <Form />

                    <!-- Stats -->
                    <div class="flex gap-16 mt-16">
                        <div>
                            <div class="text-3xl font-bold text-brand-600">
                                200
                            </div>
                            <div class="text-gray-500 text-sm mt-1">
                                Award<br />Winning
                            </div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-brand-600">
                                500+
                            </div>
                            <div class="text-gray-500 text-sm mt-1">
                                Happy<br />Costumer
                            </div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-brand-600">
                                100+
                            </div>
                            <div class="text-gray-500 text-sm mt-1">
                                Property<br />Ready
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Image -->
                <div
                    class="lg:w-7/12 absolute right-0 top-0 h-full pointer-events-none select-none"
                >
                    <img
                        src="../../../img/homexe-hero-house.png"
                        alt="Modern architectural house"
                        class="w-full h-full object-cover object-left"
                    />

                    <Noise />
                    <!-- Circular badge -->
                    <!-- <div
                        class="absolute top-8 right-8 bg-white rounded-full p-4"
                    >
                        <div class="relative w-16 h-16">
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <span
                                    class="text-[10px] tracking-wider rotate-[30deg]"
                                    >Find your dreams estate</span
                                >
                            </div>
                            <div
                                class="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "@/Partials/Landing/Form.vue";
import Noise from "@/Components/Decoration/Noise.vue";

export default {
    name: "Hero",
    components: {
        Form,
        Noise,
    },
};
</script>
