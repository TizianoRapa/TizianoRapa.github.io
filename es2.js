const roma = document.getElementById('Roma');
const parigi = document.getElementById('Parigi');
const londra = document.getElementById('Londra');
const vienna = document.getElementById('Vienna');
const atene = document.getElementById('Atene');
const amsterdam = document.getElementById('Amsterdam');
const berlino = document.getElementById('Berlino');
const madrid = document.getElementById('Madrid');
const budapest = document.getElementById('Budapest');
const capitaliImg = document.getElementById('capitali');
const description = document.getElementById('par');

function ImgPar(Imgsrc, newPar) {
    capitaliImg.src = Imgsrc;
    description.innerText = newPar;
}

roma.addEventListener('click', function(){
    ImgPar('foto/roma.jpeg', 'Roma, capitale dell\'Italia, e\' una grande citta\' cosmopolita con una storia artistica, architettonica e culturale che ha influenzato tutto il mondo e che risale a quasi 3000 anni fa.');
});

parigi.addEventListener('click', function(){
    ImgPar('foto/parigi.jpg', 'Parigi, capitale della Francia, e\' una delle citta\' piu\' importanti d\'Europa, centro mondiale di arte, moda, gastronomia e cultura.');
});

londra.addEventListener('click', function(){
    ImgPar('foto/londra.jpg', 'Londra, capitale dell\'Inghilterra e del Regno Unito, e\' una citta\' estremamente contemporanea con una storia che risale all\'antica Roma.');
});

vienna.addEventListener('click', function(){
    ImgPar('foto/vienna.jpg', 'Vienna, la capitale dell\'Austria. Il suo patrimonio artistico e intellettuale si e\' formato grazie all\'influenza di personalita\' come Mozart, Beethoven e Sigmunt Freud, che vissero nella citta\'.');
});

atene.addEventListener('click', function(){
    ImgPar('foto/atene.jpeg', 'Atene e\' la capitale della Grecia nonche\' il cuore dell\'antica Grecia, grande civilte\' e impero potente.');
});

amsterdam.addEventListener('click', function(){
    ImgPar('foto/amsterdam.jpg', 'Amsterdam e\' la capitale dei Paesi Bassi, nota per il suo patrimonio artistico, l\'elaborato sistema di canali e le case strette con facciate a capanna, eredita\' del XVII secolo, l\'epoca d\'oro della citta\'.');
});

berlino.addEventListener('click', function(){
    ImgPar('foto/berlino.jpg', 'Berlino, la capitale della Germania, fu fondata nel XIII secolo. Il Memoriale dell\'Olocausto e le parti restanti del muro di Berlino, ricoperte di graffiti, testimoniano la difficile storia della citta\' nel corso del XX secolo.');
});

madrid.addEventListener('click', function(){
    ImgPar('foto/madrid.jpg', 'Madrid, la capitale al centro della Spagna, e\' una citta\' caratterizzata da eleganti viali e parchi ampi e curati, come il parco del Buen Retiro.');
});

budapest.addEventListener('click', function(){
    ImgPar('foto/budapest.jpg', 'Budapest, la capitale dell\'Ungheria, e\' tagliata in due dal Danubio. Il Ponte delle Catene, del XIX secolo, congiunge la zona collinare di Buda a quella pianeggiante di Pest.');
});
