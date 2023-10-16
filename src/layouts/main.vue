<template>
  <div>
    <select v-model="selectLanguage">
      <option value="">Please select</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <input type="text" v-model="inputValue" />
    <div>
      Selected value: {{ selectLanguage }}
    </div>
    <div>
      Input value: {{ inputValue }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Option {
  label: string;
  value: string;
}

export default defineComponent({
  name: 'DropdownAndInput',
  setup() {
    const options: Option[] = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const selectLanguage = ref('');
    const inputValue = ref('');

    return {
      options,
      selectLanguage,
      inputValue,
    };
  },
});
</script>