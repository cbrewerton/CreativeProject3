
<template>
<div>
  <h1 v-if="$root.$data.list.length > 0">Your list of fun things to do in Provo</h1>
  <h1 v-if="$root.$data.list.length === 0">Your list is empty!</h1>
  <h2>Once you complete something on the list, you can go ahead and remove it, or keep it there in case you want to do it again!</h2>
  <ActivitiesList :activities="list"/>
</div>
</template>

<script>
import ActivitiesList from '../components/ActivitiesList.vue';
export default {
  name: 'List',
  components: {
    ActivitiesList
  },
  data() {
    return {
    }
  },
  computed: {
    list() {
      return this.$root.$data.list;
    }
  },
  methods: {
    }
}
</script>

<style scoped>
h1{
  text-align: center;
}
h2{
  text-align: center;
}
</style>