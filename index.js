

var key = "";
var output = "";
var haveDot = false;


$('.btn').click(function () { 
    
    key= $(this).val();
//  res.push(document.querySelector('#screen').value)

//  console.log(res);
    


    switch (key) {
        case "=":
            document.querySelector('#screen').value = eval(document.querySelector('#screen').value)
            break;
            case "RESET":
                document.querySelector('#screen').value = ''
                break;
                case "DEL":
                    if( document.querySelector('#screen').value){
                    document.querySelector('#screen').value =  document.querySelector('#screen').value.slice(0, -1) ;}
                    break;
                
                                                                             
        default:
            document.querySelector("#screen").value += key;
            break;
    }

    
   
   
});


