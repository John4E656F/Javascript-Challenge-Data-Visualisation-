// Coded By John4E656F

let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width = 800;
div.append(canvas);


// document.getElementById('firstHeading').appendChild(div, canvas);
const table = document.getElementById('firstHeading');
table.appendChild(div, canvas);


// let response = fetch('https://canvasjs.com/services/data/datapoints.php')
// .then(response => {return response.json()})
// .then(data => createChart(data));

// function createChart(x) {
// const ctx = document.getElementById('canvas').getContext('2d');
// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: x,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {

//     }
// });
// }

const ctx = document.getElementById('canvas').getContext('2d');

	var dataPoints = [];
	var chart;
	$.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
		$.each(data, function(key, value){
			dataPoints.push({x: value[0], y: parseInt(value[1])});
		});
		chart = new CanvasJS.Chart(ctx,{
			title:{
				text:"Live Chart with dataPoints from External JSON"
			},
			data: [{
				type: "line",
				dataPoints : dataPoints,
			}]
		});
		chart.render();
		updateChart();
	});
	function updateChart() {
	$.getJSON("https://canvasjs.com/services/data/datapoints.php" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
		$.each(data, function(key, value) {
			dataPoints.push({
			x: parseInt(value[0]),
			y: parseInt(value[1])
			});
		});
		chart.render();
		setTimeout(function(){updateChart()}, 1000);
	});
	}


