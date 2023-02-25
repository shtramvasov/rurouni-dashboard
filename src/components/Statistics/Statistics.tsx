import { FC } from 'react'
import CardStat from '@components/CardStat/CardStat'
import { Heading } from '@components/UI'
import { ICardStat } from '@interfaces/ICardStat'
import styles from './Statistics.module.scss'

interface IProps extends ICardStat {
	title?: string
}

const Statistics: FC<IProps> = ({ data, title }) => {
	return (
		<section className={styles.wrapper}>
			{title && (
				<Heading className='text-black-light' size='small' uppercase>
					{title}
				</Heading>
			)}
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
		</section>
	)
}

export default Statistics
