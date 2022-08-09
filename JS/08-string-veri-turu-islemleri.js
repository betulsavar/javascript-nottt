let email = "betulsavarr@gmail.com"
let firstName = "betul"
let lastName = "SAVAR"
 
// string karakter sayısı -->
console.log( email.length)

// ılk karakteri bulmak ->[0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf / kucuk harf yapmak :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)


// strıng içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"))
console.log(email[15])

email.search(' olmayan')

// belli bir yere kadar al -> slice : (domain bilgisi)
let DOMAIN = email.slice( email.search("@") + 1)
console.log(DOMAIN)

console.log(

    DOMAIN.slice(0, DOMAIN.indexOf('.')) // sadece gmail kısmını aldık
)

// bilgiyi degistirir. -> replace :
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)


// İlk Harfleri Buyuk Yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
    
console.log(fullName)