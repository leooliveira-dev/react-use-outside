import { MutableRefObject, useEffect } from 'react';

/**
 * `useOutside` is a hook that executes `action` when any element but `ref` and `exceptions` is clicked 
 * @param {MutableRefObject<any>} ref - The element whose outside should be detected
 * @param {() => void} action - The action that should be fired when click is detected outside of `ref`
 * @param {string[]} exceptions - IDs of the elements that won't trigger the outside detected
 */
const useOutside = (ref: MutableRefObject<any>, action: () => void, exceptions?: string[]) => {
    const exceptionsCheck = (element: Element) => {
        return exceptions.includes(element.id);
    }

    useEffect(()=>{
        function handleClickOutside(event){
            if (ref.current && !exceptionsCheck(event.target) && !ref.current.contains(event.target)){
                action();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[ref]);
}

export default useOutside;
