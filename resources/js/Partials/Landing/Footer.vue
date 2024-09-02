<template>
    <footer class="bg-brand-500 text-white py-8 md:py-16">
        <div class="">
            <div class="container-size flex flex-col md:flex-row justify-between">
                <div class="mb-6 md:mb-0">
                    <p class="mb-4">
                        We buy houses nationwide! At We Buy Homes,
                        we offer cash for houses and connect sellers with local buyers. If you want to sell your
                        house for cash, fill out our short form to get fair all cash offers for your house!
                    </p>
                    <div class="mb-4">
                        <h3 class="font-bold mb-2">Contact Us!</h3>
                        <p>We Buy Homes</p>
                        <p>+1 855-781-HOME</p>
<!--                        <p>team@webuyhomes.com</p>-->
                    </div>
                    <Logo white class="w-24 h-24" />
                </div>
<!--                <div class="flex flex-col items-end">-->
<!--                    <div class="flex space-x-4 mb-4">-->
<!--                        <a href="#" class="bg-white p-2 rounded-full">-->
<!--                            <svg class="w-6 h-6 text-brand-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                        <a href="#" class="bg-white p-2 rounded-full">-->
<!--                            <svg class="w-6 h-6 text-brand-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.17 10.71l-2.95 2.95c-.39.39-1.02.39-1.41 0l-2.95-2.95c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 12.71l1.71-1.71c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41z"></path>-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                        <a href="#" class="bg-white p-2 rounded-full">-->
<!--                            <svg class="w-6 h-6 text-brand-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                        <a href="#" class="bg-white p-2 rounded-full">-->
<!--                            <svg class="w-6 h-6 text-brand-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                    </div>-->
<!--                    <nav class="space-y-2 text-right">-->
<!--                        <a href="#" class="block hover:underline">FAQ</a>-->
<!--                        <a href="#" class="block hover:underline">Contact Us</a>-->
<!--                        <a href="#" class="block hover:underline">Privacy Policy</a>-->
<!--                        <a href="#" class="block hover:underline">Terms of Service</a>-->
<!--                    </nav>-->
<!--                </div>-->
            </div>
            <div class="container-size mt-8 text-sm">
                © {{ currentYear }} We Buy Homes
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from "@/Components/Logo.vue";

export default {
    name: "Footer",
    components: {
        Logo
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>
