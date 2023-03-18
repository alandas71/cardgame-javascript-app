// cria uma ordem aleatória de números para o posicionamento das cartas
var maximo = 5;

var i, squareRandom = [];
for (i = 0; i < maximo; i++) {
    squareRandom[i] = i;
}

var p, n, tmp;
for (p = squareRandom.length; p;) {
    n = Math.random() * p-- | 0;
    tmp = squareRandom[n];
    squareRandom[n] = squareRandom[p];
    squareRandom[p] = tmp;
}

var silabas = [
    { silaba: "BA", nome1: "-LA", nome2: "-NA-NA", nome3: "-TA-TA", img1: "img/bala.jpg", img2: "img/banana.jpg", img3: "img/batata.jpg" },
    { silaba: "BE", nome1: "-BÊ", nome2: "-LI-CHE", nome3: "-RIN-GE-LA", img1: "img/bebe.jpg", img2: "img/beliche.jpg", img3: "img/berinjela.jpg" },
    { silaba: "BI", nome1: "-CI-CLE-TA", nome2: "-CO", nome3: "-GO-DE", img1: "img/bicicleta.jpg", img2: "img/bico.jpg", img3: "img/bigode.jpg" },
    { silaba: "BO", nome1: "-LA", nome2: "-TA", nome3: "-TÃO", img1: "img/bola.jpg", img2: "img/bota.jpg", img3: "img/botao.jpg" },
    { silaba: "BU", nome1: "-FA-LO", nome2: "-LE", nome3: "-ZI-NA", img1: "img/bufalo.jpg", img2: "img/bule.jpg", img3: "img/buzina.jpg" },
    { silaba: "CA", nome1: "-MA", nome2: "-SA", nome3: "-VA-LO", img1: "img/cama.jpg", img2: "img/casa.jpg", img3: "img/cavalo.jpg" },
    { silaba: "CO", nome1: "-PO", nome2: "-RA-ÇÃO", nome3: "-E-LHO", img1: "img/copo.jpg", img2: "img/coracao.jpg", img3: "img/coelho.jpg" },
    { silaba: "CU", nome1: "-BO", nome2: "-CO", nome3: "-RA-TI-VO", img1: "img/cubo.jpg", img2: "img/cuco.jpg", img3: "img/curativo.jpg" },
    { silaba: "CE", nome1: "-BO-LA", nome2: "-NOU-RA", nome3: "-RE-JA", img1: "img/cebola.jpg", img2: "img/cenoura.jpg", img3: "img/cereja.jpg" },
    { silaba: "CI", nome1: "-GAR-RA", nome2: "-GAR-RO", nome3: "-MEN-TO", img1: "img/cigarra.jpg", img2: "img/cigarro.jpg", img3: "img/cimento.jpg" },
    { silaba: "DA", nome1: "-DO", nome2: "L-MA-TAS", nome3: "-MA", img1: "img/dado.jpg", img2: "img/dalmatas.jpg", img3: "img/dama.jpg" },
    { silaba: "DE", nome1: "-DO", nome2: "N-TE", nome3: "-TE-TI-VE", img1: "img/dedo.jpg", img2: "img/dente.jpg", img3: "img/detetive.jpg" },
    { silaba: "DI", nome1: "A-MAN-TE", nome2: "-NHEI-RO", nome3: "-NOS-SAU-RO", img1: "img/diamante.jpg", img2: "img/dinheiro.jpg", img3: "img/dinossauro.jpg" },
    { silaba: "DO", nome1: "-CE", nome2: "-MI-NÓ", nome3: "-RA", img1: "img/doce.jpg", img2: "img/domino.jpg", img3: "img/dora.jpg" },
    { silaba: "DU", nome1: "-EN-DE", nome2: "-REX", nome3: "-VI-DA", img1: "img/duende.jpg", img2: "img/durex.jpg", img3: "img/duvida.jpg" },
    { silaba: "FA", nome1: "-CA", nome2: "-DA", nome3: "-MI-LIA", img1: "img/faca.jpg", img2: "img/fada.jpg", img3: "img/familia.jpg" },
    { silaba: "FE", nome1: "I-JÃO", nome2: "-RA", nome3: "-RRO", img1: "img/feijao.jpg", img2: "img/fera.webp", img3: "img/ferro.jpg" },
    { silaba: "FI", nome1: "-GO", nome2: "-TA", nome3: "-VE-LA", img1: "img/figo.jpg", img2: "img/fita.jpg", img3: "img/fivela.jpg" },
    { silaba: "FO", nome1: "-GÃO", nome2: "-GUEI-RA", nome3: "-LHA", img1: "img/fogao.png", img2: "img/fogueira.jpg", img3: "img/folha.jpg" },
    { silaba: "FU", nome1: "-NIL", nome2: "-RA-CÃO", nome3: "-TE-BOL", img1: "img/funil.jpg", img2: "img/furacao.jpg", img3: "img/futebol.jpg" },
    { silaba: "GA", nome1: "-RRA-FA", nome2: "-TO", nome3: "-VE-TA", img1: "img/garrafa.jpg", img2: "img/gato.jpg", img3: "img/gaveta.jpg" },
    { silaba: "GE", nome1: "-LA-DEI-RA", nome2: "-LA-TI-NA", nome3: "-LO", img1: "img/geladeira.png", img2: "img/gelatina.jpg", img3: "img/gelo.jpg" },
    { silaba: "GI", nome1: "-GAN-TE", nome2: "-LE-TE", nome3: "-RA-FA", img1: "img/gigante.png", img2: "img/gilete.jpg", img3: "img/girafa.jpg" },
    { silaba: "GO", nome1: "-FI-NHO", nome2: "-RI-LA", nome3: "-TA", img1: "img/golfinho.jpg", img2: "img/gorila.jpg", img3: "img/gota.jpg" },
    { silaba: "GU", nome1: "-DE", nome2: "-LA", nome3: "I-TA-RRA", img1: "img/gude.jpg", img2: "img/gula.jpg", img3: "img/guitarra.jpg" },
    { silaba: "JA", nome1: "-CA", nome2: "-CA-RÉ", nome3: "-RRO", img1: "img/jaca.jpg", img2: "img/jacare.jpg", img3: "img/jarro.jpg" },
    { silaba: "JE", nome1: "-GUE", nome2: "-NI-PA-PO", nome3: "T-SKI", img1: "img/jegue.jpg", img2: "img/jenipapo.png", img3: "img/jetski.jpg" },
    { silaba: "JI", nome1: "-BO-IA", nome2: "-LÓ", nome3: "-PE", img1: "img/jiboia.jpg", img2: "img/jilo.webp", img3: "img/jipe.jpg" },
    { silaba: "JO", nome1: "-A-NI-NHA", nome2: "-GO", nome3: "-IA", img1: "img/joaninha.jpg", img2: "img/jogo.jpg", img3: "img/joia.jpg" },
    { silaba: "JU", nome1: "-BA", nome2: "-IZ", nome3: "-JU-BA", img1: "img/juba.jpg", img2: "img/juiz.jpg", img3: "img/jujuba.jpg" },
];

