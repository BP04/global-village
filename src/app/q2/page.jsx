"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';

function Q2Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [c1, setC1] = useState('');
  
  useEffect(() => {
    const c1Param = searchParams.get('c1');
    if (c1Param) {
      setC1(c1Param);
    }
  }, [searchParams]);
  
  const handleChoice = (choice) => {
    router.push(`/q3?c1=${c1}&c2=${choice}`);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center" style={{ backgroundImage: "url('/game-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 z-10">
        <Image src="/cloud1.png" alt="Cloud 1" width={300} height={300} className="w-300 h-300 object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <Image src="/cloud2.png" alt="Cloud 2" width={300} height={300} className="w-300 h-300 object-cover" />
      </div>
      <div className="absolute top-0 right-[10%] transform translate-x-1/2 z-10">
        <Image src="/label.png" alt="Label" width={150} height={150} className="w-150 h-150 object-cover" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center z-20 px-4 md:px-0">
        <div className="flex flex-col space-y-2 md:-mr-40 md:mt-[200px] order-2 md:order-1 z-30">
          <button onClick={() => handleChoice('A')} className="w-[200px] md:w-[250px] transition duration-300 hover:scale-110 active:scale-90 z-30">
            <Image src="/Hot & Tropical.png" alt="Hot & Tropical" width={350} height={120} className="w-full h-auto object-cover" />
          </button>
          <button onClick={() => handleChoice('B')} className="w-[200px] md:w-[250px] transition duration-300 hover:scale-110 active:scale-90 z-30">
            <Image src="/Cold & Snowy.png" alt="Cold & Snowy" width={350} height={120} className="w-full h-auto object-cover" />
          </button>
          <button onClick={() => handleChoice('C')} className="w-[200px] md:w-[250px] transition duration-300 hover:scale-110 active:scale-90 z-30">
            <Image src="/Moderate.png" alt="Moderate" width={350} height={120} className="w-full h-auto object-cover" />
          </button>
        </div>
        <div className="order-1 md:order-2 mb-8 md:mb-0 z-20">
          <Image 
            src="/climate-query.png" 
            alt="Climate Query" 
            width={500} 
            height={500} 
            className="w-full max-w-[300px] md:max-w-[500px] h-auto object-cover" 
          />
        </div>
      </div>
    </div>
  );
}

export default function Q2() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Q2Content />
    </Suspense>
  );
}