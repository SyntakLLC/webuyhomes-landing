<template>
    <div class="container-size pb-12">
        <h1 class="heading-lg text-brand-600 text-center mb-8">Buy Your Home Fast Without An Agent</h1>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="order-2 md:order-1">
                <img src="../../../img/us-map.png" alt="Map of United States" class="w-full h-auto rounded-lg shadow-lg">
            </div>
            <div class="order-1 md:order-2">
                <p class="mb-4">We buy homes in every state and Canada with our network of local real estate buyers in each market. We work with local title companies and real estate attorneys who handle escrow and settlement.</p>

                <p class="font-bold mb-4">We have a real estate buyer in every market who's ready to help.</p>

                <p>With years of experience buying homes, we've built a network of cash home buyers ready to purchase your home quickly.</p>

                <p class="mt-4">Open yourself up to a competitive cash offer when you work with We Buy Homes! We want you to choose the best offer when selling your home!</p>
            </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(column, columnIndex) in stateColumns" :key="columnIndex" class="bg-white p-6 border">
                <h3 class="subheading-sm text-brand-600 mb-4">We Buy Homes Fast!</h3>
                <ul class="space-y-4">
                    <li v-for="state in column" :key="state" class="flex flex-col">
                        <div
                            @click="toggleState(state)"
                            class="flex items-start cursor-pointer hover:bg-brand-50 p-2 rounded transition-colors duration-200"
                        >
                            <span
                                :class="[
                                    'mr-2 rounded-full flex items-center justify-center flex-shrink-0',
                                    selectedStates.includes(state) ? 'mt-1 w-4 h-4 bg-green-500' : 'mt-2.5 w-1.5 h-1.5 bg-gray-300'
                                ]">
                                <svg v-if="selectedStates.includes(state)" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </span>
                            <span :class="{ 'font-semibold': selectedStates.includes(state) }">
                                We Buy Homes Fast {{ state }}
                            </span>
                        </div>
                        <p v-if="selectedStates.includes(state)" class="text-sm text-green-600 ml-6 mt-1">
                            We sell homes in {{ state }}!
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Nationwide",
    data() {
        return {
            stateColumns: [
                [
                    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
                    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia"
                ],
                [
                    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
                    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland"
                ],
                [
                    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
                    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey"
                ]
            ],
            selectedStates: []
        }
    },
    methods: {
        toggleState(state) {
            if (this.selectedStates.includes(state)) {
                this.selectedStates = this.selectedStates.filter(s => s !== state);
            } else {
                this.selectedStates.push(state);
            }
        }
    }
}
</script>
