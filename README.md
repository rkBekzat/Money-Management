# Project Money-Management

## Project Description:

The Money Management application is a single-page application (SPA) designed to help users manage their finances. This frontend project allows any user to register and start managing their finances by performing CRUD (create, read, update, and delete) operations for transactions. Each transaction consists of a name, amount, category, date/time, type (income/expense), and an optional description.

The main goal of the Money Management application is to provide users with a simple and intuitive interface to manage their finances. The user interface (UI) is designed to be user-friendly and responsive, allowing users to easily add, view, edit, and delete their transactions. The application also provides various filters and search options to help users quickly find the transactions they are looking for.

The Money Management application has a user authentication system that allows users to register and log in securely. Once logged in, users can perform CRUD operations on their transactions. Users can add new transactions by providing the required details, including the name, amount, category, date/time, and type. Users can also add an optional description to provide additional details about the transaction.

The Money Management application allows users to view their transactions in a simple and easy-to-read format. Users can view all their transactions or filter them by category, date, or type. Users can also search for specific transactions using keywords.

In summary, the Money Management application is a frontend project designed to help users manage their finances. It allows users to register, perform CRUD operations for transactions, and view their transactions in a user-friendly interface. With this application, users can easily track their income and expenses, and stay on top of their finances.

## Tools:

Framework: Svelte, ts

Backend: Django

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
