import Image from 'next/image';

const fallbackSrc = process.env.NEXT_PUBLIC_PLACEHOLDER_IMAGE_URL

const CustomImage = ({ src, alt, width, height, ...props }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={src}
            {...props}
        />
    );
};

export default CustomImage;
