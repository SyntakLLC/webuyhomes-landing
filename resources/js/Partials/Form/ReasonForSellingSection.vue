<template>
    <DrawerFormLayout
        title="Why are you selling?"
        subtitle="Select the primary reason for selling your property."
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
                v-for="(option, index) in reasonOptions"
                :key="index"
                @click="selectReason(option.value)"
                class="p-4 border rounded-lg text-left transition-all duration-200 ease-in-out"
                :class="[
                    selectedReason === option.value
                        ? 'bg-secondary-100 border-secondary-500'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                ]"
            >
                <div class="flex items-center">
                    <div
                        class="w-6 h-6 flex-shrink-0 rounded-full border-2 mr-3 flex items-center justify-center"
                        :class="[
                            selectedReason === option.value
                                ? 'border-secondary-500'
                                : 'border-gray-300'
                        ]"
                    >
                        <div
                            v-if="selectedReason === option.value"
                            class="w-3 h-3 rounded-full bg-secondary-500"
                        ></div>
                    </div>
                    <div>
                        <h3 class="font-semibold text-lg">{{ option.label }}</h3>
                        <p class="text-sm text-gray-600">{{ option.description }}</p>
                    </div>
                </div>
            </button>
        </div>
        <div class="mt-6 flex gap-4">
            <button
                @click="goBack"
                class="bg-white border border-gray-300 hover:bg-gray-50 text-xl tracking-wide font-semibold uppercase text-gray-700 px-4 pt-3 pb-4 w-full font-display text-center rounded-lg transition-colors duration-200 ease-in-out"
            >
                Back
            </button>
            <button
                @click="nextStep"
                class="bg-secondary-600 hover:bg-secondary-500 text-xl tracking-wide font-semibold uppercase text-white px-4 pt-3 pb-4 w-full font-display text-center rounded-lg transition-colors duration-200 ease-in-out"
            >
                Next
            </button>
        </div>
    </DrawerFormLayout>
</template>

<script>
import { ref } from 'vue';
import DrawerFormLayout from "@/Layouts/DrawerFormLayout.vue";

export default {
    name: "ReasonForSellingSection",
    components: {
        DrawerFormLayout,
    },
    emits: ['next', 'back'],
    setup(props, { emit }) {
        const selectedReason = ref(null);

        const reasonOptions = [
            {
                value: 'upgrade',
                label: 'Upgrading',
                description: 'Moving to a larger or better home',
            },
            {
                value: 'downsize',
                label: 'Downsizing',
                description: 'Moving to a smaller home',
            },
            {
                value: 'relocation',
                label: 'Relocation',
                description: 'Moving to a different area',
            },
            {
                value: 'financial',
                label: 'Financial reasons',
                description: 'Need to sell due to financial circumstances',
            },
            {
                value: 'inheritance',
                label: 'Inherited property',
                description: 'Selling a property I inherited',
            },
            {
                value: 'other',
                label: 'Other',
                description: 'Other reasons not listed',
            },
        ];

        const selectReason = (value) => {
            selectedReason.value = value;
        };

        const nextStep = () => {
            if (selectedReason.value) {
                emit('next', { reasonForSelling: selectedReason.value });
            }
        };

        const goBack = () => {
            emit('back');
        };

        return {
            selectedReason,
            reasonOptions,
            selectReason,
            nextStep,
            goBack,
        };
    },
}
</script>