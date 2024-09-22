<template>
    <DrawerFormLayout
        title="When do you need to sell?"
        subtitle="Select the timeframe that best fits your situation."
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
                v-for="(option, index) in timeframeOptions"
                :key="index"
                @click="selectTimeframe(option.value)"
                class="p-4 border rounded-lg text-left transition-all duration-200 ease-in-out"
                :class="[
                    selectedTimeframe === option.value
                        ? 'bg-secondary-100 border-secondary-500'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                ]"
            >
                <div class="flex items-center">
                    <div
                        class="w-6 h-6 flex-shrink-0 rounded-full border-2 mr-3 flex items-center justify-center"
                        :class="[
                            selectedTimeframe === option.value
                                ? 'border-secondary-500'
                                : 'border-gray-300'
                        ]"
                    >
                        <div
                            v-if="selectedTimeframe === option.value"
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
    name: "TimeframeSection",
    components: {
        DrawerFormLayout,
    },
    emits: ['next', 'back'],
    setup(props, { emit }) {
        const selectedTimeframe = ref(null);

        const timeframeOptions = [
            {
                value: 'asap',
                label: 'As soon as possible',
                description: 'I need to sell quickly',
            },
            {
                value: '1-3months',
                label: '1-3 months',
                description: 'I have some flexibility',
            },
            {
                value: '3-6months',
                label: '3-6 months',
                description: 'I\'m planning ahead',
            },
            {
                value: 'noRush',
                label: 'No rush',
                description: 'I\'m just exploring my options',
            },
        ];

        const selectTimeframe = (value) => {
            selectedTimeframe.value = value;
        };

        const nextStep = () => {
            if (selectedTimeframe.value) {
                emit('next', { timeframe: selectedTimeframe.value });
            }
        };

        const goBack = () => {
            emit('back');
        };

        return {
            selectedTimeframe,
            timeframeOptions,
            selectTimeframe,
            nextStep,
            goBack,
        };
    },
}
</script>