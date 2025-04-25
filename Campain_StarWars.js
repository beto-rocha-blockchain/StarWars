let atk = 10;
let def = 10;
let life= 10;
let stam = 10;
let nome = "Nenhum";
let atk_Comp = 0; 
let def_Comp = 0; 
let life_Comp = 1; 
let stam_Comp = 0;
let critico = 0;
let chances = 1;
let cont = 1;
let Modo_Cam = 1;
let Limites = 3;
let e = false;
let life_MAX = 10;
let atk_MAX = 5;
let stam_MAX = 10;
let Bonus = 0;
let img1 = document.getElementById("1img");
let img2 = document.getElementById("2img");
let image = document.getElementById('img_P');
let image_C = document.getElementById('img_Comp');
image.style.transform = "scaleX(-1)";

var audio0 = document.querySelector('#audio0');
var audio1 = document.querySelector('#audio1');  
var audio2 = document.querySelector('#audio2');            
var audio3 = document.querySelector('#audio3');            
var audio4 = document.querySelector('#audio4');            
var audio5 = document.querySelector('#audio5');
var audio6 = document.querySelector('#audio6');
var audio7 = document.querySelector('#audio7');
var Tiro = document.querySelector('#tiro');
var Sabre = document.querySelector('#sabre');
var audios = document.querySelectorAll('audio');  
let som_P;
let som_Comp; 

let table1 =  document.getElementsByClassName('1');
let table2 =  document.getElementsByClassName('2');
let table3 =  document.getElementsByClassName('3');
let table4 =  document.getElementsByClassName('4');
let table5 =  document.getElementsByClassName('5');
let p;
let texto = document.getElementById("Texto");
let titulo = document.getElementById("Titulo");

let Question = document.getElementById("Question");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let reposta = 0;
let pop = document.getElementsByClassName("pop");

let at1 = document.getElementById("at1");
let at2 = document.getElementById("at2");
let at3 = document.getElementById("at3");
let at4 = document.getElementById("at4");
let at5 = document.getElementById("at5");
let bat1 = document.getElementById("bat1");
let bat2 = document.getElementById("bat2");
let bat3 = document.getElementById("bat3");
let bat4 = document.getElementById("bat4");
let bat5 = document.getElementById("bat5");

function Camapain(Modo){
    b();
    switch(Modo){
        case 1:
            if(e == false){
                atk = 18; 
                def = 15; 
                life = 27; 
                stam = 20; 
                nome = "Luke";
                Camapain_Luke(1);
                Modo_Cam  = 1;
            }else{
                Camapain_Luke(0);
            }
            break;
        case 2:
            if(e == false){
                atk = 22; 
                def=15; 
                life=23; 
                stam=27; 
                Modo_Cam  = 2;
                nome = "HanSolo";
                Camapain_HanSolo(1);
            }else{
                Camapain_HanSolo(0);
            }
            break;
        case 3:
            if(e == false){
            atk = 20; 
            def=15; 
            life=23; 
            stam=20; 
            Modo_Cam  = 3;
            nome = "Anakin";
            Camapain_DarthVader(1);
            }else{
                Camapain_DarthVader(0);
            }
            break;
        case 4:
            if(e == false){
            atk = 20; 
            def= 15; 
            life= 20; 
            stam= 100; 
            nome = "Droides";
            Camapain_Droides(1);
            Modo_Cam  = 4;
            }else{
                Camapain_Droides(0);
            }
            break;
        case 5:
            if(e == false){
            atk = 18; 
            def=15; 
            life=20; 
            stam=17; 
            nome = "Madaloriano";
            Modo_Cam  = 5;
            Camapain_Mandaloriano(1);
            }else{
                Camapain_Mandaloriano(0);
            }
            break;    
        case 6:
            if(e == false){
            atk = 15; 
            def=17; 
            life=30; 
            stam=18; 
            Modo_Cam  = 6;
            nome = "StormTropper";
            Camapain_StormTropeer(1);
            }else{
                Camapain_StormTropeer(0);
            }
            break;   
    }
    if(e == true){
        document.getElementsByClassName("Prologo")[0].style.display = "none";
    }else{
        document.getElementsByClassName("Prologo")[0].style.display = 'block';
        document.getElementsByClassName('button')[0].style.display = "none";
    setTimeout(function() {
        audio4.play();
        document.getElementsByClassName('button')[0].style.display = "block";
    }, 10*1000);
    }
}

