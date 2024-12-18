<template>
    <div class="mt-4 px-6 py-8">
        <!-- Buy/Sell Toggle -->
        <div class="inline-flex bg-white">
            <button
                :class="[
                    'px-8 py-3 font-medium transition-all border-b-2',
                    activeTab === 'buy'
                        ? 'border-black'
                        : 'text-gray-400 bg-gray-100 border-white',
                ]"
                @click="setTab('buy')"
            >
                Buy
            </button>
            <button
                :class="[
                    'px-8 py-3 font-medium transition-all border-b-2',
                    activeTab === 'sell'
                        ? 'border-black'
                        : 'text-gray-400 bg-gray-100 border-white',
                ]"
                @click="setTab('sell')"
            >
                Sell
            </button>
        </div>

        <!-- Search Form -->
        <div class="bg-white px-6 py-4 grid grid-cols-3 gap-8">
            <div>
                <label class="block text-sm text-gray-500 mb-2">Location</label>
                <GoogleAutocomplete
                    v-model="form.propertyAddress"
                    placeholder="Long Beach, California"
                    :inputClass="'w-full border-none !shadow-none px-0 focus:outline-none focus:ring-0'"
                    @place_changed="handlePlaceChanged"
                />
            </div>
            <div>
                <label class="block text-sm text-gray-500 mb-2">Start</label>
                <TextInput
                    type="text"
                    v-model="startDate"
                    placeholder="Dec 16, 10:30 PM"
                    class="w-full border-none !shadow-none px-0 focus:outline-none focus:ring-0"
                />
            </div>
            <div class="relative">
                <label class="block text-sm text-gray-500 mb-2">End</label>
                <TextInput
                    type="text"
                    v-model="endDate"
                    placeholder="Dec 16, 10:30 PM"
                    class="w-full border-none !shadow-none px-0 focus:outline-none focus:ring-0"
                />
                <button
                    @click="findMatches"
                    class="absolute right-0 bottom-0 bg-black p-3"
                    :class="{ 'error-animation': showError }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Multi-page form in BottomDrawer -->
        <BottomDrawer :show="showMultiPageForm" @close="closeMultiPageForm">
            <TimeframeSection
                v-if="currentStep === 'timeframe'"
                @next="handleTimeframeNext"
                @back="handleBack"
            />
            <PreviousSaleSection
                v-if="currentStep === 'previousSale'"
                @next="handlePreviousSaleNext"
                @back="handleBack"
            />
            <HomeConditionSection
                v-if="currentStep === 'homeCondition'"
                @next="handleHomeConditionNext"
                @back="handleBack"
            />
            <ReasonForSellingSection
                v-if="currentStep === 'reasonForSelling'"
                @next="handleReasonForSellingNext"
                @back="handleBack"
            />
            <MostImportantSection
                v-if="currentStep === 'mostImportant'"
                @next="handleMostImportantNext"
                @back="handleBack"
            />
            <BuyingIntentionSection
                v-if="currentStep === 'buyingIntention'"
                @next="handleBuyingIntentionNext"
                @back="handleBack"
            />
            <ContactInfoSection
                v-if="currentStep === 'contactInfo'"
                ref="contactInfoSection"
                :initialData="form"
                @submit="handleContactInfoSubmit"
                @verify="handleVerification"
                @back="handleBack"
            />
        </BottomDrawer>
    </div>
</template>

