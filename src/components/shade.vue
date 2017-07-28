<template>
    <div class="shade">
        <div class="mask">
            <span>{{text}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'shade',

    components: {

    },
    props: ["text"],

}
</script>
<style scoped>
.shade {
    display: none;
    width: 100%;
    position: fixed;
    z-index: 1001;
    top: 40%;
}

.mask {

    width: 9rem;
    height: 9rem;
    border-radius: 1rem;
    margin: 0 auto;
    line-height: 9rem;
    background-color: rgba(0, 0, 0, .3);
    text-align: center;
}

.mask span {
    font-size: 1.25rem;
    color: #fff;
}
</style>
