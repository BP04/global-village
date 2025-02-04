"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Link from "next/link";

function ResultContent() {
  const searchParams = useSearchParams();
  const [c1, setC1] = useState('');
  const [c2, setC2] = useState('');
  const [c3, setC3] = useState('');
  const [resultImage, setResultImage] = useState('');

  const imageMapper = {
    'A-A-A': '/japan-thailand.png',
    'A-A-B': '/southkorea-singapore.png',
    'A-A-C': '/indonesia-malaysia.png',
    'A-B-A': '/italy-greece.png',
    'A-B-B': '/canada-usa.png',
    'A-B-C': '/switzerland-iceland.png',
    'A-C-A': '/mexico-peru.png',
    'A-C-B': '/france-usa.png',
    'A-C-C': '/canada-newzealand.png',
    'B-A-A': '/japan-thailand.png',
    'B-A-B': '/southkorea-singapore.png',
    'B-A-C': '/indonesia-malaysia.png',
    'B-B-A': '/italy-greece.png',
    'B-B-B': '/canada-usa.png',
    'B-B-C': '/switzerland-iceland.png',
    'B-C-A': '/mexico-peru.png',
    'B-C-B': '/france-usa.png',
    'B-C-C': '/canada-newzealand.png',
    'C-A-A': '/japan-thailand.png',
    'C-A-B': '/southkorea-singapore.png',
    'C-A-C': '/indonesia-malaysia.png',
    'C-B-A': '/italy-greece.png',
    'C-B-B': '/canada-usa.png',
    'C-B-C': '/switzerland-iceland.png',
    'C-C-A': '/mexico-peru.png',
    'C-C-B': '/france-usa.png',
    'C-C-C': '/canada-newzealand.png',
  };

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
    if (c1Param && c2Param && c3Param) {
      const key = `${c1Param}-${c2Param}-${c3Param}`;
      setResultImage(imageMapper[key]);
    }
  }, [searchParams]);

  return (
    <div className="relative flex min-h-screen items-center justify-center" style={{ backgroundImage: "url('/game-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 z-10">
        <Image src="/cloud1.png" alt="Cloud 1" width={300} height={300} className="w-[300px] h-[300px] object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <Image src="/cloud2.png" alt="Cloud 2" width={300} height={300} className="w-[300px] h-[300px] object-cover" />
      </div>
      <div className="absolute top-0 right-[20%] transform translate-x-1/2 z-10">
        <Image src="/label.png" alt="Label" width={150} height={150} className="w-[150px] h-[150px] object-cover" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center z-20 px-4 md:px-0">
        <div className="order-2 mb-4 -mt-10 md:mt-0 md:mb-0 md:-ml-20">
          <Image src="/recommended.png" alt="Recommended" width={450} height={200} className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col items-center order-1 z-20 px-4 md:px-0">
          {resultImage && (
            <div className="mt-[100px] md:mt-8">
              <Image src={resultImage} alt="Result Image" width={500} height={400} className="w-[80%] h-auto object-cover md:w-full" />
            </div>
          )}
          <Link href="/campaign">
            <button className="mt-4 w-full max-w-xs transform transition duration-300 hover:scale-110 active:scale-90">
              <Image src="/next-button.png" alt="Next Button" width={250} height={80} className="w-full h-auto object-cover" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}