<template>
    <div class="refresh" @click="clearnAnimation()">
        <span></span>
    </div>
</template>
<script>
export default {
    name: "refresh",
    components: {

    },
    methods: {
        clearnAnimation() {
            $(".refresh span").css("animation-play-state", "running");
            this.$emit('refreshlist');

            $(window).ready(function () {

                setTimeout(function () {
                    $(".refresh span").css("animation-play-state", "paused")
                }, 2000)



            });



        }
    }
}
</script>
<style scoped>
.refresh {
    width: 3rem;
    height: 3rem;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    border-radius: 50%;
    border: 1px solid #ddd;
    opacity: 0.8;
    background: #fff;
}

.refresh span {
    display: block;
    width: 100%;
    height: 100%;
    background: url("../assets/img/refresh.png")no-repeat center;
    background-size: 60%;
    animation: rotatefs 1s linear infinite;
    animation-play-state: paused;
}

@keyframes rotatefs {
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(-720deg)
    }
}
</style>

