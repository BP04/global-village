"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400"] });

function CampaignContent() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = () => {
      router.push("/ending");
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  return (
    <div className="relative flex min-h-screen items-center justify-center" style={{ backgroundImage: "url('/game-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 z-10">
        <Image src="/cloud1.png" alt="Cloud 1" width={300} height={300} className="w-300 h-300 object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <Image src="/cloud2.png" alt="Cloud 2" width={300} height={300} className="w-300 h-300 object-cover" />
      </div>
      <div className="absolute top-0 right-[20%] transform translate-x-1/2 z-10">
        <Image src="/label.png" alt="Label" width={150} height={150} className="w-150 h-150 object-cover" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-end justify-center w-full flex-wrap sm:flex-nowrap space-x-[-60px] sm:space-x-[-60px]">
          <Image src="/male-character-1.png" alt="Male Character 2" width={200} height={350} className="object-cover w-[30%] sm:w-[200px] z-30" />
          <div className="relative w-[60%] sm:w-[350px] mb-[80px] sm:mb-[120px] z-20">
            <Image src="/campaign.png" alt="Campaign" width={350} height={350} className="object-cover w-full" />
            <Image src="/fan.png" alt="Fan" width={800} height={800} className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[200%] sm:w-[600px] z-30" />
          </div>
          <Image src="/female-character-1.png" alt="Female Character 2" width={200} height={350} className="object-cover w-[30%] sm:w-[200px] z-30" />
        </div>
        <Image src="/stop-asking.png" alt="Stop Asking" width={100} height={60} className="w-auto h-auto"/>
        <p className={`${robotoMono.className} mt-10 z-20 text-white text-lg sm:text-xl animate-fadeInOut`}>
          <span className="block sm:hidden">Tap anywhere to continue</span>
          <span className="hidden sm:block">Click anywhere to continue</span>
        </p>
      </div>
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default function Campaign() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CampaignContent />
    </Suspense>
  );
}