var quantidade = silabas.length;
var finalArr = Math.floor(Math.random() * quantidade / 5) * 5 + 5;
var inicialArr = finalArr - 5;
var arrSelecao = silabas.slice(inicialArr, finalArr);
arrSelecao = arrSelecao.sort((a, b) => {
    let sa = a.silaba.toLowerCase(),
        sb = b.silaba.toLowerCase();

    if (sa < sb) {
        return -1;
    }
    if (sa > sb) {
        return 1;
    }
    return 0;
});

// Adicionado um foreach para evitar as repetições de cod
arrSelecao.forEach((e, index) => {
    //Monta as silabas
    document.querySelector(".silaba" + index).innerHTML = e.silaba;
    //Monta as imagens
    document.querySelector("#cardLeft" + squareRandom[index]).src = e.img1;
    document.querySelector("#cardRight" + squareRandom[index]).src = e.img2;
    document.querySelector("#cardBottom" + squareRandom[index]).src = e.img3;
});

function preview() {
    if (inicialArr > 0) {
        finalArr = finalArr - 5;
        inicialArr = inicialArr - 5;
        var arrSelecao = silabas.slice(inicialArr, finalArr);
        arrSelecao.forEach((e, index) => {
            document.querySelector(".silaba" + index).innerHTML = e.silaba;
            document.querySelector("#cardLeft" + squareRandom[index]).src = e.img1;
            document.querySelector("#cardRight" + squareRandom[index]).src = e.img2;
            document.querySelector("#cardBottom" + squareRandom[index]).src = e.img3;
        });
    }
}

function next() {
    if (finalArr < quantidade) {
        finalArr = finalArr + 5;
        inicialArr = inicialArr + 5;
        var arrSelecao = silabas.slice(inicialArr, finalArr);
        arrSelecao.forEach((e, index) => {
            document.querySelector(".silaba" + index).innerHTML = e.silaba;
            document.querySelector("#cardLeft" + squareRandom[index]).src = e.img1;
            document.querySelector("#cardRight" + squareRandom[index]).src = e.img2;
            document.querySelector("#cardBottom" + squareRandom[index]).src = e.img3;
        });
    }
}

