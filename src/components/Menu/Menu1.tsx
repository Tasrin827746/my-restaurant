import Menu, { MenuItem } from "./Menu";

const items: MenuItem[] = [
  {
    name: 'Carbonara',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Cacio e Pepe',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Amatriciana',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: ' Gricia',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
];

const Menu1 = () => {
  return (
   <Menu
   title="Pasta" 
   imageSrc="/pasta.avif"
   items={items}
   imageRight= {false}
   bgColor="bg-orange-50"
   />
  )
}

export default Menu1