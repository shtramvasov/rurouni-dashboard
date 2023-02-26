import { FC } from 'react'
import { Heading, Input } from '@components/UI'
import styles from './Search.module.scss'

interface IProps {
	title?: string
	search: (value: string) => void
}

const Search: FC<IProps> = ({ search, title }) => {
	return (
		<div className={styles.search}>
			{title && (
				<Heading size='small' uppercase>
					{title}
				</Heading>
			)}
			<Input
				onChange={e => search(e.target.value)}
				secondary
				responsive
				placeholder='Искать упражнение ...'
			/>
		</div>
	)
}

export default Search
