import { Router } from "express";
import { Task } from "../entities";
import { AppDataSource } from "../db/dbConnection";

const route = Router();

route.get("/" , async (req,res) => {
    try{
        const taskRep = AppDataSource.getRepository(Task);
        const taskAll = await taskRep.find();
        res.json({message : "select all task", taskAll});
    }catch(error){
        res.status(404).json({error : "not found"})
    }
})

route.get("/:id", async (req,res) => {
   
   try{
    const { id } = req.params;
    const taskRep = AppDataSource.getRepository(Task);
    const taskRes = taskRep.findOneBy({id : parseInt(id)});
    if(!taskRes){
        res.status(404).json({message : "error not found"});
    }
    res.json({message: "Task found", taskRes});
    } catch(error){
        res.status(404).json({error : "Error for the get by id"})
    }
})

route.post("/" , async (req,res) => {
    try{
        const {description , isDone  } = req.body;
        const taskRep = AppDataSource.getRepository(Task);
        const taskNew = await taskRep.create({ description, isDone });
        await taskRep.save(taskNew);
        res.json({message : "Task created", taskNew})
    }catch(error){
        res.status(404).json({error : "Unvaible information"})
    }
})

route.put("/:id" , async (req,res) => {
    try{
        const {id } = req.params;
        const { description , isDone } = req.body;
        const taskRep = AppDataSource.getRepository(Task);
        const taskUp = await taskRep.findOneBy({id : parseInt(id)});
        if(!taskUp){
            res.status(404).json({message : "Not found"});
        }
        await taskRep.update(id , { description , isDone});
        res.json({message : "task updated"});
    }catch(error){
        res.status(404).json({error : "put error"})
    }
})

route.delete("/:id" , async (req,res) => {
    try{
        const { id } = req.params;
        const taskRep = AppDataSource.getRepository(Task);
        const taskDel = await taskRep.findOneBy({id : parseInt(id)});
        if(!taskDel){
            res.status(404).json({message : " Not found "})
        }
        taskRep.delete(id);
        res.json({message: "Task deleted" , taskDel})
    }catch(error){
        res.status(404).json({error : "delet error"})
    }
})

export const taskRoutes = route ;