<template>
    <div class="relative z-10">
        <div
            :class="[
                'relative py-4 z-10',
                $slots.title ? 'bg-homexe-black dark' : 'bg-[#e8e8e8]',
            ]"
        >
            <div
                class="flex justify-between px-5 mx-auto h-full leading-6 text-zinc-800 container"
            >
                <!-- Logo -->
                <div
                    class="flex justify-start items-center text-zinc-800 md:w-[165px]"
                >
                    <div class="flex flex-col items-start h-full text-left">
                        <Link
                            href="/"
                            class="px-5 flex items-center flex-shrink-0 space-x-2"
                        >
                            <Logo />
                        </Link>
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <div
                    class="hidden md:flex justify-end items-center text-zinc-800"
                >
                    <div
                        class="flex flex-row items-center max-w-full border-zinc-300"
                    >
                        <nav class="block mr-4">
                            <ul class="flex gap-4">
                                <li
                                    v-for="item in navItems"
                                    :key="item.title"
                                    class="flex relative flex-col list-none text-left"
                                >
                                    <a
                                        :href="item.url"
                                        class="flex justify-start items-center py-0 px-2 text-sm font-medium tracking-wide leading-7 text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 capitalize bg-transparent border-0 border-transparent border-solid cursor-pointer"
                                    >
                                        {{ item.title }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <!-- Online Quote Button -->
                <div class="flex items-center w-[165px]">
                    <a
                        class="inline-block py-3 px-6 max-w-full font-semibold text-sm tracking-wider text-center text-white bg-homexe-black border border-none cursor-pointer border-slate-400 hover:border-slate-400 hover:bg-gray-800"
                        href="/#form"
                        target="_self"
                    >
                        Online Quote &rarr;
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button
                        @click="isMenuOpen = true"
                        class="text-gray-500 focus:outline-none"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition name="fade" appear>
                <div
                    v-if="isMenuOpen"
                    class="fixed inset-0 bg-homexe-black bg-opacity-50 z-40"
                    @click="isMenuOpen = false"
                ></div>
            </transition>
            <transition name="slide-fade">
                <div
                    v-if="isMenuOpen"
                    class="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg !z-50"
                    @click.stop
                >
                    <div class="p-4">
                        <button
                            @click="isMenuOpen = false"
                            class="absolute top-4 right-4 text-gray-500 focus:outline-none"
                        >
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                        <nav class="mt-8">
                            <ul class="space-y-4">
                                <li v-for="item in navItems" :key="item.title">
                                    <a
                                        :href="item.url"
                                        class="block py-2 px-4 text-lg font-medium text-gray-500 hover:bg-gray-100 rounded"
                                    >
                                        {{ item.title }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <a
                            href="/#form"
                            class="block mt-6 py-2 px-4 text-lg font-extrabold text-center text-white bg-black rounded-lg hover:bg-secondary-500"
                        >
                            Online Quote &rarr;
                        </a>
                    </div>
                </div>
            </transition>
        </div>

        <div v-if="$slots.title" class="bg-homexe-black">
            <div class="relative w-full h-full overflow-hidden">
                <div
                    class="relative flex flex-col container-size py-14 mx-auto h-full leading-6"
                >
                    <h2
                        class="mx-0 mt-0 max-w-full text-left text-white heading-max"
                    >
                        <slot name="title" />
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import Logo from "@/Components/Logo.vue";

export default {
    name: "Header",
    components: { Logo, Link },
    setup() {
        const isMenuOpen = ref(false);

        const navItems = [
            {
                title: "How It Works",
                url: "/how-it-works/",
            },
            {
                title: "Compare",
                url: "/compare/",
            },
            // {
            //     title: 'Our Company',
            //     url: 'https://www.sellmyhousefast.com/our-company/'
            // },
            // {
            //     title: 'About Us',
            //     url: 'https://www.sellmyhousefast.com/about-us/'
            // },
            // {
            //     title: 'Investors',
            //     url: 'https://www.sellmyhousefast.com/leads/'
            // }
        ];

        return {
            navItems,
            isMenuOpen,
        };
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(100%);
}
</style>
