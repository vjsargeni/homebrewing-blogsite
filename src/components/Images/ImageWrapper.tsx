import { FC } from 'react'
import Image from 'next/image'

interface ImgWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  height: number
}

export const ImgWrapper: FC<ImgWrapperProps> = (props) => {
  const { src, alt, height, ...remainingDivProps } = props
  return (
    <div
      style={{ position: 'relative', width: '100%', height: `${height}px` }}
      {...remainingDivProps}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} preload />
    </div>
  )
}
