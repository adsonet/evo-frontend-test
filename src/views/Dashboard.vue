<template>
    <div>
        <TopBar />
        <div class="container-fluid" >
            <div class="row">
                <SideBar />
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <TableArea />
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import TableArea from '../components/TableArea.vue'
import TopBar from '../components/TopBar.vue'
import SideBar from '../components/SideBar.vue'

export default {
  name: 'Dashboard',
  components: {
      TableArea,
      TopBar,
      SideBar
  }
}
</script>

