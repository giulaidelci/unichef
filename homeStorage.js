function funzioneCerca(){
    alert("la funzione cerca è da implementare");
}

function funzioneIscriviti(){
    window.location.href="./iscriviti.html";
}

function funzioneAccedi(){
    window.location.href="./accedi.html";
}

function cambiabottoni(){
    var s=JSON.parse(sessionStorage.getItem('Loggato'));
    if(s == 'si'){
        document.getElementById("pulsanti").style.display="none"
        document.getElementById("pulsanteLogout").style.display="block"
        document.getElementById("aggiungiRicetta").style.display="block"

    }
    else {
        document.getElementById("pulsanti").style.display="block"
        document.getElementById("pulsanteLogout").style.display="none"
        document.getElementById("aggiungiRicetta").style.display="none"
    }
        
}

function funzioneLogout(){
    sessionStorage.setItem('Loggato', JSON.stringify("no"));
    document.getElementById("pulsanti").style.display="block"
    document.getElementById("pulsanteLogout").style.display="none"
    document.getElementById("aggiungiRicetta").style.display="none"
} 

function aggiungiRicetta(){
    window.location.href="./aggiungiRicetta.html"
}