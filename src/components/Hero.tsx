import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero z-[2] h-full flex items-center text-white">
        <div className="relative h-full flex flex-col gap-4 lg:mt-60 lg:ml-60 lg:text-start md:text-center sm:text-center lg:justify-start md:justify-center sm:justify-center justify-center  text-center">
            <div className="z-[4]">
            <div className="uppercase text-xs font-semibold">summer 2020</div>
            <div className="uppercase font-bold text-5xl tracking-wide">
                <h1>NEW COLLECTION</h1>
            </div>
            <div className="font-xs opacity-80 lg:mt-8 ">
                <p>
                We know how large objects will act, <br/>
                but things on a small scale.
                </p>
            </div>
            </div>
            <button className="uppercase lg:mx-0 sm:mx-auto md:mx-auto mx-auto bg-[#2DC071] inline py-2 px-4 w-40 font-bold">
                shop now
            </button>
            <span>
                <Image className="absolute z-[3] bottom-0 -right-[7.3rem] " src={'/hero-1.jpg'} width={2000} height={2000} alt=""></Image> 
            </span>
        </div>
    </div>
  )
}

export default Hero