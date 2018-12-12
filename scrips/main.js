window.onload = function () {
    let mainPage = new MainPage;
}
class MainPage{
    constructor(){
        this.menu=document.getElementById("menu"); 
        this.aboutGame=document.getElementById("textAboutGame");
        this.nameGame=document.getElementById("nameGame");
        this.comeBack=document.getElementById("comeBack");
        this.records=document.getElementById("informationAboutRecords");
        this.characters=document.getElementById("choiceGender");
        console.log(this.menu.getElementsByTagName('li').length)
        document.addEventListener('click', (e) => this. сallMethods(e));  
    }
    сallMethods(e){
        let idElemantsWhichWasClicked=e.target.id;
        console.log(idElemantsWhichWasClicked);
        if(idElemantsWhichWasClicked=="start"){
            console.log("egr");
            this.showChoiceCharacters();
        }
        else if(idElemantsWhichWasClicked=="records"){
            this.showTopRecords();
        }
        else if(idElemantsWhichWasClicked=="aboutGame")
        this.showInformationAboutGame();

        else if(idElemantsWhichWasClicked=="comeBack")
            this.showMenu();
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
        console.log("egr");
        document.body.style.backgroundImage="url('resources/image/car.jpg')"
        this.characters.classList.remove('hidden');
        this.comeBack.classList.remove('hidden');
        this.menu.classList.add('hidden');
        this.nameGame.classList.add('hidden');
    }
    showMenu(){
        this.records.classList.add('hidden');
        this.comeBack.classList.add('hidden');
        this.comeBack.classList.add('hidden');
        this.aboutGame.classList.add('hidden');
        this.menu.classList.remove('hidden');
        this.nameGame.classList.remove('hidden');
    }
}
