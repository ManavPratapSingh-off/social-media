import { ModalProvider } from "./ModalContext.jsx"

export const AppProvider = ({children}) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}