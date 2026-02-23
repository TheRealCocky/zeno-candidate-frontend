import {ICandidate} from "@/types/candidate";
import {candidateService} from "@/services/candidateService";
import { useState, useEffect } from "react";

export const useCandidates= ()=>{
    const [candidates, setCandidates]= useState<ICandidate[]>([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState<string | null>(null);

    const fetchCandidates=async () =>{
        try{
 setLoading(true);
 const res= await candidateService.getAll();
 setCandidates(res.data.data)
        }catch (error:any) {
   setError(error.message || "Erro ao pegar os candidatos da api");
        }finally {
            setLoading(false)
        }
    };
    useEffect(()=>{
        fetchCandidates();
    },[]);
    return {candidates, setCandidates,  refresh:fetchCandidates, loading, error};
}
