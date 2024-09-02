<!--<template>-->
<!--    <div class="relative bg-gradient-to-b from-black/50 to-transparent">-->
<!--        <div class="flex justify-between px-5 mx-auto h-full leading-6 text-zinc-800">-->

<!--            &lt;!&ndash; Logo &ndash;&gt;-->
<!--            <div class="flex justify-start items-center text-zinc-800">-->
<!--                <div-->
<!--                    class="flex flex-col items-start h-full text-left">-->
<!--                    <img alt="sell my house fast"-->
<!--                         src="../../../img/logo.webp"-->
<!--                         class="flex-shrink-0 mb-0 py-4 h-24 max-w-full border-none"/>-->
<!--                </div>-->
<!--            </div>-->

<!--            &lt;!&ndash; Navigation &ndash;&gt;-->
<!--            <div-->
<!--                class="flex justify-end items-center text-zinc-800">-->
<!--                <div-->
<!--                    class="flex flex-row items-center max-w-full border-zinc-300"-->
<!--                >-->
<!--                    <nav class="block mr-4">-->
<!--                        <ul class="flex gap-3 text-sm font-semibold uppercase">-->
<!--                            <li v-for="item in navItems" :key="item.title"-->
<!--                                class="flex relative flex-col list-none text-left">-->
<!--                                <a :href="item.url"-->
<!--                                   class="text-white hover:opacity-75">-->
<!--                                    {{ item.title }}-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </nav>-->
<!--                    &lt;!&ndash;                    <a&ndash;&gt;-->
<!--                    &lt;!&ndash;                        id="link_text-18-225"&ndash;&gt;-->
<!--                    &lt;!&ndash;                        class="inline-block py-2 px-4 max-w-full text-lg font-bold tracking-wider text-center text-white bg-red-400 rounded-lg border border-none cursor-pointer border-slate-400 hover:border-slate-400 hover:bg-secondary-500 hover:text-white"&ndash;&gt;-->
<!--                    &lt;!&ndash;                        href="/sell-my-house-fast-online-quote/"&ndash;&gt;-->
<!--                    &lt;!&ndash;                        target="_self">&ndash;&gt;-->
<!--                    &lt;!&ndash;                        Online Quote &rarr;&ndash;&gt;-->
<!--                    &lt;!&ndash;                    </a>&ndash;&gt;-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    name: "Header",-->

<!--    setup() {-->
<!--        const navItems = [-->
<!--            {-->
<!--                title: 'How It Works',-->
<!--                url: 'https://www.sellmyhousefast.com/how-we-buy-houses/'-->
<!--            },-->
<!--        ];-->

<!--        return {-->
<!--            navItems-->
<!--        };-->
<!--    },-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
    <div class="relative border-t-4 border-brand-500 pb-2">
        <div class="flex justify-between px-5 mx-auto max-w-5xl h-full leading-6 text-zinc-800">
            <!-- Logo -->
            <div class="flex justify-start items-center text-zinc-800">
                <div class="flex flex-col items-start h-full text-left">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex justify-end items-center text-zinc-800">
                <div class="flex flex-row items-center max-w-full border-zinc-300">
                    <nav class="block mr-4">
                        <ul class="flex">
                            <li v-for="item in navItems" :key="item.title" class="flex relative flex-col list-none text-left">
                                <a :href="item.url"
                                   class="flex justify-start items-center py-0 px-2 text-base font-medium tracking-wide leading-7 text-brand-500 capitalize bg-transparent border-0 border-transparent border-solid cursor-pointer hover:text-slate-400">
                                    {{ item.title }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a class="inline-block py-2 px-4 max-w-full text-base font-extrabold tracking-wider text-center text-white bg-secondary-600 rounded-lg border border-none cursor-pointer border-slate-400 hover:border-slate-400 hover:bg-secondary-500 hover:text-white"
                       href="/#form" target="_self">
                        Online Quote &rarr;
                    </a>
                </div>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
                <button @click="isMenuOpen = true" class="text-brand-500 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <transition name="fade" appear>
            <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="isMenuOpen = false"></div>
        </transition>
        <transition name="slide-fade">
            <div v-if="isMenuOpen" class="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50" @click.stop>
                <div class="p-4">
                    <button @click="isMenuOpen = false" class="absolute top-4 right-4 text-gray-500 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <nav class="mt-8">
                        <ul class="space-y-4">
                            <li v-for="item in navItems" :key="item.title">
                                <a :href="item.url"
                                   class="block py-2 px-4 text-lg font-medium text-brand-500 hover:bg-gray-100 rounded">
                                    {{ item.title }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href="/#form"
                       class="block mt-6 py-2 px-4 text-lg font-extrabold text-center text-white bg-secondary-600 rounded-lg hover:bg-secondary-500">
                        Online Quote &rarr;
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Link } from "@inertiajs/vue3";
import Logo from "@/Components/Logo.vue";

export default {
    name: "Header",
    components: { Logo, Link },
    setup() {
        const isMenuOpen = ref(false);

        const navItems = [
            {
                title: 'How It Works',
                url: '/how-it-works/'
            },
            {
                title: 'Compare',
                url: '/compare/'
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
            isMenuOpen
        };
    },
}
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
