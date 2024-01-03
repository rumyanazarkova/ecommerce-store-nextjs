
import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/product-list"

export const revalidate = 0

const Homepage = async () => {
  const billboard = await getBillboard("8c98eb4f-f510-475c-bcc0-d340d4c78524")
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
export default Homepage