import Header from "./_components/Header";
import { Button } from "./ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/BarberShopItem";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/BookingItem";
import Search from "./_components/Search";
import Link from "next/link";

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

                <div className="mt-6">
                    <Search />
                </div>

                <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                    {quickSearchOptions.map((option) => (
                        <Button
                            className="gap-2"
                            variant="secondary"
                            key={option.title}
                            asChild
                        >
                            <Link href={`/barbershops?search=${option.name}`}>
                                <Image
                                    alt={option.title}
                                    src={option.imageUrl}
                                    width={16}
                                    height={16}
                                />
                                {option.name}
                            </Link>
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
