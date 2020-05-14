import { useRef, useState, useEffect } from 'react';

const useClickOutside = () => {
  const ref = useRef(null)
  const [focused, setFocused] = useState(false)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setFocused(false);
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.addEventListener('click', handleClickOutside, true)
    }
  }, [ref])

  return { focused, setFocused, ref }
}
