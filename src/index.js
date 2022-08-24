document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    buildtodo(e.target.input.value)
  })
  
})

function buildtodo(todo){

  let p = document.createElement('p')
  p.textContent = todo
  document.querySelector('#list').appendChild(p)
}
