document.addEventListener('DOMContentLoaded',init)

function init(){
    const submitBtn = document.querySelector('#submitBtn')
    const userid = document.querySelector('.userid')
    submitBtn.addEventListener('click',submitBtnFn)
    userid.addEventListener('focusout',useridFn)
}

async function useridFn(){
    const userid = document.querySelector('.userid').value
    const check_msg = document.querySelector('#check_msg')
    let result = await fetch(`http://localhost:3000/user/userid_check?userid=${userid}`)
    let {check}= await result.json()
    if(check){
        check_msg.innerHTML = '사용 가능한 아이디입니다.'
    }else{
        check_msg.innerHTML = '중복된 아이디입니다.'
    }
}

async function submitBtnFn(){
    const userid = document.querySelector('.userid').value
    const userpw = document.querySelector('.userpw').value
    const userpwCheck = document.querySelector('.userpw_check').value
    const username = document.querySelector('.username').value
    const gender = document.querySelector('.gender').checked
    const userimage = document.querySelector('#input_image').value
    const useremail = document.querySelector('.useremail').value

    if(userpw!=userpwCheck){
        alert('비밀번호가 일치하지 않습니다')
        return
    }
    if(userid==""||userpw==""||username==""||useremail==""){
        alert('빈칸을 채워주세요')
        return
    }

    let url = 'http://localhost:3000/user/join_success'
    let options = {
        method:'POST',
        headers:{
            'content-type' : 'application/json',
        },
        body: JSON.stringify({
            userid: userid,
            userpw: userpw,
            username: username,
            gender: gender,
            userimage: userimage,
            useremail: useremail,
        }),
    }
    let response = await fetch(url,options);
    window.location.href = 'http://localhost:3000/?msg=회원가입이 완료되었습니다'
}
