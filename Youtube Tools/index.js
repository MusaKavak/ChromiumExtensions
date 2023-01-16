window.onload = () => main()

function main() {
    document.body.insertAdjacentHTML("beforeend", style)
    document.body.addEventListener("keydown", (key) => focusToVideo(key))
}


function focusToVideo(key) {
    if (key.key == "ArrowUp" || key.key == "ArrowDown") {
        const videoFrame = document.querySelector("video.video-stream.html5-main-video")
        videoFrame.focus()
    }
}


const style = `
<style>
    #related{
        max-height: 160px !important;
        overflow: hidden !important;
        transition: 1s !important;
    }

    #related:hover{
        max-height: 100vh !important;
        overflow-y: scroll !important;

    }
</style>
`