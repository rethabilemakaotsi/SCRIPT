let purchased =JSON.parse( localStorage.getItem('purchase'));

let main = document.querySelector('table')
 main.innerHTML = purchased.map((item,index)=>{
    return
      <tr>

        <td>${index}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>R{item.price}</td>
      </tr>
 })