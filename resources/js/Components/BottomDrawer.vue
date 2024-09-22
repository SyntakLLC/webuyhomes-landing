<template>
    <dialog class="z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent" ref="drawer">
        <div class="fixed inset-0 overflow-y-auto px-4 sm:px-0 z-50" scroll-region>
            <transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="ease-in duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div v-show="show" class="fixed inset-0 transform transition-all" @click="close">
                    <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75" />
                </div>
            </transition>

            <transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0 translate-y-full"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="ease-in duration-200"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-full"
            >
                <div v-show="show" 
                     class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 overflow-hidden shadow-xl transform transition-all" 
                     :style="{ maxHeight: '90vh', height: contentHeight }"
                     ref="content">
                    <div ref="innerContent">
                        <slot v-if="showSlot"/>
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
            contentHeight: 'auto',
            resizeObserver: null,
        };
    },

    watch: {
        show(newValue) {
            if (newValue) {
                document.body.style.overflow = 'hidden';
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
                this.$emit('close');
            }
        },
        closeOnEscape(e) {
            if (e.key === 'Escape' && this.show) {
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
        document.addEventListener('keydown', this.closeOnEscape);
        this.$nextTick(() => {
            this.updateContentHeight();
            this.setupResizeObserver();
        });
    },

    beforeUnmount() {
        document.removeEventListener('keydown', this.closeOnEscape);
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