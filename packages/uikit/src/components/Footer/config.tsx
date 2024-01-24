import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import {
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
  InstagramIcon,
  GithubIcon,
  ResourcesIcon,
  DiscordIcon,
  MediumIcon,
  YoutubeIcon,
  FacebookIcon,
  Official,
  SmartContractIcon,
  ChartIcon
} from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.kronoswap.finance",
      },
      {
        label: "Blog",
        href: "https://medium.com/pancakeswap",
      },
      {
        label: "Community",
        href: "https://docs.kronoswap.finance",
      },
      {
        label: "CAKE",
        href: "https://docs.kronoswap.finance/governance/nebula-tokenomics",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/gamecoingmex",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/TheGameCoin_GME_CHAT"
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/gamecoingmex?utm_medium=copy_link",
  },
  {
    label: "Official",
    icon: Official,
    href: "https://www.thegamecoin.net",
  },
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/GameCoinGMEX",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/VjbE3Pc3",
  },
  {
    label: "Chart",
    icon: ChartIcon,
    href: "https://poocoin.app/tokens/0xE9d78BF51ae04c7E1263A76ED89a65537B9cA903",
  },
  {
    label: "Contract",
    icon: SmartContractIcon,
    href: "https://bscscan.com/token/0xE9d78BF51ae04c7E1263A76ED89a65537B9cA903",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
