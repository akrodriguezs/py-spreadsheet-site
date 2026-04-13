import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// =========================
// HEADING
// =========================

const headingVariants = cva(
    "tracking-tight",
    {
        variants: {
            size: {
                h1: "text-5xl lg:text-6xl",
                h2: "text-4xl lg:text-5xl",
                h3: "text-3xl lg:text-4xl",
                h4: "text-2xl lg:text-3xl",
                h5: "text-xl lg:text-2xl",
                h6: "text-lg lg:text-xl",
            },
            weight: {
                light: "font-light",
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
                extrabold: "font-extrabold",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            },
            tone: {
                default: "text-gray-900",
                muted: "text-gray-500",
            },
        },
        defaultVariants: {
            size: "h2",
            weight: "semibold",
            align: "left",
            tone: "default",
        },
    }
)

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof headingVariants> & {
        as?: keyof JSX.IntrinsicElements
    }

export function Heading({
    className,
    size,
    weight,
    align,
    tone,
    as,
    ...props
}: HeadingProps) {
    const Tag = as || size || "h2"

    return (
        <Tag
            className={cn(
                headingVariants({ size, weight, align, tone }),
                className
            )}
            {...props}
        />
    )
}

// =========================
// PARAGRAPH
// =========================

const paragraphVariants = cva(
    "leading-relaxed",
    {
        variants: {
            size: {
                sm: "text-base",
                base: "text-lg",
                lg: "text-xl",
                xl: "text-2xl",
            },
            weight: {
                light: "font-light",
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            },
            tone: {
                default: "text-gray-600",
                muted: "text-gray-400",
                strong: "text-gray-800",
            },
        },
        defaultVariants: {
            size: "base",
            weight: "normal",
            align: "left",
            tone: "default",
        },
    }
)

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof paragraphVariants>

export function Paragraph({
    className,
    size,
    weight,
    align,
    tone,
    ...props
}: ParagraphProps) {
    return (
        <p
            className={cn(
                paragraphVariants({ size, weight, align, tone }),
                className
            )}
            {...props}
        />
    )
}