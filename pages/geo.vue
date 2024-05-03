<template>
    <div class="flex flex-col items-center justify-center gap-5 p-[50px]">
          
           <h1 class="text-[35px] font-bold">country details</h1>
        <div class=" flex gap-5 flex-wrap">
         <div v-for="item in data" class="border-2 p-5 min-2-[250px]">
            <p>id:{{ item.id }}</p>
            <p>country name : {{ item.name }}</p>
            <p>Wiki Data Id : {{ item.wikiDataId }}</p>
            <p>Country Code : {{ item.countryCode }}</p>
            <p> Country Latitude : {{ item.latitude }}</p>
            <p>Country Longitide : {{ item.longitude }}</p>
            
         </div>
         </div>
    </div>
</template>



<script setup>

import axios from 'axios'

const data = ref()

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'fa9c3d04afmshd4f95df7115ea89p1abcdcjsne644ba9b34c4',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

	try {
		if (data.value == undefined) {
			const response = await axios.request(options);
			console.log("request send");
			data.value = response.data.data;
            console.log(data.value)
		}
	} catch (error) {
		console.error(error);
	}
	console.log(data.value[0]);
</script>