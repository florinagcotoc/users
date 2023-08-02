export interface CardProps<T> {
  data: any;
  onClick?: (data: T) => void;
}
