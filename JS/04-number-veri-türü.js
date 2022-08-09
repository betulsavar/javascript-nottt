//number veri türü tanımlamak:
let price = 100
let tax =0.18
let priceTax = price * tax
console.log("Fiyat:", price, "KDV Oranı:", tax, "KDV Tutarı:", priceTax)
let total = price * priceTax
console.log(
    "Fiyat:", price,
    "KDV Oranı", tax,
    "KDV Tutarı:", priceTax,
    "fiyat", total
   

)

 //string içinde gelen bir bilgiyi almak için:
 let stringNumber = "11"
 console.log(stringNumber)
let newNumber = Number(stringNumber)// string ifadeyi sayıya çevirdi!!!!!!!!!!!!!
console.log(newNumber)
console.log("Number Constructer icine bilgi gönderildi:", Number("222"))


//arttırma ve azaltma işlemi:
let counter = 320
counter =counter + 1 //uzun yöntem
counter += 1; //rakam 1 arttırdık
counter ++;   // aynı şekilde rakamı bir arttırdık
console.log(counter)

counter --; // 1 eksilttik
counter -= 1; // aynı işlevi görüyor
console.log(counter)

counter *=10; // sayıyı 10 ile çarptık
console.log(counter)

counter /= 2; // sayıyı ikiye bölme işlemi yapar
console.log(counter)


//işlem önceliği:
console.log(2 + 3 * 10)
console.log((2 + 3) * 10)


//mod(kalan) alma %:
 //sayı tek mi çift mi 
 console.log( 17 % 2 )

 // 8 urun alan koliye tum urunler sığıyor mu ?
 console.log( "Koli Kalan Urun ornegi:", 18 % 8)

 // üs alma **:
 console.log(2 * 2 * 2 * 2)
 console.log(2 ** 5)


//aşağı yuvarlama:
console.log(Math.floor(1.5))
 

// Yukarı yuvarlama-> Math.ceil:
console.log("yukarı yuvarlama:", Math.ceil(1.6) )

//yakına yuvarlama islemi-> Math.round :
console.log("Yakına Yuvarlama:", Math.round(1.3))
console.log("yakına yuvarama:", Math.round(1.5))
