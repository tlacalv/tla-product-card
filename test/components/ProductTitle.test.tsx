import React from 'react'
import renderer from 'react-test-renderer'
import {ProductTitle, ProductCard} from '../../src/components';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
  test('must show the component with the customized title', () => {
    const wrapper = renderer.create(
        <ProductTitle title="Custom Product" />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('must show the component with the product name', () => {
    const wrapper = renderer.create(<ProductCard product={product1}>
      {
        () => (
          <ProductTitle title="Custom Product" />
        )
      }
    </ProductCard>)

    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})