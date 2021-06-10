import React, {
  ChangeEventHandler,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from 'react'
import { FilePickerProps } from './types'
import { useFirstMount } from '../../hooks'
import { renderNodeOrFunction } from '../../utils'
import useDragDrop from '../../hooks/useDragDrop'

const clearFileInput = (el: HTMLInputElement): void => {
  try {
    el.value = ''
  } catch (_) {}

  if (el.value) {
    el.parentNode && el.parentNode.replaceChild(el.cloneNode(true), el)
  }
}

const FilePicker: FC<FilePickerProps> = ({
  children,
  onChange,
  className,
  multiple,
  ...props
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [error, setError] = useState<Error>()
  const isFirstMount = useFirstMount()
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const replacingRef = useRef<number>()

  const addFiles = (files: File[]): void => {
    if (multiple) {
      setSelectedFiles([...selectedFiles, ...files])
    } else if (files.length === 1) {
      setSelectedFiles(files)
    } else {
      setError(new Error('Only allow to drop single file'))
    }
  }

  const replaceFile = (files: File[], index: number): void => {
    if (files.length !== 1) {
      setError(new Error('Only allow to upload single file'))
    } else if (index >= selectedFiles.length) {
      setError(new Error('Invalid file index'))
    } else {
      setSelectedFiles(
        Object.assign([], selectedFiles, {
          [index]: files[0]
        })
      )
    }
  }

  const { dragDropRef, dragging } = useDragDrop((dataTransfer) => {
    const selected = dataTransfer?.files ? Array.from(dataTransfer.files) : []
    addFiles(selected)
  })

  const change: ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { files } = e.target
    const selected = files !== null ? Array.from(files) : []
    clearFileInput(e.target)
    console.log(selected)

    if (replacingRef.current === undefined) {
      addFiles(selected)
    } else {
      replaceFile(selected, replacingRef.current)
    }
  }

  const clear = (): void => {
    setSelectedFiles([])
  }
  const remove = (index: number): void => {
    if (selectedFiles.length === 0 || selectedFiles.length >= index) return
    setSelectedFiles(selectedFiles.splice(index, 1))
  }
  const add = (): void => {
    inputRef.current && inputRef.current.click()
  }
  const replace = (index?: number): void => {
    replacingRef.current = index || 0
    add()
  }

  useEffect(() => {
    if (isFirstMount) {
      onChange && onChange(selectedFiles)
    }
  }, [])

  return (
    <div className={className}>
      {renderNodeOrFunction(children, {
        files: selectedFiles,
        handlers: { clear, remove, add, replace },
        dragDropRef,
        dragging,
        error
      })}
      <input
        multiple={multiple}
        type='file'
        className='hidden'
        onChange={change}
        ref={inputRef}
        {...props}
      />
    </div>
  )
}

export default FilePicker