<script>
import { useForm } from "@inertiajs/vue3";
import InputLabel from "@/Components/InputLabel.vue";
import GoogleAutocomplete from "@/Components/GoogleAutocomplete.vue";
import BottomDrawer from "@/Components/BottomDrawer.vue";
import TimeframeSection from "@/Partials/Form/TimeframeSection.vue";
import PreviousSaleSection from "@/Partials/Form/PreviousSaleSection.vue";
import HomeConditionSection from "@/Partials/Form/HomeConditionSection.vue";
import ReasonForSellingSection from "@/Partials/Form/ReasonForSellingSection.vue";
import MostImportantSection from "@/Partials/Form/MostImportantSection.vue";
import BuyingIntentionSection from "@/Partials/Form/BuyingIntentionSection.vue";
import ContactInfoSection from "@/Partials/Form/ContactInfoSection.vue";
import TextInput from "@/Components/TextInput.vue";
import axios from "axios";
export default {
    name: "Form",
    components: {
        TextInput,
        InputLabel,
        GoogleAutocomplete,
        BottomDrawer,
        TimeframeSection,
        PreviousSaleSection,
        HomeConditionSection,
        ReasonForSellingSection,
        MostImportantSection,
        BuyingIntentionSection,
        ContactInfoSection,
    },
    props: {
        small: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showMultiPageForm: false,
            currentStep: "timeframe",
            verificationCode: "",
            addressError: "",
            showError: false,
            buttonText: "Find Matches",
            form: useForm({
                propertyAddress: "",
                phone: "",
                email: "",
                timeframe: "",
                previousSale: "",
                homeCondition: "",
                reasonForSelling: "",
                mostImportant: "",
                buyingIntention: "",
                valid: false,
            }),
            contactInfoSectionRef: null,
            activeTab: "buy",
            startDate: "",
            endDate: "",
        };
    },
    methods: {
        async findMatches() {
            if (this.form.propertyAddress.trim()) {
                try {
                    await this.getEstimatedValue();
                    this.showMultiPageForm = true;
                } catch (error) {
                    console.error("Error getting estimated value:", error);
                    // Still show the form even if the estimate fails
                    this.showMultiPageForm = true;
                }
            } else {
                this.showError = true;
                this.buttonText = "Address Required";
                setTimeout(() => {
                    this.showError = false;
                    this.buttonText = "Find Matches";
                }, 1000);
            }
        },

        async getEstimatedValue() {
            try {
                // address is of format:
                // 12300 Sunrise Valley Drive, Reston, VA 20191
                // we need to add a comma after the State.
                const address = this.form.propertyAddress;
                const formattedAddress = address.replace(/\s(?=\d{5}$)/, ", ");

                const response = await axios.post(
                    "https://homexe.win/api/estimated-value",
                    {
                        validatedAddress: formattedAddress,
                    }
                );

                if (response.data.success) {
                    console.log("Estimated Value Data:", response.data.data);
                    /* Example response:
                    {
                        estimatedValue: 500000,
                        high: 550000,
                        low: 450000,
                        maxAllowable: 400000,
                        source: 'zillow',
                        beds: 3,
                        baths: 2,
                        sqft: 1500
                    }
                    */
                } else {
                    console.log(
                        "Missing required fields:",
                        response.data.requiredFields
                    );
                }

                return response.data;
            } catch (error) {
                console.error("Error fetching estimated value:", error);
                throw error;
            }
        },

        closeMultiPageForm() {
            this.showMultiPageForm = false;
            this.currentStep = "timeframe";
        },
        handleTimeframeNext(data) {
            this.form.timeframe = data.timeframe;
            this.currentStep = "previousSale";
        },
        handlePreviousSaleNext(data) {
            this.form.previousSale = data.previousSale;
            this.currentStep = "homeCondition";
        },
        handleHomeConditionNext(data) {
            this.form.homeCondition = data.condition;
            this.currentStep = "reasonForSelling";
        },
        handleReasonForSellingNext(data) {
            this.form.reasonForSelling = data.reasonForSelling;
            this.currentStep = "mostImportant";
        },
        handleMostImportantNext(data) {
            this.form.mostImportant = data.mostImportant;
            this.currentStep = "buyingIntention";
        },
        handleBuyingIntentionNext(data) {
            this.form.buyingIntention = data.buyingIntention;
            this.currentStep = "contactInfo";
        },
        addUsCountryCode(phone) {
            // Remove any non-digit characters from the phone number
            const cleanedPhone = phone.replace(/\D/g, "");

            // Check if the number already has the country code
            if (cleanedPhone.startsWith("1") && cleanedPhone.length === 11) {
                return "+" + cleanedPhone;
            }

            // Check if the number is a valid 10-digit US number
            if (cleanedPhone.length === 10) {
                return "+1" + cleanedPhone;
            }

            // If the number doesn't match expected formats, return the original input
            console.warn("Invalid phone number format:", phone);
            return phone;
        },
        async handleContactInfoSubmit(data) {
            this.form.propertyAddress = data.propertyAddress;
            this.form.phone = data.phone;
            this.form.email = data.email;

            try {
                const response = await axios.post(
                    "https://homexe.win/api/verify",
                    {
                        property_address: this.form.propertyAddress,
                        phone: this.addUsCountryCode(this.form.phone),
                        email: this.form.email,
                    }
                );
                this.verificationCode = response.data.verification_code;
                // The ContactInfoSection will show the verification form
            } catch (error) {
                console.error("Error submitting form:", error);
                // Handle error
            }
        },
        handleBack() {
            const steps = [
                "timeframe",
                "previousSale",
                "homeCondition",
                "reasonForSelling",
                "mostImportant",
                "buyingIntention",
                "contactInfo",
            ];
            const currentIndex = steps.indexOf(this.currentStep);

            if (currentIndex > 0) {
                this.currentStep = steps[currentIndex - 1];
            } else {
                this.closeMultiPageForm();
            }
        },
        async handleVerification(code) {
            if (this.verificationCode === code) {
                // Show success message
                this.$refs.contactInfoSection.showVerificationMessage(
                    "Verification successful!",
                    true
                );
                this.form.valid = true;

                // Send lead
                await this.sendLead();
            } else {
                // Show error message
                this.$refs.contactInfoSection.showVerificationMessage(
                    "Incorrect verification code. Please try again.",
                    false
                );
                this.form.valid = false;
            }
        },
        handlePlaceChanged(place) {
            if (place.address_components) {
                const streetNumber =
                    place.address_components.find((component) =>
                        component.types.includes("street_number")
                    )?.long_name || "";
                const street =
                    place.address_components.find((component) =>
                        component.types.includes("route")
                    )?.long_name || "";
                const city =
                    place.address_components.find((component) =>
                        component.types.includes("locality")
                    )?.long_name || "";
                const state =
                    place.address_components.find((component) =>
                        component.types.includes("administrative_area_level_1")
                    )?.short_name || "";
                const zipCode =
                    place.address_components.find((component) =>
                        component.types.includes("postal_code")
                    )?.long_name || "";

                this.form.propertyAddress =
                    `${streetNumber} ${street}, ${city}, ${state} ${zipCode}`.trim();
            }
        },
        async sendLead() {
            try {
                await axios.post("https://homexe.win/api/verify/send-lead", {
                    phone: this.addUsCountryCode(this.form.phone),
                    email: this.form.email,
                    address: this.form.propertyAddress,
                    timeframe: this.form.timeframe,
                    previousSale: this.form.previousSale,
                    homeCondition: this.form.homeCondition,
                    reasonForSelling: this.form.reasonForSelling,
                    mostImportant: this.form.mostImportant,
                    buyingIntention: this.form.buyingIntention,
                    valid: this.form.valid,
                });
                this.$refs.contactInfoSection.showVerificationMessage(
                    "Information submitted successfully!",
                    true
                );

                // Close after 2 seconds
                setTimeout(() => {
                    this.closeMultiPageForm();
                }, 2000);
            } catch (error) {
                console.error("Error sending lead:", error);
                this.$refs.contactInfoSection.showVerificationMessage(
                    "An error occurred while sending your information. Please try again.",
                    false
                );
            }
        },
        setTab(tab) {
            this.activeTab = tab;
        },
    },
};
</script>

<style scoped>
.error-animation {
    animation: fadeError 1s ease;
}

@keyframes fadeError {
    0%,
    100% {
        background-color: #dc2626;
    } /* red-600 */
    50% {
        background-color: #dc2626;
    } /* red-600 */
}
</style>
