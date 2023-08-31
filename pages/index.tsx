import MyAvatar from "@/components/ui/MyAvatar";
import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";
import Lesgo from "@/components/ui/Lesgo";
import { GiPirateFlag } from "react-icons/gi";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-slate-200">
        <div className=" flex  items-center justify-between p-6 lg:px-8">
          <div className="flex flex-row gap-20 items-center justify-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <GiPirateFlag className="text-4xl"></GiPirateFlag>
              <div className="font-bold text-2xl text-black">
                Anime Toy Store
              </div>
            </div>

            <NavigationMenuDemo></NavigationMenuDemo>
          </div>

          <div className="flex flex-row justify-center items-center gap-4 ">
            <div className="bg-white rounded-xl">
              <Lesgo>Login</Lesgo>
            </div>

            <MyAvatar></MyAvatar>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-10">
        {session ? (
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Welcome, {session?.user?.name}
          </h2>
        ) : null}
      </div>
    </div>
  );
}
