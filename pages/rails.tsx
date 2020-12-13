import Layout from '../components/layout'
import Container from '../components/container'
import Categories from '../components/Categories'
import Header from '../components/header'

const Rails = () => {
  return (
    <Layout>
      <Container>
        <Categories />
        <Header />
        <div>Rails</div>
      </Container>
    </Layout>
  )
}

export default Rails
