function 제발(){
    return new Promise((resolve,reject)=>{
        resolve(꺼내줘())
    })
}

function 꺼내줘(){
    const pr = new Promise((resolve,reject)=>{
        resolve('꺼내줘')
    })
    const obj = {
        text : function(){
            return pr
        }
    }
    return obj
}

// async function 결과(){
//     result1 = await 제발()
//     result2 = result1.test()
//     result2.then(data=>{
//         console.log(data)
//     })
// }
async function result(){
    let response = await 제발()
    let result = await response.text()
    console.log(result)
}
result()