// Coded By John4E656F

let div = document.createElement('div');
let canvas3 = document.createElement('canvas');
canvas3.id = 'canvas3';
canvas3.width = 800;
div.append(canvas3);


// document.getElementById('firstHeading').appendChild(div, canvas);
const table1 = document.getElementById('firstHeading');
table1.appendChild(div, canvas3);

let x = [];
let y = []

let dataH1 = {
	labels: x,
	datasets: [{
		data: y,
		label: null,
		borderColor : 'rgb(0, 0, 0)',
		backgroundColor: 'rgb(0, 0, 0)',
	}],
};


const ctx3 = document.getElementById('canvas3').getContext('2d');
const chartTable3 = new Chart(ctx3, {
	type: "line",
	data: dataH1,
	options: {
	  scales: {
		  y: {
			min: -10,
			max: 30,
		  }
		},
	  plugins: {
		  legend: {
			display: false}
  }}});

	function updateChart(dataFetched) {
		for (let i = 0; i < dataFetched.length; i++) {
			console.log('ok')
		  x[i] = dataFetched[i][0];
		  y[i] = dataFetched[i][1];
		}
		function addData(chart, labels, dataY, datasetIndex) {
				chart.data.datasets[datasetIndex].data = dataY;
				chart.data.labels = labels;
				 chart.update();
				}
				  
				addData(chartTable3, x, y, 0);
				}

	async function dataFetch() {
		const url = "https://canvasjs.com/services/data/datapoints.php";
		const request = await fetch(url, {
			method: "GET",
			cache: "reload",
		});

		if (!request.ok) {
			alert("Error")
		} else {
			let dataFetched = await request.json();
			updateChart(dataFetched);
		}
	}

	setInterval(dataFetch, 1000);



