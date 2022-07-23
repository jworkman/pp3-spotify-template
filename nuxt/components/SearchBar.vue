<template>
  <header>
    <nav>
      <div class="sp-escape">
      	<a href="/">
      	  <font-awesome-icon :icon="['fab', 'spotify']" />
      	</a>
      </div>
      <div class="sp-search">
      	<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      	<v-form>
      	  <v-text-field
      	  	label="Search for..."
      	  	class="global-search"
      	  	v-model="query"
      	  />
      	</v-form>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data: () => ({
		debounce: false
	}),
	computed: {
		...mapState(["app"]),
		query: {
			get() {
				return this.app.query;
			},
			set(valuePassedThrough) { //the value is passed through the v-model automatically
				const self = this
				self.$store.dispatch('app/query', valuePassedThrough);
				if (self.debounce !== false) {
					clearTimeout(self.debounce)
				}
				self.debounce = setTimeout(() => {
					self.debounce = false
					self.$store.dispatch('app/results')
				}, 1000)
			}
		}
	}
}
</script>

<style lang="scss">
nav {
	background: #1DB954;
	height: 80px;
	width: 100%;
	position: fixed;
	z-index: 9;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.sp-search, .sp-escape {
	height: calc(100% - 15px);
}
.sp-escape {
  display: block;
  height: calc(100% - 15px);
  width: 90px;
  color: white;
  padding: 0 15px;
  a {
  	height: 100%;
    width: 100%;
    display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
  }
  * {
  	color: white;
  }
}
.sp-search {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	> svg {
		height: 25px;
		width: 25px;
		color: white;
	}
	> form {
		width: 500px;
		padding-left: 10px;
	}
	.global-search {
		input, label {
			color: white;
			font-weight: bold;
		}
		.v-input__slot::before, .v-input__slot::after {
			background: white;
			border-color: white;
		}
	}
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before,
.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
	background: white;
	border-color: white;
}
</style>