<template>
    <div class="mt-4 bg-white max-w-xl px-6 py-8"
         :style="`filter: drop-shadow(0 1px 20px rgba(0, 0, 0, ${small ? 0 : .5}));`">

        <!--                <div class="flex flex-row items-center px-2 leading-6 text-left text-white">-->
        <!--                    <img-->
        <!--                        alt="sell house fast"-->
        <!--                        src="../../../img/5star.webp"-->
        <!--                        class="mt-0 mr-8 w-16 h-16 ml-0 max-w-full text-left"-->
        <!--                    />-->
        <!--                    <span class="text-gray-900 text-base">-->
        <!--                        At-->
        <!--                        <span class="font-bold">-->
        <!--                            We Buy Homes,-->
        <!--                        </span>-->
        <!--                        we buy houses for cash nationwide. No repairs. No commission.-->
        <!--                    </span>-->
        <!--                </div>-->

        <!-- mt-8 -->
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2 flex flex-col items-start">
                <InputLabel>
                    Property Address
                </InputLabel>
                <TextInput type="text" class="text-sm" placeholder="405 Main St" />
            </div>
            <div class="col-span-1 flex flex-col items-start">
                <InputLabel>
                    Phone
                </InputLabel>
                <TextInput type="text" class="text-sm" placeholder="123 456 7890" />
            </div>
            <div class="col-span-1 flex flex-col items-start">
                <InputLabel>
                    Email
                </InputLabel>
                <TextInput type="text" class="text-sm" placeholder="john@doe.com" />
            </div>

            <div class="col-span-2 text-gray-500 text-xs">
                By clicking Get My Cash Offer, you agree to receive calls and texts, including by autodialer, prerecorded messages, and artificial voice, and email from We Buy Homes or one of its partners but not as a condition of any purchase, and you agree to the Terms of Use and Privacy Policy.
            </div>

            <div class="col-span-2 text-gray-500 text-xs">
                <button :class="[small ? 'heading-sm' : 'text-4xl', 'bg-secondary-600 hover:bg-secondary-500 font-semibold uppercase text-white px-4 pt-3 pb-4 w-full font-display text-center']">
                    Get My Cash Offer
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";

export default {
    name: "Form",
    components: {
        TextInput,
        InputLabel
    },
    props: {
        small: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
