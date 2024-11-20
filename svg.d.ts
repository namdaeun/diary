import { SVGProps } from "react";

declare module "*.svg" {
  const content: React.FC<SVGProps<SVGAElement>>;

  export default content;
}
