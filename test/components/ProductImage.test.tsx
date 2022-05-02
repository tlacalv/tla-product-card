import React from 'react'
import renderer from 'react-test-renderer'
import {ProductImage, ProductCard} from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
  test('must show the component with customized image', () => {
    const wrapper = renderer.create(<ProductImage img ="https://hola.jpg"/>)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('must show the component with the product image', () => {
    const wrapper = renderer.create(<ProductCard product={product2}>
      {
        () => (
          <ProductImage />
        )
      }
    </ProductCard>)

    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})