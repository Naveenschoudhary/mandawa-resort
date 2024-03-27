import Image from "next/image";

const AboutImageBlock = () => {
  return (
    <div className="grid my-8 container grid-cols-2 gap-8">
      <div className="flex flex-col">
        <Image
          src="https://dummyimage.com/600x400/"
          alt="Photo 1"
          width={600}
          height={400}
        />
        <Image
          src="https://dummyimage.com/600x400/"
          alt="Photo 3"
          width={600}
          height={400}
          className="mt-4"
        />
      </div>
      <div className="flex flex-col">
        <Image
          src="https://dummyimage.com/600x400/"
          alt="Photo 2"
          width={600}
          height={400}
        />
        <Image
          src="https://dummyimage.com/600x400/"
          alt="Photo 4"
          width={600}
          height={400}
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default AboutImageBlock;
