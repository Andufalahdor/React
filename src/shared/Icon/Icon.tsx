import React from "react";
import {
  BlockIcon,
  WarningIcon,
  CommentIcon,
  HideIcon,
  SharedIcon,
  SaveIcon,
  IconAnon,
} from "../Icons";

export enum EIcons {
  block,
  warning,
  comment,
  hide,
  shared,
  save,
  anone,
}

const icons = {
  [EIcons.block]: <BlockIcon />,
  [EIcons.warning]: <WarningIcon />,
  [EIcons.comment]: <CommentIcon />,
  [EIcons.hide]: <HideIcon />,
  [EIcons.shared]: <SharedIcon />,
  [EIcons.save]: <SaveIcon />,
  [EIcons.anone]: <IconAnon />,
};

type TSizes = 8 | 10 | 12 | 14 | 16 | 18 | 36 | 64 | 128;

interface IIconProps {
  name: EIcons;
  size?: TSizes | number;
}

export function Icon({ name, size = 14 }: IIconProps) {
  return <div className={`icon-container-${size}`}>{icons[name]}</div>;
}
