# TLA-Product-Card

This is a package made to test a deployment to NPM

### Tlacaelel Leon

## Example
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} 'tla-product-card';
```
```
<ProductCard
        product={product}
        initialValues = {{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({reset, increaseBy, count, isMaxCountReached, maxCount}) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>

```