
function green(){
    document.getElementById("Login").style.backgroundColor="#acff85";
    document.getElementById("pass").style.backgroundColor="#acff85";
    document.getElementById("pass2").style.backgroundColor="red";
    document.getElementById("email").style.backgroundColor="red";

}
function checker(){
    var password = document.getElementById("pass"),
    confirmpass = document.getElementById("pass2");
    if(password.value != confirmpass.value){
        document.getElementById=("demo").innerHTML ="ERROR"
    }else{
        document.getElementById=("demo").innerHTML ="OKAY"

    }
}