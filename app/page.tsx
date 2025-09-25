import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Input } from "./_components/ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/BarberShopItem";

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
                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="./cabelo.svg"
                            alt="icone cabelo"
                            width={16}
                            height={16}
                        />
                        Cabelo
                    </Button>

                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="./barba.svg"
                            alt="icone barba"
                            width={16}
                            height={16}
                        />
                        Barva
                    </Button>

                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="./acabamento.svg"
                            alt="icone acabamento"
                            width={16}
                            height={16}
                        />
                        Acabamento
                    </Button>

                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="./acabamento.svg"
                            alt="icone acabamento"
                            width={16}
                            height={16}
                        />
                        Acabamento
                    </Button>

                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="./acabamento.svg"
                            alt="icone acabamento"
                            width={16}
                            height={16}
                        />
                        Acabamento
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

                <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                    Agendamentos
                </h2>

                <Card>
                    <CardContent className="flex justify-between p-0">
                        <div className="flex flex-col gap-2 py-5 pl-5">
                            <Badge className="w-fit rounded-full">
                                Confirmado
                            </Badge>
                            <h3 className="font-semibold">Corte de Cabelo</h3>

                            <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src="/avatar.png" />
                                </Avatar>
                                <p className="text-sm">Barbearia FSW</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                            <p className="text-sm">Setembro</p>
                            <p className="text-2xl">23</p>
                            <p className="text-sm">20:00 </p>
                        </div>
                    </CardContent>
                </Card>

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

            <footer>
                <Card className="rounded-none">
                    <CardContent className="px-5 py-6">
                        <p className="text-sm text-gray-400">
                            © 2023 Copyright{" "}
                            <span className="font-bold">FSW Barber</span>
                        </p>
                    </CardContent>
                </Card>
            </footer>
        </div>
    );
};

export default Home;
