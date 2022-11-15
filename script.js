const main = document.querySelector('#main');

const createGrid = (x, y) => {
	const grid = document.createElement('div');
	grid.classList.add('grid', 'out');
	grid.setAttribute('id', `x${x}y${y}`);
	return grid;
};

const createHorizontalLine = (lines, grids) => {
	for (let i = 0; i < lines; i++) {
		const line = document.createElement('div');
		line.classList.add('line');
		for (let n = 0; n < grids; n++) {
			line.appendChild(createGrid(n, i));
		}
		main.appendChild(line);
	}

	const grid = document.querySelectorAll('.grid');
	grid.forEach((grid) => {
		grid.addEventListener('mouseenter', () => {
			const id = grid.getAttribute('id');
			const givenGrid = document.getElementById(id);
			givenGrid.classList.remove('out');
			givenGrid.style.backgroundColor = 'transparent';
			//givenGrid.style.backgroundColor = '#34ebd8';

			if (isMouseDown) {
				givenGrid.classList.add('transparent');
				//givenGrid.classList.add('blue');
			}
			console.log(id);
		});
		grid.addEventListener('mouseleave', () => {
			const id = grid.getAttribute('id');
			const givenGrid = document.getElementById(id);
			givenGrid.classList.add('out');

			givenGrid.style.backgroundColor = '#34ebd8';
			//givenGrid.style.backgroundColor = 'transparent';
		});
	});
};
let isMouseDown = 0;
const mouseDown = document.addEventListener('mousedown', () => {
	isMouseDown = 1;
	console.log('down');
});
const mouseUp = document.addEventListener('mouseup', () => {
	isMouseDown = 0;
	console.log('up');
});

function reset() {
	const grid = document.querySelectorAll('.grid');
	grid.forEach((grid) => {
		grid.classList?.remove('blue');
		grid.classList?.remove('transparent');

		console.log('reseted');
	});
}
