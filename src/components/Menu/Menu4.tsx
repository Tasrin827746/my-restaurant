import Menu, { MenuItem } from "./Menu";

const items: MenuItem[] = [
  {
    name: 'BBQ Special Pizza',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Spe. Cheesy Cheese',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Mushroom Chilly Pizza',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Chicken BBQ Special',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
];

const Menu4 = () => {
  return (
   <Menu
   title="Momo" 
   imageSrc="/momo.jpg"
   items={items}
   imageRight= {true}
   bgColor="bg-red-50"
   />
  )
}

export default Menu4