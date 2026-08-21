"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ReviewLayout({ children }: { children: React.ReactNode}) {
    const pathname = usePathname();
    const navlinks = [
        { href: "/login", label: "Login" },
        { href: "/register", label: "Register" },
        { href: "/forgot-password", label: "Forgot Password" },
    ];
    return (
        <div>
            <header>
                <ul>
                    {
                        navlinks.map((navlink)=>{ 
                            const isActive = pathname === navlink.href;
                            return(<li key={navlink.label}><Link 
                                className={isActive ? "text-blue-500" : "text-yellow-500"}
                                href={navlink.href}
                                >{navlink.label}
                                </Link></li>)
                        })
                    }
                </ul>
                <input type="text" ref = {input}/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}