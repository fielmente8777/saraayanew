import { JSX } from "react";

export interface TestimonialType {
  title: string;
  images: string[];
  testimonials: {
    text: string;
    name: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
}

export interface SignatureTherapiesDataType {
  title: string;
  cta: {
    label: string;
    href: string;
  };
  therapies: {
    name: string;
    subTitle: string;
    description: string;
    src: string;
    icon: string;
  }[];
}

export interface ExperiencesProps {
  title: string;
  cards: {
    image: string;
    alt: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
}

export interface RoomsType {
  title: string;
  cards: {
    title: string;
    images: string[];
  }[];
  cta: {
    label: string;
    href: string;
  };
}

export interface Props {
  id: string;
  title: string;
  images: string[];
  description: string;
  amenities: {
    title: string;
    icon: JSX.Element;
  }[];
  price?: string;
  ctas: {
    label: string;
    href: string;
  }[];
}
