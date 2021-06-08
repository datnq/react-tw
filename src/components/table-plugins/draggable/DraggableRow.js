import { createContext } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import useTable from '../../table/useTable'

export const DraggableContext = createContext()

const DraggableRow = ({ rowdata, rowindex, ...rest }) => {
	const {
		options: { rowKey },
	} = useTable()
	return (
		<Draggable draggableId={rowdata[rowKey]} index={rowindex}>
			{provided => {
				return (
					<DraggableContext.Provider value={provided}>
						<tr
							ref={provided.innerRef}
							{...provided.draggableProps}
              {...provided.dragHandleProps}
							{...rest}
						/>
					</DraggableContext.Provider>
				)
			}}
		</Draggable>
	)
}
export default DraggableRow
