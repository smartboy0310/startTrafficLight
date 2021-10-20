const elRed = document.querySelector('.red');
const elYellow = document.querySelector('.yellow');
const elGreen = document.querySelector('.green');
const elCar = document.querySelector('.car');
const elStartBtn = document.querySelector('.start--btn');
const elRestartBtn = document.querySelector('.restart--btn')
let timeCar = 0;
elStartBtn.addEventListener('click', () => {
	function startTrafficLight() {
		// RedLight
		setTimeout(() => {
			elRed.style.backgroundColor = 'red';
		}, 500);
		
		setTimeout(() => {
			elRed.style.backgroundColor = 'white';
		}, 2500);
		
		setTimeout(() => {
			elRed.style.backgroundColor = 'red';
		}, 3000);
		
		setTimeout(() => {
			elRed.style.backgroundColor = 'white';
		}, 3500);
		setTimeout(() => {
			elRed.style.backgroundColor = 'red';
		}, 4000);
		setTimeout(() => {
			elRed.style.backgroundColor = 'white';
		}, 4500);
		// YellowLight
		setTimeout(() => {
			elYellow.style.backgroundColor = 'yellow';
		}, 5000);
		setTimeout(() => {
			elYellow.style.backgroundColor = 'white';
		}, 6000);
		
		// GreenLight
		setTimeout(() => {
			elGreen.style.backgroundColor = 'green';
		}, 6500);
		
		setTimeout(() => {
			elGreen.style.backgroundColor = 'white';
		}, 8500);
		
		setTimeout(() => {
			elGreen.style.backgroundColor = 'green';
		}, 9000);
		setTimeout(() => {
			elGreen.style.backgroundColor = 'white';
		}, 9500);
		setTimeout(() => {
			elGreen.style.backgroundColor = 'green';
		}, 10000);
		setTimeout(() => {
			elGreen.style.backgroundColor = 'white';
		}, 10500);
		//  YellowLight
		setTimeout(() => {
			elYellow.style.backgroundColor = 'yellow';
		}, 11000);
		setTimeout(() => {
			elYellow.style.backgroundColor = 'white';
		}, 12000);
		
		
	}
	
	startTrafficLight();
	const stopInterval = setInterval(() => {
		startTrafficLight();
		if(itemCar >= 940 && timeCar <= 1000) {
			clearInterval(stopInterval);
		}
	}, 12000);
	const stopCar = setInterval(() => {
		
		timeCar++;
		elCar.style.transform = 'translateX('+ `${timeCar}`+'px)';
		if(timeCar === 1000) {
			clearInterval(stopCar);
			timeCar = 0;
		}
		if(timeCar >=470 && timeCar <= 550 && elRed.style.backgroundColor === 'red' ){
			clearInterval(stopCar);
		}
				
	}, 25);
	
	
	
})
elRestartBtn.addEventListener('click', () => { 
	if(timeCar >=470 && timeCar <= 550 && elGreen.style.backgroundColor === 'green'){
		const stopCar = setInterval(() => {
		
			timeCar++;
			elCar.style.transform = 'translateX('+ `${timeCar}`+'px)';
			if(timeCar === 1000) {
				timeCar = 0;
				clearInterval(stopCar);
			}			
		}, 25);
	}
})