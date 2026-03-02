import Image from "next/image";

export default function BlueBlobImage() {
  return (
    <div className="relative w-80 h-100 sm:w-100 sm:h-125 md:w-120 md:h-150">
      <Image
        src="/images/yo.png"
        alt="Cristian Sanchez"
        width={400}
        height={500}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
}
