const body = document.querySelector('body');
const button = document.querySelector('.button');
const text = document.querySelector('p');

const getRandomColor = () => {
const letters = '0123456789ABCDEF';
	let color= "#";

	for(let i = 0 ; i<6; i++) {
		const index = Math.floor(Math.random()*letters.length);
		color+=letters[index];
		// color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

const getRandomGradient = (deg) => {
	const colorStart = getRandomColor();
	const colorMiddle = getRandomColor();
	const colorEnd = getRandomColor();
	const gradient = `linear-gradient(${deg}deg, ${colorStart}, ${colorMiddle}, ${colorEnd})`;
	
   return gradient;
}

const onButtonClick = () => {
	const gradient = getRandomGradient(135);
	const gradient2 = getRandomGradient(90);
	button.style.backgroundImage = gradient;
	body.style.backgroundImage = gradient2;
	text.textContent = gradient;
}

button.addEventListener('click', onButtonClick);