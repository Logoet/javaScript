function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtAno")
    var res = document.getElementById("res")
    var imp = ""

    if (fAno.value.lenght == 0 || fAno.value > ano){
        window.alert("ERRO Tente novamente")
    } else{
        var fSex = document.getElementsByName("radSex")
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (fSex[0].checked) {
            gênero = 'Homem'
            if (idade > 0 && idade <17){
                //Jovem
                img.setAttribute("src","source/homemJovem.jpg")
            } else if (idade >=18 && idade <65){
                //Adulto
                img.setAttribute("src","source/homemAdulto.jpg")
            } else if (idade >=65 && idade <115){
                //Idoso
                img.setAttribute("src","source/homemIdoso.jpg")
            }else{
                //Impossível
                imp = "Idade Impossível!"
            }
        } else if (fSex[1].checked){
            gênero = 'Mulher'
            if (idade > 0 && idade <17){
                //Jovem
                img.setAttribute("src","source/mulherJovem.jpg")
            } else if (idade >=18 && idade <65){
                //Adulto
                img.setAttribute("src","source/mulherAdulta.jpg")
            } else if (idade >=65 && idade <115){
                //Idoso
                img.setAttribute("src","source/mulherIdosa.jpg")
            }else{
                //Impossível
                imp = "Idade Impossível!"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos! ${imp}`
        res.appendChild(img)
    }
    console.log(fAno.value)
}