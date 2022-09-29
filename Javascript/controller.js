
const ID_USER_FIELD=document.getElementById("user");
const ID_PASSWORD_FIELD=document.getElementById("pswd");
const ID_DIV_WARNING= document.getElementById("warningdiv");
const ICON = document.getElementById("iconPswd");
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

      console.log(ID_USER_FIELD.value);
      console.log(ID_PASSWORD_FIELD.value);
      if(ID_USER_FIELD.value === USER && ID_PASSWORD_FIELD.value === PASSWORD ){
        console.log("los dato son coinciden");
        location.assign("./src/home/home.html");
        this.clean();

       }else if(ID_USER_FIELD.value.trim() == "" && ID_PASSWORD_FIELD.value.trim()==""){
          ID_USER_FIELD.style.borderColor = "red";
          ID_PASSWORD_FIELD.style.borderColor = "red";
         
       }else{
        ID_DIV_WARNING.style.display = "block";
        this.clean();
       }

      }

      showPassword(){
         
          const eye= "fa-eye";
          const slasheye="fa-eye-slash";
          if(ICON.classList.contains("fa-eye")){
           this.enableShowPSWD();
          }else if(ICON.classList.contains("fa-eye-slash")){
            this.disableShowPSWD();
          }

      }

      enableShowPSWD(){
        ICON.classList.remove("fa-eye");
        ICON.classList.add("fa-eye-slash");
        ID_PASSWORD_FIELD.type = "text";

      }

      disableShowPSWD(){
        ICON.classList.remove("fa-eye-slash");
        ICON.classList.add("fa-eye");
        ID_PASSWORD_FIELD.type = "password";

      } 

      restoreFields(){

        ID_DIV_WARNING.style.display = "none";
        ID_USER_FIELD.style.borderColor = "#0d6efd";
        ID_PASSWORD_FIELD.style.borderColor = "#0d6efd";
       
      }


    

}
window.controller = new Controller();
