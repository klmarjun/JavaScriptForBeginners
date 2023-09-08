function greetings(name = "ABC",msg = "Hi"){
    console.log(`${msg} ${name}`)
}
greetings()
greetings("DEF")
greetings("DEF","Hello")
greetings(undefined,"Hello")
greetings("DEF",undefined)  
greetings(null,"Hello")
greetings("DDD","")
// //infer the output