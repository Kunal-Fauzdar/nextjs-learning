import { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        absolute: "Docs",
    }
};
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    if (slug?.length === 1) {
        return (
            <div>
                <h1>Docs Page</h1>
                <p>Slug: {slug[0]}</p>
            </div>
        );
    }
    if (slug?.length === 2) {
        return (
            <div>
                <h1>Docs Section Page</h1>
                <p>Feature: {slug[0]}</p>
                <p>Review: {slug[1]}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Docs Page</h1>
        </div>
    )
}