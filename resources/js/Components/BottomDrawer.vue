<template>
    <dialog
        class="z-50 min-w-full min-h-full m-0 overflow-y-auto bg-transparent backdrop:bg-transparent"
        ref="drawer"
    >
        <div
            class="fixed inset-0 z-50 px-4 overflow-y-auto sm:px-0"
            scroll-region
        >
            <transition
                enter-active-class="duration-300 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-show="show"
                    class="fixed inset-0 transition-all transform"
                    @click="close"
                >
                    <div
                        class="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"
                    />
                </div>
            </transition>

            <transition
                enter-active-class="duration-300 ease-out"
                enter-from-class="translate-y-full opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="duration-200 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-full opacity-0"
            >
                <div
                    v-show="show"
                    class="fixed bottom-0 left-0 right-0 overflow-y-scroll transition-all transform bg-white shadow-xl dark:bg-gray-800"
                    :style="{ maxHeight: '90vh', height: contentHeight }"
                    ref="content"
                >
                    <div ref="innerContent">
                        <slot v-if="showSlot" />
                    </div>
                </div>
            </transition>
        </div>
    </dialog>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        closeable: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            showSlot: this.show,
            contentHeight: "auto",
            resizeObserver: null,
        };
    },

    watch: {
        show(newValue) {
            if (newValue) {
                document.body.style.overflow = "hidden";
                this.showSlot = true;
                this.$nextTick(() => {
                    this.$refs.drawer?.showModal();
                    this.updateContentHeight();
                });
            } else {
                document.body.style.overflow = null;
                setTimeout(() => {
                    this.$refs.drawer?.close();
                    this.showSlot = false;
                }, 200);
            }
        },
    },

    methods: {
        close() {
            if (this.closeable) {
                this.$emit("close");
            }
        },
        closeOnEscape(e) {
            if (e.key === "Escape" && this.show) {
                this.close();
            }
        },
        updateContentHeight() {
            if (this.$refs.innerContent) {
                const height = `${this.$refs.innerContent.scrollHeight}px`;
                if (this.contentHeight !== height) {
                    this.contentHeight = height;
                }
            }
        },

        setupResizeObserver() {
            this.resizeObserver = new ResizeObserver(() => {
                this.updateContentHeight();
            });

            if (this.$refs.innerContent) {
                this.resizeObserver.observe(this.$refs.innerContent);
            }
        },
    },

    mounted() {
        document.addEventListener("keydown", this.closeOnEscape);
        this.$nextTick(() => {
            this.updateContentHeight();
            this.setupResizeObserver();
        });
    },

    beforeUnmount() {
        document.removeEventListener("keydown", this.closeOnEscape);
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        document.body.style.overflow = null;
    },
};
</script>

<style scoped>
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>
