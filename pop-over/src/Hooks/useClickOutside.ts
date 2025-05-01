import { RefObject, useEffect } from "react";


export function useClickOutSide<T extends HTMLElement>(ref: RefObject<T>, handler: (event: MouseEvent) => viod) {
    useEffect(() => {
        function listener(event: MouseEvent) {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        }

        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener("mousedown", listener)
        }

    }, [ref,handler])
}