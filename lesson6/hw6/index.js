function withdraw(clients, balances, client, amount) {
    let rest = balances[clients.indexOf(client)] - amount;

    if (rest < 0) {
        return -1;
    } else {
        return rest;
    }
}

