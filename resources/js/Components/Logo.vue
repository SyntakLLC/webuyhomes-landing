<template>
    <img v-if="white" alt="logo"
         src="../../img/white-logo.png"
         class="flex-shrink-0 mb-0 py-4 h-24 max-w-full border-none object-contain"/>
    <img v-else alt="logo"
         src="../../img/logo.webp"
         class="flex-shrink-0 mb-0 py-4 h-24 max-w-full border-none object-contain"/>
</template>

<script>
export default {
    name: "Logo",

    props: {
        white: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
