import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <Image src="/global-village.png" alt="Global Village" width={160} height={160} className="w-80 h-40 object-cover" />
        
        <div className="flex z-20">
          <Image src="/male-character-1.png" alt="Male Character 1" width={90} height={160} className="w-45 h-60 object-cover" />
          <Image src="/female-character-1.png" alt="Female Character 1" width={90} height={160} className="w-45 h-60 object-cover" />
        </div>

        <Link href="/intro1">
          <button className="w-full max-w-xs transform transition duration-300 hover:scale-110 active:scale-90 z-20 mb-10 sm:mb-4">
            <Image src="/start-button.png" alt="Start Button" width={300} height={160} className="w-full h-auto object-cover" />
          </button>
        </Link>
        <Image src="/stop-asking.png" alt="Stop Asking" width={100} height={60} className="w-auto h-auto"/>
      </div>
    </div>
  );
}
