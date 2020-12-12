<template>
  <p>{{ props.msg }}</p>
  <button type="button" @click="handEmitClick()">
    123
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HelloWorld",
  // props得到的變數不要直接放在tamplate上面，不然會不知道這個變數是從props來的還是setup來的
  props: {
    msg: String,
  },
  emits: {
    // no validation
    click: null,

    // with validation
    handEmit: (payload) => {
      // return false;
      console.log("payload ", payload);
      return true;
    },
  },
  // emits: ["handEmit"],
  // props 的資料可以透過添加到setup的參數裡面使組件可以使用props的值
  setup(props, context) {
    const text = ref("Text");
    const handEmitClick = () => {
      console.log(context);
      context.emit("handEmit", { data: 0 });
    };
    return { props, handEmitClick };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
