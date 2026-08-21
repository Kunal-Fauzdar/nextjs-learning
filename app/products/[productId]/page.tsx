"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Page() {
    const { productId } = useParams();
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || 'name';
    const order = searchParams.get('order') || 'asc';
    const router = useRouter();
    const handleClick = () => {
        router.replace("/");
    }
    return (
        <>
            <h1>Product Page</h1>
            <p>Product ID: {productId}</p>
            <p>Sort: {sort}</p>
            <p>Order: {order}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleClick}>Explore More</button>
        </>
    )
}