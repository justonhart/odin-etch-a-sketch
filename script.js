const container = document.getElementById('container');
const toggleMode = document.getElementById('toggleMode');
const colorfulMode = document.getElementById('colorfulMode');

function render(size = 16){
	container.innerHTML = '';

	for(let i = 0; i < size; i++){
		const row = document.createElement('div');
		row.classList.add('row');
		for(let j = 0; j < size; j++){
			const cell = document.createElement('div');
			cell.classList.add('cell');
			row.appendChild(cell);
		}
		container.appendChild(row);
	}
}

const resizeBtn = document.getElementById('resizeBtn');
resizeBtn.addEventListener('click', () => {
	const newSize = prompt('Enter a new grid size (max: 100)');
	if(newSize <= 100){
		render(newSize);
	}
});

const shakeBtn = document.getElementById('shakeBtn');
shakeBtn.addEventListener('click', () => {
	Array.from(document.getElementsByClassName('cell')).forEach(cell => {
		cell.style.background = '';
		cell.classList.remove('colored');
	});
});

function getRandomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

addEventListener('mouseover', (event) => {
	if(event.target.classList.contains('cell')){
		if(toggleMode.checked){
			if(!event.target.classList.contains('colored')){
				event.target.style.background = colorfulMode.checked ? getRandomColor() : 'black';
				event.target.classList.add('colored');
			} else{
				event.target.style.background = 'white';
				event.target.classList.remove('colored');
			}
		}
		else if(!event.target.classList.contains('colored') || colorfulMode.checked){
				event.target.style.background = colorfulMode.checked ? getRandomColor() : 'black';
			event.target.classList.add('colored');
		}
	}
});

render();
