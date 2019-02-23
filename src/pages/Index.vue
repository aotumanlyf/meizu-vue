<template>
  <div>123</div>
</template>

<script>
    export default {
        name: "Index",
        mounted(){
          this.$http.post('https://dms-dataapi.meizu.com/data/jsdata.jsonp?callback=renderSite&blockIds=233,266,267')
            .then(function(res){
              JSON.parse(res.data.substring(11, res.data.length - 1));
            })
          this.$http.get('https://dms-dataapi.meizu.com/data/jsdata.jsonp?callback=renderPcFooter&blockIds=236,259,275,366,367')
            .then(function(res){
              console.log(res)
            })
        }
    }
</script>

<style scoped>

</style>
