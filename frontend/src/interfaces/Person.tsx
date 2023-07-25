export interface Person {
  id: number;
  name: string;
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
