const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const imgs = document.getElementById('imgs')
const mainBg = document.getElementById('main-bg')
const titleSlider = document.getElementById('title-slider')
const mainContent = document.querySelector('#main-content')

const imgArray = [
    { src: 'img/1.jpg', title: '"Estrange Bond"' },
    { src: 'img/2.jpg', title: '"The Gate Keeper"' },
    { src: 'img/3.jpg', title: '"Last Trace Of Us"' },
    { src: 'img/4.jpg', title: '"Urban Decay"' },
    { src: 'img/5.jpg', title: '"The Migration"' },
    { src: 'img/6.jpg', title: '"Lossless Youths"' }
]

let imgIndex = 0

function updateContent() {
    mainBg.style.backgroundImage = `url(${imgArray[imgIndex].src})`
    titleSlider.innerText = imgArray[imgIndex].title
    mainContent.classList.add('animate-anime')
}

setInterval(nextImg, 5000)
nextBtn.addEventListener('click', nextImg)

function nextImg() {
    let firstImg = imgs.children[0]
    imgs.children[0].remove()
    imgs.append(firstImg)
    
    imgIndex++
    if (imgIndex > imgArray.length - 1) imgIndex = 0
    updateContent()
}

prevBtn.addEventListener('click', prevImg)

function prevImg() {
    let lastImg = imgs.children[imgs.children.length - 1]
    imgs.children[imgs.children.length - 1].remove()
    imgs.prepend(lastImg)
    
    imgIndex--
    if (imgIndex < 0) imgIndex = imgArray.length - 1
    updateContent()
}

mainContent.addEventListener('animationend', () => {
    mainContent.classList.remove('animate-anime')
})
