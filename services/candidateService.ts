import axios from "axios";
import {ICandidate} from "../types/candidate";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const api= axios.create({
     baseURL:BASE_URL,
    headers: { 'Content-Type': 'application/json' }});

  export const candidateService= {
    create:(data:Partial<ICandidate>)=> api.post("/api/candidates",data),
      getAll:()=>api.get<{data:ICandidate[]}>("/api/candidates"),
    getById:(id:string)=> api.get(`/api/candidates/${id}`)
};