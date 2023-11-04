function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora > 0 && hora < 12){
        //Bom Dia!
        img.src = 'Images/manhã.jpg'
    }else if (hora >= 12 && hora <19){
        //Boa Tarde!
        img.src = 'Images/tarde.jpg'
    }else{ 
        //Boa Noite
        img.src = 'Images/noite.jpg'
    }
}


    
