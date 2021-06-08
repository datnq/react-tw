import { BsArrowsMove } from 'react-icons/bs'
import Table from '../../table/Table'
import useDraggable from './useDraggable'

const DraggableColumn = props => {
	const provided = useDraggable()
  console.log(provided)
	return (
		<Table.Column
			{...props}
			render={(value, { index }) => {
				return (
					<span
						className='d-inline-block align-self-center'
					>
						<BsArrowsMove
							size={36}
							className='pe-2 cursor-move align-self-center'
						/>
					</span>
				)
			}}
		/>
	)
}
export default DraggableColumn
