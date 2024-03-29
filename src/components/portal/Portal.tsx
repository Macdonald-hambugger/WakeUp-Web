import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type TProps = {
  children: React.ReactNode;
  id?: string;
};

const Portal: React.FC<TProps> = ({ children, id }) => {
  const portalElement = useRef(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const randomId = `portal_${Math.random().toString(36).substring(2, 11)}`;
      const elementId = id ?? randomId;
      portalElement.current = document.createElement('div');
      portalElement.current.id = elementId;
      document.body.appendChild(portalElement.current);
      setMount(true);
    }

    return () => {
      portalElement.current.parentElement.removeChild(portalElement.current);
      setMount(false);
    };
  }, [id]);

  return mount ? createPortal(children, portalElement.current) : null;
};

export default Portal;
