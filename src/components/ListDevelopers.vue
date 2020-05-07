<template>
	<div class="hello">
		<h2>VueJs Developer List</h2>
		<hr>
		<button type="button" class="btn btn-sm btn-outline-success" v-on:click="fetchAllData">LOAD ALL</button>
		<button type="button" class="btn btn-sm btn-outline-success" v-on:click="fetchDataWithParam('40')">LOAD 40 YO</button>
		<button type="button" class="btn btn-sm btn-outline-success" v-on:click="fetchDataWithParam('22')">LOAD 22 YO</button>
		<hr>
		<div class="content">
			<h3>Developers in the company</h3>
			<table class="table">
				<thead>
					<tr>
						<th>NAME</th>
						<th>AGE</th>
						<th>JOB</th>
						<th>SAL</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in fetched_items" :key="item.name">
						<td><img v-bind:src="item.img" alt="profile image" class="prof-img"> {{ item.name }}</td>
						<td>{{ item.age }}</td>
						<td>{{ item.job }}</td>
						<td>{{ item.salary }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="footer">
			<hr>
			<p>VueJs Developer List &copy; 2020</p>
			<a class="btn btn-sm btn-outline-success" href="https://siposm.hu" target="_blank">siposm</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {

	data() {
		return { fetched_items: [] }
	},

	methods: {
		fetchDataWithParam: function (ageParam) {
			axios.get('http://localhost:8080/demo/api/endpoint.php?age='+ageParam).then( resp => {
				console.log('--- SUCCESS ---')
				this.fetched_items = []
				resp.data.forEach( x => this.fetched_items.push(x))
			}).catch(()=> { console.log('--- ERROR ---') })
		},
		fetchAllData: function () {
			axios.get('http://localhost:8080/demo/api/endpoint.php').then( resp => {
				console.log('--- SUCCESS ---')
				this.fetched_items = []
				resp.data.forEach( x => this.fetched_items.push(x))
			}).catch(()=> { console.log('--- ERROR ---') })
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
	margin-bottom: 100px;
}
#footer p{
	font-size: 0.6em;
}
.prof-img {
	margin-right: 10px;
	border-radius: 50px;
}
.hello {
	width: 800px; 
	margin: 0 auto;
}
.content {
	text-align: left;
	min-height: 600px;
}
button {
	margin: 0 10px;
}
th {
	font-size: 0.8em;
	background-color: rgb(241, 241, 241);
}
tbody > tr:hover {
	background-color: #42b983;
}
tbody > tr {
	height: 60px;
}
td {
	padding-top: 20px;
}
hr {
	margin: 30px 0;
	border: 1px solid #42b983;
}
h3 {
	margin: 40px 0 0;
	margin-bottom: 20px;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	padding: 10px;
	margin: 0 10px;
}
a {
	color: #42b983;
}
#insert_to_here {
	height: 700px;
	width: 500px;
}
</style>
