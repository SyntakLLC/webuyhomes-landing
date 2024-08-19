<template>
    <div class="bg-brand-500 -skew-y-[1.5deg]">
        <div class="skew-y-[1.5deg] container-size py-12">
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Images section -->
                <div class="order-2 md:order-1">
                    <div class="grid grid-cols-2 gap-4">
                        <img src="../../../img/kitchen.jpg" alt="Kitchen" class="w-full h-48 object-cover rounded-size">
                        <img src="../../../img/house2.jpeg" alt="House exterior"
                             class="w-full h-48 object-cover rounded-size">
                        <img src="../../../img/deck.jpg" alt="Deck" class="w-full h-48 object-cover rounded-size">
                        <img src="../../../img/bathroom.jpg" alt="Bathroom" class="w-full h-48 object-cover rounded-size">
                    </div>
                    <div class="flex justify-center">
                        <Logo/>
                    </div>
                </div>

                <!-- Content section -->
                <div class="space-y-6 order-1 md:order-2">
                    <h1 class="heading-lg text-white text-center mb-6">Need To Sell Your Home?</h1>
                    <p class="text-white/70">
                        If you need to sell your house fast, you can avoid the hassles of a traditional sale! Imagine having
                        to find a real estate agent, make repairs, clean, deal with open houses and showings, and pay
                        commission and fees on top of all the work and stress in your already busy life...
                    </p>
                    <p class="font-bold text-white/70">
                        We Buy Homes eliminates these hassles. We take the stress out of selling your home, so you can
                        keep on living your life. Our goal is to make your home sale as simple as possible.
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
        Logo
    }
}
</script>
