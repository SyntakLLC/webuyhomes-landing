<template>
    <Head>
        <title>
            Compare
        </title>
    </Head>

    <Header />

    <div class="-skew-y-[1.5deg]">
        <div class="relative w-full h-full overflow-hidden">
            <img src="../../img/house2.jpeg"
                 alt="Background photo of house"
                 class="absolute inset-0 w-full h-full object-cover"/>
            <div class="bg-black/20 backdrop-blur-md absolute inset-0 w-full h-full"></div>
            <div class="skew-y-[1.5deg] relative flex flex-col items-center container-size py-14 mx-auto h-full leading-6 text-center text-white">
                <h2 class="mx-0 mt-0 max-w-full text-center text-white text-shadow heading-max">
                    Compare
                </h2>
            </div>
        </div>
    </div>

    <div class="container-size py-12">
        <p class="mb-6 text-lg">
            Even in a seller's market like NH, it's smart to look at your options and see what will actually help you best reach your goals with the sale of your house. WeBuyHomes.US is different than traditional agents or buying houses directly because we are actually both! Because we are real estate investors and licensed, reputable agents, we can offer more options to help you reach your goals when selling your MA house. Dive into the details below to compare your options:
        </p>

        <div class="overflow-x-auto mb-12">
            <table class="w-full border-collapse">
                <thead>
                <tr class="bg-gray-100">
                    <th class="border p-2"></th>
                    <th class="border p-2">Selling With An Agent</th>
                    <th class="border p-2">Selling To An Investor</th>
                    <th class="border p-2">SOLD To WeBuyHomes.US</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="row in comparisonData" :key="row.category">
                    <td class="border p-2 font-semibold">{{ row.category }}</td>
                    <td class="border p-2" v-html="row.agent"></td>
                    <td class="border p-2" v-html="row.investor"></td>
                    <td class="border p-2" v-html="row.webuyHomes"></td>
                </tr>
                </tbody>
            </table>
        </div>

        <p class="mb-6 text-sm italic">
            Here at WeBuyHomes.US, we don't use bank financing so you don't have to worry about our ability to close on a deal.
        </p>

        <h2 class="heading-lg text-center mb-8">Work The Numbers And See Which Way Helps You Get There...</h2>

        <p class="mb-6">
            When you really work the numbers you start to see the real benefits that each way of selling your NH house offers.
        </p>

        <p class="mb-6">
            Here at WeBuyHomes.US, we'll work with you to determine which approach is best for your goals. We can either make you an immediate cash offer, or we can put our experience and expertise to work and list your house on the market for top dollar.
        </p>

        <p class="mb-12">
            If selling to us for cash, we won't be able to offer you full retail value for your house, but we also offer other benefits that the traditional house sale route can't offer.
        </p>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div v-for="(benefit, index) in benefits" :key="index" class="text-center">
                <div class="w-16 h-16 mx-auto mb-4">
<!--                    <component :is="benefit.icon" class="w-full h-full text-brand-500" />-->
                    <svg v-if="benefit.icon === 'ClockIcon'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  class="w-full h-full text-brand-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <svg v-else-if="benefit.icon === 'HomeIcon'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  class="w-full h-full text-brand-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  class="w-full h-full text-brand-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="font-semibold mb-2">{{ benefit.title }}</h3>
                <p class="text-sm">{{ benefit.description }}</p>
            </div>
        </div>

        <p class="mb-12">
            So when you add up the time you could save by working with WeBuyHomes.US, the no-hassle experience, and the money you'll save on commissions, fees, and holding costs while you wait to sell the traditional route, for many MA area home owners selling to a professional house buyer is the best viable option. And if it's not, we have you covered there as well!
        </p>

        <h2 class="heading-lg text-center mb-8">See for yourself and get a fair all-cash offer on your house today.</h2>

        <div class="max-w-2xl mx-auto">
            <Form small />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Form from "@/Partials/Landing/Form.vue";
import { Link, Head } from '@inertiajs/vue3';
import Header from "@/Partials/Landing/Header.vue";

const ClockIcon = {
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
};

const HomeIcon = {
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

export default defineComponent({
    name: 'Compare',
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
                category: 'Commissions / Fees:',
                agent: '6% on average is paid by you, the seller',
                investor: 'None',
                webuyHomes: 'Standard commissions if we list your home. NO fees/commissions if you sell directly to us for cash'
            },
            {
                category: 'Who Pays Closing Costs?',
                agent: '2% on average is paid by you, the seller',
                investor: 'Investor',
                webuyHomes: 'You pay standard closing costs if you list your home; you pay NO closing costs if you sell directly to us for cash'
            },
            {
                category: 'Inspection & Financing Contingency*:',
                agent: 'Yes, sales can fall through',
                investor: 'None',
                webuyHomes: 'Much lower risk of the final sale falling through'
            },
            {
                category: 'Appraisal Needed:',
                agent: 'Yes, the sale is often subject to appraisal',
                investor: 'None',
                webuyHomes: 'Subject to appraisal if listing on the market, but we make cash offers, too!'
            },
            {
                category: 'Average Days Until Sold:',
                agent: '+/- 91 Days',
                investor: 'Can close in as little as 7 days',
                webuyHomes: 'Standard time on the market or IMMEDIATE CASH OFFER'
            },
            {
                category: 'Number of Showings:',
                agent: 'Varies',
                investor: 'Varies',
                webuyHomes: '1 (just US) if you sell to us for cash'
            },
            {
                category: 'Closing Date:',
                agent: '30 to 60+ days after accepting the buyer\'s offer',
                investor: 'Usually the date of your choice',
                webuyHomes: 'The date of YOUR CHOICE'
            },
            {
                category: 'Who Pays For Repairs?',
                agent: 'Negotiated during the inspection period',
                investor: 'Investor',
                webuyHomes: 'We pay for all repairs if selling to us for cash'
            },
        ];

        const benefits = [
            {
                icon: 'ClockIcon',
                title: 'From offer to close and cash in your hand in as little as 7 days.',
                description: 'You can get rid of the headache of that property fast and avoid paying months of utility payments, insurance payments, or mortgage payments... you get the drill.'
            },
            {
                icon: 'HomeIcon',
                title: 'Don\'t worry about fixing anything or cleaning your house again and again for buyer after buyer.',
                description: 'We don\'t care how dirty or pretty your house is (we\'ve seen worse!) or how many repairs are needed in a complete fixer-upper. We\'ll make an offer on your house no matter what the condition. This saves you time and money that you can keep in your pocket.'
            },
            {
                icon: 'CashIcon',
                title: 'Don\'t worry about paying those pesky closing fees (we\'ve got you covered).',
                description: 'Because we are a full-service professional home buyer in NH, we make it easy. We pay for all of the closing costs. What we offer you is what you get (of course minus any mortgage payoff or other encumbrances on the property). Pretty refreshing, eh?'
            }
        ];

        return {
            comparisonData,
            benefits
        };
    }
});
</script>
