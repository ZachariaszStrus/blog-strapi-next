import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const textClasses = cva("text-fg-default", {
  variants: {
    // main variants
    h1: {
      true: "text-4xl md:text-6xl font-bold",
    },
    h2: {
      true: "text-3xl md:text-4xl font-semibold",
    },
    h3: {
      true: "text-2xl md:text-3xl font-semibold",
    },
    h4: {
      true: "text-xl md:text-2xl font-semibold",
    },
    sb: {
      true: "text-lg md:text-xl font-semibold",
    },
    s: {
      true: "text-lg md:text-xl font-light",
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
  span?: boolean;
}

const getVariant = (props: TextProps) => {
  if (props.h1) {
    return "h1";
  } else if (props.h2) {
    return "h2";
  } else if (props.h3) {
    return "h3";
  } else if (props.h4) {
    return "h4";
  } else if (props.sb) {
    return "sb";
  } else if (props.s) {
    return "s";
  } else if (props.pb) {
    return "pb";
  } else if (props.p) {
    return "p";
  } else if (props.cb) {
    return "cb";
  } else if (props.c) {
    return "c";
  } else {
    return "p";
  }
};

type TextComponentType = "h1" | "h2" | "h3" | "h4" | "p" | "span";
const variantMapping: { [key: string]: TextComponentType } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  sb: "p",
  s: "p",
  pb: "p",
  p: "p",
  cb: "p",
  c: "p",
};

export const Text = ({
  children,
  className,
  span,
  ...props
}: PropsWithChildren<TextProps>) => {
  const variant = getVariant(props);
  const Component = span ? "span" : variantMapping[variant];
  return (
    <Component className={twMerge(textClasses(props), className)}>
      {children}
    </Component>
  );
};
