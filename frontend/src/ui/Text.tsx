import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const textClasses = cva("text-base font-light text-fg-default", {
  variants: {
    // main variants
    h1: {
      true: "text-4xl md:text-6xl font-bold",
    },
    h2: {
      true: "text-4xl font-semibold",
    },
    h3: {
      true: "text-3xl font-semibold",
    },
    h4: {
      true: "text-2xl font-semibold",
    },
    sb: {
      true: "text-xl font-semibold",
    },
    s: {
      true: "text-xl font-light",
    },
    pb: {
      true: "text-base font-semibold",
    },
    p: {
      true: "text-base font-light",
    },
    cb: {
      true: "text-sm font-semibold",
    },
    c: {
      true: "text-sm font-light",
    },
    // other
    faded: {
      true: "text-fg-faded",
    },
  },
});

interface TextProps extends VariantProps<typeof textClasses> {
  className?: string;
}

export const Text = ({
  children,
  className,
  ...props
}: PropsWithChildren<TextProps>) => {
  const Component = "p";
  return (
    <Component className={twMerge(textClasses(props), className)}>
      {children}
    </Component>
  );
};
