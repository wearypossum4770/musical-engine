<template>
    <div>
        <div>

            <div>
  <input @change="searchField" @click="searchField" type="radio" id="zipcode" name="field" value="zipcode">
  <label for="zipcode">ZipCode</label>
</div>

     <div>
  <input @change="searchField" @click="searchField" type="radio" id="stateName" name="field" value="stateName">
  <label for="stateName">State Name</label>
</div>
     <div>
  <input @change="searchField" @click="searchField" type="radio" id="city" name="field" value="city">
  <label for="city">City</label>
</div>

        </div>
<input v-model="search" @change="searchAddress" type="search"/>
    </div>
</template>

<script>
    export default {
        name:"Address",
        methods:{

             searchField(e) {
                console.log(e.target.value)
                this.field = e.target.value
            },
            async searchAddress(){
                try {
                    const resp = await (await fetch(`http://localhost:3002/change_of_address/${this.field}/${this.search}`)).json()
                    this.target = resp.target
                } catch (error) {
                    console.log(error)
                }
            }
        },
        data(){
            return {
                search:"",
                target:null,
                field:"",
            }
        }
    }
</script>

<style scoped>

</style>