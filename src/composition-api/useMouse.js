import { onMounted, onUnmounted,ref } from 'vue'
export function useMouse(){
    const x = ref(0)
    const y = ref(0)
    const handPostion = (e)=>{
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(()=>{
        window.addEventListener("mousemove",handPostion)
        
    })

    onUnmounted(()=>{
        window.removeEventListener("mousemove",handPostion)
    })
   



    return {x,y}
}