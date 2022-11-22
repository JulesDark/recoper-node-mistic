import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import  Button  from "react-bootstrap/Button";

//consumiendo api delete-user
export default class UserTableRow extends Component{
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser(){
        axios
            .delete("http://localhost:4000/user/delete/" + this.props.obj._id)
            .then((res)=>{
                console.log("user successfully deleted");
            })
            .catch((error)=>{
                console.log(error);
            });

    }
    render(){
        return(
            //muestra de imformacion user
            <tr>
                <td>{this.props.obj.f_name}</td>
                <td>{this.props.obj.s_name}</td>
                <td>{this.props.obj.f_lastname}</td>
                <td>{this.props.obj.s_lastname}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.user}</td>
                <td>{this.props.obj.password}</td>
                <td>
                    <Link className="edit-link" path={"product/:id"} to={"/" + this.props.obj._id}>
                        Editar
                    </Link>
                    <Button onClick={this.deleteUser} size="sm" variant="danger">
                        Borrar
                    </Button>
                </td>
            </tr>
        );
    } 
}
