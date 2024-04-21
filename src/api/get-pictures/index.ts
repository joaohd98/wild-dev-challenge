import { type Picture } from "@/api/get-pictures/response";

export const getPictures = (): Promise<Picture[]> => {
  return Promise.resolve([
    {
      name: "Everyday\nFlowers",
      artist: "Johanna Hobel",
      company: "vouge",
      date: "JUN 2019",
      link: "https://www.google.com",
      image: {
        small: "/images/image01.jpg",
        big: "/images/image01@2x.jpg",
      },
    },
    {
      name: "The wilder\nNight",
      artist: "Johanna Hobel",
      company: "Wild",
      date: "DEC 2019",
      link: "https://www.google.com",
      image: {
        small: "/images/image02.jpg",
        big: "/images/image02@2x.jpg",
      },
    },
    {
      name: "Smooth\nMemories",
      artist: "Johanna Hobel",
      company: "Chanel",
      date: "FEB 2020",
      link: "https://www.google.com",
      image: {
        small: "/images/image03.jpg",
        big: "/images/image03@2x.jpg",
      },
    },
    {
      name: "THE Future\nuInverse",
      artist: "Johanna Hobel",
      company: "ON",
      date: "APR 2020",
      link: "https://www.google.com",
      image: {
        small: "/images/image04.jpg",
        big: "/images/image04@2x.jpg",
      },
    },
    {
      name: "SHE Was\nBorn Urban",
      artist: "Johanna Hobel",
      company: "SI",
      date: "DEC 2021",
      link: "https://www.google.com",
      image: {
        small: "/images/image05.jpg",
        big: "/images/image05@2x.jpg",
      },
    },
  ]);
};
