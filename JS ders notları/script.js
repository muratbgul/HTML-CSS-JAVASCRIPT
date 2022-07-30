// var maasAli=5000;
// var maasMert=7000;
// var zam=0.5;

// var yenimaasali=(maasAli+(maasAli*zam));
// var yenimaasmert=(maasMert+(maasMert*zam));

// console.log("Ali'nin Yeni Maaşı= "+yenimaasali)
// console.log("Mert'in Yeni Maaşı= "+yenimaasmert) 

//-------------------------------------------------------------------

// var urunAdi ="İphone 13";    //(string)
// let urunFiyat = 15000;    //(number)

// console.log(typeof urunAdi);
// console.log(typeof urunFiyat);

//-------------------------------------------------------------------

// let sayi1 = "10";
// let sayi2 = "20";
// console.log(Number(sayi1) + Number(sayi2));

//-------------------------------------------------------------------

// let sayi1 = 10;
// let sayi2 = 20;
// console.log(sayi1.toString() + sayi2.toString());

//----------------------------------------------------------------------

// let isim = "Sena";
// let soyad = "Turan";
// console.log(isim + " " + soyad);

//-------------------------------------------------------------------------

// let sinavNotu = 70;
// let basarilimi = (sinavNotu>=50);
// console.log(basarilimi);
// console.log(typeof basarilimi);  

//-------------------------------------------------------------------------

// let yas;
// console.log(yas);
// console.log(typeof yas);

//------------------------------------------------------------------------

// let yas = "";
// console.log(yas);
// console.log(typeof yas);

//--------------------------------------------------------------------------
//            UYGULAMA

// let ogr1_ad = "Ada";
// let ogr1_soyad = "Bilgi";
// let ogr1_dogumTarihi = "2010";
// let ogr1_matematik1 = 70;
// let ogr1_matematik2 = 70;
// let ogr1_matematik3 = 80;
// let ogr1_ortalama = (ogr1_matematik1+ogr1_matematik2+ogr1_matematik3) / 3; 
// console.log(ogr1_ortalama);
// // ondalıklı sayı istemiyorsak ondalık kısmını parseInt(değişken) ile atabiliriz  
// console.log(parseInt(ogr1_ortalama));
// // ondalıklı olarak istiyorsak parseFloat(değişken) ile gösterebiliriz
// console.log(parseFloat(ogr1_ortalama));
// // öğrencinin geçip geçmediğini true veya false ile (boolean) gösterebiliriz  
// console.log(ogr1_ortalama >=50);

// // öğrencinin yaşını hesaplama 
// let suankiyil = new Date().getFullYear();
// let ogr1_yas = suankiyil - ogr1_dogumTarihi;
// console.log(ogr1_yas);

//------------------------------------------------------------------------------

//           MANTIKSAL OPERATÖRLER

// let sonuc;
// let a=10 , b=20 , c=30;

//-----------Aritmetik operatörler

// let sonuc;
// let a=10 , b=20 , c=30;
// sonuc = a+b;
// sonuc = a-b;
// sonuc = a*b;
// sonuc = a/b;
// sonuc = c%a;
//sonuc = a++; //ilk başta atama işlemi yapılır daha sonra sayı arttırılır
//sonuc = ++a; //ilk başta sayı arttırılır daha sonra atama işlemi yapılır
//sonuc = a--;
//sonuc = --a; 
//console.log(sonuc); 

//-------------Atama operatörleri

// sonuc = a;
// sonuc += a;   // sonuc = sonuc + a
// sonuc -= a;   // sonuc = sonuc - a
// sonuc *= a;   // sonuc = sonuc * a
// sonuc /= a;   // sonuc = sonuc / a
// sonuc %= a;   // sonuc = sonuc % a
//console.log(sonuc);

//-------------Karşılaştırma operatörleri 

