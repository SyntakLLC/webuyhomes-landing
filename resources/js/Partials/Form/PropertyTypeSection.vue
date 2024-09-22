<template>
    <DrawerFormLayout
        title="What type of property is it?"
        subtitle="Select the option that best describes your property."
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
                v-for="(option, index) in propertyTypeOptions"
                :key="index"
                @click="selectPropertyType(option.value)"
                class="p-4 border rounded-lg text-left transition-all duration-200 ease-in-out"
                :class="[
                    selectedPropertyType === option.value
                        ? 'bg-secondary-100 border-secondary-500'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                ]"
            >
                <div class="flex items-center">
                    <div
                        class="w-6 h-6 flex-shrink-0 rounded-full border-2 mr-3 flex items-center justify-center"
                        :class="[
                            selectedPropertyType === option.value
                                ? 'border-secondary-500'
                                : 'border-gray-300'
                        ]"
                    >
                        <div
                            v-if="selectedPropertyType === option.value"
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
        <div class="mt-6">
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
    name: "PropertyTypeSection",
    components: {
        DrawerFormLayout,
    },
    emits: ['next'],
    setup(props, { emit }) {
        const selectedPropertyType = ref(null);

        const propertyTypeOptions = [
            {
                value: 'singleFamily',
                label: 'Single Family',
                description: 'A standalone house for one family',
            },
            {
                value: 'multiFamily',
                label: 'Multi Family',
                description: 'A building with multiple separate living units',
            },
            {
                value: 'condo',
                label: 'Condo',
                description: 'An individually owned unit in a larger complex',
            },
            {
                value: 'townhouse',
                label: 'Townhouse',
                description: 'A multi-floor home that shares walls with other units',
            },
            {
                value: 'mobile',
                label: 'Mobile / Manufactured',
                description: 'A prefabricated home built in a factory',
            },
            {
                value: 'land',
                label: 'Land',
                description: 'An undeveloped or vacant plot of land',
            },
        ];

        const selectPropertyType = (value) => {
            selectedPropertyType.value = value;
        };

        const nextStep = () => {
            if (selectedPropertyType.value) {
                emit('next', { propertyType: selectedPropertyType.value });
            }
        };

        return {
            selectedPropertyType,
            propertyTypeOptions,
            selectPropertyType,
            nextStep,
        };
    },
}
</script>