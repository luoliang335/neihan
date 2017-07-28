<template>
    <div class="fadetip">
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    name: "fadetip",
    components: {

    },
    props: ["message"],
}
</script>
<style scoped>
div {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    position: absolute;
    top: 7rem;
    text-align: center;
    background: rgba(90, 160, 230, .9);
    display: none;
}

p {
    color: #fff;
    text-align: center;
    font-size: 1rem;
}
</style>
