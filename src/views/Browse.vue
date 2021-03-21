<template>
<div>
  <ActivitiesList :activities="activities" />
  <h1>Found an activity worth adding to the list?</h1>
  <form v-on:submit.prevent="processForm">
      <div class="field">
        <label class="label">Name: </label>
        <input type="text" class="input" name="name" v-model="newItem.name">
        <br>
      </div>
      <div class="field">
        <label class="label">Location: </label>
        <input type="text" class="input" name="location" v-model="newItem.location">
      </div>
      <div class="field">
        <label class="label">Price: </label>
        <input type="text" class="input" name="price" v-model="newItem.price">
      </div>
      <div class="field">
        <label class="label">Good for dates?: </label>
        <input type="text" class="input" name="dates" v-model="newItem.goodForDates">
      </div>
      <div class="field">
        <label class="label">Rating out of 10?: </label>
        <input type="text" class="input" name="rating" v-model="newItem.ratingof10">
      </div>
      <div class="field has-text-right">
        <input type="submit">
      </div>
  </form>
</div>
</template>

<script>
import ActivitiesList from "../components/ActivitiesList.vue"
export default {
  name: 'Browse',
  components: {
    ActivitiesList
  },
  data() {
    return {
        newItem: {
          name: '',
          location: '',
          price: '',
          goodForDates: '',
          ratingof10: ''
      }
    }
  },
  props: {
  },
  computed: {
    activities() {
      return this.$root.$data.activities;
    }
  },
  methods: {
      processForm(){
          this.$root.$data.activities.push(this.newItem)
      }
  }
}
</script>

<style scoped>
input[type=text], select {
  display: flex;
  width: 25%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 25%;
  background-color: #6769fd;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #0c10d3;
}
div {
  border-radius: 5px;
  padding: 20px;
}
</style>