const seedColorEl = document.getElementById('seed-color')
const colorSchemeEl = document.getElementById('color-scheme')
const colorSchemeBtnEl = document.getElementById('color-scheme-btn')
let colorArray = []





function render() {
    const seedColor = seedColorEl.value.substring(1)
    console.log(seedColor)
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorSchemeEl.value}`)
        .then(res => res.json())
        .then(data => {
            data.colors.map(function(color){
                colorArray.push(color.hex.value)
                
            }).join(' ')
        updateColorSchemeDisplay()
        })
}

function updateColorSchemeDisplay() {
    // console.log(colorArray);

    const colorItems = document.querySelectorAll('.color-item');

    colorItems.forEach(function (colorItem, index) {
        const colorBox = colorItem.querySelector('.color-box');
        const colorText = colorItem.querySelector('.color-text');

        if (colorArray[index]) {
            colorBox.style.backgroundColor = colorArray[index];
            colorText.textContent = colorArray[index];
        }
    });
}


function OnColorSchemeBtnClick(){
    render()
    colorArray = []
    
}

render()
colorSchemeBtnEl.addEventListener('click', OnColorSchemeBtnClick)