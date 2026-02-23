 "use client"
 import { useState } from "react";
import {ICandidate} from "@/types/candidate";
 import {candidateService} from "@/services/candidateService";
 type CandidateFormData = Omit<ICandidate, 'dataSubmitted' | 'status'>;
interface CreateCandidateProps {
isOpen: boolean;
setIsOpen: (isOpen: boolean)=>void;
onCandidateCreated: ()=>void;
}
 export default function CreateCandidate({ isOpen, setIsOpen, onCandidateCreated }: CreateCandidateProps) {
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState<string | null>(null);

    const [formData, setFormData]= useState<CandidateFormData>({
        name: "",
        email: "",
        phone:"",
        resumeurl:"",
    });
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value } = e.target;
         setFormData(prev => ({ ...prev, [name]: value }));
         if (error) setError(null);
     };
     const handleSubmit= async (e: React.FormEvent)=>{
         e.preventDefault();
         setLoading(true);
         setError(null);

         try{
 await candidateService.create(formData as ICandidate);
             setFormData({ name: "", email: "", phone: "", resumeurl: "" });
 onCandidateCreated();
 setIsOpen(false)
         }catch (error:any) {
             setError(error.response?.data?.message || "Falha ao conectar no servidor do Grupo Zeno");
         }finally {
             setLoading(false);
         }
     }
     if(!isOpen) return null;
     return (

             <div className="bg-gray-100  p-8 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full">
                <div className="flex flex-col justify-between items-center p-4 border-b border-gray-200 mb-10">
                    <h2 className="text-xl font-bold text-gray-800">
                        Novo Candidato
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Preencha os dados para o processo de recrutamento na <span className="text-orange-500 font-medium">Zeno Grupo</span>.
                    </p>
                </div>


                 <form onSubmit={handleSubmit}>
                     {error && (
                         <div className="p-3 bg-red-50 border dark:border-orange-500 border-red-200 text-red-600 text-sm rounded-lg ">
                             {error}
                         </div>
                     )}
                     <div className="w-full flex flex-col items-start ">
                         <label
                             className ="block text-xs font-semibold text-gray-600 mb-1 ml-1"
                         >Nome Completo</label>
                         <input
                             required name="name" value={formData.name} onChange={handleChange}
                             type="text"
                             className="w-full bg-white p-3 placeholder:text-gray-400  text-gray-900 border border-gray-300 rounded-xl  focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                             placeholder="António Joaquim"
                         />
                     </div>

                     <div className="w-full  flex flex-col items-start">
                         <label
                             className="block text-xs font-semibold text-gray-600 mb-1 ml-1"
                         >E-mail</label>
                         <input
                             required
                               type="email"
                                name="email"
                             className="w-full text-gray-900  p-3 bg-white border border-gray-300 rounded-xl foucs:ring-2 focus:ring-orange-500 outline-none transition-all"
                             value={formData.email}
                              onChange={handleChange}
                         placeholder="antonio.j@zenogrupo.com"
                         />
                     </div>

                     <div className="w-full flex flex-col items-start">
                         <label
                         className="block text-xs font-semibold text-gray-600 mb-1 ml-1"
                         >Telefone</label>
                         <input
                             required name="phone"
                             value={formData.phone}
                             onChange={handleChange}
                             className="w-full p-3 border bg-white border-gray-300 rounded-xl foucs:ring-2 focus:ring-orange-500 outline-none transition-all"
                             placeholder="+244..."
                             />
                     </div>

                     <div className="w-full flex flex-col items-start">
                         <label
                         className="block text-xs font-semibold text-gray-600 mb-1 ml-1"
                         >URL Currículo</label>
                         <input
                             required name="resumeurl"
                             className="w-full p-3 bg-white border  text-gray-900 border-gray-300 rounded-xl foucs:ring-2 focus:ring-orange-500 outline-none transition-all"
                             value={formData.resumeurl}
                             onChange={handleChange}
                             type="text"
                             placeholder="https://..."

                         />
                     </div>

                     <div className="flex gap-3 mt-8">
                         <button
                             type="button"
                             onClick={() => setIsOpen(false)}
                             className="flex-1 px-4 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-all"
                         >
                             Cancelar
                         </button>
                         <button
                             type="submit"
                             disabled={loading}
                             className="flex-1 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-orange-200  transition-all"
                         >
                             {loading ? "Processando..." : "Confirmar"}
                         </button>
                     </div>

                 </form>
             </div>

     )
 }