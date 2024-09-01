<template>
    <div>
        Ini Adalah Child Component
    </div>

    <div>{{ Text }}</div>
</template>

<script>
    export default {
        props: {
            Text: {
                type: String,
                default: ""
            }
        }
    }
</script>