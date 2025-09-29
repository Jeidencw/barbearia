import Image from "next/image";
import { BarberShop } from "../generated/prisma";
import { Card, CardContent } from "./ui/card";
import { Button } from "../ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarberShopItemProps {
    barberShop: BarberShop;
}

const BarberShopItem = ({ barberShop }: BarberShopItemProps) => {
    return (
        <Card className="min-w-[159px] rounded-2xl">
            <CardContent className="p-1">
                <div className="relative h-[167px] w-full">
                    <Image
                        alt={barberShop.name}
                        fill
                        className="rounded-2xl object-cover"
                        src={barberShop.imageUrl}
                    />

                    <Badge
                        className="absolute left-2 top-2 gap-1"
                        variant="secondary"
                    >
                        <StarIcon
                            size={12}
                            className="fill-primary text-primary"
                        />
                        <p className="text-xs font-semibold">5,0</p>
                    </Badge>
                </div>

                <div className="px-2 py-3">
                    <h3 className="truncate font-semibold">
                        {barberShop.name}
                    </h3>
                    <p className="truncate text-sm text-gray-400">
                        {barberShop.address}
                    </p>
                    <Button variant="secondary" className="mt-3 w-full" asChild>
                        <Link href={`/barbershops/${barberShop.id}`}>
                            Reservar
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BarberShopItem;
