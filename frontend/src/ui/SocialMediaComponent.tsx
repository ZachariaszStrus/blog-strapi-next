import { Text } from "./Text";
import Github from "../../public/assets/github.svg";
import Linkedin from "../../public/assets/linkedin.svg";
import { GlobeAltIcon } from "@heroicons/react/20/solid";

export interface SocialMediaComponentProps {
  items?:
    | {
        title: string;
        url: string;
        icon?: "github" | "linkedin" | null;
      }[]
    | null;
}

const renderIcon = (icon: "github" | "linkedin" | null | undefined) => {
  const className = "fill-fg-default w-6 h-6";
  switch (icon) {
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    default:
      return <GlobeAltIcon className={className} />;
  }
};

export const SocialMediaComponent = ({ items }: SocialMediaComponentProps) => {
  return (
    <div className="flex w-full flex-col gap-6">
      {(items || []).map(({ title, url, icon }, index) => (
        <a
          key={index}
          target="_blank"
          href={url}
          rel="noopener noreferrer"
          className="flex w-full items-center gap-3 hover:underline"
        >
          {renderIcon(icon)}
          <Text p>{title}</Text>
        </a>
      ))}
    </div>
  );
};
