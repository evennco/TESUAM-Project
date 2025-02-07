import React, { useState, useEffect } from 'react';
import phrases from '@/assets/locales/es.json';

const Frases: React.FC = () => {
    const [fraseActual, setFraseActual] = useState<number>(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setFraseActual((prev) => (prev + 1) % phrases.phrasesbanner.length);
      }, 4900);
  
      return () => clearInterval(intervalId);
    }, [phrases.phrasesbanner]);
    return (
    <p className='animate-fade text-center text-foundationcoloryellow1 font-medium'>
      {phrases.phrasesbanner[fraseActual].text}
    </p>
)};
export default Frases;
