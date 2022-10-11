import { useEffect } from 'react'
import PageLink from '../../components/Dashboard/PageLink'
import { useAppDispatch } from '../../redux/hooks'
import { fetchAllProducts } from '../../redux/actions/products'

export default function Dashboard() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div>
      <PageLink to="/products" name="products"/>
    </div>
  )
}
