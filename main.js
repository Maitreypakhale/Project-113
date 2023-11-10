function preload()
{

}

function setup()
{
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    filter_color =""
}

function draw()
{
    image(video,0,0,600,500)
    tint(filter_color)
}

function take_snapshot()
{
    save('Maitrey.png')
}

function pick_color()
{
    filter_color = document.getElementById('Color').value
}