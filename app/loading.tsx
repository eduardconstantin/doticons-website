import Image from 'next/image';

export default function Loading() {
  return (
    <div className="loading">
      <Image
        draggable="false"
        width={200}
        height={70}
        src="/DotIcons.svg"
        alt="Doticons Logo"
      />
    </div>
  );
}
