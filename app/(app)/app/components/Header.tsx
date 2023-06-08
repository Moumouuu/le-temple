import Image from "next/image";

export default function Header() {
  return (
    <div className="hidden lg:block w-[100%] h-[10%] p-6 border-b-4 border-[#095234] relative">
      <div className="flex justify-center">
        <span className="text-xl">
          « Je ne perds jamais. Soit je gagne, soit j&apos;apprends. » - Nelson
          Mendela
        </span>
      </div>
      <Image
        className="z-20 rounded-2xl absolute top-12 left-[50%] -translate-x-[50%]"
        src="/assets/images/TempleLogo.png"
        width={100}
        height={100}
        alt="logo"
      />
    </div>
  );
}
