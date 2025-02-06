import { SocialLinks } from "./types";

export const LinkInfo : SocialLinks[] = [
    { linkName: 'Facebook', linkUrl: 'https://www.facebook.com/profile.php?id=100074329884922' },
    { linkName: 'Instagram', linkUrl: 'https://www.instagram.com/kagiso.ha/' },
    { linkName: 'LinkedIn', linkUrl: 'https://www.linkedin.com/in/kagiso-hadebe-611a9a192/' },
    { linkName: 'Github', linkUrl: 'https://github.com/kagiso101' },
  ]

  export const AdviceContent = {
    image: '../../assets/designs/active-states.jpg',
    location: 'Cape Town, South Africa',
    headline: 'Innovator ⚡ Coder 🎮 Strategist 🚀 Game Changer',
    name: 'Uyabongeka Kagiso Vuyani Hadebe'
  };



  export interface AdviceObject {
    slip: {
      id: number;
      advice: string;
    };
  }
