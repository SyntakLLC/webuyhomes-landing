<template>
    <div class="mt-4 bg-white max-w-xl px-6 py-8"
         :style="`filter: drop-shadow(0 1px 20px rgba(0, 0, 0, ${small ? 0 : .5}));`">

        <div v-if="!showVerificationForm" class="grid grid-cols-2 gap-4 text-black">
            <div class="col-span-2 flex flex-col items-start">
                <InputLabel>Property Address</InputLabel>
                <TextInput v-model="propertyAddress" type="text" class="text-sm w-full" placeholder="405 Main St" />
            </div>
            <div class="col-span-1 flex flex-col items-start">
                <InputLabel>Phone</InputLabel>
                <TextInput v-model="phone" type="text" class="text-sm" placeholder="123 456 7890" />
            </div>
            <div class="col-span-1 flex flex-col items-start">
                <InputLabel>Email</InputLabel>
                <TextInput v-model="email" type="text" class="text-sm" placeholder="john@doe.com" />
            </div>

            <div class="col-span-2 text-gray-500 text-xs">
                By clicking Get My Cash Offer, you agree to receive calls and texts, including by autodialer, prerecorded messages, and artificial voice, and email from We Buy Homes or one of its partners but not as a condition of any purchase, and you agree to the Terms of Use and Privacy Policy.
            </div>

            <div class="col-span-2 text-gray-500 text-xs">
                <button @click="submitForm" :class="[small ? 'heading-sm' : 'text-4xl', 'bg-secondary-600 hover:bg-secondary-500 font-semibold uppercase text-white px-4 pt-3 pb-4 w-full font-display text-center']">
                    Get My Cash Offer
                </button>
            </div>
        </div>

        <div v-else class="grid grid-cols-2 gap-4">
            <div class="col-span-2 flex flex-col items-start text-black">
                <InputLabel>Verification Code</InputLabel>
                <TextInput v-model="enteredVerificationCode" type="text" class="text-sm w-full" placeholder="Enter your verification code" />
            </div>

            <div class="col-span-2">
                <button @click="verifyCode" class="bg-secondary-600 hover:bg-secondary-500 text-xl tracking-wide font-semibold uppercase text-white px-4 pt-3 pb-4 w-full font-display text-center">
                    Verify Code
                </button>
            </div>

            <div v-if="verificationMessage" class="col-span-2 text-center" :class="{'text-green-600': verificationSuccess, 'text-red-600': !verificationSuccess}">
                {{ verificationMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
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
    },
    setup() {
        const showVerificationForm = ref(false);
        const propertyAddress = ref('');
        const phone = ref('');
        const email = ref('');
        const verificationCode = ref('');
        const enteredVerificationCode = ref('');
        const verificationMessage = ref('');
        const verificationSuccess = ref(false);

        const addUsCountryCode = (phone) => {
            if (phone.length === 10) {
                return `+1${phone}`;
            }
            return phone;
        };

        const submitForm = async () => {
            try {
                const response = await axios.post('https://homexe-new.test/api/verify', {
                    property_address: propertyAddress.value,
                    phone: addUsCountryCode(phone.value),
                    email: email.value
                });
                verificationCode.value = response.data.verification_code;
                showVerificationForm.value = true;
            } catch (error) {
                console.error('Error submitting form:', error);
                verificationMessage.value = 'An error occurred. Please try again.';
            }
        };

        const verifyCode = () => {
            if (enteredVerificationCode.value === verificationCode.value) {
                verificationSuccess.value = true;
                verificationMessage.value = 'Verification successful!';
            } else {
                verificationSuccess.value = false;
                verificationMessage.value = 'Invalid verification code. Please try again.';
            }
        };

        return {
            showVerificationForm,
            propertyAddress,
            phone,
            email,
            enteredVerificationCode,
            verificationMessage,
            verificationSuccess,
            submitForm,
            verifyCode
        };
    }
}
</script>
