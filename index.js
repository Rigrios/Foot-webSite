document.querySelector('.byrger').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('active')
    document.body.classList.toggle('lock')
})


document.querySelector('.nav').addEventListener('click', e => {
    document.querySelector('.nav').classList.remove('active')
})