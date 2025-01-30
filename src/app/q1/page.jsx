"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Q1() {
  const router = useRouter();

  const handleChoice = (choice) => {
    router.push(`/q2?c1=${choice}`);
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
        <Image 
          src="/food-query.png" 
          alt="Food Query" 
          width={500} 
          height={500} 
          className="w-full max-w-[300px] md:max-w-[500px] h-auto object-cover mb-8 md:mb-0" 
        />
        <div className="flex flex-col space-y-1 md:-ml-40 transform md:translate-y-[120px]">
          <button onClick={() => handleChoice('A')} className="w-[200px] md:w-[250px] transition duration-300 hover:scale-110 active:scale-90">
            <Image src="/Sweet.png" alt="Sweet" width={350} height={120} className="w-full h-auto object-cover" />
          </button>
          <button onClick={() => handleChoice('B')} className="w-[200px] md:w-[250px] transition duration-300 hover:scale-110 active:scale-90">
            <Image src="/Savoury.png" alt="Savoury" width={350} height={120} className="w-full h-auto object-cover" />
          </button>
          <button onClick={() => handleChoice('C')} className="w-[200px] md:w-[250px] transition duration-300 hover:scale-110 active:scale-90">
            <Image src="/Strong taste.png" alt="Strong Taste" width={350} height={120} className="w-full h-auto object-cover" />
          </button>
        </div>
      </div>
    </div>
  );
}