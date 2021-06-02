const chatBtn = document.querySelector('#chatBtn')
const chatRoom = document.querySelector('#chatRoom')

chatBtn.addEventListener('click',()=>{
    window.location.href = "http://localhost:3000/chat"
})