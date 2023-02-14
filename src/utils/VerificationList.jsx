 
export const VerificationList = (list) =>{
  console.log(JSON.stringify(list.coment, undefined, 2))
  for(let i=0; i<list.coment.length;i++){
    if(list.coment[i].checked) return false
  }
  return true
   
} 