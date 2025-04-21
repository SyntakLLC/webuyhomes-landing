<template>
    <footer class="py-8 text-white bg-homexe-black md:py-16">
        <div class="">
            <div
                class="flex flex-col justify-between container-size md:flex-row"
            >
                <div class="mb-6 md:mb-0">
                    <p class="mb-4">
                        Your trusted real estate partner! At Homexe, our
                        experienced agents provide professional guidance for all
                        your real estate needs. Whether buying or selling, our
                        team of experts is here to help you navigate the market
                        and achieve your real estate goals.
                    </p>
                    <div class="mb-4">
                        <h3 class="mb-2 font-bold">Contact Us!</h3>
                        <p>Homexe: +1 855-781-HOME</p>
                        <p>Cameron Real Estate Group</p>
                        <p>MLS ID: AC0756</p>
                        <p>20C Del Carmine Street, Wakefield, MA 01880, US</p>
                        <p>781-486-3180</p>
                    </div>
                    <div class="flex items-center justify-center w-full gap-4">
                        <!-- <Logo white class="w-24 h-24" /> -->
                        <img
                            src="../../../img/cameron-prestige.webp"
                            class="w-24"
                        />
                        <img
                            src="../../../img/equal-opportunity.svg"
                            class="w-24 h-24 invert"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full text-sm text-center container-size">
                © {{ currentYear }} Homexe
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from "@/Components/Logo.vue";

export default {
    name: "Footer",
    components: {
        Logo,
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>
