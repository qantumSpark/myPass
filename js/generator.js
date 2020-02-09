export function createPsw(lenghtOfPassword) {
  const char = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"]
  const num = ["1","2","3","4","5","6","7","8","9","0"]
  const charSpec = ["?",";",":","/","!","§"]
  let result = ''

  for(let i = 0; i < lenghtOfPassword; i++){
    let rdom = Math.floor(Math.random()*30)
    if(rdom < 25){
      result += selectRdm(char)
    } else if (rdom > 28){
      result += selectRdm(num)
    }else{
      result += selectRdm(charSpec)
    }
  }
  return result
}

function selectRdm(arr) {
  let rdmIdx = Math.floor(Math.random() * arr.length)
  let char = arr[rdmIdx]
  if(Math.floor(Math.random() * 10) > 5){
    return char.toUpperCase()
  }else{
    return char
  }
}
