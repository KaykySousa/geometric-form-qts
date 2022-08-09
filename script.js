// Document elements
const square = document.getElementById("square")

const heightInput = document.getElementById("heightInput")
const widthInput = document.getElementById("widthInput")

const areaText = document.getElementById("areaText")
const widthLabel = document.getElementById("widthLabel")
const heightLabel = document.getElementById("heightLabel")

// Updates the square size
function updateSquare() {
	square.style.height = heightInput.value + "px"
	square.style.width = widthInput.value + "px"

	updateArea(heightInput.value, widthInput.value)
}

// Updates the values next to the slider
function updateLabel() {
	widthLabel.innerText = widthInput.value
	heightLabel.innerText = heightInput.value
}

// Updates the area value
function updateArea(height, width) {
	const area = height * width
	areaText.innerText = `Área: ${area} px²`
}

// Updates the square size when the site starts
updateSquare()

// Updates the area value when the site starts
updateLabel()
