import { IconDay, IconHourcoding, IconNight } from './IconsAssets';
import { HourcodingIconProps, IconHc } from './types';

const HourcodingIcon = ({ icon, ...rest }: HourcodingIconProps) => {
  switch (icon) {
    case IconHc.DAY:
      return <IconDay {...rest} />;
    case IconHc.HOURCODING:
      return <IconHourcoding {...rest} />;
    case IconHc.NIGHT:
      return <IconNight {...rest} />;
    default:
      return null;
  }
};

export default HourcodingIcon;
