// import { onMounted, onUnmounted,ref,reactive } from 'vue'
// export function useMouse(){
//     const x = ref(0)
//     const y = ref(0)

//     const obj = reactive({x:0,y:0})
//     const handPostion = (e)=>{
//         x.value = e.pageX
//         y.value = e.pageY
//         obj.x = e.pageX
//         obj.y = e.pageY
//     }
//     onMounted(()=>{
//         window.addEventListener("mousemove",handPostion)
        
//     })

//     onUnmounted(()=>{
//         window.removeEventListener("mousemove",handPostion)
//     })
//     return {x,y,obj}
// }
import { onMounted, onUnmounted,reactive,toRefs } from 'vue'
export function useMouse(){
    const obj = reactive({x:0,y:0})
    const handPostion = (e)=>{
        obj.x = e.pageX
        obj.y = e.pageY
    }
    onMounted(()=>{
        window.addEventListener("mousemove",handPostion)
        
    })

    onUnmounted(()=>{
        window.removeEventListener("mousemove",handPostion)
    })
    return toRefs(obj)
}