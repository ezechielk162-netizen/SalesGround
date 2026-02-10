
import {
  AppstoreOutlined, VideoCameraOutlined, MailOutlined
} from "@ant-design/icons-vue";

export const randomImage = {
  URL: "https://picsum.photos/1920/900?random=1"
}


export const coords = [
  {
    textStrong: "Le dimanche soir de",
    endofText: "6:00 à 8:00 pm."
  },
  {
    textStrong: "À partir du ",
    endofText: "30 mai 2025."
  },
  {
    textStrong: "Prenez rendez-vous avec le Pasteur ",
    endofText: "Frantzou Jean-Baptiste."
  }
]

export const menuItems = [
  {
    name: 'nav.home',
    to: "/",
    icon: AppstoreOutlined,
    dropdown: null,
  },
  {
    name: "nav.videos",
    to: "#",
    icon: VideoCameraOutlined,
    dropdown: null,
  },
  {
    name: "nav.seemore",
    to: "#",
    icon: MailOutlined,
    dropdown: null,
  }
];
