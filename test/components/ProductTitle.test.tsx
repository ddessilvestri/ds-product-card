import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';

describe('ProductTitle', () => {

    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className='custom-class'/>
        );

        // Your test assertions here
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => { 
        const wrapper = renderer.create(
           <ProductCard product={product1}>
            {
    ()=> <ProductTitle/>                
            }
           </ProductCard>
        );

        // Your test assertions here
        expect(wrapper.toJSON()).toMatchSnapshot();
     })
});
