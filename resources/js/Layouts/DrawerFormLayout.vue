<template>
    <div class="flex flex-col md:grid md:grid-cols-2">
        <div class="p-6 tracking-tight text-left md:p-12">
            <h2 class="mb-2 text-3xl text-gray-800 lg:text-4xl font-display">
                {{ title }}
            </h2>
            <p class="text-lg text-gray-600 lg:text-xl">{{ subtitle }}</p>
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
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
    },
};
</script>
