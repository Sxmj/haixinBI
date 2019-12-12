<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>



<script>
export default {};
</script>
<style lang="scss">
.color_17b3a3 {
  color: #17b3a3;
}
.color_d30606 {
  color: #d30606;
}
.transition {
  transition: height 0.6s;
  -moz-transition: height 0.6s; /* Firefox 4 */
  -webkit-transition: height 0.6s; /* Safari 和 Chrome */
  -o-transition: height 0.6s; /* Opera */
}

body .el-table th.gutter{
    display: table-cell!important;
}
 
body .el-table colgroup.gutter{
    display: table-cell!important;
}
</style>
