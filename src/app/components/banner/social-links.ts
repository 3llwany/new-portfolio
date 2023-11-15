export interface ISocialLinks {
  id?: number,
  url: string,
  btn: string,
  icon: string,
}

export const SOCIALLINKS: ISocialLinks[] = [
  {
    url: "https://www.facebook.com/3llwaNy",
    btn: "btn-facebook",
    icon: "fa fa-facebook",
  },
  {
    url: "https://twitter.com/3llwaNy",
    btn: "btn-twitter",
    icon: "fa fa-twitter",
  },
  {
    url: "mailto:sayedelwany03@gmail.com",
    btn: "btn-google",
    icon: "fa fa-google",
  },
  {
    url: "https://api.whatsapp.com/send?phone=2001117731605",
    //	url: "https://wa.me/+201117731605",
    btn: "btn-success",
    icon: "fa fa-whatsapp",
  },
  {
    url: "https://github.com/3llwany",
    btn: "btn-dark",
    icon: "fa fa-github",
  },
  {
    url: "tel:01117731605",
    btn: "btn-info",
    icon: "fa fa-phone",
  },
];
