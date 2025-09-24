import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Input } from "./_components/ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const Home = () => {
    return (
        <div className="">
            <Header />
            <div className="p-5">
                <h2 className="text-xl font-bold">Olá, Henrique</h2>
                <p>Segunda-feira, 23 de Setembro</p>

                <div className="mt-6 flex items-center gap-2">
                    <Input placeholder="Faça sua busca..." />
                    <Button>
                        <SearchIcon />
                    </Button>
                </div>

                <div className="relative mt-6 h-[150px] w-full">
                    <Image
                        src="/banner-01.png"
                        fill
                        className="rounded-xl object-cover"
                        alt="agende com os melhores com fsw barber"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
