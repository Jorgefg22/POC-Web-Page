

const ID_PASSWORD_FIELD=document.getElementById("pswd");
const ID_DIV_WARNING= document.getElementById("warning-div");
const USER = 'Admin';
const PASSWORD= 'Admin123';
export default class Controller {

      clean() {
       const inputs = document.getElementsByTagName('input');
        for (let element of inputs) {
          element.value = "";
        }

      }


      verificationLogin(){
        
        console.log(document.getElementById("user").value);
        //console.log((document.getElementById("user").textContent.length));
      /*  if.localCompare(USER)){
         
         // location.assign("../Javascript/src/login/login.html");
         console.log("es igual");
        
        } else{
          console.log(" no es igual");
        }*/

      }
    

}
window.controller = new Controller();
