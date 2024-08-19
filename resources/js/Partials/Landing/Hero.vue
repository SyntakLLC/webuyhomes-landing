<template>
    <div class="-skew-y-[1.5deg]">
        <div class="relative w-full h-full overflow-hidden">
            <img src="../../../img/house2.jpeg"
                 alt="Background photo of house"
                 class="absolute inset-0 w-full h-full object-cover"/> <!-- h-[600px]  -->
            <div class="bg-black/20 backdrop-blur-md absolute inset-0 w-full h-full"></div>

    <!--        <Header />-->

            <div class="skew-y-[1.5deg] relative flex flex-col items-center container-size pt-28 pb-24 mx-auto h-full leading-6 text-center text-white">
                <h2 class="mx-0 mt-0 mb-6 max-w-full text-center text-white text-shadow heading-max">
                    Sell My House For Cash!
                </h2>

                <div class="flex flex-col md:flex-row gap-4 items-center md:items-start px-2 w-[70%] max-w-2xl mx-auto">
                    <img
                        alt="sell house fast"
                        src="../../../img/5star.webp"
                        class="w-16 h-16"
                    />
                    <div class="subheading-sm text-white text-center">
                        At
                        <i style="min-height: 1px;" class="italic font-bold">
                            We Buy Homes
                        </i>,
                        We Buy Houses For Cash Nationwide! No Repairs. No Commission. Fill Out The Form To Get Started On Your FREE CASH OFFER Today!
                    </div>
                </div>

                <Form />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/Partials/Landing/Header.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Form from "@/Partials/Landing/Form.vue";
export default {
    name: "Hero",
    components: {Form, TextInput, InputLabel, Header}
}
</script>

<style scoped>

</style>
