const todoModel = require('../model/todoModel');

const getTodos = async(req,res)=>{
    const todos = await todoModel.find({});
    res.status(200).send(todos);
};

const saveTodo = async(req,res)=>{
    const {item} = req.body;
    await todoModel.create({item});
    res.status(201).send("Todo is Created")
};

const deleteTodo = async(req,res)=>{
    const {_id} = req.body;
    await todoModel.findByIdAndDelete(_id)
    res.status(200).send("Delete Successfully")
};

const updateTodo = async(req,res)=>{
    const {_id, item} = req.body;
    await todoModel.findByIdAndUpdate(_id, {item});
    res.status(201).send("Update Successfully");
};

module.exports = { getTodos, saveTodo, deleteTodo, updateTodo };