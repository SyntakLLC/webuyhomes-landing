<template>
    <div class="mt-2 md:mt-4">
        <!-- Buy/Sell Toggle - Updated styling for mobile -->
        <div
            class="inline-flex w-full bg-white rounded-t-lg shadow-sm sm:w-auto"
        >
            <button
                :class="[
                    'flex-1 sm:flex-none px-4 sm:px-8 py-3 font-medium transition-all border-b-2 rounded-tl-lg',
                    activeTab === 'buy'
                        ? 'border-black bg-white text-black font-semibold'
                        : 'text-gray-500 bg-gray-100 border-white',
                ]"
                @click="setTab('buy')"
            >
                Buy
            </button>
            <button
                :class="[
                    'flex-1 sm:flex-none px-4 sm:px-8 py-3 font-medium transition-all border-b-2 rounded-tr-lg',
                    activeTab === 'sell'
                        ? 'border-black bg-white text-black font-semibold'
                        : 'text-gray-500 bg-gray-100 border-white',
                ]"
                @click="setTab('sell')"
            >
                Sell
            </button>
        </div>

        <!-- Search Form - Improved mobile layout -->
        <div
            class="grid grid-cols-1 gap-3 px-3 py-4 bg-white rounded-b-lg rounded-tr-lg shadow-md sm:px-6 sm:gap-4"
        >
            <!-- Location field with icon -->
            <div class="relative">
                <label class="block mb-1 text-sm font-medium text-gray-500"
                    >Location</label
                >
                <div class="flex items-center">
                    <div class="absolute left-0 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <GoogleAutocomplete
                        v-model="form.propertyAddress"
                        :placeholder="
                            activeTab === 'sell'
                                ? '123 Main St, Boston, MA'
                                : 'Long Beach, California'
                        "
                        :inputClass="[
                            highlightLocationInput
                                ? 'border-red-500 border'
                                : 'border-none',
                            'w-full !shadow-none pl-6 focus:outline-none focus:ring-0',
                        ]"
                        @place_changed="handlePlaceChanged"
                    />
                </div>
            </div>

            <!-- Timeframe field with icon -->
            <div class="relative">
                <label class="block mb-1 text-sm font-medium text-gray-500"
                    >Urgency</label
                >
                <div class="flex items-center">
                    <div class="absolute left-0 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <select
                        v-model="form.timeframe"
                        class="w-full cursor-pointer border-none !shadow-none pl-6 focus:outline-none focus:ring-0 text-gray-900"
                    >
                        <option value="" disabled selected>
                            Select timeframe
                        </option>
                        <option
                            v-for="option in timeframeOptions"
                            :key="option.value"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                </div>

                <!-- Search button now takes full width on mobile -->
                <button
                    @click="findMatches"
                    class="flex items-center justify-center w-full px-4 py-2 mt-3 text-white rounded-md sm:w-auto sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 bg-homexe-black"
                    :class="{ 'error-animation': showError }"
                >
                    <span
                        v-if="errorMessage"
                        class="hidden mr-2 text-sm text-red-600 sm:block sm:absolute whitespace-nowrap sm:right-full"
                    >
                        {{ errorMessage }}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 mr-2 text-white sm:h-5 sm:w-5"
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
                    <span class="sm:hidden">
                        <span v-if="errorMessage">
                            {{ errorMessage }}
                        </span>
                        <span v-else> Find Matches </span>
                    </span>
                </button>
            </div>
        </div>

        <!-- Multi-page form in BottomDrawer -->
        <BottomDrawer :show="showMultiPageForm" @close="closeMultiPageForm">
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
            currentStep: "previousSale",
            verificationCode: "",
            addressError: "",
            showError: false,
            buttonText: "Find Matches",
            errorMessage: "",
            form: useForm({
                propertyAddress: "",
                phone: "",
                email: "",
                timeframe: "asap",
                previousSale: "",
                homeCondition: "",
                reasonForSelling: "",
                mostImportant: "",
                buyingIntention: "",
                valid: false,
            }),
            highlightLocationInput: false,
            contactInfoSectionRef: null,
            activeTab: "buy",
            timeframeOptions: [
                {
                    value: "asap",
                    label: "As soon as possible",
                },
                {
                    value: "1-3months",
                    label: "1-3 months",
                },
                {
                    value: "3-6months",
                    label: "3-6 months",
                },
                {
                    value: "noRush",
                    label: "No rush",
                },
            ],
        };
    },
    methods: {
        async findMatches() {
            // Reset error states
            this.showError = false;
            this.errorMessage = "";

            // Validate both fields
            if (!this.form.propertyAddress.trim() || !this.form.timeframe) {
                this.showError = true;
                this.errorMessage = !this.form.propertyAddress.trim()
                    ? "Location Required"
                    : "Timeframe Required";
                if (!this.form.propertyAddress.trim()) {
                    this.highlightLocationInput = true;
                }

                setTimeout(() => {
                    this.showError = false;
                    this.errorMessage = "";
                    this.highlightLocationInput = false;
                }, 1000);
                return;
            }

            try {
                // await this.getEstimatedValue();
                this.showMultiPageForm = true;
            } catch (error) {
                console.error("Error getting estimated value:", error);
                // Still show the form even if the estimate fails
                this.showMultiPageForm = true;
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
                    "https://portal.wbhus.com/api/estimated-value",
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
                    "https://portal.wbhus.com/api/verify",
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
                await axios.post(
                    "https://portal.wbhus.com/api/verify/send-lead",
                    {
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
                    }
                );
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
