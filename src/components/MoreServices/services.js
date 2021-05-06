import analysis from "../../assets/analytics.svg";
import outreach from "../../assets/outreach.svg";
import ecommerce from "../../assets/ecommerce.svg";

export const services = [
  {
    title: "Analysis",
    iconSrc: analysis,
    iconAlt: "bar chart and magnifying glass",
    iconStyle: { marginLeft: "-2.75em" },
    paragraphStyle: undefined,
    paragraph1:
      "Curabitur condimentum eleifend pharetra. Pellentesque eu orci in enim suscipit vulputate. Cras sapien tellus, rutrum sed consequat nec, viverra quis est. Sed fermentum tellus sit amet metus mollis, vel consequat mi vehicula. Sed dolor mauris.",
    paragraph2: undefined,
  },
  {
    title: "E-Commerce",
    iconSrc: ecommerce,
    iconAlt: "globe of dollar signs",
    iconStyle: undefined,
    paragraphStyle: { marginLeft: "1em" },
    paragraph1: "Cras eu nunc sit amet lacus convallis accumsan nec eget.",
    paragraph2:
      "Aenean id metus quis tellus bibendum vulputate. Praesent posuere facilisis ligula quis accumsan. Nullam scelerisque convallis dolor, quis finibus tellus.",
  },
  {
    title: "Outreach",
    iconSrc: outreach,
    iconAlt: "megaphone",
    iconStyle: undefined,
    paragraphStyle: { marginLeft: "1em" },
    paragraph1:
      "Quisque eget orci nec mi bibendum pulvinar id at nunc. Integer ut mauris aliquet neque aliquet ultricies dapibus et ante. Integer eget odio molestie libero fermentum cursus. Sed sollicitudin eros.",
    paragraph2: undefined,
  },
];
