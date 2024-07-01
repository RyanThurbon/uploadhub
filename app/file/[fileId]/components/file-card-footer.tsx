import Link from "next/link";

export default function FileCardFooter() {
  return (
    <p>
      This file is securely hosted by&nbsp;
      <Link href="/" className="hover:underline">
        Uploadhub
      </Link>
    </p>
  );
}
