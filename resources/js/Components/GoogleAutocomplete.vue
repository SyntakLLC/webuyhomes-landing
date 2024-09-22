<template>
  <input
    ref="input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :class="inputClass"
  />
</template>

<script>
export default {
  name: 'GoogleAutocomplete',
  props: {
    modelValue: String,
    placeholder: String,
    inputClass: String,
  },
  emits: ['update:modelValue', 'place_changed'],
  data() {
    return {
      autocomplete: null,
    };
  },
  mounted() {
    this.initializeAutocomplete();
  },
  methods: {
    initializeAutocomplete() {
      if (window.google && window.google.maps && window.google.maps.places) {
        this.autocomplete = new window.google.maps.places.Autocomplete(this.$refs.input, {
          types: ['address'],
          componentRestrictions: { country: 'us' }
        });

        this.autocomplete.addListener('place_changed', () => {
          const place = this.autocomplete.getPlace();
          this.handlePlaceChanged(place);
        });
      }
    },
    handlePlaceChanged(place) {
      if (place.formatted_address) {
        this.$emit('update:modelValue', place.formatted_address);
        this.$emit('place_changed', place);
      }
    },
  },
};
</script>