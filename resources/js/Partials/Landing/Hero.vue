<template>
    <div class="bg-[#e8e8e8]">
        <div
            class="relative container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-16"
        >
            <!-- Main Content -->
            <div class="flex flex-col lg:flex-row">
                <!-- Left Column -->
                <div class="lg:w-3/4 z-10 relative">
                    <h1
                        class="text-3xl md:text-4xl tracking-tight lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Easiest way to find<br />
                        your dream place
                    </h1>

                    <p class="text-gray-600 text-lg max-w-md mb-12">
                        this is where you can find a dream place for you of
                        various types, all over the world at affordable prices.
                    </p>

                    <!-- Search Container -->
                    <div class="">
                        <!-- Buy/Rent Toggle -->
                        <div class="inline-flex bg-white">
                            <button
                                :class="[
                                    'px-8 py-3 font-medium transition-all border-b-2',
                                    activeTab === 'buy'
                                        ? 'border-black'
                                        : 'text-gray-400 bg-gray-100 border-white',
                                ]"
                                @click="setTab('buy')"
                            >
                                Buy
                            </button>
                            <button
                                :class="[
                                    'px-8 py-3 font-medium transition-all border-b-2',
                                    activeTab === 'rent'
                                        ? 'border-black'
                                        : 'text-gray-400 bg-gray-100 border-white',
                                ]"
                                @click="setTab('rent')"
                            >
                                Rent
                            </button>
                        </div>

                        <!-- Search Form -->
                        <div class="bg-white px-6 py-4 grid grid-cols-3 gap-8">
                            <div>
                                <label class="block text-sm text-gray-500 mb-2"
                                    >Location</label
                                >
                                <TextInput
                                    type="text"
                                    v-model="location"
                                    placeholder="Long Beach, California"
                                    class="w-full border-none !shadow-none px-0 focus:outline-none focus:ring-0"
                                />
                            </div>
                            <div>
                                <label class="block text-sm text-gray-500 mb-2"
                                    >Start</label
                                >
                                <TextInput
                                    type="text"
                                    v-model="startDate"
                                    placeholder="Dec 16, 10:30 PM"
                                    class="w-full border-none !shadow-none px-0 focus:outline-none focus:ring-0"
                                />
                            </div>
                            <div class="relative">
                                <label class="block text-sm text-gray-500 mb-2"
                                    >End</label
                                >
                                <TextInput
                                    type="text"
                                    v-model="endDate"
                                    placeholder="Dec 16, 10:30 PM"
                                    class="w-full border-none !shadow-none px-0 focus:outline-none focus:ring-0"
                                />
                                <button
                                    class="absolute right-0 bottom-0 bg-black p-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

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
import TextInput from "@/Components/TextInput.vue";
import Noise from "@/Components/Decoration/Noise.vue";

export default {
    name: "Hero",
    components: {
        TextInput,
        Noise,
    },
    data() {
        return {
            activeTab: "buy",
            location: "",
            startDate: "",
            endDate: "",
        };
    },
    methods: {
        setTab(tab) {
            this.activeTab = tab;
        },
    },
};
</script>