// sonuc = (a == b)      // a, b'ye eşit mi? 
// sonuc = (a != b)      // a,'ye eşit değil mi?
// sonuc = (a === "b")   // a, b'ye hem değer hem de değişkenin tipi olarak eşit mi?
// sonuc = (a > b)       // a, b'den büyük mü?
// sonuc = (a < b)       // a, b'den küçük mü?
// sonuc = (a <= b)      // a, b'ye eşit veya küçük mü?
// console.log(sonuc);  

//-------------Mantıksal operatörler 





//-------------------------- İF- ELSE YAPISI---------------------------------------
//------- UYGULAMA_----------

// let username = "beyazgulmurat";
// let password = "1234"


// if (username == "beyazgulmurat")
// { 
//   if(password=="1234")
//   {
//     console.log("Uygulamaya Giriş Yapıldı");
//   }
//   else
//   {
//     console.log("Yanlış Şifre Girdiniz..")
//   }
// }
// else
// {
//     console.log("Kullanıcı Adı Yanlış..");
// }

//-------------------------------------------------------------------
// ------------- UYGULAMA -------------

// let mezuniyet = "Lise";
// let yas = 20;

// if (yas >= 18 && (mezuniyet == "Üniversite" || mezuniyet == "Lise"))
// {
//     console.log("Ehliyet alabilirsiniz..")
// }
// else
// {
//     console.log("Ehliyet alamazsınız..")
// }

//-------------------------------------------------------------------------

//---------Strings-------------

// let ad = "Murat", soyad = "Beyazgül", yas = 67, sehir = "Hatay";

// let mesaj = "Benim adım " + ad +" ve soyadım "+ soyad +". " + sehir+"'da"+" yaşıyorum." + " Emekliliğime "+ (65-yas)+ " yılım kaldı."
// console.log(mesaj);

// Backtick (alt gr+ virgül)
// let mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğime ${65-yas} yılım kaldı.`;
// console.log(mesaj);

// ternary operators
// let emeklilik = ( 65-yas > 0 ) ? "Emekliliğime " + (65-yas) + " yılım kaldı" : "Emekliyim." 
// let mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${emeklilik}`;
// console.log(mesaj);

//--------------------------------------------------------------------------------------------------
//------------------ STRING METOTLARI ---------------------------

// let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";
// let sonuc;

// sonuc = kursAdi.toLowerCase();
// sonuc = kursAdi.toUpperCase();
// sonuc = kursAdi.length;
// sonuc = kursAdi[0];
// sonuc = kursAdi.slice(0,6); 
// sonuc = kursAdi.slice(10);
// sonuc = kursAdi.slice(-10);
// sonuc = kursAdi.slice(-10,0);
// sonuc = kursAdi.substring(0,6);
// sonuc = kursAdi.replace("Eğitimi","Kursu"); //replaceAll bütün eğitimi kelimelerini değiştirir.
// sonuc = kursAdi.trim(); // sağ ve sol boşlukları silerek yazdırıyor
// sonuc = kursAdi.trimStart();
// sonuc = kursAdi.trimEnd();
// sonuc = kursAdi.indexOf("W");
// sonuc = kursAdi.split(" ");
// sonuc = kursAdi.split(" ")[0];
// sonuc = kursAdi.split(" ")[3];
// console.log(sonuc);

//----------------------------------------------------------------------

//let simdi = new Date();
// GET Methods-------------

// sonuc = simdi.getDate();
// sonuc = simdi.getDay();
// sonuc = simdi.getFullYear();
// sonuc = simdi.getHours();
// sonuc = simdi.getMonth();
// sonuc = simdi.getTime();

// SET Methods--------------

// simdi.setFullYear(2025);
// simdi.setMonth(7);
// simdi.setDate(15);


//--------DOĞUM TARİHİİİİ---------------
// let simdi = new Date();
// let dogumtarihi = new Date(1990, 5, 15);

// sonuc = simdi.getFullYear() - dogumtarihi.getFullYear();

// console.log(typeof sonuc);
// console.log(sonuc);

