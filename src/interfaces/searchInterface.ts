export type htmlInput = React.ChangeEvent<HTMLInputElement>
export type htmlSelect = React.ChangeEvent<HTMLSelectElement>

export interface searchInterface {
    onChange: (e: htmlInput) => void,
    value: string
}
