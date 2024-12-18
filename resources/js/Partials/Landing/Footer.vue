<template>
    <footer class="bg-homexe-black text-white py-8 md:py-16">
        <div class="">
            <div
                class="container-size flex flex-col md:flex-row justify-between"
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
                        <h3 class="font-bold mb-2">Contact Us!</h3>
                        <p>Homexe</p>
                        <p>+1 855-781-HOME</p>
                    </div>
                    <Logo white class="w-24 h-24" />
                </div>
            </div>
            <div class="container-size mt-8 text-sm">
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
