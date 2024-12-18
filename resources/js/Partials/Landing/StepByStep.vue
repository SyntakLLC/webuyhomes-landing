<template>
    <div class="container-size py-12">
        <h1 class="heading-lg text-center mb-2">Our Process</h1>
        <p class="text-center italic mb-6">
            (Professional service from start to finish.)
        </p>

        <div class="text-center mb-8">
            <p>
                Begin your real estate journey by scheduling a consultation with
                one of our experienced agents.
            </p>
            <p class="font-bold">
                We'll create a customized plan to meet your specific needs.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div
                v-for="(step, index) in steps"
                :key="index"
                class="text-center"
            >
                <div class="flex justify-center mb-4">
                    <svg
                        class="w-12 h-12 text-brand-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                    </svg>
                </div>
                <h3 class="subheading-sm mb-2">STEP {{ index + 1 }}</h3>
                <p>{{ step }}</p>
            </div>
        </div>

        <h2 class="subheading-lg text-center text-gray-600 mb-8">
            Experience the Difference of Working with Professional Real Estate
            Experts
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
            <ul class="space-y-4">
                <li
                    v-for="benefit in benefits"
                    :key="benefit"
                    class="flex items-start"
                >
                    <svg
                        class="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                    <span>{{ benefit }}</span>
                </li>
            </ul>
            <div>
                <p class="mb-4">
                    At Homexe, we pride ourselves on delivering exceptional real
                    estate services. Our team of experienced agents combines
                    local market knowledge with professional expertise to ensure
                    the best possible outcome for our clients.
                </p>
                <p class="mb-4">
                    Whether you're buying or selling, our comprehensive approach
                    includes market analysis, professional photography, targeted
                    marketing strategies, and expert negotiation to achieve your
                    real estate goals.
                </p>
                <p>
                    We understand that every client's situation is unique, which
                    is why we offer personalized service tailored to your
                    specific needs. From first-time homebuyers to experienced
                    investors, we're here to guide you through every step of the
                    process.
                </p>
                <p class="mt-4">
                    <a
                        href="/how-it-works"
                        class="text-secondary-600 hover:underline"
                        >Learn more about our services →</a
                    >
                </p>
            </div>
        </div>

        <div class="mt-12 text-center">
            <h2 class="subheading-lg mb-4">
                Ready to Start Your Real Estate Journey?
            </h2>
            <p class="mb-4">
                Let our experienced team help you achieve your real estate
                goals...
            </p>
            <p>
                Whether you're buying your dream home or selling your current
                property, our professional agents are here to provide expert
                guidance and support throughout the entire process. Contact us
                today to learn how we can help!
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepByStep",
    data() {
        return {
            steps: [
                "Meet with one of our expert agents to discuss your real estate goals and create a customized strategy.",
                "Receive professional guidance on pricing, staging, or home search based on market analysis and your needs.",
                "Experience a smooth transaction process with dedicated support from listing to closing.",
            ],
            benefits: [
                "Expert market analysis and pricing strategies",
                "Professional photography and virtual tours",
                "Comprehensive marketing campaigns",
                "Skilled negotiation support",
                "Access to our network of qualified buyers",
                "Full service from listing to closing",
            ],
        };
    },
};
</script>
