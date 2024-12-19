<template>
    <div class="flex justify-center items-center p-1 bg-homexe-black h-12 w-12">
        <img
            src="../../img/homexe-logo.gif"
            alt="logo"
            class="flex-shrink-0 my-4 h-10 overflow-hidden max-w-full border-none object-contain saturate-0 contrast-[1000]"
        />
    </div>

    <!-- <img v-if="white" alt="logo"
         src="../../img/white-logo.png"
         class="flex-shrink-0 mb-0 py-4 h-24 max-w-full border-none object-contain"/>
    <img v-else alt="logo"
         src="../../img/logo.webp"
         class="flex-shrink-0 mb-0 py-4 h-24 max-w-full border-none object-contain"/> -->
</template>

<script>
export default {
    name: "Logo",

    props: {
        white: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped></style>
