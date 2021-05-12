<template>
<div>
    <div class="grid">
        <div class="center">
            <dashboard-panel-match />
        </div>
        <dashboard-panel-data />
    </div>
</div>
</template>

<script>
import DashboardPanelData from '../DashboardPanel/DashboardPanelData.vue'
import DashboardPanelMatch from '../DashboardPanel/DashboardPanelMatch.vue'

export default {
    name: "DashboardPageMyClub",
    components: {
        DashboardPanelData,
        DashboardPanelMatch
    },

}
</script>

<style>

</style>
