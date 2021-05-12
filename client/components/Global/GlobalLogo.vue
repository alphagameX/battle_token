<template>
    <nuxt-link to="/" class="logo__container">
        <h1>Battle
            <span>Token</span>
            <i class="fas fa-coins"></i>
            <i class="fas fa-coins"></i>
        </h1>
    </nuxt-link>
</template>

<script>
export default {
    name: "GlobalLogo"
}
</script>

<style lang="scss" scoped>
   .logo__container {
       text-decoration: none;
       width: 272px;
        h1 {
            width: fit-content;
            z-index: 0;
            font-size: 4rem;
            font-weight: 700;
            color: white;
            position: relative;
            span {
                z-index: 1;
                margin-left: 8px;
                position: absolute;
                font-size: 1.5rem;
                top: 8px;
                color: white;
                font-weight: 800;
                background: #ff4657;
                border-radius: 20px;
                padding: 0 10px;
                right: -76px;
            }
            i:first-of-type {
                z-index: 2;
                position: absolute;
                font-size: 1.8rem;
                right: -27px;
                bottom: 12px;
            }
            i:last-of-type {
                position: absolute;
                z-index: 2;
                font-size: 1.75rem;
                bottom: 12px;
                right: -52px;
            }
        }
   }
</style>