//------------------------------DİZİLER------------------------------

// let ogranciler = ["çınar", "ada","murat"];

// sonuc = ogranciler.length;
// sonuc = ogranciler.toString();
// sonuc = ogranciler.join("-");

//eleman silme
// sonuc = ogranciler.pop();  //son eleman silinir 
// sonuc = ogranciler.shift();  // ilk eleman silinir

//eleman ekleme 
//sonuc = ogranciler.push("sena");  //dizinin sonuna eleman eklenir
// sonuc = ogranciler.unshift("sena");  //dizinin başına eleman eklenir

//dizinin elemanının varlığını kontrol etme
// console.log(ogranciler.includes("ada"));   //true/false olarak değer verir 
// console.log(ogranciler.indexOf("awd"));   //kaçıncı indexte olduğunu gösterir (-1 ise yoktur) 

// console.log(sonuc);
// console.log(ogranciler);

// dizi birleştirme -----------

// let markalar1 = ["mercedes","toyota","bmw"]
// let markalar2 = ["opel","renault"]
// let markalar3 = ["maserati","şahin"]

//let sonuc = markalar1.concat(markalar2,markalar3);
//let sonuc = markalar1.splice(0,1,markalar2);

// console.log(sonuc);
// console.log(markalar1);

//----------- uygulama --------------

// let kullaniciA = {
//     "ad" : "Sadık",
//     "soyad" : "Turan",
//     "yas" : 38,
//     "adres" : {
//         "sehir" : "kocaeli",
//         "ilce" : "izmit"
//     },
//     "hobiler" : ["sinema","spor"] 
// }

// let kullaniciB = {
//     "ad" : "Murat",
//     "soyad" : "Beyazgül",
//     "yas" : 21,
//     "adres" : {
//         "sehir" : "Gaziantep",
//         "ilce" : "Şahinbey"
//     },
//     "hobiler" : ["formula 1","spor"] 
// }

// let sonuc;

// sonuc = kullaniciA.ad;
// sonuc = kullaniciA.soyad;
// sonuc = kullaniciA["yas"];
// sonuc = kullaniciA.adres.sehir;
// sonuc = kullaniciA.hobiler[0];

// let kullanicilar =[
//     kullaniciA,
//     kullaniciB
// ];

// sonuc = kullanicilar[0];
// sonuc = kullanicilar[1].ad;
// sonuc = kullanicilar[1].adres.ilce;

// console.log(sonuc);

//
// buna ekstra olarak bir dizinin içinde de direkt olarak tanımlayabilirdik---------------------

// let kullanicilar =[
//     {
//         "ad" : "Sadık",
//         "soyad" : "Turan",
//         "yas" : 38,
//         "adres" : {
//             "sehir" : "kocaeli",
//             "ilce" : "izmit"
//         },
//         "hobiler" : ["sinema","spor"] 
//     },
//     {
//         "ad" : "Murat",
//         "soyad" : "Beyazgül",
//         "yas" : 21,
//         "adres" : {
//             "sehir" : "Gaziantep",
//             "ilce" : "Şahinbey"
//         },
//         "hobiler" : ["formula 1","spor"] 
//     }
// ]

// let sonuc;
// sonuc = kullanicilar[1].adres.ilce;
// console.log(sonuc);


//----------------------FOR DÖNGÜSÜ----------------------

// let toplam=0;

// for (let i=1; i<=10; i++){
//     toplam += i;
// }
// console.log(toplam);

//-----------------

// let sayilar = [1,4,8,54,2,69,7];
// let toplam = 0 ;

// for (let i=0; i<sayilar.length; i++){
//     toplam+= sayilar[i];
// }
// console.log(toplam);

//----------------------

// let sayilar = [1,4,8,54,2,69,7];
// let toplam = 0 ;

// for(let i in sayilar){         // in kullandığımızda sayıların index numaralarını atıyor 
//     toplam += sayilar[i];       
// }
// console.log(toplam);

