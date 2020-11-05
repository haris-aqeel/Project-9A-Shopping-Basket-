// Types used in slice controller

type item = {
    id: string;
    name: string;
    price: number;
    src: string;
    quantity: number;
    description: string;
}


export type State = {
    basket: item[]
  }
   
export type Action = {
    payload: item;
    type: string;
  }
  
 