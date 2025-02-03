import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

function EndingContent() {
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
      <div className="flex flex-col items-center z-20 w-full">
        <div className="flex flex-row items-center justify-center w-full space-x-0 sm:space-x-[-30px] min-w-0">
          <Image src="/male-character-3.png" alt="Male Character 3" width={200} height={350} className="object-cover w-[30%] sm:w-[200px] z-20" />
          <div className="relative flex flex-col items-center sm:space-y-2">
            <Image src="/play-again.png" alt="Play Again" width={500} height={500} className="object-cover w-[250%] sm:w-[300px] z-20" />
            <div className="flex flex-col">
              <Link href="/start">
                <button className="w-full max-w-xs transform transition duration-300 hover:scale-110 active:scale-90">
                  <Image src="/yes-ending-button.png" alt="Yes Ending Button" width={200} height={60} className="w-full h-auto object-cover sm:w-[250px] sm:h-[80px]" />
                </button>
              </Link>
              <Link href="/start">
                <button className="w-full max-w-xs transform transition duration-300 hover:scale-110 active:scale-90">
                  <Image src="/no-ending-button.png" alt="No Ending Button" width={200} height={60} className="w-full h-auto object-cover sm:w-[250px] sm:h-[80px]" />
                </button>
              </Link>
            </div>
          </div>
          <Image src="/Female-character-3.png" alt="Female Character 3" width={200} height={350} className="object-cover w-[30%] sm:w-[200px] z-20" />
        </div>
        <Image src="/stop-asking.png" alt="Stop Asking" width={100} height={60} className="w-auto h-auto mt-4" />
      </div>
    </div>
  );
}

export default function Ending() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EndingContent />
    </Suspense>
  );
}