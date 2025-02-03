import Image from "next/image";
import Link from "next/link";

export default function Start() {
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
      <div className="flex flex-col md:flex-row items-center justify-center z-20 px-4 md:px-0">
        <Link href="/q1" className="w-[200px] md:w-[350px] order-2 md:order-1 transform md:translate-y-[80px] md:-mr-40 mt-4 md:mt-0">
          <button className="w-full transition duration-300 hover:scale-110 active:scale-90">
            <Image src="/yes-button.png" alt="Yes Button" width={350} height={120} className="w-[80%] h-auto object-cover" />
          </button>
        </Link>
        <Image 
          src="/recommendation-query.png" 
          alt="Recommendation Query" 
          width={500} 
          height={500} 
          className="w-full max-w-[300px] md:max-w-[500px] h-auto object-cover order-1 md:order-2" 
        />
      </div>
    </div>
  );
}