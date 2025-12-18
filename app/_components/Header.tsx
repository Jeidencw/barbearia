import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import SidebarButton from "./SidebarButton";
import Link from "next/link";

const Header = () => {
    return (
        <Card>
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Link href="/">
                    <Image src="/logo.png" height={18} width={120} alt="logo" />
                </Link>

                <SidebarButton />
            </CardContent>
        </Card>
    );
};

export default Header;