const columns = document.querySelectorAll(".column");

//Adiciona uma classe quando o evento draggable estiver ativo e a tira quando estiver inativo
document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    function playSound() {
        let audio = new Audio();
        audio.src = "sound/pick_card.mp3";
        audio.loop = false;
        audio.play();
    }
    playSound()
});
document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
    function playSound2() {
        let audio = new Audio();
        audio.src = "sound/set_card.mp3";
        audio.loop = false;
        audio.play();
    }
    playSound2()
});

//Seleciona as colunas, quando um item com a classe dragging estiver sobre uma das colunas, irá adiciona-lo a div em questão
columns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        item.appendChild(dragging);

        //valida a posição e a quantidade das cartas
        var elementDiv1 = document.querySelectorAll("#column1 img").length;
        var validDiv1 = document.getElementById("column1");
        var valid11 = validDiv1.querySelector("#cardLeft" + squareRandom[0]);
        var valid21 = validDiv1.querySelector("#cardRight" + squareRandom[0]);
        var valid31 = validDiv1.querySelector("#cardBottom" + squareRandom[0]);
        if (elementDiv1 == 3 && valid11 !== null && valid21 !== null && valid31 !== null) {
            document.querySelector('.silaba0').style.backgroundColor = "#16d70b";
            if (elementDiv1 == 3) {
                var reload1 = true;
            }
        } else {
            document.querySelector('.silaba0').style.backgroundColor = "";
        }

        var elementDiv2 = document.querySelectorAll("#column2 img").length;
        var validDiv2 = document.getElementById("column2");
        var valid12 = validDiv2.querySelector("#cardLeft" + squareRandom[1]);
        var valid22 = validDiv2.querySelector("#cardRight" + squareRandom[1]);
        var valid32 = validDiv2.querySelector("#cardBottom" + squareRandom[1]);
        if (elementDiv2 == 3 && valid12 !== null && valid22 !== null && valid32 !== null) {
            document.querySelector('.silaba1').style.backgroundColor = "#16d70b";
            if (elementDiv2 == 3) {
                var reload2 = true;
            }
        } else {
            document.querySelector('.silaba1').style.backgroundColor = "";
        }

        var elementDiv3 = document.querySelectorAll("#column3 img").length;
        var validDiv3 = document.getElementById("column3");
        var valid13 = validDiv3.querySelector("#cardLeft" + squareRandom[2]);
        var valid23 = validDiv3.querySelector("#cardRight" + squareRandom[2]);
        var valid33 = validDiv3.querySelector("#cardBottom" + squareRandom[2]);
        if (elementDiv3 == 3 && valid13 !== null && valid23 !== null && valid33 !== null) {
            document.querySelector('.silaba2').style.backgroundColor = "#16d70b";
            if (elementDiv3 == 3) {
                var reload3 = true;
            }
        } else {
            document.querySelector('.silaba2').style.backgroundColor = "";
        }
        var elementDiv4 = document.querySelectorAll("#column4 img").length;
        var validDiv4 = document.getElementById("column4");
        var valid14 = validDiv4.querySelector("#cardLeft" + squareRandom[3]);
        var valid24 = validDiv4.querySelector("#cardRight" + squareRandom[3]);
        var valid34 = validDiv4.querySelector("#cardBottom" + squareRandom[3]);
        if (elementDiv4 == 3 && valid14 !== null && valid24 !== null && valid34 !== null) {
            document.querySelector('.silaba3').style.backgroundColor = "#16d70b";
            if (elementDiv4 == 3) {
                var reload4 = true;
            }
        } else {
            document.querySelector('.silaba3').style.backgroundColor = "";
        }

        var elementDiv5 = document.querySelectorAll("#column5 img").length;
        var validDiv5 = document.getElementById("column5");
        var valid15 = validDiv5.querySelector("#cardLeft" + squareRandom[4]);
        var valid25 = validDiv5.querySelector("#cardRight" + squareRandom[4]);
        var valid35 = validDiv5.querySelector("#cardBottom" + squareRandom[4]);
        if (elementDiv5 == 3 && valid15 !== null && valid25 !== null && valid35 !== null) {
            document.querySelector('.silaba4').style.backgroundColor = "#16d70b";
            if (elementDiv5 == 3) {
                var reload5 = true;
            }
        } else {
            document.querySelector('.silaba4').style.backgroundColor = "";
        }

        var validDiv1 = document.getElementById("column1");
        var validDiv2 = document.getElementById("column2");
        var validDiv3 = document.getElementById("column3");
        var validDiv4 = document.getElementById("column4");
        var validDiv5 = document.getElementById("column5");


        //Escreve o nome do item
        document.getElementById('cardLeft' + squareRandom[0]).ondragend = function (valid11) {
            var valid11 = validDiv1.querySelector("#cardLeft" + squareRandom[0]);
            if (valid11 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[0].silaba + arrSelecao[0].nome1;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardRight' + squareRandom[0]).ondragend = function (valid21) {
            var valid21 = validDiv1.querySelector("#cardRight" + squareRandom[0]);
            if (valid21 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[0].silaba + arrSelecao[0].nome2;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardBottom' + squareRandom[0]).ondragend = function (valid31) {
            var valid31 = validDiv1.querySelector("#cardBottom" + squareRandom[0]);
            if (valid31 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[0].silaba + arrSelecao[0].nome3;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }


        document.getElementById('cardLeft' + squareRandom[1]).ondragend = function (valid12) {
            var valid12 = validDiv2.querySelector("#cardLeft" + squareRandom[1]);
            if (valid12 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[1].silaba + arrSelecao[1].nome1;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardRight' + squareRandom[1]).ondragend = function (valid22) {
            var valid22 = validDiv2.querySelector("#cardRight" + squareRandom[1]);
            if (valid22 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[1].silaba + arrSelecao[1].nome2;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardBottom' + squareRandom[1]).ondragend = function (valid32) {
            var valid32 = validDiv2.querySelector("#cardBottom" + squareRandom[1]);
            if (valid32 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[1].silaba + arrSelecao[1].nome3;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }


        document.getElementById('cardLeft' + squareRandom[2]).ondragend = function (valid13) {
            var valid13 = validDiv3.querySelector("#cardLeft" + squareRandom[2]);
            if (valid13 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[2].silaba + arrSelecao[2].nome1;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardRight' + squareRandom[2]).ondragend = function (valid23) {
            var valid23 = validDiv3.querySelector("#cardRight" + squareRandom[2]);
            if (valid23 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[2].silaba + arrSelecao[2].nome2;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardBottom' + squareRandom[2]).ondragend = function (valid33) {
            var valid33 = validDiv3.querySelector("#cardBottom" + squareRandom[2]);
            if (valid33 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[2].silaba + arrSelecao[2].nome3;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }


        document.getElementById('cardLeft' + squareRandom[3]).ondragend = function (valid14) {
            var valid14 = validDiv4.querySelector("#cardLeft" + squareRandom[3]);
            if (valid14 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[3].silaba + arrSelecao[3].nome1;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardRight' + squareRandom[3]).ondragend = function (valid24) {
            var valid24 = validDiv4.querySelector("#cardRight" + squareRandom[3]);
            if (valid24 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[3].silaba + arrSelecao[3].nome2;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardBottom' + squareRandom[3]).ondragend = function (valid34) {
            var valid34 = validDiv4.querySelector("#cardBottom" + squareRandom[3]);
            if (valid34 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[3].silaba + arrSelecao[3].nome3;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }


        document.getElementById('cardLeft' + squareRandom[4]).ondragend = function (valid15) {
            var valid15 = validDiv5.querySelector("#cardLeft" + squareRandom[4]);
            if (valid15 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[4].silaba + arrSelecao[4].nome1;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardRight' + squareRandom[4]).ondragend = function (valid25) {
            var valid25 = validDiv5.querySelector("#cardRight" + squareRandom[4]);
            if (valid25 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[4].silaba + arrSelecao[4].nome2;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }
        document.getElementById('cardBottom' + squareRandom[4]).ondragend = function (valid35) {
            var valid35 = validDiv5.querySelector("#cardBottom" + squareRandom[4]);
            if (valid35 !== null) {
                document.querySelector(".print").innerHTML = '...';
                document.querySelector(".print").innerHTML = arrSelecao[4].silaba + arrSelecao[4].nome3;
            }
            else {
                document.querySelector(".print").innerHTML = '...';
            }
        }

        //Se a quantidade das colunas preenchidas forem iguais a 3 cartas validadas, recarrega a página 
        if (reload1 == true && reload2 == true && reload3 == true && reload4 == true && reload5 == true) {
            setTimeout(() => {
                location.reload()
            }, "2000");
        }
    });
});