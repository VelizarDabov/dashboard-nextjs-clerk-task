import { Avatar } from "@/components/ui/avatar";
import { Activity, Briefcase, DollarSign,  Users } from "lucide-react";
export const headerTitle = [
  { id: 1, title: "Overview", path: "/" },
  { id: 2, title: "Customers", path: "/" },
  { id: 3, title: "Products", path: "/" },
  { id: 4, title: "Settings", path: "/" },
];

export const cardInfo = [
  {
    id: 1,
    title: "Total Revenue",
    amount: "$45,231.89",
    comparison: "+20.1% from last month",
    icon: <DollarSign />,
  },
  {
    id: 2,
    title: "Subscriptions",
    amount: "+2350",
    comparison: "+180.1% from last month",
    icon: <Users />,
  },
  {
    id: 3,
    title: "Sales",
    amount: "+12,234",
    comparison: "19% from last month",
    icon: <Briefcase/>,
  },
  {
    id: 4,
    title: "Active Now",
    amount: "+573",
    comparison: "+201% since last hour",
    icon: <Activity />,
  },
];


export const profiles = [{avatar:<Avatar />, name:'Olivia Martin', email:'olivia.martin@email.com', money: 9},

{avatar:<Avatar />, name:'Jackson Lee', email:'jackson.lee@email.com', money: 1999},
{avatar:<Avatar />, name:'Isabela Nguyen', email:'isabella.nguyen@email.com', money: 999}, 
{avatar:<Avatar />, name:'William Kim', email:'will@email.com', money: 99},
{avatar:<Avatar />, name:'Sofia Devis', email:'sofia.devis@email.com', money: 33}]