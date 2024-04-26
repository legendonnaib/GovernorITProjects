import inquirer from "inquirer";
let pin = 7777;
let amount = 500000;
let userdata = await inquirer.prompt([
    {
        name: "pinCode",
        type: "number",
        message: "Enter Five number pin code"
    },
]);
if (userdata.pinCode === pin) {
    console.log("Pin Code is Correct");
    let userdata2 = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What kind of operation you want to perform?",
            choices: ["Check Balance", "Withdraw Amount"],
        },
    ]);
    if (userdata2.operation === "Withdraw Amount") {
        let amountans = await inquirer.prompt([
            {
                name: "actualamount",
                type: "number",
                message: "Enter the ammount"
            }
        ]);
        if (amountans.actualamount > amount) {
            console.log("balance is less than entered amount, Sorry :( try Again");
        }
        else if (amountans.actualamount <= amount) {
            console.log('Withdrawal Succesfull: ' + amountans.actualamount);
        }
    }
    if (userdata2.operation === "Check Balance") {
        let checking = await inquirer.prompt([
            {
                name: "confirmation",
                type: "list",
                message: "Are you sure you want to check Balance",
                choices: ["yes", "y", "No", "n"]
            }
        ]);
        if (checking.confirmation === "yes") {
            console.log("Your balance is" + amount);
        }
        else if (checking.confirmation === "y") {
            console.log("your account balance" + amount);
        }
        else if (checking.confirmation === "No") {
            console.log("Return to Main menue");
        }
        else if (checking.confirmation === "N") {
            console.log("return to main menue");
        }
        else {
            console.log("incorrect option");
        }
    }
}
