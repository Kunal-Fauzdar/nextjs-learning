import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-2 items-start">
      Home Page
      <Link href="/docs">Docs</Link>
      <Link href="/feature/1">Feature 1</Link>
      <Link href="/feature/1/review/1">Feature 1 Review 1</Link>
    </div>
  );
}