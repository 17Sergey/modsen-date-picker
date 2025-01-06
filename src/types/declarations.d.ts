declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.webp";
declare module "*.svg?url";
declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
