import React, { Component } from "react";
import axios from "axios";
import Table  from "react-bootstrap/Table";
import StudentTableRow from "./userTableRow";


export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state ={
            users: [],
        };

    }

    componentDidMount(){
        axios
            .get("http://localhost:4000/user")
            .then((res)=>{
                this.setState({
                    user: res.data,
                });
            })
            .catch((error)=>{
                console.log(error);
             });
    }

    DataTable(){
        return this.state.user.map((res, i)=>{
            return <userTableRow obj={res} key={i}/>
        });
    }

    render(){
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Primer Nombre</th>
                            <th>Segundo Nombre</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                            <th>Correo Electrónico</th>
                            <th>Usuario</th>
                            <th>Contraseña</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                </Table>
            </div>
        );
    }   
}