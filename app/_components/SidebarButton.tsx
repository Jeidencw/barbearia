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

const SidebarButton = () => {
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
                                    Conecte-se usando sua conta do Google.
                                </DialogDescription>
                            </DialogHeader>

                            <Button
                                variant="outline"
                                className="gap-1 font-bold"
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

                    {/* <Avatar>
                        <AvatarImage src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Avatar>

                    <div>
                        <p className="font-bold">Henrique de Camargo</p>
                        <p className="text-xs">henrique@email.com</p>
                    </div> */}
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
                    <Button variant="ghost" className="justify-start gap-2">
                        <LogOutIcon size={18} />
                        Sair da Conta
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SidebarButton;
