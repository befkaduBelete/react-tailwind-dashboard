import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="bg-gray-100 h-screen flex">
      {/* LEFT BAR */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  bg-white border-r border-gray-100">
        <Link href="/" className="flex justify-start p-1 gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold"> MK SCH</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT BAR */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-x-auto ">

        <Navbar />
        <div className="mt-10">
          {children}
        </div>

      </div>
    </div>

  );
}
