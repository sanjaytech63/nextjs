import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 border-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute h-12 w-12 border-4 border-t-transparent border-b-transparent border-blue-300 rounded-full animate-spin-slow"></div>
        <div className="relative h-8 w-8 bg-blue-500 rounded-full"></div>
        <div className="absolute text-lg text-white font-semibold">Loading...</div>
      </div>

      <style jsx>{`
        /* Custom animation for slower spin */
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
    </>
  );
}
