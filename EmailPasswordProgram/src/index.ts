import inquirer from "inquirer";

let email: string = "xyz7@gmail.com"
let password: string = "rockstar"

const data = await inquirer.prompt([
{
    type:'input',
    name:'email',
    massage:'Email:   '
},
{
    type:'password',
    name:'password',
    message:'Password:  '
},

])

if(data.email === "xyz7@gmail.com" && data.password === "rockstar"){
    
    console.log("Email:   " + data.email + "\nPassword: " + data.password)

    console.log("LOGGED IN")

} else if (data.email === "xyz7@gmail.com" || data.password === "rockstar"){
 console.log("Invailed Email or Password")
}



