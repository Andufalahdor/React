import React from "react";
import {
  BlockIcon,
  WarningIcon,
  CommentIcon,
  HideIcon,
  SharedIcon,
  SaveIcon,
} from "../Icons";

export enum EIcons {
  block = "BlockIcon",
  warning = "WarningIcon",
  comment = "CommentIcon",
  hide = "HideIcon",
  shared = "SharedIcon",
  save = "SaveIcon",
}

type TSizes = 8 | 10 | 12 | 14 | 16 | 18 | 36 | 64 | 128;

interface IIConProps {
  name: EIcons;
  size?: TSizes;
}

export function Icon(props: IIConProps) {
  const { name = EIcons.block, size = 14 } = props;
  return <>{IconSwitch(name, size)}</>;
}

function IconSwitch(name: string, size: TSizes): React.ReactNode {
  switch (name) {
    case EIcons.block:
      return <BlockIcon width={size} height={size} />;
    case EIcons.comment:
      return <CommentIcon width={size} height={size} />;
    case EIcons.hide:
      return <HideIcon width={size} height={size} />;
    case EIcons.save:
      return <SaveIcon width={size} height={size} />;
    case EIcons.shared:
      return <SharedIcon width={size} height={size} />;
    case EIcons.warning:
      return <WarningIcon width={size} height={size} />;
  }
}
