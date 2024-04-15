import style from "./product.module.css";
interface IProduct {
  type: string;
  photo: string;
  name: string;
}

export function Product({ type, photo, name }: IProduct) {
  return (
    <>
      <div className={style.productType}>{type}</div>
      <img src={photo} alt={name} className={style.productPhoto} />
      <p className={style.productName}>{name}</p>
    </>
  );
}
