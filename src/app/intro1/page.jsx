import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

function Introduction1Content() {
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
      <div className="flex flex-col items-center z-20">
        <div className="flex z-20 items-end justify-center w-full flex-wrap sm:flex-nowrap space-x-[-100px] sm:space-x-[-150px]">
          <Image src="/female-character-2.png" alt="Female Character 2" width={200} height={350} className="object-cover w-[30%] sm:w-[200px]" />
          <Image src="/gendhis-intro.png" alt="Gendhis Intro" width={400} height={400} className="object-cover w-[60%] sm:w-[400px] mb-[150px]" />
          <Image src="/male-character-2.png" alt="Male Character 2" width={200} height={350} className="object-cover w-[30%] sm:w-[200px]" />
        </div>

        <Link href="/intro2">
          <button className="w-full max-w-xs transform transition duration-300 hover:scale-110 active:scale-90 z-20">
            <Image src="/next-button.png" alt="Next Button" width={250} height={80} className="w-full h-auto object-cover" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function Introduction1() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Introduction1Content />
    </Suspense>
  );
}