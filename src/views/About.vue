<template>
  <div>
    <div>关于的内容</div>
    <input v-model="remark" />
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "About",
  setup() {
    const remark = ref("");
    return {
      remark,
    };
  },
};
</script>