"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Result() {
  const searchParams = useSearchParams();
  const [c1, setC1] = useState('');
  const [c2, setC2] = useState('');
  const [c3, setC3] = useState('');

  useEffect(() => {
    const c1Param = searchParams.get('c1');
    const c2Param = searchParams.get('c2');
    const c3Param = searchParams.get('c3');
    if (c1Param) {
      setC1(c1Param);
    }
    if (c2Param) {
      setC2(c2Param);
    }
    if (c3Param) {
      setC3(c3Param);
    }
  }, [searchParams]);

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
      <div className="flex flex-col items-center z-20 px-4 md:px-0">
        <h1 className="text-4xl font-bold mb-8">Your Answers</h1>
        <p className="text-xl mb-4">Answer to Question 1: {c1}</p>
        <p className="text-xl mb-4">Answer to Question 2: {c2}</p>
        <p className="text-xl mb-4">Answer to Question 3: {c3}</p>
      </div>
    </div>
  );
}