import { useState } from "react"

export const useToggle = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    /* const open = () => {
        if(!isOpen)setIsOpen(true);
    }

    const close = () => {
        if(isOpen)setIsOpen(false);
    } */

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return {
        isOpen,
        toggle
    }
}