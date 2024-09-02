<template>
    <div class="bg-white py-8 container-size">
        <h1 class="heading-lg text-center mb-4">Choose how you want to sell your house today</h1>
        <p class="text-center mb-8">
            No more settling for just one option with traditional home buyers or local real estate agents.
            Whether you want top dollar and have some time, or you want a fair cash offer for speed and convenience, WeBuyHomes.US has
            you covered.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
            <!-- Quick & Convenient Sale Option -->
            <div class="border rounded-size p-6 space-y-6">
                <h2 class="subheading-sm">Our "Quick & Convenient Sale" Option:</h2>
                <div class="bg-brand-500 text-white p-6 rounded-size">
                    <div class="flex items-center justify-center mb-4">
                        <span class="text-4xl mr-2">$</span>
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-2">Sell your house to WeBuyHomes.US</h3>
                    <p class="text-center">We'll make you a fair cash offer so you can sell without the hassles and stress of listing.</p>
                </div>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>Competitive Cash offer within 24 hours</strong>
                            <p>Tell us about your house and we'll carefully evaluate it with our local market expertise to provide you with a fair, no-obligation cash offer.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>No Showings - No Hassles</strong>
                            <p>Skip open houses, weekend showings, and disrupting your life.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>You choose your closing day</strong>
                            <p>Once we make an offer, we can close in just days, not months. You pick the date that is best for you.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>We'll cover any repairs</strong>
                            <p>Does your house need repairs? We'll handle them for you! You can even leave behind unwanted items and we'll haul them off at no extra charge.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>We pay all closing costs</strong>
                            <p>Closing costs can add up, which is why we cover them for you. No extra costs or hidden fees. All-inclusive.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>No fees or commissions</strong>
                            <p>Since we're buying your house, we charge no fees and no commissions. Refreshing? We think so, too.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Highest Offer Option -->
            <div class="border rounded-size p-6 space-y-6">
                <h2 class="subheading-sm">Our "Highest Offer" Option:</h2>
                <div class="bg-white p-6 rounded-size flex items-center justify-center space-x-4">
                    <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <svg class="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-center mb-2">A member from WeBuyHomes.US has you covered</h3>
                <p class="text-center mb-6">Perfect if you want to maximize your equity.</p>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>Maximize your equity</strong>
                            <p>We'll buy your house at the highest possible price with our wide buyer network.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>More peace of mind</strong>
                            <p>If a buyer's financing falls through or something happens and you can't wait, we are always able to buy your house from you.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>Expertise at every step</strong>
                            <p>From setting the right list price to closing, you'll be supported by local a local real estate expert.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>*Ask about our "Fix and List" option</strong>
                            <p>For the right situations, we can often fund and do improvements to your house to raise the value for a higher sales price. This can put an additional $10k to $30k+ into a seller's pocket.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <strong>Our cash offer is on standby</strong>
                            <p>At any time, you can activate our WeBuyHomes.US Cash Offer Program.</p>
                        </div>
                    </li>
                </ul>
                <p class="text-sm italic">*Inquire to see if your house qualifies for our "fix and list" program</p>
            </div>
        </div>

        <div class="mt-8 text-center">
            <a href="/#form">
                <button class="bg-secondary-600 hover:bg-secondary-500 text-white font-bold py-3 px-6 rounded-size">
                    Yes! I want to get my fair cash offer!
                </button>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section2',
}
</script>