function Camapain_Luke(P){
    texto.innerText = "Luke Skywalker e seus amigos viajam para Tatooine " +
    "e salvam seu amigo Han Solo do lorde crime Jabba o Hutt. " +
    "Enquanto isso, o Império Galático, sob a supervisão militar " +
    "de Darth Vader, começou a construção de uma segunda Estrela da Morte," +
    "visando aniquilar a Aliança Rebelde." +
    "Como o Imperador Palpatine planeja supervisionar pessoalmente as etapas finais de sua construção," +
    "a Frota Rebelde dá " +
    "início a um ataque em grande escala à Estrela da Morte, para evitar o término de " +
    "sua construção e matar Palpatine, pondo efetivamente um fim ao Império. Neste meio tempo, " +
    "Luke Skywalker, um líder rebelde e Cavaleiro Jedi, luta para resgatar Vader, um ex-Jedi que " +
    "também é seu pai, de volta do lado sombrio da Força em um climático duelo final diante " +
    "do maligno Imperador Palpatine.;";
    som_P = Sabre;
    table1[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table2[0].style.backgroundImage = "url('./Images/Floresta.webp')";
    table3[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
    table4[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
    table5[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
        switch(P){
            case 0:
                break;
            case 1:
                som_Comp = Tiro;
                var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
                var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
                var img = document.getElementById("img_P").src=" ./Images/Luke.png";
                atk_Comp = 20; 
                def_Comp = 5; 
                life_Comp = 30; 
                document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')"; // Precisa usar o className não tem jeito junto do [0]
                document.getElementById("img_Comp").src="./Images/Stormtrooper.png";
                Atualiza();
            break; 
            case 2:
                som_Comp = Sabre;
                audio2.play();
                var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
                document.getElementById("img_P").src=" ./Images/Luke.png";
                atk_Comp = 30; 
                def_Comp = 12; 
                life_Comp = 30; 
                document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Floresta.webp')";
                document.getElementById("img_Comp").src="./Images/Tropeer4.webp";
                Atualiza();
                break;
            case 3:
                som_Comp = Sabre;
                audio2.play();
                var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
                document.getElementById("img_P").src=" ./Images/Luke.png";
                atk_Comp = 35; 
                def_Comp = 17; 
                life_Comp = 40; 
                document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
                document.getElementById("img_Comp").src="./Images/Tropeer3.png";
                Atualiza();
                break;
            case 4:
                som_Comp = Sabre;
                audio6.play();
                var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
                document.getElementById("img_P").src=" ./Images/Luke.png";
                atk_Comp = 32; 
                def_Comp = 27; 
                life_Comp = 50; 
                document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
                document.getElementById("img_Comp").src="./Images/DarthVader.png";
                Atualiza();
                break;
            case 5:
                som_Comp = Sabre;
                audio0.play();
                var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
                document.getElementById("img_P").src=" ./Images/Luke.png";
                atk_Comp = 30; 
                def_Comp = 30; 
                life_Comp = 70; 
                document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
                document.getElementById("img_Comp").src="./Images/Palpatine.png";
                Atualiza();
                document.getElementsByClassName("7")[0].style.display = 'flex';
                break;
            case 6:
                document.getElementById("img_P").src=" ./Images/Luke.png";
                Random_Batle();
                break;
            case 7:
                window.location.href='End_StarWars.html';
                break;
            }
}
function Camapain_HanSolo(P){ 
    document.getElementById("img_P").src=" ./Images/Han-Solo.png";
    titulo.innerText = "Han Solo";
    texto.innerText = "Em dificuldade financeira, o piloto Han Solo e sua namorada Qi'ra buscam trabalho. " +
    "Eles colocam as mãos em uma substância valiosa, mas perigosa, e que acaba levando à perseguição do Império e à separação entre os " +
    "dois. Preocupado, Han usa toda a sua esperteza para se infiltrar em um plano arriscado, mas que pode render a oportunidade de voltar " +
    "à terra natal e reencontrar a sua amada. No caminho, o piloto encontra parceiros importantes, como Chewbacca e Lando Calrissian.";
    som_P = Tiro;
    som_Comp = Tiro;
    table1[0].style.backgroundImage = "url('./Images/tatooine.avif')";
    table2[0].style.backgroundImage = "url('./Images/tatooine.avif')";
    table3[0].style.backgroundImage = "url('./Images/tatooine.avif')";
    table4[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
    table5[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    switch(P){
        case 0:
                document.getElementById("img_P").src=" ./Images/Han-Solo.png";
                break;
        case 1:
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/Han-Solo.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/tatooine.avif')";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Stormtrooper.png";
            Atualiza();
        break;
        case 2:
            audio5.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/tatooine.avif')";
            document.getElementById("img_P").src=" ./Images/Han-Solo.png";
            atk_Comp = 35; 
            def_Comp = 17; 
            life_Comp = 40; 
            document.getElementById("img_Comp").src="./Images/Tropeer2.png";
            Atualiza();
            break;
        case 3:
            audio5.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/tatooine.avif')";
            document.getElementById("img_P").src=" ./Images/Han-Solo.png";
            atk_Comp = 32; 
            def_Comp = 27; 
            life_Comp = 50;  
            document.getElementById("img_Comp").src="./Images/Tropeer3.png";
            Atualiza();
            break;
        case 4:
            audio6.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
            document.getElementById("img_P").src=" ./Images/Han-Solo.png";
            atk_Comp = 32; 
            def_Comp = 27; 
            life_Comp = 50;
            document.getElementById("img_Comp").src="./Images/DarthVader.png";
            Atualiza();
            break;
        case 5:
            audio0.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/Han-Solo.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')";
            atk_Comp = 30; 
            def_Comp = 30; 
            life_Comp = 70; 
            document.getElementById("img_Comp").src="./Images/Mandaloriano.png";
            Atualiza();
            document.getElementsByClassName("7")[0].style.display = 'flex';
            break;
        case 6:
            document.getElementById("img_P").src=" ./Images/Han-Solo.png";
            Random_Batle();
            break;
        case 7:
            window.location.href='End_StarWars.html';
            break;
        }
        
}
function Camapain_DarthVader(P){
    titulo.innerText = "Star Wars Episode III: Vinagança Dos Sith";
    texto.innerText = "A República Galáctica está em meio a uma guerra épica com a Confederação de Sistemas Independentes sob a " +
    "liderança do Lorde Sith Dookan. O lider cibórgue do Exército da Confederação, General Grievous infiltrou em Coruscant e capturou " +
    "o Supremo Chanceler Palpatine, líder do Senado Galáctico.Enquanto o Exército Droide tenta fugir de Coruscant, uma grande batalha " +
    "espacial irrompe com os Cavaleiros Jedi Anakin Skywalker e Obi-Wan Kenobi liderando uma missão para resgatar o Chanceler. " +
    "Os Jedi lutam pela armada Separatista. No processo, o caça de Obi-Wan é danificado por droides buzz, R4 é destruída, e Anakin, " +
    "que tenta atirar neles para expulsá-los, apenas faz a situação ficar pior. Ele consegue salvar Obi-Wan e os dois Jedi fazem um " +
    "pouso de emergência no hangar do Cruzador da Federação de Comércio Mão Invisível, a nave-capitânia dos Separatistas.";
    
    som_P = Sabre;
    table1[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table2[0].style.backgroundImage = "url('./Images/tatooine.avif')";
    table3[0].style.backgroundImage = "url('./Images/tatooine.avif')";
    table4[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table5[0].style.backgroundImage = "url('./Images/Vulcão.jpg')";
    switch(P){
        case 0:
                break;
        case 1:
            som_Comp = Tiro;
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/Anakin.png";
            atk_Comp = 20; 
            def_Comp = 10; 
            life_Comp = 30; 
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')"; 
            document.getElementById("img_Comp").src="./Images/Stormtrooper.png";
            Atualiza();
        break;
        case 2:
            som_Comp = Sabre;
            audio7.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 22; 
            def_Comp = 17; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Dookan.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/tatooine.avif')";
            Atualiza();
            break;
        case 3:
            som_Comp = Sabre;
            audio7.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 25; 
            def_Comp = 17; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Mandaloriano.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/tatooine.avif')";
            Atualiza();
            break;
        case 4:
            som_Comp = Sabre;
            audio7.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 26; 
            def_Comp = 22; 
            life_Comp = 50; 
            document.getElementById("img_Comp").src="./Images/windu.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')";
            Atualiza();
            break;
        case 5:
            som_Comp = Sabre;
            audio1.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 30; 
            def_Comp = 25; 
            life_Comp = 50;
            document.getElementById("img_Comp").src="./Images/Obiwan.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Vulcão.jpg')"; 
            document.getElementById("img_Comp").style.right = "-100px";
            Atualiza();
            document.getElementsByClassName("7")[0].style.display = 'flex';
            break;
        case 6:
            document.getElementById("img_P").src=" ./Images/Anakin.png";
            Random_Batle();
            break;
        case 7:
            window.location.href='End_StarWars.html';
            break;
            
        }
}
function Camapain_Droides(P){
    titulo.innerText = "E o que?";
    texto.innerText = "C3PO Fica Puto por ser um coadjuvante, e não poder ajudar seus amigos, e começa a meter a porrada em Geral";
    document.getElementById("img_P").style.left = "-100px";
    som_P = Tiro;
    som_Comp = Tiro;
    table1[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table2[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table3[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table4[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table5[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    switch(P){
        case 0:
                break;
        case 1:
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/C3PO.png";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')";
            document.getElementById("img_Comp").src="./Images/Stormtrooper.png";
            Atualiza();
        break;
        case 2:
            audio6.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/C3PO.png";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Luke.png";
            Atualiza();
            break;
        case 3:
            audio5.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/C3PO.png";
            atk_Comp = 30; 
            def_Comp = 12; 
            life_Comp = 30;
            document.getElementById("img_Comp").src="./Images/Obiwan.png";
            Atualiza();
            break;
        case 4:
            audio5.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/C3PO.png";
            atk_Comp = 35; 
            def_Comp = 17; 
            life_Comp = 40; 
            document.getElementById("img_Comp").src="./Images/Tropeer2.png";
            Atualiza();
            break;
        case 5:
            audio0.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex"; 
            document.getElementById("img_P").src=" ./Images/C3PO.png";
            atk_Comp = 32; 
            def_Comp = 27; 
            life_Comp = 50;
            document.getElementById("img_Comp").src="./Images/R2D2.png";
            document.getElementById("img_Comp").style.right = "-100px";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')";
            Atualiza();
            document.getElementsByClassName("7")[0].style.display = 'flex';
            break;
        case 6:
            document.getElementById("img_P").src=" ./Images/C3PO.png";
            Random_Batle();
            break;
        case 7:
            window.location.href='End_StarWars.html';
            break;
            
        }
        
}
function Camapain_Mandaloriano(P){
    titulo.innerText = " Mandaloriano";
    texto.innerText =" Djarin (Pedro Pascal) perdeu os pais durante as Guerras Clônicas e foi agregado à cultura Mandaloriana na infância, sendo treinado para se tornar um guerreiro caçador de recompensas. É por isso que foi contratado para caçar Grogu em uma missão paga por um cliente misterioso. Após cumpri-la, Mando se arrepende, decidindo resgatar e proteger a criatura." + 
    "Sendo caçado por diversos inimigos, ele tem a nova missão de levar Grogu de volta para seu povo," + 
    "os Jedi. Em suas aventuras, ele faz novos aliados que o ajudam a escapar e proteger “A Criança”, encontrando personagens famosos " +
    "como Luke Skywalker, Boba Fett e Ashoka Tano.";
    som_Comp = Tiro;
    som_P = Tiro;
    table1[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
    table2[0].style.backgroundImage = "url('./Images/tatooine.avif')";
    table3[0].style.backgroundImage = "url('./Images/tatooine.avif')";
    table4[0].style.backgroundImage = "url('./Images/Floresta.webp')";
    table5[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
    switch(P){
        case 0:
                break;
        case 1:
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementById("img_P").src=" ./Images/Mandaloriano.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage="url('./Images/Background_DethStar.jpg')";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Stormtrooper.png";
            Atualiza();
        break;
        case 2:
            audio1.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage="url('./Images/tatooine.avif')";
            document.getElementById("img_P").src=" ./Images/Mandaloriano.png";
            atk_Comp = 27; 
            def_Comp = 12; 
            life_Comp = 30;
            document.getElementById("img_Comp").src="./Images/Tropeer3.png";
            Atualiza();
            break;
        case 3:
            audio0.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage="url('./Images/tatooine.avif')";
            document.getElementById("img_P").src=" ./Images/Mandaloriano.png";
            atk_Comp = 35; 
            def_Comp = 17; 
            life_Comp = 40; 
            document.getElementById("img_Comp").src="./Images/Mandaloriano.png";
            Atualiza();
            break;
        case 4:
            audio0.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage="url('./Images/Floresta.webp')";
            document.getElementById("img_P").src=" ./Images/Mandaloriano.png";
            atk_Comp = 32; 
            def_Comp = 20; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Luke.png";
            Atualiza();
            break;
        case 5:
            audio0.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage="url('./Images/Background_DethStar.jpg')";
            document.getElementById("img_P").src=" ./Images/Mandaloriano.png";
            atk_Comp = 30; 
            def_Comp = 22; 
            life_Comp = 35;  
            document.getElementById("img_Comp").src="./Images/Han-solo.png";
            Atualiza();
            document.getElementsByClassName("7")[0].style.display = 'flex';
            break;
        case 6:
            document.getElementById("img_P").src=" ./Images/Mandaloriano.png";
            Random_Batle();
            break;
        case 7:
            window.location.href='End_StarWars.html';
            break;
            
        }
}
function Camapain_StormTropeer(P){
    som_P = Tiro;
    som_Comp = Tiro;
    titulo.innerText = "StormTropeer";
    texto.innerText = "Um StormTropeer Fica Revoltado com tratamento e auxilio das frotas imperiais, decidi iniciar um motin contra o Imperio";
    table1[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table2[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table3[0].style.backgroundImage = "url('./Images/Background1.jpg')";
    table4[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
    table5[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')";
    switch(P){
        case 0:
                break;
        case 1:
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')"; 
            document.getElementById("img_P").src=" ./Images/StormTrooper.png";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Stormtrooper.png";
            Atualiza();
        break;
        case 2:
            audio7.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')"; 
            document.getElementById("img_P").src=" ./Images/StormTrooper.png";
            atk_Comp = 30; 
            def_Comp = 15; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Tropeer2.png";
            Atualiza();
            break;
        case 3:
            som_Comp = Sabre;
            audio7.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')"; 
            document.getElementById("img_P").src=" ./Images/StormTrooper.png";
            atk_Comp = 25; 
            def_Comp = 22; 
            life_Comp = 40; 
            document.getElementById("img_Comp").src="./Images/Tropeer3.png";
            Atualiza();
            break;
        case 4:
            som_Comp = Tiro;
            audio6.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')"; 
            document.getElementById("img_P").src=" ./Images/StormTrooper.png";
            atk_Comp = 35; 
            def_Comp = 20; 
            life_Comp = 40; 
            document.getElementById("img_Comp").src="./Images/DarthVader.png";
            Atualiza();
            break;
        case 5:
            audio0.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')"; 
            document.getElementById("img_P").src=" ./Images/StormTrooper.png";
            atk_Comp = 25; 
            def_Comp = 20; 
            life_Comp = 70; 
            document.getElementById("img_Comp").src="./Images/Palpatine.png";
            Atualiza();
            document.getElementsByClassName("7")[0].style.display = 'flex';
            break;
        case 6:
            document.getElementById("img_P").src=" ./Images/StormTrooper.png";
            Random_Batle();
            break;
        case 7:
            window.location.href='End_StarWars.html';
            break;
        
        }
}

function Batle(Action){
    let dano;
        if(life_Comp <= 0){
            Turno_Comp();
        }else{
            switch (Action){
                case "Atk":
                if(stam > 0){
                    dano = atk - def_Comp; 
                    console.log(dano);
                    if(dano > 0){
                        life_Comp -= dano;
                    }
                    stam -= 5;
                    Animacao();
                    Turno_Comp();
                }else{
                    alert("Sua Estamina esta baixa, Descanse Primeiro");
                }
                    break;
                case "Spec":
                    if(chances >= 1){
                        min = Math.ceil(70);
                        max = Math.floor(100);
                        critico = Math.random()*(max - min);
                        critico = Math.round(critico); console.log(critico);
                        life_Comp -= critico;
                        chances--;
                        Animacao();
                    }else{
                        alert("Sem Especial");
                    }
                    Atualiza();
                    Turno_Comp();
                    break;
                case "Wait":
                    stam += 20;
                    Turno_Comp();
                    break;
                case "Surrender":
                    location.reload();
                    break;
            }
        }
        
   
}

function Atualiza(){
    document.getElementById("nome").innerText = nome;
    document.getElementById("Life_P").innerText = "Life:" + life;
    document.getElementById("Defesa_P").innerText = "Def:" + def;
    document.getElementById("Atak_P").innerText = "Atk:" + atk;
    document.getElementById("Stam_P").innerText = "Stam:" + stam;

    document.getElementById("Life_Comp").innerText = "Life:" + life_Comp;
    document.getElementById("Defesa_Comp").innerText = "Def:" + def_Comp;
    document.getElementById("Atak_Comp").innerText = "Atk:" + atk_Comp;
    document.getElementById("Stam_Comp").innerText = "Stam:" + stam_Comp;
}

function Turno_Comp(){
    dano = atk_Comp - def;
    console.log(dano);
    if(dano >= 0){
        life -= dano;
    }else{
        console.log("Dano nulo");
    }
    if(life <= 0){
        alert("GAME OVER");
        location.reload();
    }else if(life_Comp <= 0){
            Sabre.currentTime = 0;
            Tiro.currentTime = 0; 
            document.getElementsByClassName("Selecao")[0].style.display = "none";
            document.getElementsByClassName("Menu")[0].style.display = "flex";
            document.getElementsByClassName("Tela_C")[0].style.display = "none";
            Bonus++;
            audios.forEach(function(audio) {
                audio.pause();
            });
            audio3.play();
            PuzzleRandon();
    }
    Atualiza(); 
}

function verifica(cont){
    b();
    stam += 10;
    life += 10;
    document.getElementsByClassName("Menu")[0].style.display = "none";
    document.getElementsByClassName("Tela_C")[0].style.display = "flex";
    switch(Modo_Cam){
        case 1:
            Camapain_Luke(cont);
            break;
        case 2:
            Camapain_HanSolo(cont);
            break;
        case 3:
            Camapain_DarthVader(cont);
            break;
        case 4:
            Camapain_Droides(cont);
            audio3.play();
            break;
        case 5:
            Camapain_Mandaloriano(cont);
            break;
        case 6:
            Camapain_StormTropeer(cont);
            break;
    }
    
    audio3.pause();
}

function Animacao(){
    
    if(life_Comp > 0){
        setTimeout(function() {
            Sabre.currentTime = 0;
            Tiro.currentTime = 0;    
            som_P.play();
            image.style.transform = `translatex(${5}px) scaleX(-1)`;
        }, 10);
        setTimeout(function() {
            image.style.transform = `translatex(${-5}px) scaleX(-1)`;
        }, 250);
        setTimeout(function() {
            image.style.transform = `translatex(${5}px) scaleX(-1)`;
        }, 500);
        setTimeout(function() {
            image.style.transform = `translatex(${-5}px) scaleX(-1)`;
        }, 750);
    
        setTimeout(function() {
            som_Comp.play();
            image_C.style.transform = `translatex(${-5}px)`;
        }, 1000);
        setTimeout(function() {
            image_C.style.transform = `translatex(${5}px)`;
        }, 1250);
        setTimeout(function() {
            image_C.style.transform = `translatex(${-5}px)`;
        }, 1500); 
        setTimeout(function() {
            image_C.style.transform = `translatex(${5}px)`;
            Tiro.pause();
        }, 1750); 
    }else{
        Tiro.pause();
        Sabre.pause();
    }
} 
function Skip(){
    document.getElementsByClassName("Prologo")[0].style.display = "none";
    audio4.pause();
    audio2.play();
}
function bonus(num){
    if(Bonus>0){
        switch(num){
            case 1:
                atk += atk_MAX;
                break;
            case 2:
                life += life_MAX;
                break;
            case 3:
                stam += stam_MAX;
                break;
        }
        Bonus--;
        }else{
            alert("Voce Não Tem Pontos De Ação");
    }
        Atualiza();
}
function Random_Batle(){
    console.log(Limites + "Limites");
    if(Limites > 0){
    Limites--;
    min = Math.ceil(1);
    max = Math.floor(7);
    Enemies = Math.random()*(max - min);
    Enemies = Math.round(Enemies); 
    switch(Enemies){
        case 1:
            som_Comp = Tiro;
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')"; 
            document.getElementById("img_Comp").src="./Images/Stormtrooper.png";
            Atualiza();
        break;
        case 2:
            som_Comp = Sabre;
            audio4.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Tropeer3.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background_DethStar.jpg')"; 
            Atualiza();
            break;
        case 3:
            som_Comp = Sabre;
            audio1.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Obiwan.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Vulcão.jpg')"; 
            Atualiza();
            break;
        case 4:
            som_Comp = Tiro;
            audio0.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/Mandaloriano.png";
            Atualiza();
            break;
        case 5:
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex"; 
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/R2D2.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')";
            Atualiza();
            break;
        case 6:
            som_Comp = Sabre;
            audio7.play();
            var Tela = document.getElementsByClassName("Tela")[0].style.display = "none";
            var Tela_C = document.getElementsByClassName("Tela_C")[0].style.display = "flex";
            atk_Comp = 20; 
            def_Comp = 5; 
            life_Comp = 30; 
            document.getElementById("img_Comp").src="./Images/windu.png";
            document.getElementsByClassName("Tela_C")[0].style.backgroundImage = "url('./Images/Background1.jpg')";
            Atualiza();
            break;
        }
    }else{
        document.getElementsByClassName("Menu")[0].style.display = "flex";
        document.getElementsByClassName("Tela_C")[0].style.display = "none";
        alert("OLha So e Possivel Ir no espaço profundo 3 vezes");
        setTimeout(function(){
            audio3.play();
        }, 1* 125);
    }
}

function PuzzleRandon(){
    pop[0].style.display = "block";
    min = Math.ceil(1);
    max = Math.floor(11);
    p = Math.random()*(max - min);
    p = Math.round(p);
    console.log(p);
    switch (p){
        case 1: 
            Question.innerText = "Quem e o filho de Darth Vader?";
            b1.innerText = '1. Rey';
            b2.innerText = '2. BenSolo';
            b3.innerText = '3. Luke Skywalker';
            b4.innerText = '4. Han-Solo';
            b5.innerText = '5. Nenhuma Das Anteriores';
            reposta = 3;
            break;
        case 2:
            Question.innerText = "O que aconteceu com Anakin Skywalker durante sua batalha com o Conde Dookan?";
            b1.innerText = '1. Ele Perdeu as Duas Pernas';
            b2.innerText = '2. Ele Perdeu os Braço Direito';
            b3.innerText = '3. Perdeu a Braço Esquerdo';
            b4.innerText = '4. Perdeu o Dedo';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 2;
            break;
        case 3:
            Question.innerText = "De acordo com o Imperador, qual era a fraqueza de Luke Skywalker?";
            b1.innerText = '1. Sua fé no lado luminoso';
            b2.innerText = '2. Sua fé nos seus amigos';
            b3.innerText = '3. Sua falta de visão';
            b4.innerText = '4. Sua resistencia ao lado Sombrio';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 2;
            break;
        case 4:
            Question.innerText = "Onde as Guerras Clônicas começaram?";
            b1.innerText = '1. Tatooine';
            b2.innerText = '2. Coruscant';
            b3.innerText = '3. Naboo';
            b4.innerText = '4. Geonosis';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 4;
            break;
           ;
        case 5:
            Question.innerText = "Qual a cor do braço do C-3PO em Star Wars: O Despertar da Força?";
            b1.innerText = '1. dourado';
            b2.innerText = '2. prateado';
            b3.innerText = '3. amarelo';
            b4.innerText = '4. azul';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 5;
            break;
        case 6:
            Question.innerText = "Qual o emprego que o Jinn diz que tinha na base Starkiller pro Han Solo?";
            b1.innerText = '1. Piloto';
            b2.innerText = '2. Chefe';
            b3.innerText = '3. Faxineiro';
            b4.innerText = '4. Guarda';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 3;
            break;
        case 7:
            Question.innerText = "Como Obi-Wan Kenobi ficou conhecido em Tatooine?";
            b1.innerText = '1. Ken';
            b2.innerText = '2. Ben';
            b3.innerText = '3. Obi';
            b4.innerText = '4. Wan';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 2;
            break;
        case 8:
            Question.innerText = "Quem matou Jango Fett?";
            b1.innerText = '1. obi Wan';
            b2.innerText = '2. Anakin';
            b3.innerText = '3. yoda';
            b4.innerText = '4. Windu';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 4;
            break;
        case 9:
            Question.innerText = "Qual era a espécie do Yoda?";
            b1.innerText = '1. Felino';
            b2.innerText = '2. trilith';
            b3.innerText = '3. Yolor';
            b4.innerText = '4. Yangral';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 5;
            break;
        case 10:
            Question.innerText = "Quando Obi-Wan fez o teste numa amostra de sangue do Anakin, quão alta era a contagem de midi-chlorians?";
            b1.innerText = '1. Mais De 8000';
            b2.innerText = '2. 20000';
            b3.innerText = '3. 1000';
            b4.innerText = '4. 10000';
            b5.innerText = '5. Nenhuma Das Anteriores ';
            reposta = 2;
            break;
    }
}
function VerificaPuzzle(a){
    if(a == reposta){
        alert("Voce Acertou");
        console.log("Parabens Acertou");
        def += 2;
    }else{
        alert("Voce Errou");
    }
    pop[0].style.display = "none";
    Atualiza();
}

function Save(slot) {
    if(slot == 1){
    const jsonObject = [{
        "Slot": "1",
        "data": {
          "modo": Modo_Cam,
          "nome": nome,
          "atk": atk,
          "def": def,
          "life": life,
          "stam": stam,
          "bonus": Bonus,
          "chances": chances,
          "limites": Limites
        }
      }];
    // Armazene o objeto JSON no localStorage.
    localStorage.setItem('save1', JSON.stringify(jsonObject));
    // Recupere o objeto JSON do localStorage.
    let data = JSON.parse(localStorage.getItem('save1'));
    // Verifique se o valor do nome está definido.
    if (jsonObject[0]["data"]["nome"] === undefined) {
      console.log("Erro: O nome não está definido.");
    } 
      // Atribua o valor do nome ao innerText do elemento `at1`.
      at1.innerText = "Nome: " + jsonObject[0]["data"]["nome"];
      // Atribua o valor do ataque ao innerText do elemento `at2`.
      at2.innerText = "Atk: " + jsonObject[0]["data"]["atk"];
      // Atribua o valor da defesa ao innerText do elemento `at3`.
      at3.innerText = "Def: " + jsonObject[0]["data"]["def"];
      // Atribua o valor da vida ao innerText do elemento `at4`.
      at4.innerText = "Life: " + jsonObject[0]["data"]["life"];
      // Atribua o valor da resistência ao innerText do elemento `at5`.
      at5.innerText = "Stam: " + jsonObject[0]["data"]["stam"];
      // Imprima o objeto JSON no console log.
      console.log(data);
  }else{
    const jsonObject1 = [{
        "Slot": "1",
        "data": {
          "modo": Modo_Cam,
          "nome": nome,
          "atk": atk,
          "def": def,
          "life": life,
          "stam": stam,
          "bonus": Bonus,
          "chances": chances,
          "limites": Limites
        }
      }];
    // Armazene o objeto JSON no localStorage.
    localStorage.setItem('save2', JSON.stringify(jsonObject1));
    // Recupere o objeto JSON do localStorage.
    let data1 = JSON.parse(localStorage.getItem('save2'));
    // Verifique se o valor do nome está definido.
    if (jsonObject1[0]["data"]["nome"] === undefined) {
      console.log("Erro: O nome não está definido.");
    } 
      // Atribua o valor do nome ao innerText do elemento `at1`.
      bat1.innerText = "Nome: " + jsonObject1[0]["data"]["nome"];
      // Atribua o valor do ataque ao innerText do elemento `at2`.
      bat2.innerText = "Atk: " + jsonObject1[0]["data"]["atk"];
      // Atribua o valor da defesa ao innerText do elemento `at3`.
      bat3.innerText = "Def: " + jsonObject1[0]["data"]["def"];
      // Atribua o valor da vida ao innerText do elemento `at4`.
      bat4.innerText = "Life: " + jsonObject1[0]["data"]["life"];
      // Atribua o valor da resistência ao innerText do elemento `at5`.
      bat5.innerText = "Stam: " + jsonObject1[0]["data"]["stam"];
      // Imprima o objeto JSON no console log.
      console.log(data1);
  }
}

function a(){
    document.getElementsByClassName("login")[0].style.display = "block";
    data = JSON.parse(localStorage.getItem('save1'));
          at1.innerText = "Nome: " + data[0]["data"]["nome"];
          at2.innerText = "Atk: " + data[0]["data"]["atk"];
          at3.innerText = "Def: " + data[0]["data"]["def"];
          at4.innerText = "Life: " + data[0]["data"]["life"];
          at5.innerText = "Stam: " + data[0]["data"]["stam"];
    data1 = JSON.parse(localStorage.getItem('save2'));
          bat1.innerText = "Nome: " + data1[0]["data"]["nome"];
          bat2.innerText = "Atk: " + data1[0]["data"]["atk"];
          bat3.innerText = "Def: " + data1[0]["data"]["def"];
          bat4.innerText = "Life: " + data1[0]["data"]["life"];
          bat5.innerText = "Stam: " + data1[0]["data"]["stam"];
    switch(data[0]["data"]["nome"]){
        case "Luke":
            img1.src =  "./Images/Luke.png";
            break;
        case "HanSolo":
            img1.src =  "./Images/Han-Solo.png";
            break;
        case "Anakin":
            img1.src =  "./Images/Anakin.png";
            break;
        case "Madaloriano":
            img1.src =  "./Images/Mandaloriano.png";
            break;
        case "Droides":
            img1.src =  "./Images/C3PO.png";
            break;
        case "StormTropper":
            img1.src =  "./Images/Stormtrooper.png";
            break;
        default:
            img1.src =  "./Images/Luke.png";
            console.log("Nâo Existe");
            break;
    }
    switch(data1[0]["data"]["nome"]){
        case "Luke":
            img2.src =  "./Images/Luke.png";
            break;
        case "HanSolo":
            img2.src =  "./Images/Han-Solo.png";
            break;
        case "Anakin":
            img2.src =  "./Images/Anakin.png";
            break;
        case "Madaloriano":
            img2.src =  "./Images/Mandaloriano.png";
            break;
        case "Droides":
            img2.src =  "./Images/C3PO.png";
            break;
        case "StormTropper":
            img2.src =  "./Images/Stormtrooper.png";
            break;
        default:
            img2.src =  "./Images/Luke.png";
            console.log("Nâo Existe");
            break;
    }
}
function b(){
    document.getElementsByClassName("login")[0].style.display = "none";
}
function login(slot){
    document.getElementsByClassName("login")[0].style.display = "none";
    document.getElementsByClassName("Tela")[0].style.display = "none";
    document.getElementsByClassName("Menu")[0].style.display = "flex";
    audios.forEach(function(audio) {
        audio.pause();
    });
    audio3.play();
    e = true;  
    if(slot === 1){
        data = JSON.parse(localStorage.getItem('save1'));
        Camapain(data[0]["data"]["modo"]);
        console.log(data[0]["data"]["modo"]);
        console.log(data);
        Limites = data[0]["data"]["limites"];
        chances = data[0]["data"]["chances"];
        Bonus = data[0]["data"]["bonus"];
        Modo_Cam = data[0]["data"]["modo"];
        nome = data[0]["data"]["nome"]; 
        atk = data[0]["data"]["atk"];
        def = data[0]["data"]["def"];
        life = data[0]["data"]["life"];
        stam = data[0]["data"]["stam"];
        Atualiza();
    }else if(slot === 2){ 
        data1 = JSON.parse(localStorage.getItem('save2'));
        Camapain(data1[0]["data"]["modo"]);
        console.log(data1[0]["data"]["modo"]);
        console.log(data1);
        Limites = data[0]["data"]["limites"];
        chances = data1[0]["data"]["chances"];
        Bonus = data1[0]["data"]["bonus"];
        Modo_Cam = data1[0]["data"]["modo"];
        nome = data1[0]["data"]["nome"]; 
        atk = data1[0]["data"]["atk"];
        def = data1[0]["data"]["def"];
        life = data1[0]["data"]["life"];
        stam = data1[0]["data"]["stam"];
        Atualiza();
        console.log(Bonus);
    }
}