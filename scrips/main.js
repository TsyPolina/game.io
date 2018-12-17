window.onload = function () {
    let mainPage = new MainPage;
}
class MainPage{
    constructor(){
      let name;
        this.menu=document.getElementById("menu"); 
        this.aboutGame=document.getElementById("textAboutGame");
        this.nameGame=document.getElementById("nameGame");
        this.comeBack=document.getElementById("comeBack");
        this.records=document.getElementById("informationAboutRecords");
        this.textAboutNAme=document.getElementById("textAboutName");
        this.characters=document.getElementById("choiceGender");
        this.askName=document.getElementById("askName");
        this.newName=document.getElementById("giveNewName");
        this.mabelSayHi=document.getElementById("mabelSayHi");
        this.dipperSayHi=document.getElementById("dipperSayHi");
        this.modalWindowNewName=document.getElementById("modalWindowNewName");
        this.inputName=document.getElementById("inputName");
        this.clothes=document.getElementById("choiceClothes");
     
        console.log(this.menu.getElementsByTagName('li').length)
        document.addEventListener('click', (e) => this. сallMethods(e));  
    }
    сallMethods(e){
        let idElemantsWhichWasClicked=e.target.id;
        let m= e.target.classList
console.log(idElemantsWhichWasClicked);
        if(idElemantsWhichWasClicked=="start"){
            this.showChoiceCharacters();
        }
        else if(idElemantsWhichWasClicked=="records"){
            this.showTopRecords();
        }
        else if(idElemantsWhichWasClicked=="aboutGame")
            this.showInformationAboutGame();

        else if(idElemantsWhichWasClicked=="comeBack")
            this.showMenu();
        else if(m[0]=="dipper"){
            this.name=this.permissionToChangeName("Dipper",dipperSayHi);
        }
        else if(m[0]=="mabel"){
            this.permissionToChangeName("Mabel",mabelSayHi);
        }
        else if(idElemantsWhichWasClicked=="yes"){
            this.giveNewName();
        }
        else if(idElemantsWhichWasClicked=="no"){
          this.choiceClothes();
        }
    } 
    giveNewName(){
        modalWindowNewName.classList.add('hidden');
        this.newName.classList.remove('hidden');
        console.log(this.name);
        inputName.addEventListener('keypress', function(e){
            var key = e.which || e.keyCode;
                if (key === 13) { 
                   this.name=inputName.value;
                   inputName.value="";
                   choiceClothes();
                }
            }); 
    } 
    permissionToChangeName(name,whoSayHi){
        this.textAboutNAme.innerText="Hi, my name "+name+", but if you want, you can give me new name."
        whoSayHi.classList.remove('hidden');
        this.characters.classList.add('hidden');
        this.comeBack.classList.add('hidden');
        this.askName.classList.remove('hidden');
        return name;
    }
    showTopRecords(){
        this.records.classList.remove('hidden');
        this.comeBack.classList.remove('hidden');
        this.menu.classList.add('hidden');
        this.nameGame.classList.add('hidden');
    }
    showInformationAboutGame(){
        this.aboutGame.classList.remove('hidden');
        this.comeBack.classList.remove('hidden');
        this.menu.classList.add('hidden');
        this.nameGame.classList.add('hidden');
    } 
    showChoiceCharacters(){
       document.body.style.backgroundImage="url('resources/image/car.jpg')";
        this.characters.classList.remove('hidden');
        this.comeBack.classList.remove('hidden');
        this.menu.classList.add('hidden');
        this.nameGame.classList.add('hidden');
    } 
    showMenu(){
        document.body.style.backgroundImage="linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url('resources/mainStage/menuPhoto.jpg')";
        this.characters.classList.add('hidden');
        this.records.classList.add('hidden');
        this.comeBack.classList.add('hidden');
        this.aboutGame.classList.add('hidden');
        this.menu.classList.remove('hidden');
        this.nameGame.classList.remove('hidden');
    }
    choiceClothes(){
        console.log(this.name);
        this.clothes.classList.remove('hidden');
        this.newName.classList.add('hidden');
        this.askName.classList.remove('hidden');
    }
}
