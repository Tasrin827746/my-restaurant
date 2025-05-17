import Menu, { MenuItem } from "./Menu";

const items: MenuItem[] = [
  {
    name: 'Cheeseburger',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Tortellini Gorgonzola',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Rigatoni Zuccati',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
  {
    name: 'Spaghetti Marinara',
    description: 'Roasted eggplant spread, marinated tomatoes with garlic & fresh basil',
    price: '$25.00',
  },
];

const Menu3 = () => {
  return (
   <Menu
   title="Burger" 
   imageSrc="/burger.jpg"
   items={items}
   imageRight= {false}
   bgColor="bg-lime-50"
   />
  )
}

export default Menu3