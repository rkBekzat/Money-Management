export interface Filter {
  type: "income" | "expense" | null,
  amount: {
    from: null | number,
    to: null | number
  },
  tags: string[],
  date: {
    from: null | string,
    to: null | string
  }
}

export interface Transaction {
  name: string;
  type: 'income' | 'expense';
  amount: number;
  tags: string[];
  date: string;
  description: string;
}

export interface dateType {
  from: null | Date;
  to: null | Date;
}

// TODO Catch tags from db
export const Tags = ['Personal', 'Food', 'Clothes', 'University', 'Other', 'Job', 'Household', 'Games', 'Entertainment'];
// sadfioirjgoseijvsifd idk how to solve it
// export type Tags = typeof tags[number];
// const tt: Tags[] = ['Personal', 'Foods', 'war'];
// export type Tags = ['Personal' | 'Food' | 'Clothes' | 'University' | 'Other' | 'Job' | 'Household' | 'Games' | 'Entertainment'];