import React from 'react';
import PageHeading from '../../assets/PageHeading'
import UserCard from '../../components/cards/userCard';
import ProductCard from '../../components/cards/productCard';
import CashCard from '../../components/cards/cashCard';
import Box from '../../components/boxes/Box'
import LastProductBox from '../../components/boxes/LastProductBox'
import Block from '../../components/boxes/Block'
import LastUserBox from '../../components/boxes/LastUserBox'

function Main() {
    return (
        <div id="content">
            <div className="container-fluid">
                
                <PageHeading title='BABIEKA - Main'/>
                
                <div className="row">   {/*---- CARD SECTION ----*/}
                    <ProductCard title='Artículos en la base de datos' apiUrl='products' />
                    <CashCard title='Costo Total de Artículos' apiUrl='products' />
                    <UserCard title='Total de usuarios registrados' apiUrl='users' />
                </div>
                
                <div className="row">   {/*---- BOX SECTION ----*/}
                    <Box title='Categorías en la Base de Datos'>
                        <Block name='Casual' apiUrl='products' />
                        <Block name='Fiesta' apiUrl='products' />
                        <Block name='Sale' apiUrl='products' />
                    </Box>
                    <Box title='Listado de Roles'>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">Manager</li>
                            <li className="list-group-item">Admin</li>
                            <li className="list-group-item">Developer</li>
                            <li className="list-group-item">Tester</li>
                            <li className="list-group-item">Client</li>
                        </ul>
                    </Box>
                    <LastProductBox title='Ultimo Artículo Cargado' apiUrl='products' />
                    <LastUserBox title='Ultimo Usuario Creado' apiUrl='users' />
                </div>
                
            </div>
        </div>
    );
}

export default Main;