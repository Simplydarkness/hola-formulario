function validar() {
    var result_email = validar_email();
    var result_pass = validar_pass();
    var result_rep = validar_rep();
    var result_zip = validar_zip();
    var result_ciudad = validar_ciudad();
    var result_comu = validar_com();
    var result_region = validar_region();
    var result_box = comprobacion_box();
    var result_fono = fono();

    return (result_email && result_pass && result_rep && result_zip && result_ciudad && result_comu &&result_region &&result_box && result_fono);
}

function validar_formato(email){
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1){
    return false;
    }else {        
        var idx_punto = email.indexOf(".")
        if (idx_punto <= idx_arroba + 2 || idx_punto == email. length - 1){
            return false;
        }       
        return true;
    }
}

function validar_email(){
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != ""){
        if (validar_formato(email)){
            div.innerHTML = "";
            return true;
        }else {
            div.innerHTML = "email no valido";
            div.className = "text-danger"
            return false;
        }  

    } else {
        div.innerHTML = "ingrese e-mail";
        div.className = "text-danger"
        return false;
    }    
}

function validar_pass() {
    var val_pass = document.getElementById("pass").value;
    var div = document.getElementById("msj-pass");
        if(val_pass.length > 2 && val_pass.length < 7){
            div.innerHTML = "";
            return true;
        } else{
            div.innerHTML = "ingrese una contraseña de al menos 6 caracteres";
            div.className = "text-danger";
            return false;
        }  
}

function validar_rep(pas){
    var pas = document.getElementById("pass").value;
    var re = document.getElementById("rp").value;
    var div = document.getElementById("msj-pass");
    var div2 = document.getElementById("msj-rp")
    if(re != ""){
        if(re.length > 2 && re.length < 7){
            if(pas == re){
                div.innerHTML = "";
                return true;
            } else{
                div.innerHTML = "erro coincidencia";
                div.className = "text-danger";
                return false;
            }
        } else{
            return false;
        }
    }else{
        div2.innerHTML = "debe repetir su contraseña";
        div2.className = "text-danger"
        return false;
    }
}

function validar_zip() {
    var codi = document.getElementById("codpost").value;
    var div = document.getElementById("msj-cod");
    if (codi != ""){
        if(isNaN(codi)){
            div.innerHTML = "el formato es invalido";
            return false
        }else{
            div.innerHTML = "";
            return true
        }     
    } else {
        div.innerHTML = "por favor ingrese su codigo postal";
        div.className = "text-danger"
        return false;
    }    
}

function validar_ciudad() {
    var city = document.getElementById("ciudad").value;
    var div = document.getElementById("msj-city");
    if (city != ""){      
            div.innerHTML = "";
            return true;

    } else {
        div.innerHTML = "ingrese su ciudad";
        div.className = "text-danger"
        return false;
    }    
}

function validar_region(){
    var region = document.getElementById("region").value;
    var  div = document.getElementById("msj-region");
    if(region == "" || region == 0){
        div.innerHTML = "ingrese region";
        div.className = "text-danger";
        return false;
    } else{
        div.innerHTML = "";
        return true;
    }
}

function validar_com(){
    var comuuu = document.getElementById("com").value;
    var  div = document.getElementById("msj-com");
    if(comuuu == "" || comuuu == 0){
        div.innerHTML = "No se ha seleccionado una comuna";
        div.className = "text-danger";
        return false;
    } else{
        div.innerHTML = "";
        return true;
    }
}


function comprobacion_box() {
    var box = document.getElementsByName("BOX");
    var div = document.getElementById("msj-box");
    var co = 0;
    for(var i=1; i< box.length; i++) {
        if(box[i].checked)
            co++
    }
    if(co == 0){
        div.innerHTML = "debe marcar al menos 2 casillas";
        div.className = "text-danger";
        return false;
    }
}

function celu() {
    var celu = document.getElementById("celular").value;
    if (isNaN(celu)) {
        return false;
    }else{
        return true;
    }
}

function fono() {
    var pho = document.getElementById("phone").value;
    if (isNaN(pho)) {
        return false;
    }else{
        return true;
    }
}

function cel() {
    var celu = document.getElementById("celular").value;
    if (isNaN(celu)) {
        return false;
    }else{
        return true;
    }
}

function fono() {
    var fono = document.getElementById("phone").value;
    if (isNaN(fono)) {
        return false;
    }else{
        return true;
    }
}

function fono() {
    var celluuu = document.getElementById("celular").value;
    var fonoo = document.getElementById("phone").value;
    var div = document.getElementById("msj-cel");
    if (celluuu == "" &&  fonoo ==""){
        div.innerHTML = "Debe ingresar ingresar al menos un número de contacto";
        div.className= "text-danger";
        return false;  
    }else{
        if ((cel()) && (fono())) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del telefono no es valido";
            div.className = "text-danger";
            return false;
        }
    }
}
