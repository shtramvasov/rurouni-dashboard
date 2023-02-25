import { FC } from 'react'
import CardStat from '@components/CardStat/CardStat'
import { ICardStat } from '@interfaces/ICardStat'
import styles from './Statistics.module.scss'

const Statistics: FC<ICardStat> = ({ data }) => {
	return (
		<section className={styles.statistics}>
			{data.map(item => (
				<CardStat
					key={item.title}
					image={item.image}
					title={item.title}
					value={item.value}
				/>
			))}
		</section>
	)
}

export default Statistics
