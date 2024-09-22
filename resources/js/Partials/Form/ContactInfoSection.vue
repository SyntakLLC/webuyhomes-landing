<template>
    <DrawerFormLayout
        title="Contact Information"
        subtitle="Please provide your details to get your cash offer."
    >
        <div :class="['grid grid-cols-1 md:grid-cols-2 gap-4 text-black', { 'opacity-50': showVerificationForm }]">
            <div class="col-span-2 flex flex-col items-start">
                <InputLabel>Property Address</InputLabel>
                <TextInput v-model="formData.propertyAddress" type="text" class="text-sm w-full" placeholder="405 Main St" />
            </div>
            <div class="col-span-1 flex flex-col items-start">
                <InputLabel>Phone</InputLabel>
                <TextInput v-model="formData.phone" type="text" class="text-sm" placeholder="123 456 7890" />
            </div>
            <div class="col-span-1 flex flex-col items-start">
                <InputLabel>Email</InputLabel>
                <TextInput v-model="formData.email" type="text" class="text-sm" placeholder="john@doe.com" />
            </div>

            <div v-if="verificationMessage" class="col-span-2 text-center" :class="{'text-green-600': verificationSuccess, 'text-red-600': !verificationSuccess}">
                {{ verificationMessage }}
            </div>

            <div class="col-span-2 text-gray-500 text-xs">
                By clicking below, you agree to receive calls and texts, including by autodialer, prerecorded messages, and artificial voice, and email from We Buy Homes or one of its partners but not as a condition of any purchase, and you agree to the Terms of Use and Privacy Policy. To opt out, reply STOP. Message and data rates may apply.
            </div>

            <div class="mt-6 md:col-span-2 flex gap-4">
                <button
                    @click="goBack"
                    class="bg-white border border-gray-300 hover:bg-gray-50 text-xl tracking-wide font-semibold uppercase text-gray-700 px-4 pt-3 pb-4 w-full font-display text-center rounded-lg transition-colors duration-200 ease-in-out"
                >
                    Back
                </button>
                <button
                    @click="submitForm"
                    class="bg-secondary-600 hover:bg-secondary-500 text-xl tracking-wide font-semibold uppercase text-white px-4 pt-3 pb-4 w-full font-display text-center rounded-lg transition-colors duration-200 ease-in-out"
                >
                    Get My Cash Offer
                </button>
            </div>
        </div>

        <!-- Verification form -->
        <div v-if="showVerificationForm" class="mt-6">
            <div class="grid grid-cols-1 gap-4">
                <div class="flex flex-col items-start text-black">
                    <InputLabel>Verification Code</InputLabel>
                    <TextInput v-model="formData.enteredVerificationCode" type="text" class="text-sm w-full" placeholder="Enter your verification code" />
                </div>

                <div v-if="verificationMessage" class="text-center" :class="{'text-green-600': verificationSuccess, 'text-red-600': !verificationSuccess}">
                    {{ verificationMessage }}
                </div>

                <div>
                    <button @click="verifyCode" class="bg-secondary-600 hover:bg-secondary-500 text-xl tracking-wide font-semibold uppercase text-white px-4 pt-3 pb-4 w-full font-display text-center rounded-lg transition-colors duration-200 ease-in-out">
                        Verify Code
                    </button>
                </div>
            </div>
        </div>
    </DrawerFormLayout>
</template>

<script>
import { ref, reactive } from 'vue';
import DrawerFormLayout from "@/Layouts/DrawerFormLayout.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";

export default {
    name: "ContactInfoSection",
    components: {
        DrawerFormLayout,
        InputLabel,
        TextInput,
    },
    props: {
        initialData: {
            type: Object,
            default: () => ({}),
        },
    },
    emits: ['submit', 'verify', 'back'],
    setup(props, { emit }) {
        const formData = reactive({
            propertyAddress: props.initialData.propertyAddress || '',
            phone: props.initialData.phone || '',
            email: props.initialData.email || '',
            enteredVerificationCode: '',
        });

        const showVerificationForm = ref(false);
        const verificationMessage = ref('');
        const verificationSuccess = ref(false);

        const submitForm = () => {
            if (!formData.propertyAddress || !formData.phone || !formData.email) {
                verificationMessage.value = 'Please fill out all fields.';
                return;
            }
            emit('submit', formData);
            showVerificationForm.value = true;
        };

        const verifyCode = () => {
            emit('verify', formData.enteredVerificationCode);
        };

        const goBack = () => {
            emit('back');
        };

        const showVerificationMessage = (message, success) => {
            verificationMessage.value = message;
            verificationSuccess.value = success;
        };

        return {
            formData,
            showVerificationForm,
            verificationMessage,
            verificationSuccess,
            submitForm,
            verifyCode,
            goBack,
            showVerificationMessage,
        };
    },
}
</script>