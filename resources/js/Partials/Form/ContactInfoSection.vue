<template>
    <DrawerFormLayout
        title="Contact Information"
        subtitle="Please provide your details to get your cash offer."
    >
        <div
            :class="[
                'grid grid-cols-1 md:grid-cols-2 gap-4 text-black relative',
                { 'opacity-50': showVerificationForm },
            ]"
        >
            <!-- Success Overlay -->
            <div
                v-if="verificationSuccess && verificationMessage"
                class="absolute inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-500 rounded-lg bg-green-500/95"
            >
                <CheckCircle2 class="w-24 h-24 mb-4 text-white" />
                <div class="px-6 text-2xl font-semibold text-center text-white">
                    {{ verificationMessage }}
                </div>
            </div>

            <!-- Error Message -->
            <div
                v-if="!verificationSuccess && verificationMessage"
                class="col-span-2 p-4 mb-4 text-red-700 bg-red-100 border-l-4 border-red-500"
                role="alert"
            >
                <div class="flex items-center">
                    <AlertCircle class="w-5 h-5 mr-2" />
                    <p>{{ verificationMessage }}</p>
                </div>
            </div>

            <div class="flex flex-col items-start col-span-2">
                <InputLabel>Property Address</InputLabel>
                <TextInput
                    v-model="formData.propertyAddress"
                    type="text"
                    class="w-full text-sm"
                    placeholder="405 Main St"
                />
            </div>
            <div class="flex flex-col items-start col-span-1">
                <InputLabel>Phone</InputLabel>
                <TextInput
                    v-model="formData.phone"
                    type="text"
                    class="text-sm"
                    placeholder="123 456 7890"
                />
            </div>
            <div class="flex flex-col items-start col-span-1">
                <InputLabel>Email</InputLabel>
                <TextInput
                    v-model="formData.email"
                    type="text"
                    class="text-sm"
                    placeholder="john@doe.com"
                />
            </div>

            <div class="col-span-2 text-xs text-gray-500">
                By clicking below, you agree to receive calls and texts,
                including by autodialer, prerecorded messages, and artificial
                voice, and email from We Buy Homes or one of its partners but
                not as a condition of any purchase, and you agree to the Terms
                of Use and Privacy Policy. To opt out, reply STOP. Message and
                data rates may apply.
            </div>

            <div class="flex gap-4 mt-6 md:col-span-2">
                <button
                    @click="goBack"
                    class="w-full px-4 pt-3 pb-4 text-xl font-semibold tracking-wide text-center text-gray-700 uppercase transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-display"
                >
                    Back
                </button>
                <button
                    @click="submitForm"
                    class="w-full px-4 pt-3 pb-4 text-xl font-semibold tracking-wide text-center text-white uppercase transition-colors duration-200 ease-in-out rounded-lg bg-secondary-600 hover:bg-secondary-500 font-display"
                >
                    Get My Cash Offer
                </button>
            </div>
        </div>

        <!-- Verification form -->
        <div v-if="showVerificationForm" class="mt-6">
            <div class="grid grid-cols-1 gap-4">
                <div class="flex flex-col items-start text-black">
                    <InputLabel
                        >A verification code has been texted to you.</InputLabel
                    >
                    <TextInput
                        v-model="formData.enteredVerificationCode"
                        type="text"
                        class="w-full text-sm"
                        placeholder="Enter your verification code from SMS"
                    />
                </div>

                <div>
                    <button
                        @click="verifyCode"
                        class="w-full px-4 pt-3 pb-4 text-xl font-semibold tracking-wide text-center text-white uppercase transition-colors duration-200 ease-in-out rounded-lg bg-secondary-600 hover:bg-secondary-500 font-display"
                    >
                        Verify Code
                    </button>
                </div>
            </div>
        </div>
    </DrawerFormLayout>
</template>

<script>
import { ref, reactive } from "vue";
import DrawerFormLayout from "@/Layouts/DrawerFormLayout.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { CheckCircle2, AlertCircle } from "lucide-vue-next";

export default {
    name: "ContactInfoSection",
    components: {
        DrawerFormLayout,
        InputLabel,
        TextInput,
        CheckCircle2,
        AlertCircle,
    },
    props: {
        initialData: {
            type: Object,
            default: () => ({}),
        },
    },
    emits: ["submit", "verify", "back"],
    setup(props, { emit }) {
        const formData = reactive({
            propertyAddress: props.initialData.propertyAddress || "",
            phone: props.initialData.phone || "",
            email: props.initialData.email || "",
            enteredVerificationCode: "",
        });

        const showVerificationForm = ref(false);
        const verificationMessage = ref("");
        const verificationSuccess = ref(false);

        const submitForm = () => {
            if (
                !formData.propertyAddress ||
                !formData.phone ||
                !formData.email
            ) {
                verificationMessage.value = "Please fill out all fields.";
                return;
            }
            emit("submit", formData);
            showVerificationForm.value = true;
        };

        const verifyCode = () => {
            emit("verify", formData.enteredVerificationCode);
        };

        const goBack = () => {
            emit("back");
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
};
</script>
