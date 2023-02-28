import React from 'react'
import NextImage from 'next/image'
import { Property } from 'csstype'
import ObjectFit = Property.ObjectFit

type PropType = {
    src: string
    alt: string
    objectFit?: ObjectFit
    className?: string
}

const Image = ({ className, src, alt, objectFit = 'cover' }: PropType) => {
    return (
        <>
            <div className={`relative ${className}`}>
                <NextImage
                    src={src}
                    alt={alt}
                    fill
                    priority
                    style={{ objectFit: objectFit }}
                />
            </div>
        </>
    )
}

export default Image
