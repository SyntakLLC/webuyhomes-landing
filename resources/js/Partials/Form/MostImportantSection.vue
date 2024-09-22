<template>
    <DrawerFormLayout
        title="What's most important to you?"
        subtitle="Select the factor that matters most in your home selling process."
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
                v-for="(option, index) in importantOptions"
                :key="index"
                @click="selectImportantFactor(option.value)"
                class="p-4 border rounded-lg text-left transition-all duration-200 ease-in-out"
                :class="[
                    selectedImportantFactor === option.value
                        ? 'bg-secondary-100 border-secondary-500'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                ]"
            >
                <div class="flex items-center">
                    <div
                        class="w-6 h-6 flex-shrink-0 rounded-full border-2 mr-3 flex items-center justify-center"
                        :class="[
                            selectedImportantFactor === option.value
                                ? 'border-secondary-500'
                                : 'border-gray-300'
                        ]"
                    >
                        <div
                            v-if="selectedImportantFactor === option.value"
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
    name: "MostImportantSection",
    components: {
        DrawerFormLayout,
    },
    emits: ['next', 'back'],
    setup(props, { emit }) {
        const selectedImportantFactor = ref(null);

        const importantOptions = [
            {
                value: 'speed',
                label: 'Speed',
                description: 'Selling my home as quickly as possible',
            },
            {
                value: 'price',
                label: 'Price',
                description: 'Getting the best possible price for my home',
            },
            {
                value: 'convenience',
                label: 'Convenience',
                description: 'A hassle-free selling process',
            },
            {
                value: 'control',
                label: 'Control',
                description: 'Having control over the selling process',
            },
            {
                value: 'certainty',
                label: 'Certainty',
                description: 'Knowing exactly when and for how much my home will sell',
            },
            {
                value: 'flexibility',
                label: 'Flexibility',
                description: 'Ability to change plans if needed',
            },
        ];

        const selectImportantFactor = (value) => {
            selectedImportantFactor.value = value;
        };

        const nextStep = () => {
            if (selectedImportantFactor.value) {
                emit('next', { mostImportant: selectedImportantFactor.value });
            }
        };

        const goBack = () => {
            emit('back');
        };

        return {
            selectedImportantFactor,
            importantOptions,
            selectImportantFactor,
            nextStep,
            goBack,
        };
    },
}
</script>