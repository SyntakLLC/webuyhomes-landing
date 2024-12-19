<template>
    <div class="bg-brand-500">
        <div class="container-size py-16">
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Images section -->
                <div class="order-2 md:order-1">
                    <div class="grid grid-cols-2 gap-4">
                        <img
                            src="../../../img/kitchen.jpg"
                            alt="Kitchen"
                            class="w-full h-48 object-cover rounded-size"
                        />
                        <img
                            src="../../../img/house.webp"
                            alt="House exterior"
                            class="w-full h-48 object-cover rounded-size"
                        />
                        <img
                            src="../../../img/deck.jpg"
                            alt="Deck"
                            class="w-full h-48 object-cover rounded-size"
                        />
                        <img
                            src="../../../img/bathroom.jpg"
                            alt="Bathroom"
                            class="w-full h-48 object-cover rounded-size"
                        />
                    </div>
                    <div class="flex justify-center">
                        <Logo />
                    </div>
                </div>

                <!-- Content section -->
                <div class="space-y-6 order-1 md:order-2">
                    <h1
                        id="form"
                        class="heading-lg text-white text-center mb-6"
                    >
                        Ready to Buy or Sell?
                    </h1>
                    <p class="text-white/70">
                        Looking for a trusted partner in real estate? Our
                        experienced agents are here to guide you through every
                        step of your journey. Whether you're buying your dream
                        home or selling your current property, we'll ensure a
                        smooth and professional experience.
                    </p>
                    <p class="font-bold text-white/70">
                        Homexe brings expertise, dedication, and personalized
                        service to every transaction. Let our team of
                        professionals help you achieve your real estate goals
                        with confidence and peace of mind.
                    </p>
                    <Form small />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "@/Components/Logo.vue";
import Form from "@/Partials/Landing/Form.vue";

export default {
    name: "SellHouseFast",
    components: {
        Form,
        Logo,
    },
};
</script>
