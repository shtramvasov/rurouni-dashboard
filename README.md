# Fitness Data Visualization Dashboard

This workout tracker allows users to record their workout progress, view a calendar heatmap of their workout history, and see their exercise progress in a line chart.

Overall, the fitness dashboard workout tracker provides a user-friendly and intuitive interface for tracking workout progress over time, using advanced visualizations to make it easy to see patterns and trends.

---

Live version deployed on Vercel — [Rurouni](https://rurouni.vercel.app/)

---

## Technology Stack

<p align="center">
<img src='/src/assets/images/readme/techstack.png' width='650'/>
</p>

- [React](https://reactjs.org/) — JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) — statically typed superset of JavaScript
- [ReactQuery](https://react-query-v3.tanstack.com/) — data synchronization library for React
- [Firebase](https://firebase.google.com/) — platform for building web and mobile apps
- [ESLint](https://eslint.org/) — linting utility for enforcing code style
- [Tailwind](https://tailwindcss.com/) — utility-first CSS framework or writing CSS styles
- [React-Hook-Form](https://react-hook-form.com/) — library for handling forms in React
- [Toastify](https://fkhadra.github.io/react-toastify/introduction) — library for creating and managing notifications in React
- [Nivo](https://nivo.rocks/) — data visualization component built on top of D3.js
- [Recharts](https://recharts.org/en-US/) — charting library built on React components

## Detailed Feature List

These features work together to create a powerful and user-friendly workout tracker that helps users achieve their fitness goals.

### 📈 Data Visualization

- Utilizes <ins>**Nivo**</ins> to display data driven calendar heatmap and <ins>**Recharts**</ins> to display users' exercise progress over time

### 🔥 Firebase Integration 

- Incorporates <ins>**Firebase**</ins> for user authentication and for real-time data storage connected to frontend with <ins>**React Query**</ins> calls

### 🧾 Linting and Formatting 

- Follows coding style guide with <ins>**ESLint**</ins> and <ins>**Prettier**</ins>

### 🍞 Form Validations

- Makes use of <ins>**React Hook Form**</ins> for form handling and <ins>**React Toastif**</ins> for notifications

### 🎨 Styling

- Styled using <ins>**TailwindCSS**</ins> with <ins>**SCSS modules**</ins>

### ⏰ Date Formatting

- Manages dates with <ins>**Day.js**</ins>

### 🌟 Additional Utilities

- Includes <code>@aliases</code> for improved code navigation
- Utilizes various <code>utility</code> functions for easier development
- Features <code>Dark Mode</code> support
- Includes an <code>Auth Check</code> for protected pages
- Displays <code>loading indicators</code>loading indicators for data fetching

<code>Note:</code> You will need to set up Firebase and add your own Firebase configuration details in the .env file.

## Overview

This is an example of custom hook called <code>useRecords</code>  which uses <code>ReactQuery</code> to fetch all workout records from Firebase.

```ts
export const useRecords = () => {
	return useQuery('records', () => RecordsService.fetchAllRecords())
}
```

By abstracting the data fetching logic into a custom hook, we can reuse it across the app and keep our components lean and focused on their respective responsibilities.

```tsx
const DashboardPage: FC = () => {
	const { data: records, isFetched } = useRecords()

	const data = getRecordsData(records?.data)
	return (
		<Layout>
			<Statistics data={data} title='Информация о тренировках' />
			{isFetched ? <Calendar data={records} /> : <Loader centered />}
			<WorkoutPlan />
		</Layout>
	)
}
```

---

TThe <code>Heading</code> component is a reusable component that simplifies the process of creating headings in React application.

```tsx
	const Heading = size === 'leading' ? 'h1' : size === 'small' ? 'h3' : 'h2'
	return (
		<Heading
			className={classnames(styles.heading, className, {
				[styles.uppercase]: uppercase,
				[styles.centered]: centered,
				[styles.bold]: bold,
			})}
		>
			{children}
		</Heading>
	)
```

It uses a ternary operator to determine the size of the heading based on the <code>size prop</code> passed to it, and assigns the appropriate HTML heading element (h1, h2, or h3) to the Heading variable.

---

The <code>localeDate</code> function is a <code>utility function</code> that takes in a Date or a <code>Firestore Timestamp</code> object and returns a localized date string.

```ts
export const localeDate = (date: string | Timestamp): string => {
	if (typeof date === 'string') {
		return dayjs(date as string)
			.locale('ru')
			.format('D MMMM YYYY')
	}
	return dayjs(date?.toDate()).locale('ru').format('D MMMM YYYY')
}
```

This function can be used in various parts of the application where localized date strings are needed, such as in displaying workout records, user profiles, or calendar heatmaps.


---


## Wrapping Up

In summary, the fitness dashboard workout tracker is a full-stack web application developed using Vite, React, TypeScript, React Query, Firebase, and TailwindCSS. The project also includes various utilities such as aliases, custom hooks, auth check with secret .env file, and loader indications.

Hopefully, this fitness dashboard workout tracker provides a comprehensive solution for users to track their workout progress and visualize their data, making it easier to monitor their fitness goals.

<p align="center">
<img src='/src/assets/images/logo-vertical.svg' width='150'/>
</p>
