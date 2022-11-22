const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const user = require('../routes/user.route');
// Creacion de un objeto del modelo user     
let userSchema = require('../models/user');


//ruta para crear un user
router.route('/create').post((req, res, next)=>{
    userSchema.create(req.body, (error, data)=>{
        if (error) {
            return next(error);
            
        } else {
            console.log(data);
            res.json(data);
            
        }
    });

});

//Creacion de ruta para leer user

router.route('/').get((req, res, next)=>{
    // eslint-disable-next-line array-callback-return
    userSchema.find((error, data)=>{
        if (error) {
            return next(error);
            
        } else {
            res.json(data);
        }

    });
});

//Obtener un user
router.route('/:id').get((req, res, next)=>{
    userSchema.findById(req.params.id,(error, data)=>{
        if (error) {
            return next(error);
            
        } else {
            res.json(data);  
        }
    });
});

// actualizar user
router.route('/update/:id').put((req, res,next)=>{
    userSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) =>{ 
            if (error) {
                console.log(error);
                return next(error);
                
            } else {
                res.json(data);
                console.log('usuario actualizado');
                
            }
        }

    );
});
// eliminacion de un user
router.route('/delete/:id').delete((req, res, next)=>{
    userSchema.findByIdAndDelete(req.params.id,(error, data)=>{
        if (error) {
            return next(error);
            
        } else {
            res.status(200).json({msg:data,});
            
        }
    });
});
module.exports = router;
