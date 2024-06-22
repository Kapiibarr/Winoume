import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useParams } from "react-router-dom"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay"
import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import { ProductDescriptionBox } from "../components/ProductDescriptionBox/ProductDescriptionBox"

export const Product = () => {
  const { all_products } = useContext(AppContext)
  const { productId } = useParams()

  if (!all_products) {
    return <div>База продуктов не найдена</div>
  }

  const product = all_products.find((i) => i.id === Number(productId))

  if (!product) {
    return <div>Продукт не найден</div>
  }

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <ProductDescriptionBox product={product} />
    </div>
  )
}

export default Product
