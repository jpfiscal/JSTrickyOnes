function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin){
            if (inputPin != pin) return "Invalid PIN";
            return `$${amount}`;
        },
        deposit(inputPin, newAmount){
            if (inputPin != pin) return "Invalid PIN";
            amount += newAmount;
            return `Depositied $${newAmount}. Current balance is: $${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount){
            if (inputPin != pin) return "Invalid PIN";
            if (withdrawalAmount > amount)
                return "You don't have enough funds in your account for the requested withdrawal amount.";
            amount -= withdrawalAmount;
            return `Withdrawn $${withdrawalAmount}. Current balance is: $${amount}`;
        },
        changePin(oldPin, newPin){
            if (oldPin != pin) return "Invalid PIN";
            pin = newPin;
            return "Pin successfully changed!";
        }
    };
}

module.exports = { createAccount };
