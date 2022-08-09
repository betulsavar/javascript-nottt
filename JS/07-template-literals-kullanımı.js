//  ********************** Template Literals Kullanımı  **************
let username = "betül"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
console.log("Merhaba", username, "sitemize hoşgeldiniz", "mail adresin:", email)

let info =  `
Merhaba ${username} sitemize hoşgeldin..
mail adresin ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kısa isminiz: ${username[0]}. 

`
console.log(info)