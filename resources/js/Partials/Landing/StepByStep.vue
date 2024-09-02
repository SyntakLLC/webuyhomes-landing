<template>
    <div class="container-size py-12">
        <h1 class="heading-lg text-center mb-2">How It Works</h1>
        <p class="text-center italic mb-6">(Yes, it's really this easy.)</p>

        <div class="text-center mb-8">
            <p>To start, simply tell us about your Local Market area house through our information form or call us.</p>
            <p class="font-bold">You can get your all-cash offer within 24 hours.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div v-for="(step, index) in steps" :key="index" class="text-center">
                <div class="flex justify-center mb-4">
                    <svg class="w-12 h-12 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </div>
                <h3 class="subheading-sm mb-2">STEP {{ index + 1 }}</h3>
                <p>{{ step }}</p>
            </div>
        </div>

        <h2 class="subheading-lg text-center text-gray-600 mb-8">We Offer A Better, Faster, and Lower Cost Way To Sell Your House In Any Area</h2>

        <div class="grid md:grid-cols-2 gap-8">
            <ul class="space-y-4">
                <li v-for="benefit in benefits" :key="benefit" class="flex items-start">
                    <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{{ benefit }}</span>
                </li>
            </ul>
            <div>
                <p class="mb-4">We work differently at WeBuyHomes.US. We're not just real estate investors, and we're not just real estate agents - we're both! When you work with us, you will have many different options for selling your home fast in Your Local Market.</p>
                <p class="mb-4">Contact us and submit the short property information form. We can give you a fair cash offer quickly and close whenever YOU choose.</p>
                <p>We can also help you list and market your property for the highest price. It's entirely up to you! We can handle various property conditions and situations, including tenants. We offer flexible closing options, even as quick as 7 days in some cases.</p>
                <p class="mt-4"><a href="/how-it-works" class="text-secondary-600 hover:underline">Learn more about our process →</a></p>
            </div>
        </div>

        <div class="mt-12 text-center">
            <h2 class="subheading-lg mb-4">Before You List Your House, Get A Fair Cash Offer From Us!</h2>
            <p class="mb-4">No matter what condition your house is in; no matter what situation or timeframe you're facing...</p>
            <p>Our goal is to help make your life easier by assisting you with your property, whether through a fair cash offer or guidance on listing it for the highest possible price. We're here to support you in maximizing the value of your house sale. Either way, we've got you covered!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepByStep",
    data() {
        return {
            steps: [
                "Tell us about your Local Market house. We'll analyze your property.",
                "We'll make you a fair offer based on the market value and condition.",
                "You choose the selling option that works best for you, with zero obligation."
            ],
            benefits: [
                "Avoid real estate agent commissions",
                "Avoid closing costs",
                "We cover all repairs with our \"Cash Offer\" option",
                "Avoid open houses",
                "See what we can offer for your house today!",
                "Already got an offer? Let us try to beat it!"
            ]
        }
    }
}
</script>
