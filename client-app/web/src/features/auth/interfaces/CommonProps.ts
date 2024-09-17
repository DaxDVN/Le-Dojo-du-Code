export interface CommonProps {
    text?: string,
    name?: string,
    value?: string,
    onSetValue?: () => void
}

export interface GenderCheckBoxProps {
    gender: string,
    value: string
}
