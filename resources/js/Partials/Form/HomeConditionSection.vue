<template>
    <DrawerFormLayout
        title="What's the condition of your home?"
        subtitle="Select the option that best describes your property's current state."
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
                v-for="(option, index) in conditionOptions"
                :key="index"
                @click="selectCondition(option.value)"
                class="p-4 border rounded-lg text-left transition-all duration-200 ease-in-out"
                :class="[
                    selectedCondition === option.value
                        ? 'bg-secondary-100 border-secondary-500'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                ]"
            >
                <div class="flex items-center">
                    <div
                        class="w-6 h-6 flex-shrink-0 rounded-full border-2 mr-3 flex items-center justify-center"
                        :class="[
                            selectedCondition === option.value
                                ? 'border-secondary-500'
                                : 'border-gray-300'
                        ]"
                    >
                        <div
                            v-if="selectedCondition === option.value"
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
    name: "HomeConditionSection",
    components: {
        DrawerFormLayout,
    },
    emits: ['next', 'back'],
    setup(props, { emit }) {
        const selectedCondition = ref(null);

        const conditionOptions = [
            {
                value: 'excellent',
                label: 'Excellent',
                description: 'Move-in ready, no repairs needed',
            },
            {
                value: 'good',
                label: 'Good',
                description: 'Minor repairs or updates may be needed',
            },
            {
                value: 'fair',
                label: 'Fair',
                description: 'Some repairs and updates required',
            },
            {
                value: 'poor',
                label: 'Poor',
                description: 'Significant repairs and renovations needed',
            },
        ];

        const selectCondition = (value) => {
            selectedCondition.value = value;
        };

        const nextStep = () => {
            if (selectedCondition.value) {
                emit('next', { condition: selectedCondition.value });
            }
        };

        const goBack = () => {
            emit('back');
        };

        return {
            selectedCondition,
            conditionOptions,
            selectCondition,
            nextStep,
            goBack,
        };
    },
}
</script>