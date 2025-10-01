"use client";

import { Button } from "../ui/button";
import {
    CalendarIcon,
    HomeIcon,
    LogInIcon,
    LogOutIcon,
    MenuIcon,
} from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";

import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";

const SidebarButton = () => {
    const { data } = useSession();

    const handleLoginWithGoogleButton = () => signIn("google");
    const handleLogoutButton = () => signOut();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
                    {data?.user ? (
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src={data?.user?.image ?? ""} />
                            </Avatar>

                            <div>
                                <p className="font-bold">{data.user.name}</p>
                                <p className="text-xs">{data.user.email}</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h2 className="font-bold">Olá, faça seu login!</h2>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="icon">
                                        <LogInIcon />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[90%] rounded-sm">
                                    <DialogHeader>
                                        <DialogTitle>
                                            Faça seu login na plataforma
                                        </DialogTitle>
                                        <DialogDescription>
                                            Conecte-se usando sua conta do
                                            Google.
                                        </DialogDescription>
                                    </DialogHeader>

                                    <Button
                                        variant="outline"
                                        className="gap-1 font-bold"
                                        onClick={handleLoginWithGoogleButton}
                                    >
                                        <Image
                                            src="/Google.svg"
                                            width={18}
                                            height={18}
                                            alt="fazer login com o google"
                                        />
                                        Google
                                    </Button>
                                </DialogContent>
                            </Dialog>
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-2 border-b border-solid py-4">
                    <SheetClose asChild>
                        <Button
                            className="justify-start gap-2"
                            asChild
                            variant="ghost"
                        >
                            <Link href="/">
                                <HomeIcon size={18} />
                                Início
                            </Link>
                        </Button>
                    </SheetClose>
                    <Button className="justify-start gap-2" variant="ghost">
                        <CalendarIcon size={18} />
                        Agendamentos
                    </Button>
                </div>

                <div className="flex flex-col gap-2 border-b border-solid py-4">
                    {quickSearchOptions.map((option) => (
                        <Button
                            key={option.title}
                            className="justify-start gap-2"
                            variant="ghost"
                        >
                            <Image
                                src={option.imageUrl}
                                height={18}
                                width={18}
                                alt={option.title}
                            />
                            {option.name}
                        </Button>
                    ))}
                </div>

                <div className="flex flex-col gap-2 border-b border-solid py-4">
                    <Button
                        variant="ghost"
                        className="justify-start gap-2"
                        onClick={handleLogoutButton}
                    >
                        <LogOutIcon size={18} />
                        Sair da Conta
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SidebarButton;
