export function getRandomEmail
(length:number){

    let data=Math.random().toString(36).substring(2,2+length)

    let email=data + "@gmail.com"

    return email
    
}