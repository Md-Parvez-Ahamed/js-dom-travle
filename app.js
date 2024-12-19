
const allBtn = document.getElementsByClassName('add-btn')
console.log(allBtn);
let count = 0;
for(const btn of allBtn){
    // console.log(btn)
    btn.addEventListener('click',function(e){
        // console.log('btn click');
        
        console.log(e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText);
        const placeName = e.target.parentNode.parentNode.childNodes[1].innerText
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        
        e.target.parentNode.parentNode.style.backgroundColor= 'green'
        const ulContainer = document.getElementById('ul-Container')
        // console.log(ulContainer);

        const li = document.createElement('li')
        
        const p = document.createElement('p')
        p.innerText=placeName
        
        const p2 = document.createElement('p2')
        p2.innerText=price

        li.appendChild(p)
        li.appendChild(p2)
         ulContainer.appendChild(li)

        const beget=  document.getElementById('beget').innerText
        console.log(beget);
        const convertedBeget = parseInt(beget)
        if(convertedBeget -parseFloat(price) <0){
            alert('low beget alert please earn more');
            return
        }
        const updateBeget = convertedBeget - parseInt(price)
        document.getElementById('beget').innerText = updateBeget
        console.log(updateBeget);

         totalCost('totalCost',parseInt(price))

        //  const totalCost = document.getElementById('totalCost').innerText;
        //  const convertedTotalCost = parseInt(totalCost);
        //  const sum = convertedTotalCost + parseInt(price)

        //  document.getElementById('totalCost').innerText =  sum
        
        // setInnerText('totalCost', sum )

        // const grandTotal = document.getElementById('grandTotal').innerText;
        // const convertedGrandTotalCost = parseInt(grandTotal)
        // const sum2 =  convertedTotalCost + parseInt(price)
        // console.log(sum2 ,'sum 2');

        // setInnerText('grandTotal', sum2 )
        grandTotalCost('grandTotal' ,parseInt(price))
        

        count = count + 1
        console.log(count);
        setInnerText('cart-count',count)
        
        
    })
}

function totalCost (id,value){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseInt(element);
    const sum = convertedElement + parseFloat(value)
    setInnerText('totalCost',sum)
    
}

function grandTotalCost (category){
    console.log(category);
    const totalCost = document.getElementById('totalCost').innerText;
    const convertedTotalCost = parseInt(totalCost)
    setInnerText('grandTotal',convertedTotalCost)

    if(category == 'bus'){
        setInnerText('grandTotal',convertedTotalCost+100)
    }else if(category == 'train'){
        setInnerText('grandTotal',convertedTotalCost-200)
    }else if(category == 'flight'){
        setInnerText('grandTotal',convertedTotalCost+500)
    }else{
        setInnerText('grandTotal',convertedTotalCost)
    }
    // console.log(typeof convertedTotalCost);
    // const element = document.getElementById(id).innerText;
    // const convertedElement = parseInt(element);
    // const sum = convertedElement + parseFloat(value)
    // setInnerText('grandTotal',sum)

}



function setInnerText (id,value){
    document.getElementById(id).innerText = value ;
}