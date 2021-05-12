<template>
    <div class="create__confrontation" @click.self="$parent.create = !$parent.create">
        <div>
           
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardMenuConfrontation"
}
</script>

<style lang="scss" scoped>
    .create__confrontation {
        z-index: 2;
        background: rgba(0, 0, 0, 0.479);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;

        > div {
            border-radius: 30px;
            background: white;
            max-width: 600px;
            width: 100%;
            max-height: 800px;
            height: 100%;
        }
    }
</style>