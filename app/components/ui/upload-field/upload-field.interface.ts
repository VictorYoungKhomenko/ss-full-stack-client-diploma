import { ReactElement } from 'react'

export interface IUploadFields {
	onChange: (...event: any) => void
	folder?: string
	Button: ReactElement
}
