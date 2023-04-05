interface Transaction {
    name: string,
    type: 'income' | 'expense',
    amount: number,
    tags: string[],
    date: string
    description?: string,
}

// TODO Make interface for Tags
// TODO Edit Date format

export const transactions: Transaction[] = [{
    name: 'Пятерочка',
    type: 'expense',
    amount: 1499,
    tags: ['Personal', 'Food'],
    date: '10.01.2023'
}, {
    name: 'Salon',
    type: 'expense',
    amount: 900,
    tags: ['Personal', 'Other'],
    date: '10.02.2023',
    description: 'Haircut'
}, {
    name: 'Пятерочка',
    type: 'expense',
    amount: 900,
    tags: ['Personal', 'Food'],
    date: '15.01.2023',
}, {
    name: 'Shopping',
    type: 'expense',
    amount: 1000,
    tags: ['Personal', 'Clothes'],
    date: '29.01.2022',
    description: 'New T-shirt'
}, {
    name: 'Scholarship',
    type: 'income',
    amount: 10,
    tags: ['Personal', 'University'],
    date: '25.03.2023',
    description: 'OOOOOOOOOOOOOOO thx God'
}, {
    name: 'Scholarship',
    type: 'income',
    amount: 10,
    tags: ['Personal', 'University'],
    date: '25.02.2023',
    description: 'OOOOOOOOOOOOOOO thx God'
}];