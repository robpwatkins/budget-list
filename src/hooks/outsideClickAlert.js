import { useRef, useState, useEffect } from 'react';

export const useOutsideClickAlert = () => {
  const ref = useRef(null)
  const [outsideClicked, setOutsideClicked] = useState(false);

  const handleOutsideClick = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOutsideClicked(false);
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true)
    return () => {
      document.addEventListener('click', handleOutsideClick, true)
    }
  }, [ref])

  return { outsideClicked, setOutsideClicked, ref }
}