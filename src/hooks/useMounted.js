// create mount to prevent memory leak preventing unmounted component

import { useRef, useEffect } from 'react';

export default function useMounted() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
}
