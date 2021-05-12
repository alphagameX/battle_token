<template>
    <tutorial-model :parent="$parent" :timeToInteract="3">
        <p>Bienvenue sur <span>@BattleToken</span></p>
        <p>Pour commencez, crée un Club</p>
        <p>cliquez sur suivant</p>
    </tutorial-model>
</template>

<script>
import TutorialModel from './TutorialModel.vue'

export default {
    name: "TutorialSlide1",
    components: { TutorialModel },
    mounted() {
        this.$parent.$refs.next.classList.remove('disable')
    }
}
</script>

<style lang="scss" scoped>

    p {
        &:first-child {
            font-size: 2rem;
        }
        text-align: center;
        margin-bottom: 10px;
        span {
            font-weight: 600;
            color: $color1;
        }
    }
    
</style>