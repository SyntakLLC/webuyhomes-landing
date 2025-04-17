<template>
    <div class="bg-[#e8e8e8]">
        <div
            class="relative px-4 pt-10 pb-10 mx-auto md:px-6 lg:px-8 md:pt-20 md:pb-16"
        >
            <!-- Main Content -->
            <div class="container flex flex-col mx-auto lg:flex-row">
                <!-- Left Column -->
                <div class="lg:w-3/4 z-[1] relative">
                    <h1
                        class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl md:mb-6"
                    >
                        Easiest way to find
                        <br class="hidden sm:block" />
                        your dream place
                    </h1>

                    <p class="max-w-md mb-6 text-lg text-gray-600 md:mb-12">
                        Your trusted partner in finding the perfect home. We'll
                        help you navigate every step of your real estate
                        journey.
                    </p>

                    <!-- Mobile Image - Only visible on mobile -->
                    <div
                        class="relative block z-[-1] -mb-12 overflow-hidden rounded-lg lg:hidden"
                    >
                        <img
                            src="../../../img/homexe-hero-house.png"
                            alt="Modern architectural house"
                            class="object-cover object-center w-full h-full"
                        />
                    </div>

                    <Form />

                    <!-- Stats -->
                    <div
                        class="flex flex-wrap justify-between gap-8 mt-10 lg:justify-start md:gap-16 md:mt-16"
                    >
                        <div>
                            <div class="text-3xl font-bold text-brand-600">
                                200+
                            </div>
                            <div class="mt-1 text-sm text-gray-500">
                                5 Star<br />Reviews
                            </div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-brand-600">
                                500+
                            </div>
                            <div class="mt-1 text-sm text-gray-500">
                                Happy<br />Customers
                            </div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-brand-600">
                                100+
                            </div>
                            <div class="mt-1 text-sm text-gray-500">
                                Properties<br />Ready
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Image (Desktop only) -->
                <div
                    class="lg:w-7/12 lg:absolute hidden lg:block mt-8 lg:mt-0 right-0 top-0 h-[300px] lg:h-full pointer-events-none select-none"
                >
                    <img
                        src="../../../img/homexe-hero-house.png"
                        alt="Modern architectural house"
                        class="object-cover object-center w-full h-full lg:object-left"
                    />

                    <Noise />
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
