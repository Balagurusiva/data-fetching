<template>
	 <div class="p-[50px]">
        <NuxtLink to="geo" class="text-[25px] mr-3 font-bold float-right">click here for country datas</NuxtLInk>
        <p class="text-[30px] font-bold my-5 text-center">Top 100 Movies(ssr)<span id="clock">{{  new Date().toLocaleTimeString() }}</span></p>
         
        <div class="flex gap-2 flex-wrap gap-5 justify-between">
		<template v-for="movie in data">
			<div class="flex flex-row border-2 w-[30%] p-5 gap-4">
				<div class="flex flex-col items-center gap-3">
					<NuxtImg :src="movie.image" />
					<div class="text-[18px] flex flex-col gap-2 justify-between">
						<p><span class="font-bold">Name : </span>{{ movie.title }}</p>
						<p><span  class="font-bold">Desc : </span>{{ movie.description }}</p>
						<p><span class="font-bold">Rating : </span>{{ movie.rating }}</p>
					</div>
				</div>
			</div>  
		</template>
	</div>
     </div>
</template> 

<script setup>
	import axios from "axios";

	const data = ref();
	console.log(data.value);

	const options = {
		method: "GET",
		url: "https://server-l96s.onrender.com/",
	};

	try {
		if (data.value == undefined) {
			const response = await axios.request(options);
			console.log("request send");
			data.value = response.data;
		}
	} catch (error) {
		console.error(error);
	}
	console.log(data.value[0]);
    var clockElement = document.getElementById("clock");

function updateClock (clock) {
    clock.innerHTML = new Date().toLocaleTimeString();
}

setInterval(function () {
    updateClock(clockElement);
}, 1000);
</script>
