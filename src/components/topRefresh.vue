<template>
    <div class="parents">
    
        <span class="move"></span>
    
    </div>
</template>
<script>
export default {
    name: "topRefresh",

}
</script>
<style scoped>
 .parents {
     position: relative;
     height: 7rem;
     width: 100%;
 }

 span {
     transition: all 1s ease-out;
     position: absolute;
     top: 3rem;
     left: 50%;
     margin-left:-1.5rem;
     z-index: 998;
     width: 3rem;
     height: 3rem;
     background-color: #fff;
     border-radius: 50%;
     box-shadow: 1px 1px 5px #ddd;
     border: 1px solid #ddd;
 }

 span::before {
     width: 100%;
     height: 100%;
     opacity: 0.6;
     content: "";
     display: block;
     background: url('../assets/img/refreshtop.png')no-repeat center;
 }
</style>


