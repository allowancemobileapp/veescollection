import type { SVGProps } from 'react';

export function BoxerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m10 14 4-4" />
      <path d="M14 14 10 10" />
      <path d="M18.15 14.11a6.1 6.1 0 1 0-8.3 8.3" />
      <path d="M12 22a5.87 5.87 0 0 0 5.87-5.87" />
      <path d="M12 2a5.87 5.87 0 0 1 5.87 5.87" />
      <path d="M2 12a5.87 5.87 0 0 0 5.87 5.87" />
      <path d="M22 12a5.87 5.87 0 0 1-5.87-5.87" />
    </svg>
  );
}

export function TwoPieceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 5h12a.5.5 0 0 1 .5.5v1.45a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 0-.5.5V10h-1a.5.5 0 0 0-.5.5V11h-2v-.5a.5.5 0 0 0-.5-.5h-1V7.45a.5.5 0 0 1-.5-.5H6a.5.5 0 0 1-.5-.5V5.5Z" />
      <path d="M5 13h14" />
      <path d="M5 14v5.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V14" />
      <path d="M16 14v5.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V14" />
    </svg>
  );
}
