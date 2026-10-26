function changeText(){
    let paragrafo;
    /*Il modo più comune per accedere a un elemento HTML è utilizzare l'id dell'elemento.
    La variabile paragrafo conterrà l'oggetto HTML con ID par1; */
    paragrafo=document.getElementById("par1"); 
    paragrafo.innerHTML="testo cambiato da Javascript --> <strong> InnerHTML </strong>";
    //La proprietà innerHTML consente di cambiare il contenuto testuale di un elemento
    // alternativa --> paragrafo.innerText="lorem ipsum...";
}

function changeColor(){
    let paragrafo;
    paragrafo=document.getElementById("par2");
    paragrafo.style.color="red";
    /* Dopo style è possibile specificare qualsiasi proprietà CSS che si vuole modificare.
    ESEMPIO --> paragrafo.style.backgroundColor="blue"; */

}


function changeClass(){
        let paragrafo;
        paragrafo=document.getElementById("par3");
        paragrafo.classList.add("d-none");
       
    /*  Si aggiunge la classe d-none all'oggetto paragrafo (selezionato con id par3).
        Molto utilizzato in classList il metodo remove e il metodo toggle*/
}


function copyValue(){
            let span, numero;
            span=document.getElementById("span-valore");
            numero=document.getElementById("input-numero").value;
            // per recuperare un elemento da un input utilizzare la proprietà value
           
            console.log (typeof(numero)) //il metodo typeof restituisce il tipo di dato contenuto in una variabile
            numero=parseInt(numero); //converto la variabile numero da tipo "string" a tipo intero 
            console.log (typeof(numero)) 
            span.innerHTML="numero inserito " +numero;
 
}
