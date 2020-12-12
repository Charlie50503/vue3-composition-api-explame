<template>
  <HelloWorld msg="1233123132" @handEmit="handFunction" />
  <p>{{ x }}</p>
  <p>{{ y }}</p>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { useMouse } from "./composition-api/useMouse";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const { x, y } = useMouse();
    const handFunction = () => {
      console.log("Hello World");
    };
    return { handFunction, x, y };
  },
};
</script>

<style>
.test {
  background-color: #ccc;
}
</style>
