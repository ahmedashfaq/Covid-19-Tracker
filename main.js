function dataget(){
    $.get("https://api.covid19api.com/summary",

        function(data){
            //console.log(data['Countries'].length);
            var tab = document.getElementById('tab-value');
            for (var i = 1; i < (data['Countries'].length); i++){
                var x = tab.insertRow();
                x.insertCell(0); 

                tab.rows[i].cells[0].innerHTML = data['Countries'][i-1][
                'Country'];
                

                x.insertCell(1); 
                tab.rows[i].cells[1].innerHTML = data['Countries'][i-1][
                'NewConfirmed'];


                x.insertCell(2); 
                tab.rows[i].cells[2].innerHTML = data['Countries'][i-1][
                'NewRecovered'];

                x.insertCell(3); 
                tab.rows[i].cells[3].innerHTML = data['Countries'][i-1][
                'NewDeaths'];

                x.insertCell(4); 
                tab.rows[i].cells[4].innerHTML = data['Countries'][i-1][
                'TotalConfirmed'];

                x.insertCell(5); 
                tab.rows[i].cells[5].innerHTML = data['Countries'][i-1][
                'TotalRecovered'];

                x.insertCell(6); 
                tab.rows[i].cells[6].innerHTML = data['Countries'][i-1][
                'TotalDeaths'];
                
            }
            

        }
    )
}
dataget();

/// Search code here

const searchfun = () =>{
    let filter = document.getElementById('my-input').value.toUpperCase();
    
    let tabvalue = document.getElementById('tab-value');
    
    let tr = tabvalue.getElementsByTagName('tr');
    

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}



/* accordion start */

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


/* accordion end */