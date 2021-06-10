import { MutableRefObject, useEffect, useRef, useState } from 'react'

const useDragDrop = <T extends HTMLElement>(
  dropHandler: (dataTransfer: DataTransfer | null) => void
): {
  dragDropRef: MutableRefObject<T | null>
  dragging: boolean
} => {
  const dragDropRef: MutableRefObject<T | null> = useRef(null)
  const [dragging, setDragging] = useState<boolean>(false)

  useEffect(() => {
    const onDrop = (e: DragEvent): void => {
      e.preventDefault()
      e.stopPropagation()
      dropHandler(e.dataTransfer)
      e.dataTransfer && e.dataTransfer.clearData()
    }
    const onDragOver = (e: DragEvent): void => {
      e.preventDefault()
    }
    const onDragEnter = (e: DragEvent): void => {
      e.preventDefault()
      setDragging(true)
    }
    const onDragLeave = (e: DragEvent): void => {
      e.preventDefault()
      setDragging(false)
    }

    if (dragDropRef.current) {
      dragDropRef.current.addEventListener('dragenter', onDragEnter)
      dragDropRef.current.addEventListener('dragover', onDragOver)
      dragDropRef.current.addEventListener('dragleave', onDragLeave)
      dragDropRef.current.addEventListener('drop', onDrop)
    }

    return (): void => {
      if (dragDropRef.current) {
        dragDropRef.current.removeEventListener('dragenter', onDragEnter)
        dragDropRef.current.removeEventListener('dragover', onDragOver)
        dragDropRef.current.removeEventListener('dragleave', onDragLeave)
        dragDropRef.current.removeEventListener('drop', onDrop)
      }
    }
  }, [])

  return {
    dragDropRef,
    dragging
  }
}

export default useDragDrop
