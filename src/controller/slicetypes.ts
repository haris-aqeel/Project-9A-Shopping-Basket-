// Types used in slice controller

type item = {
    id: Number;
    name: string;
    price: Number;
    image: string;
    rating: string;
    description: string;
}


export type State = {
    basket: item[]
  }
  
export type Action = {
    payload: item;
    type: string;
  }
  
 