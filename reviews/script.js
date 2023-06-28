const reviews = [
    {
        id: 1,
        name: 'stacy peak',
        job: 'sales executive',
        img: 'images/person1.jpeg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        name: 'danniele morgan',
        job: 'human resource officer',
        img: 'images/person2.jpeg',
        text: 'Maecenas eu leo feugiat, dapibus magna eget, facilisis metus.'
    },
    {
        id: 3,
        name: 'jesus jimenez',
        job: 'UX designer',
        img: 'images/person3.jpg',
        text: 'Curabitur eu est id erat varius fermentum. Sed pellentesque dolor eu libero imperdiet laoreet. Nulla facilisi.'
    },
    {
        id: 4,
        name: 'pete mane',
        job: 'cyber security expert',
        img: 'images/person4.jpg',
        text: 'Vivamus quis arcu commodo, facilisis elit nec, iaculis leo. Morbi et nunc in augue lobortis fringilla eu eu ligula.'
    },
    {
        id: 5,
        name: 'andrew taiye',
        job: 'fullstack developer',
        img: 'images/person5.jpg',
        text: 'Nulla dolor orci, sollicitudin id bibendum a, sagittis at enim.'
    }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set stating item
let currentItem = 0

//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson[currentItem]
})

// load person based on item
function showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
} 

// show next peerson
nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem)
})

// show previous person
prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

// random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson(currentItem)
})