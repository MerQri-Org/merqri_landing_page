import React from 'react'
import { ToastContextProvider } from "../components/ui/toast-context";
import SupportForm from '../components/SupportForm'


const Support = () => {
    return (
        <div>
            <ToastContextProvider>
                <SupportForm />
            </ToastContextProvider>
        </div>
    )
}

export default Support