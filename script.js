const main = document.querySelector('#main');

const createGrid = (x, y) => {
	const grid = document.createElement('div');
	grid.classList.add('grid');
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
			// givenGrid.classList.remove('out');
			// if (trail == 1) {
			// 	//givenGrid.style.backgroundColor = 'transparent';
			// 	givenGrid.style.backgroundColor = '#34ebd8';
			// }
			if (isMouseDown) {
				//givenGrid.style.backgroundColor = 'transparent';
				givenGrid.style.backgroundColor = color;
			}
			if (eraser && isMouseDown) {
				givenGrid.style.backgroundColor = 'transparent';
			}
			// if (isMouseDown) {
			// 	//givenGrid.classList.add('transparent');
			// 	givenGrid.classList.add('blue');
			// }
		});
		// grid.addEventListener('mouseleave', () => {
		// 	console.log('test');
		// 	if (!isMouseDown) {
		// 		const id = grid.getAttribute('id');
		// 		const givenGrid = document.getElementById(id);
		// 		givenGrid.classList.add('out');
		// 		if (trail == 1) {
		// 			//givenGrid.style.backgroundColor = '#34ebd8';
		// 			givenGrid.style.backgroundColor = 'transparent';
		// 		}
		// 	}
		// });
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
		grid.classList?.remove('out');

		grid.style.backgroundColor = 'transparent';
		grid.classList?.remove('blue');
		grid.classList?.remove('transparent');

		console.log('reseted');
	});
}
let trail = 1;
let color = '#34ebd8';
let eraser = 0;
let hidden = 0;
document.addEventListener('keydown', (keyId) => {
	if (keyId.key == 'r' || keyId.key == 'R') {
		reset();
	}
	if (keyId.key == 't' || keyId.key == 'T') {
		if (trail == 1) {
			reset();
			trail = 0;
		} else {
			trail = 1;
		}
	}
	if (keyId.key == 'c' || keyId.key == 'C') {
		color = prompt('Enter color you want to write with\n word or Hex');
		// let toColor = document.classList;
		// const root = document.querySelector(':root');
		// root.style.setProperty('--color', `${color}`);
		// console.log(toColor);
	}
	if (keyId.key == 'e' || keyId.key == 'E') {
		if (eraser == 1) {
			eraser = 0;
		} else {
			eraser = 1;
		}
	}
	if (keyId.key == 'h' || keyId.key == 'H') {
		const boxes = document.querySelectorAll('.box');

		if (hidden == 1) {
			hidden = 0;
			boxes.forEach((box) => {
				box.style.visibility = 'visible';
			});
		} else {
			hidden = 1;
			boxes.forEach((box) => {
				box.style.visibility = 'hidden';
			});
		}
	}
});

// TODO while pressed M opening window in which you can choose color of brush
// TODO and turn on/off trail behind pointer