//-------------------------

// let sayilar = [1,4,8,54,2,69,7];
// let toplam=0;
// for(let sayi of sayilar){          // of kullandığımızda direkt olarak sayıları atıyor
//     toplam +=sayi
// }
// console.log(toplam);

//_---------------UYGULAMA-------------

// let ogrenciler = 
// [
//     {"ad":"nazlı", "soyad":"ileri", "notlar":[90,70,80]},
//     {"ad":"ahmet", "soyad":"alıcı", "notlar":[40,30,50]},
//     {"ad":"sena", "soyad":"yılmaz", "notlar":[50,70,60]}
// ];

// for(let ogrenci of ogrenciler)
// {
//     let not_toplam=0;
//     let ortalama=0;
//     let adet=0;
//     for(let not of ogrenci.notlar)
//     {
//         not_toplam += not;
//         adet ++;
//     }
//     ortalama = not_toplam / adet;

//     let durum;
//     if(ortalama>=50)
//     {
//         durum = "Başarılı"
//     }
//     else
//     {
//         durum = "Başarısız"
//     };

//     console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması ${ortalama}. ${durum}`);
// };

//------------------------------------------------------------------------------------------------

//----------------Fonksiyonlar--------------------
 
// function yas_hesapla(dogum_yıili){
//    return new Date().getFullYear()- dogum_yıili;
// };

// let yasahmet =yas_hesapla(2000);
// let yasasli =yas_hesapla(1987);
// console.log(yasahmet,yasasli);


// function emekliligekacyilkaldi(dogum_yıili,isim){
//     let yas = yas_hesapla(dogum_yıili);
//     let kalan_sene = 65-yas;
    
//     if(kalan_sene > 0){
//         console.log(`${isim}, emekli olmana ${kalan_sene} yıl kaldı.`);
//     }else{
//         console.log(isim+", zaten emeklisin.")
//     }
// }
// emekliligekacyilkaldi(1990,"Murat");
// emekliligekacyilkaldi(1950,"Fatma");


//-----------VERİLEN SAYIYI SAYININ TAM BÖLENLERİ ŞEKLİNDE DİZİ HALİNE GETİREN FONKSİYON---------//

// function tamBolenler (sayi){
//     sayilar=[];
//     for(let i=2; i<sayi;i++){
//         if(sayi%i==0){
//             sayilar.push(i);
//         }
//     }

//     return sayilar;
// }

// console.log(tamBolenler(10));
// console.log(tamBolenler(15));

//------------------------------------------

// function toplam () {
//     console.log(arguments);
// }

// console.log(toplam(2,5));
// console.log(toplam(2,5,7));

//------------------------------------------

// function toplam () {
//     let sonuc=0;

//     for(let i=0; i<arguments.length; i++){
//         sonuc += arguments[i];
//     }

//     return sonuc;

// }

// console.log(toplam(2,5));
// console.log(toplam(2,5,7));
// console.log(toplam(2,5,7,10));

//-----------------------------------------------

// not :  Fonksiyonlar kendi scop alanlarını oluştururlar fakat if, for gibi blocklar içerisinde yeni bir 
//        scope oluşturmaz. ANCAK!!! BİR DEĞİŞKENİ LET İLE BLOCKLARIN İÇERİSİNDE OLUŞTURURSAK KENDİ ALANINDA TANIMLAMIŞ 
//        OLURUZ. DIŞARIDAN ÇAĞIRILMAZ.. KISACA LET İLE VAR IN FARKI BUDUR..
//        ASLINDA BÜTÜN AMACIMIZ FONKSİYON GİBİ DAVRANAN BLOCKLAR OLUŞTURABİLMEMİZ..

//-----------const-------

// const kitapadi = "Beyaz Diş";
// kitapadi = "mavi";
// console.log(kitapadi);

// not cont ile değerini bir daha değiştiremeyebileceğimiz değişkenler tanımlarız.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
