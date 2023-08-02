export interface Person {
  id: number;
  name: string;
  ocupation: string;
  username: string;
  age: number;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: [];
  companyName: string;
}
