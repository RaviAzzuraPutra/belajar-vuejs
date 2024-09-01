<template>
    <input type="text" :value="moddelValue" @input="$emit('update:modelValue', $event.target.value)"> 

</template>


<script>
export default {
    props: ["modelValue"]
}

</script>