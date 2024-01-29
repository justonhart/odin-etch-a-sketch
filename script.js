const container = document.getElementById('container');
const darken = document.getElementById('darken');

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

addEventListener('mouseover', (event) => {
	if(event.target.classList.contains('cell')){
		if(darken.checked){
		} else {
			event.target.classList.toggle('black');
		}
	}
});

render();
