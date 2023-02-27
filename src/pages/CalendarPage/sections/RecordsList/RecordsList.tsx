import { FC, useEffect, useState } from 'react'
import BadgeRecord from '@components/BadgeRecord/BadgeRecord'
import CardRecord from '@components/CardRecord/CardRecord'
import Message from '@components/Message/Message'
import { Heading, Loader } from '@components/UI'
import { IRecordExercise } from '@interfaces/IRecord'
import { useRecords } from '@hooks/useRecords'
import styles from './RecordsList.module.scss'

const RecordsList: FC = () => {
	const { data: records, isFetched } = useRecords()
	const [list, setList] = useState<IRecordExercise[]>()
	const [activeId, setActiveId] = useState('')

	useEffect(() => {
		isFetched && setActiveId(records?.data[0].id as string)
	}, [records])

	return (
		<>
			{isFetched ? (
				<section className={styles.recordsList}>
					<ul className={styles.list}>
						{records?.data.map(record => (
							<BadgeRecord
								active={activeId == record.id}
								key={record.id}
								record={record}
								handler={setList}
								setActive={setActiveId}
							/>
						))}
					</ul>
					<Heading size='small' uppercase>
						Проведенные упражнения
					</Heading>
					<div className={styles.view}>
						{list ? (
							list.map((item, index) => (
								<CardRecord order={index + 1} key={item.id} item={item} />
							))
						) : (
							<Message message='Для кардио статистика не ведется' />
						)}
					</div>
				</section>
			) : (
				<Loader centered />
			)}
		</>
	)
}

export default RecordsList
