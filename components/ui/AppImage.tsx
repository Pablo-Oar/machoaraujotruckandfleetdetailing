import NextImage, { ImageProps } from "next/image"

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function AppImage({ src, ...props }: ImageProps) {
  const prefixed = typeof src === "string" ? `${BASE}${src}` : src
  return <NextImage src={prefixed} {...props} />
}
