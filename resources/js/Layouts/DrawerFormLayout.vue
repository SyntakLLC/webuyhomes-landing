<template>
    <div class="flex flex-col md:grid md:grid-cols-2">
        <div class="p-6 md:p-12 text-left tracking-tight">
            <h2 class="text-3xl lg:text-4xl text-gray-800 mb-2 font-display">{{ title }}</h2>
            <p class="text-lg lg:text-xl text-gray-600">{{ subtitle }}</p>
        </div>
        <div class="p-6 md:p-12">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "DrawerFormLayout",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>