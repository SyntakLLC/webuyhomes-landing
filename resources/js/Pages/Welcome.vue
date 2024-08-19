<template>
    <Head>
        <title>Sell your place</title>
    </Head>

    <Header />
    <Hero />
    <Section1 />
    <Nationwide />
    <Section2 />
    <ImagesSection />
    <StepByStep />
    <Footer />
</template>

<script>
import { Head } from '@inertiajs/vue3';
import Header from "@/Partials/Landing/Header.vue";
import Hero from "@/Partials/Landing/Hero.vue";
import Section1 from "@/Partials/Landing/Section1.vue";
import Section2 from "@/Partials/Landing/Section2.vue";
import ImagesSection from "@/Partials/Landing/ImagesSection.vue";
import StepByStep from "@/Partials/Landing/StepByStep.vue";
import Footer from "@/Partials/Landing/Footer.vue";
import Nationwide from "@/Partials/Landing/Nationwide.vue";

export default {
    components: {
        Nationwide,
        Footer,
        StepByStep,
        ImagesSection,
        Section2,
        Section1,
        Head,
        Hero,
        Header
    },

    setup() {
        return {
            //
        };
    },
};
</script>
