import React from 'react';
import PageHeading from '../../assets/PageHeading'
import UserCard from '../../components/cards/userCard';
import ProductCard from '../../components/cards/productCard';
import CashCard from '../../components/cards/cashCard';
import Box from '../../components/boxes/Box'
import LastProductBox from '../../components/boxes/LastProductBox'
import Block from '../../components/boxes/Block'
import ListBoxProducts from '../../components/boxes/listBoxProduct';
import ListModelBox from '../../components/boxes/listModelBox';

function Products() {
    return (
        <div id="content">
            <div className="container-fluid">
                
                <PageHeading title='BABIEKA - Products'/>
                
                <div className="row">   {/*---- CARD SECTION ----*/}
                    <ProductCard title='Artículos en la base de datos' apiUrl='products' />
                    <ProductCard title='Modelos en la base de datos' apiUrl='models' />
                    <CashCard title='Costo Total de Artículos' apiUrl='products' />
                </div>
                
                <div className="row">   {/*---- BOX SECTION ----*/}
                    <ListBoxProducts title='Listado de productos' apiUrl='productsList'/>
                    <ListModelBox title='Listado de modelos' apiUrl='modelsList'/>
                </div>
                
            </div>
        </div>
    );
}

export default Products;