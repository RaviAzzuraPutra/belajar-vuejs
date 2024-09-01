<template>
    <div class="demo-tab">
        <h2>
            投稿コンポーネント  
        </h2>

        <div v-for="data in posts" :key="data">
            <ul>
                <li>{{ data.name }} : {{ data.population }}</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
            posts: []
        }
    },
    async created() {
        const res = await fetch("https://swapi.dev/api/planets/");
        const {results} = await res.json();

        this.posts = results;
    }
}
</script>
