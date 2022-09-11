const inflation = [6.22, 4.08, 7.97, 6.88];

export function calculateSalary(salary, quarter) {
    return salary + salary * (inflation[quarter - 1] / 100)
}

export function calculateInflation(quarter) {
    return inflation[quarter - 1];
}

export function calculateQuarter(date) {
    const month = parseInt(`${date[5]}${date[6]}`, 10);
    return Math.floor(month / 3) + 1;
}
