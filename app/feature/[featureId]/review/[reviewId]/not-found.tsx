'use client';
import { usePathname } from "next/navigation";
export default function NotFoundReview() {
  const pathname = usePathname();
  const featureId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
    <div>
      <h1>Review Not Found</h1>
      <p>The review you are looking for does not exist.</p>
      {featureId && reviewId && (
        <div>
          <p>Feature ID: {featureId}</p>
          <p>Review ID: {reviewId}</p>
        </div>
      )}
    </div>
  );
}