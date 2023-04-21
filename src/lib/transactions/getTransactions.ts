import type { Transaction } from "../types";

// TODO Edit Date format

export const transactions: Transaction[] = [
	{
		name: 'Пятерочка',
		type: 'expense',
		amount: 1499,
		tags: ['Personal', 'Food'],
		date: '10.01.2023',
		description: '-'
	},
	{
		name: 'Salon',
		type: 'expense',
		amount: 900,
		tags: ['Personal', 'Other'],
		date: '10.02.2023',
		description: 'Haircut'
	},
	{
		name: 'Пятерочка',
		type: 'expense',
		amount: 900,
		tags: ['Personal', 'Food'],
		date: '15.01.2023',
		description: '-'
	},
	{
		name: 'Shopping',
		type: 'expense',
		amount: 1000,
		tags: ['Personal', 'Clothes'],
		date: '29.01.2022',
		description: 'New T-shirt'
	},
	{
		name: 'Scholarship',
		type: 'income',
		amount: 10,
		tags: ['Personal', 'University'],
		date: '25.03.2023',
		description: 'OOOOOOOOOOOOOOO thx God'
	},
	{
		name: 'Scholarship',
		type: 'income',
		amount: 10,
		tags: ['Personal', 'University'],
		date: '25.02.2023',
		description: 'OOOOOOOOOOOOOOO thx God'
	},
	{
		name: 'Lorem',
		type: 'expense',
		amount: 1,
		tags: [],
		date: '19.09.1999',
		description: 'Lorem'
	},
	{
		name: 'Prize',
		type: 'income',
		amount: 2000,
		tags: ['Personal', 'University', 'Sport'],
		date: '10.04.2023',
		description: 'Tournament prize'
	},
	{
		name: 'Shaurma',
		type: 'expense',
		amount: 9000,
		tags: ['Personal', 'Food'],
		date: '17.04.2023',
		description: 'Very good'
	},
	{
		name: 'Kinopoisk',
		type: 'expense',
		amount: 300,
		tags: ['Personal', 'Entertainment'],
		date: '01.01.2023',
		description: 'Avatar 2'
	},
	{
		name: 'Yandex Music',
		type: 'expense',
		amount: 990,
		tags: ['Personal', 'Entertainment'],
		date: '29.12.2022',
		description: 'Music subscription for year'
	},
	{
		name: 'Macbook',
		type: 'expense',
		amount: 100000,
		tags: ['Personal', 'Household'],
		date: '01.01.2053',
		description: 'New MacBook'
	}
];
