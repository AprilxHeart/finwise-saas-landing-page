import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaThreads, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SOCIAL_PLATFORMS, type SocialPlatform } from '@/constants';

const ICON_SIZE = 24;
const ICON_CLASS = 'min-w-fit';

const SOCIAL_ICONS: Record<SocialPlatform, JSX.Element> = {
  facebook: <FaFacebook size={ICON_SIZE} className={ICON_CLASS} />,
  github: <FaGithub size={ICON_SIZE} className={ICON_CLASS} />,
  instagram: <FaInstagram size={ICON_SIZE} className={ICON_CLASS} />,
  linkedin: <FaLinkedin size={ICON_SIZE} className={ICON_CLASS} />,
  threads: <FaThreads size={ICON_SIZE} className={ICON_CLASS} />,
  twitter: <FaTwitter size={ICON_SIZE} className={ICON_CLASS} />,
  youtube: <FaYoutube size={ICON_SIZE} className={ICON_CLASS} />,
  x: <FaXTwitter size={ICON_SIZE} className={ICON_CLASS} />,
};

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
  if (!SOCIAL_PLATFORMS.includes(platformName as SocialPlatform)) {
    console.log('Platform name not supported, no icon is returned:', platformName);
    return null;
  }
  
  return SOCIAL_ICONS[platformName as SocialPlatform];
};