import classnames from 'classnames'
import { FC } from 'react'
import { localeDate } from '@utils/convertDates'
import { IRecord, IRecordExercise } from '@interfaces/IRecord'
import styles from './BadgeRecord.module.scss'

interface IProps {
	record: IRecord
	handler: (value: IRecordExercise[]) => void
	active?: boolean
	setActive: (value: any) => void
}

const BadgeRecord: FC<IProps> = ({ record, handler, active, setActive }) => {
	return (
		<li
			className={classnames(styles.badgeRecord, {
				[styles.badgeActive]: active,
			})}
			key={record.id}
			onClick={() => {
				handler(record.exercises)
				setActive(record.id)
			}}
		>
			<b>{record.name}</b>
			<p className={styles.desc}>{localeDate(record.date)}</p>
		</li>
	)
}

export default BadgeRecord
