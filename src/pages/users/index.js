import React from 'react';
import PageHeading from '../../assets/PageHeading'
import UserCard from '../../components/cards/userCard';
import ProductCard from '../../components/cards/productCard';
import CashCard from '../../components/cards/cashCard';
import Box from '../../components/boxes/Box'
import LastProductBox from '../../components/boxes/LastProductBox'
import Block from '../../components/boxes/Block'
import ListBox from '../../components/boxes/listBox';
import UsersListBox from '../../components/boxes/UsersListBox';
import LastUserBox from '../../components/boxes/LastUserBox';
import RoleCard from '../../components/cards/roleCard';
import SalesCard from '../../components/cards/salesCard';
import RoleBlock from '../../components/boxes/RoleBlock';
import LastAddedList from '../../components/boxes/LastAddedListBox'


function Users() {
    
    
    
    return (
        <div id="content">
            <div className="container-fluid">
                
                <PageHeading title='BABIEKA - Users'/>
                
                <div className="row">   {/*---- CARD SECTION ----*/}
                    <UserCard title='Total de usuarios registrados' apiUrl='users' />
                    <RoleCard title='Total de Roles en Sistema' apiUrl='usersList' />
                    <SalesCard title='Total de compras realizadas' apiUrl='orders' />
                </div>
                
                <div className="row">   {/*---- BOX SECTION ----*/}
                    <UsersListBox title='Listado de usuarios' apiUrl='usersList'/>
                    <LastAddedList title='Ultimos productos elegidos por los usuarios' apiUrl='lastAdded'/>
                    <Box title='Usuarios registrados por rol'>
                        <RoleBlock name='manager' apiUrl='usersList' />
                        <RoleBlock name='admin' apiUrl='usersList' />
                        <RoleBlock name='developer' apiUrl='usersList' />
                        <RoleBlock name='tester' apiUrl='usersList' />
                        <RoleBlock name='client' apiUrl='usersList' />
                    </Box>

                </div>

            </div>
        </div>
    );
}

export default Users;