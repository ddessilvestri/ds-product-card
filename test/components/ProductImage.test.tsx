import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/product';

describe('ProductImage', () => {

    test('debe de mostrar el componente correctamente con la imagen personalizado', () => {
        const wrapper = renderer.create(
            <ProductImage img={product2.img}/>
        );

        // Your test assertions here
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => { 
        const wrapper = renderer.create(
           <ProductCard product={product2}>
            {
                ()=><ProductImage/>               
            }
           </ProductCard>
        );

        // Your test assertions here
        expect(wrapper.toJSON()).toMatchSnapshot();
     })
});
