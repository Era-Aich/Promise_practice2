console.clear();

let makedata=async(url,config)=>{

  let data=  await fetch(url,config);
  if(!data.ok){
    let mess=`Error found: ${data.status}`
    throw new Error(mess)
}

  let res=await data.json();

  return res;

 

}



let getdata=()=>{
    makedata('https://jsonplaceholder.typicode.com/posts')
  
    .then(res=>{
        console.log(res)
    })

    .catch(err=>{
        console.log(err);
    })
}


let senddata=()=>{
    makedata('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
  body: JSON.stringify({
    title: 'f60a',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })

    .then(res=>{
        console.log(res)
    })
}

let updatedata=()=>{
    makedata('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })
    .then(res=>{
        console.log(res)
    })
   .catch((err)=>{
       console.log(err)
   })
}
getdata();

senddata();

updatedata();