
<template>
<div class="wrapper">
  <div class="activities">
    <div class="activity" v-for="activity in activities" :key="activity.name">
      <div class="info">
        <p>{{activity.name}}</p>
        <ul>
          <li>Location: {{activity.location}}</li>
          <li>Price: {{activity.price}}</li>
          <li>Good for dates? {{activity.goodForDates}}</li>
          <li>Rating out of 10? {{activity.ratingof10}}</li>
        </ul>
      </div>
      <div class="price">
        <button class="auto" v-if="$route.name != 'List'" v-on:click="addToList(activity)">Add to my list!</button>
        <button class="auto" v-if="$route.name === 'List'" v-on:click="removeFromList(activity)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ActivitiesList',
  props: {
    activities: Array,
  },
  methods: {
    addToList(activity){
      this.activity = activity;
      this.$root.$data.list.push(activity)
    },
    removeFromList(activity){
      this.activity = activity;
      this.$root.$data.list.splice(activity, 1);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.activities {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.activity {
  margin: 10px;
  margin-top: 50px;
}
.info {
  color: #000;
  padding: 10px 30px;
}
.info p {
  margin: 0px;
  font-size: 20px;
}
.price {
  display: flex;
}
button {
  height: 30px;
  background: #000;
  color: white;
  border: none;
}
.auto {
  margin: auto;
}
ul{
  list-style-type: none;
}
li{
  text-align: left;
}
</style>