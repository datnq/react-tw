import { useContext } from 'react'
import { DraggableContext } from './DraggableRow'

const useDraggable = () => {
	return useContext(DraggableContext)
}
export default useDraggable
