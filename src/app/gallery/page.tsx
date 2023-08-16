import Image from "next/image";
import Platypus from "@/../public/platypus.webp";

export default function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <Image src={Platypus} alt="Platypus" placeholder="blur" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi excepturi ab voluptates nemo accusantium.</p>
      <Image src="/jellyfish.jpg" alt="jellyfish" width={400} height={225} />

      {/* <Image
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.noaa.gov%2Fstories%2Ffact-vs-fiction-3-things-you-thought-you-knew-about-jellyfish&psig=AOvVaw33acChzygwVLUUR0XhQ7fx&ust=1692265195649000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPi30p7x4IADFQAAAAAdAAAAABAE"
        alt="jellyfish"
        width={400}
        height={400}
      /> */}
    </div>
  );
}
