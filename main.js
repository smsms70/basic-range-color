const canvas = document.getElementById('cover');
const ctx = canvas.getContext('2d');

const red_button = document.getElementById('uno');
const green_button = document.getElementById('dos');
const blue_button = document.getElementById('tres');

const red_range = document.getElementById('red');
const gree_range = document.getElementById('green');
const blue_range = document.getElementById('blue');

const rgb = document.getElementById('empty');
const print = () =>{
	for (var i = 0; i < 30; i++) {
		ctx.fillRect(i*20,i % 2 ? i * 20 : i * 10, 20, 20)	
	}
}

const log = l => console.log(l);

const range = () => ctx.fillStyle = `rgb(${red_range.value},${gree_range.value},${blue_range.value})`;

const nose = () =>{
	rgb.innerHTML = `rgb(<b>${red_range.value}</b>, <b>${gree_range.value}</b>, <b>${blue_range.value}</b>)`
}
const animate = ()=>{
	nose()
	range()
	print()
	requestAnimationFrame(animate);
}
animate()
