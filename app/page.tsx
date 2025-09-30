import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Input } from "./_components/ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/BarberShopItem";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/BookingItem";

const Home = async () => {
    const barberShops = await db.barberShop.findMany({});
    const popularBarberShops = await db.barberShop.findMany({
        orderBy: {
            name: "desc",
        },
    });

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

                <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                    {quickSearchOptions.map((option) => (
                        <Button
                            className="gap-2"
                            variant="secondary"
                            key={option.title}
                        >
                            <Image
                                src={option.imageUrl}
                                alt={option.title}
                                width={16}
                                height={16}
                            />
                            Cabelo
                        </Button>
                    ))}
                </div>

                <div className="relative mt-6 h-[150px] w-full">
                    <Image
                        src="/banner-01.png"
                        fill
                        className="rounded-xl object-cover"
                        alt="agende com os melhores com fsw barber"
                    />
                </div>

                <BookingItem />

                <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                    Recomendados
                </h2>

                <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
                    {barberShops.map((barberShop) => (
                        <BarberShopItem
                            key={barberShop.id}
                            barberShop={barberShop}
                        />
                    ))}
                </div>

                <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                    Populares
                </h2>

                <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
                    {popularBarberShops.map((popularBarberShop) => (
                        <BarberShopItem
                            key={popularBarberShop.id}
                            barberShop={popularBarberShop}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
