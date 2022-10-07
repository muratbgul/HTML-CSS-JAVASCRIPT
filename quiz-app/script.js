let soru = {
    soruMetni:"Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri:{
        a:"Node.js",
        b:"Typescript",
        c:"Npm"
    },
    dogruCevap:"c",
    cevabiKontrolEt: function(cevap){
        return cevap === this.dogruCevap
    }
}

let soru2 = {
    soruMetni:"Hangisi .net paket yönetim uygulamasıdır?",
    cevapSecenekleri:{
        a:"Node.js",
        b:"Nugget",
        c:"Npm"
    },
    dogruCevap:"b", 
    cevabiKontrolEt: function(cevap){
        return cevap === this.dogruCevap
    }
}

console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("c"));
console.log(soru2.soruMetni);
console.log(soru2.cevabiKontrolEt("b"));