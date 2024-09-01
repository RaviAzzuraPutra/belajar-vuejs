<template>
    <h1>
        私の夢は日本でプログラマーになることです
    </h1>

    <button @click="onPress">Click Dari Component</button>
</template>

<script>

export default {
    emit: ['child-click'],
    methods: {
        onClick() {
            console.log('日本に行こう');
        },
        onPress() {
            this.$emit('child-click', 'value')
        }
    }
}
</script>
