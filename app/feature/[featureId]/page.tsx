import { Metadata } from "next";
import Link from "next/link";
export const generateMetadata = async (props: { params: Promise<{ featureId: string }> }): Promise<Metadata> => {
  const { featureId } = await props.params;
  return {
    title: `Feature Page - ${featureId}`,
  }
}
export default async function Page({ params }: { params: Promise<{ featureId: string }> }) {
  const { featureId } = await params;
  return (
    <div>
      <h1>Feature Page</h1>
      <p>Feature ID: {featureId}</p>
      <Link href="/">Home</Link>
    </div>
  );
};