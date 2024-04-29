<template>
	<div class="flex gap-2 flex-wrap justify-between">
		<template v-for="movie in data">
			<div class="flex flex-row border-2 w-[30%] p-5 gap-4">
				<div class="flex flex-col items-center gap-3">
					<NuxtImg :src="movie.image" />
					<div class="text-[18px] flex flex-col justify-between">
						<p><span class="font-bold">Name : </span>{{ movie.title }}</p>
						<p><span class="font-bold">Desc : </span>{{ movie.description }}</p>
						<p><span class="font-bold">Rating : </span>{{ movie.rating }}</p>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup>
	import axios from "axios";

	const data = ref();
	console.log(data.value);

	const options = {
		method: "GET",
		url: "https://imdb-top-100-movies.p.rapidapi.com/",
		headers: {
			"X-RapidAPI-Key": "fa9c3d04afmshd4f95df7115ea89p1abcdcjsne644ba9b34c4",
			"X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
		},
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
</script>
