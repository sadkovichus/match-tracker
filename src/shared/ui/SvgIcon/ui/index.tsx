import React from 'react';
import { icons, SvgIconProps } from '../model';

const SvgIcon: React.FC<SvgIconProps> = ({ name, width = 24, height = 24, className = '' }) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return <Icon width={width} height={height} className={className} />;
};

export default SvgIcon;
