import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  crumb: string;
  text?: string;
  image: string;
  alt: string;
  position?: string;
};

export default function PageBanner({ title, crumb, text, image, alt, position }: Props) {
  return (
    <section className="page-banner">
      <div className="ph">
        <Image src={image} alt={alt} fill preload sizes="100vw" style={{ objectPosition: position }} />
      </div>
      <div className="container">
        <div className="breadcrumb"><Link href="/">Home</Link> / {crumb}</div>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
