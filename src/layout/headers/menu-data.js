const menu_data = [
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Sobre",
    link: "/about",
    active: "",
  },
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Serviços",
    link: "/",
    active: "",
    sub_menus: [
      { link: "/servico-entidades", title: "Entidades do 3º setor" },
      { link: "/servico-seguradoras", title: "Seguradoras" },
      { link: "/servico-insurtechs", title: "Insurtechs" },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contato",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
