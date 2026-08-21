import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ featureId: string, reviewId: string }> }) {
  const { featureId, reviewId } = await params;
  if (parseInt(reviewId, 10) >= 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Review Page</h1>
      <p>Feature ID: {featureId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
}