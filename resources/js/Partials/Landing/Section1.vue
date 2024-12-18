<template>
    <div class="bg-white py-20 container-size space-y-8">
        <div class="heading-lg text-center">Welcome to Homexe!</div>

        <div class="subheading-lg text-center">
            Looking to Buy or Sell Your Home? Our Real Estate Experts Are Here
            to Help You Every Step of the Way. Professional Service. No Hidden
            Fees. Personalized Experience.
        </div>

        <div class="subheading-sm font-normal">
            At Homexe, we are committed to providing exceptional real estate
            services to make your home buying or selling experience seamless.
            Our team of experienced agents understands the local market and is
            dedicated to finding the perfect solution for your real estate
            needs.
            <br />
            <br />
            Whether you're looking to buy your dream home or sell your property
            at the best price, our agents are here to guide you through the
            process. Contact us today to learn more about how we can assist you
            in achieving your real estate goals!
        </div>

        <div class="flex justify-end">
            <Logo />
        </div>
    </div>
</template>

<script>
import Logo from "@/Components/Logo.vue";
export default {
    name: "Section1",
    components: { Logo },
};
</script>

<style scoped></style>
