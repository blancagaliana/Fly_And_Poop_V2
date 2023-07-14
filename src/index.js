onload = () => {
    const playButton = document.querySelector("#play")
    const canvas = document.querySelector("#canvas")
    const menu = document.querySelector("#menu")
    playButton.onclick = () => {
        console.log("LOS ELEMENTOS =>", canvas, menu)
        canvas.classList.toggle("non-display")
        menu.classList.toggle("non-display")
        game.init()
    }
    }