interface FirstPizzaProps {
  emri?: string;
  description?: string;
  price?: number;
}

export default function FirstPizza(props: FirstPizzaProps) {
  return <div>{props.emri}</div>;
}
