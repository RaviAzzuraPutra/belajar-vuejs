<template>
    <div>{{ Text }}</div>
</template>

<script>
    export default {
        props: {
            Text: {
                type: JSON,
                default: ""
            }
        }
    }
</script>