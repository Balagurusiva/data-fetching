 <template>
  <div class="p-[50px]">
    <NuxtLink to="geo" class="text-[25px] mr-3 font-bold float-right">click here for country ress</NuxtLink>

    <p class="text-[30px] font-bold my-5 text-center">Top 100 Movies </p>
     <span id="clock">time after hydration :{{ currentTime }}</span>
    <pre>Time in server rendered HTML: {{ data }}</pre>
    <div class="flex  flex-wrap gap-5 justify-between">
      <template v-for="movie in res">
       
      
        <div class="flex flex-row border-2 w-[30%] p-5 gap-4">
          <div class="flex flex-col items-center gap-3">
            <NuxtImg :src="movie.image" />
            <div class="text-[18px] flex flex-col gap-2 justify-between">
              <p><span class="font-bold">Name : </span>{{ movie.title }}</p>
              <p><span class="font-bold">Desc : </span>{{ movie.description }}</p>
              <p><span class="font-bold">Rating : </span>{{ movie.rating }}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref} from "vue"; // Import ref and onMounted from Vue Composition API
import axios from "axios";

const res = ref();
const currentTime = new Date().toLocaleTimeString();
const { data } = await useFetch('/api/hello') 
// const response = await useFetch("https://server-l96s.onrender.com/") 
// res.value = response.data
// console.log(res.value[0])

const options = {
  method: "GET",
  url: "https://server-l96s.onrender.com/",
};
 

//onMounted(async () => {
  try {
    const response = await axios.request(options);
    res.value = response.data;
  } catch (error) {
    console.error(error);
  }
//});
</script>
