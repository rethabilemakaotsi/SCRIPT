let purchased =[]

let main = document.querySelector('main')

let items = JSON.parse(localStorage.getItem('items'))

main.innerHTML = items.map(function(item,index){
    return 
       <div>
        <h2>${item.name}</h2>
        <P>${item.description}</P>
        <P>${item.price}</P>
        <button value = '${index}'data-add>Add to Cart</button>
    </div>
}).join('')

function add(index){
    purchased.push(items[index])
    localStorage.setItem('purchased',JSON.stringify(purchased))
  
}

main.addEventListener('click',function(){
    if(event,target.hasAttribute('data-add')){
        //alert('button was clicked')
        add(event.target.value) 
    }

})

//let a = item.filters(item=>{
   // return item.name == 'Nike shoe' 
//})

