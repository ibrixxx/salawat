import {ReactNode} from "react";
import './global.css'

const RootLayout = ({children}: {children: ReactNode}) => {
    return (
        <html>
            <head></head>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
