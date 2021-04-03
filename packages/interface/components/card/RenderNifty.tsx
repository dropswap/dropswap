import { Image, ImageProps } from '@chakra-ui/image';

// TODO: get typings from use.nifti.es
export function RenderNifty({ render, ...delegated }: ImageProps & { render: any }) {
  // TODO: render more than just images
  const renderData = render.type === 'image' ? render : render.fallback;

  if (!renderData) {
    return null;
  }

  // TODO: render picture element
  return (
    <Image
      {...delegated}
      src={renderData.src}
      alt={renderData.alt}
      objectFit="contain"
      objectPosition="center"
    />
  );
}
