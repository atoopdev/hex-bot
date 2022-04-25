const numColors = 25
const colorContainer = document.getElementById("colorsContainer")
const colors = []

async function getColors(){
    let response = await fetch(`https://apis.scrimba.com/hexcolors/?count=${numColors}`)

    let data = await response.json()

    console.log(data)

    

    for(let i=0;i<numColors;i++){
        colors.push(data.colors[i].value)
        console.log("Grabbed ", data.colors[i].value)
    }
    console.log(colors)
}


getColors()
setTimeout(outputColors, 5000)

function outputColors(){
    let colorsHTML = ""

    // create html structure
    for(let i=0;i<numColors;i++){
        let id="color"+(i+1)
        console.log(id)
        colorsHTML += `<div class="color-square" id="${id}"><span class="colorhex">${colors[i]}</span></div>`
        
        
    }
    // output html
    colorContainer.innerHTML = colorsHTML

    // assign bg colors
    for(let i=0;i<numColors;i++){
        let id="color"+(i+1)
        document.getElementById(id).style.backgroundColor = colors[i]
    }

    
}