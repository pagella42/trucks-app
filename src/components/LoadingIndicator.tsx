import Image from "next/image";

export default function LoadingIndicator() {
 
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white h-screen flex justify-center items-center">
      <Image
        src="https://cdn.dribbble.com/users/24711/screenshots/2713076/media/76204c5ef52d6b48f128d87d509d2d5b.gif"
        alt="loading"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
