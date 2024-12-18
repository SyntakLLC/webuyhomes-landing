<template>
    <Head>
        <title>Compare Our Services</title>
    </Head>

    <Header>
        <template #title>Our Services Packages</template>
    </Header>

    <div class="container-size py-12">
        <p class="mb-6 text-lg">
            At Homexe, we understand that every client has unique needs. That's
            why we offer different service packages to help you achieve your
            real estate goals. Whether you're looking for our full-service
            premium package or our essential listing service, we have options
            designed to fit your specific situation.
        </p>

        <div class="overflow-x-auto mb-12">
            <table class="w-full border-collapse">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border p-2"></th>
                        <th class="border p-2">Essential Package</th>
                        <th class="border p-2">Premium Package</th>
                        <th class="border p-2">Concierge Service</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in comparisonData" :key="row.category">
                        <td class="border p-2 font-semibold">
                            {{ row.category }}
                        </td>
                        <td class="border p-2" v-html="row.essential"></td>
                        <td class="border p-2" v-html="row.premium"></td>
                        <td class="border p-2" v-html="row.concierge"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 class="heading-lg text-center mb-8">
            Choose the Service Level That's Right for You
        </h2>

        <p class="mb-6">
            Our range of service packages ensures that you get exactly the level
            of support you need. From basic listings to full-service marketing
            and staging, we're here to help you succeed in your real estate
            journey.
        </p>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="text-center"
            >
                <div class="w-16 h-16 mx-auto mb-4">
                    <svg
                        v-if="benefit.icon === 'ClockIcon'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-full h-full text-brand-500"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <svg
                        v-else-if="benefit.icon === 'HomeIcon'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-full h-full text-brand-500"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>

                    <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-full h-full text-brand-500"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <h3 class="font-semibold mb-2">{{ benefit.title }}</h3>
                <p class="text-sm">{{ benefit.description }}</p>
            </div>
        </div>

        <h2 class="heading-lg text-center mb-8">Ready to Get Started?</h2>

        <div class="max-w-2xl mx-auto">
            <Form small />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Form from "@/Partials/Landing/Form.vue";
import { Link, Head } from "@inertiajs/vue3";
import Header from "@/Partials/Landing/Header.vue";

const ClockIcon = {
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `,
};

const HomeIcon = {
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  `,
};

const CashIcon = {
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `,
};

export default defineComponent({
    name: "Compare",
    components: {
        Header,
        Form,
        ClockIcon,
        HomeIcon,
        CashIcon,
        Link,
        Head,
    },
    setup() {
        const comparisonData = [
            {
                category: "Listing Services",
                essential: "MLS listing with professional photos",
                premium:
                    "Enhanced MLS listing with professional photos and virtual tour",
                concierge:
                    "Premium listing package with professional photos, virtual tour, and drone footage",
            },
            {
                category: "Marketing",
                essential: "Basic digital marketing",
                premium: "Comprehensive digital and social media marketing",
                concierge:
                    "Full-scale marketing campaign including print and digital",
            },
            {
                category: "Home Preparation",
                essential: "Basic staging consultation",
                premium:
                    "Professional staging consultation and recommendations",
                concierge: "Full professional staging services included",
            },
            {
                category: "Open Houses",
                essential: "Standard open house events",
                premium: "Enhanced open house events with digital promotion",
                concierge: "Luxury open house events with catering",
            },
            {
                category: "Agent Support",
                essential: "Dedicated agent support",
                premium: "Priority agent support with regular updates",
                concierge: "24/7 concierge agent support",
            },
            {
                category: "Market Analysis",
                essential: "Basic market analysis",
                premium: "Detailed market analysis and pricing strategy",
                concierge: "Comprehensive market analysis with ongoing updates",
            },
            {
                category: "Showing Services",
                essential: "Standard showing scheduling",
                premium: "Flexible showing schedule with virtual options",
                concierge: "On-demand showing services",
            },
            {
                category: "Transaction Support",
                essential: "Standard transaction coordination",
                premium: "Enhanced transaction support",
                concierge: "Full-service transaction management",
            },
        ];

        const benefits = [
            {
                icon: "ClockIcon",
                title: "Dedicated Support",
                description:
                    "Work with experienced agents who are committed to your success throughout your entire real estate journey.",
            },
            {
                icon: "HomeIcon",
                title: "Professional Marketing",
                description:
                    "Get your property maximum exposure with our comprehensive marketing strategies and professional presentation.",
            },
            {
                icon: "CashIcon",
                title: "Market Expertise",
                description:
                    "Benefit from our deep understanding of local market trends and expert negotiation skills to achieve the best possible outcome.",
            },
        ];

        return {
            comparisonData,
            benefits,
        };
    },
});
</script>
