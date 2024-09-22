<template>
    <Head>
        <title>
            How it works
        </title>
    </Head>

    <Header />

    <div class="-skew-y-[1.5deg]">
        <div class="relative w-full h-full overflow-hidden">
            <img src="../../img/house.webp"
                 alt="Background photo of house"
                 class="absolute inset-0 w-full h-full object-cover"/>
            <div class="bg-black/20 backdrop-blur-md absolute inset-0 w-full h-full"></div>
            <div class="skew-y-[1.5deg] relative flex flex-col items-center container-size py-14 mx-auto h-full leading-6 text-center text-white">
                <h2 class="mx-0 mt-0 max-w-full text-center text-white text-shadow heading-max">
                    How it works
                </h2>
            </div>
        </div>
    </div>

    <div class="container-size py-12">
        <div class="grid md:grid-cols-4 gap-8 mb-12">
            <div v-for="(step, index) in steps" :key="index" class="text-center flex flex-col items-center">
                <div class="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                    {{ index + 1 }}
                </div>
                <p class="font-semibold mb-2">{{ step.title }}</p>
                <p class="text-sm text-gray-600">{{ step.description }}</p>
            </div>
        </div>

        <div class="text-sm text-gray-600 mb-8">
            <strong>Timeline:</strong> Once we receive your information, we are usually able to present you with a fair, all-cash offer within 24 hours. From there, we can close as quickly as 7 days – or on your schedule.
        </div>

        <div class="bg-gray-100 p-8 grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
                <h2 class="heading-sm text-gray-800">Contact Us Today To Get Your Offer!</h2>
                <img src="../../img/house.jpeg" alt="House" class="w-full h-auto">
            </div>
            <div>
                <Form small />
            </div>
        </div>

        <h3 class="subheading-lg text-center my-8">Selling Your House Can Be A Quick And Simple Process</h3>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div v-for="(feature, index) in features" :key="index" class="flex items-start">
                <div class="w-12 h-12 mr-4 flex-shrink-0">
                    <component :is="feature.icon" class="w-full h-full text-brand-500" />
                </div>
                <div>
                    <h4 class="font-semibold mb-2">{{ feature.title }}</h4>
                    <p class="text-sm text-gray-600">{{ feature.description }}</p>
                </div>
            </div>
        </div>

        <div class="text-center">
            <Link href="/">
                <button class="bg-secondary-600 text-white px-6 py-3 font-semibold hover:bg-secondary-500 transition duration-300">
                    Back to home
                </button>
            </Link>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Link, Head } from '@inertiajs/vue3';
import Form from "@/Partials/Landing/Form.vue";
import Header from "@/Partials/Landing/Header.vue";

const HouseIcon = {
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  `
};

const CashIcon = {
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
};

const ToolsIcon = {
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  `
};

export default defineComponent({
    name: 'HowItWorks',
    components: {
        Header,
        Form,
        HouseIcon,
        CashIcon,
        ToolsIcon,
        Link,
        Head
    },
    setup() {
        const steps = [
            { title: 'Tell us about your property', description: 'Contact us today and free pricing' },
            { title: 'If it meets our buying criteria...', description: 'We\'ll contact you to set up a quick appointment' },
            { title: 'We present you with a no-obligation cash offer', description: 'Or discuss the best method to proceed' },
            { title: 'We close at a local reputable title company', description: 'We can close on your house in as little as 7 days' }
        ];

        const features = [
            {
                icon: 'HouseIcon',
                title: 'We Buy Homes AS-IS',
                description: 'We buy houses in any condition. You don\'t have to worry about repairs or biz at the time of sale.'
            },
            {
                icon: 'CashIcon',
                title: 'Get CASH',
                description: 'We can offer you options that most investors cannot. We can pay cash, take over mortgage payments, etc.'
            },
            {
                icon: 'ToolsIcon',
                title: 'No Repairs Needed',
                description: 'Don\'t worry about repairing or cleaning up your property. We\'ll buy it exactly as it is, no matter how ugly or pretty it is.'
            }
        ];

        return {
            steps,
            features
        };
    }
    });
</script>
