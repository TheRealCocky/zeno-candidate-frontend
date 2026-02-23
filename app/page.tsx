"use client"
import { useState } from "react";
import { useCandidates } from "@/hooks/useCandidates";
import CreateCandidate from "@/components/CreateCandidate";
export default function CandidatesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { candidates, refresh, loading, error } = useCandidates();
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <div className="p-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center mb-8 text-center">
              {/*aqui fica a hero section*/}
              <div className="flex flex-col gap-1">
                     <h1 className="text-2xl font-extrabold text-gray-800 ">
                                  Gestão de Talentos <span className="text-orange-500">Zeno Grupo</span>
                  </h1>
                  <p className="text-gray-500 text-sm">Bem-vindo, <span className="text-orange-500 font-bold">ADMIN</span>. Tens <span className="font-bold text-orange-500">{candidates.length}</span> candidatos inscritos para as vagas de Software Engineer.
                  </p>
              </div>

              <div className="w-full flex justify-center m-6 ">
 <div className="w-full max-w-md">
     <input
         className="w-full p-3 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
         onChange={(e) => setSearchTerm(e.target.value)}
         placeholder="Pesquisar por nome ou email..."
         type="text"
     />

 </div>
              </div>

              <div className="w-full flex justify-start items-end mt-10 mb-6">
                  <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-orange-500 text-white p-3 rounded-full shadow-lg"
                  >
                     + Novo Candidato
                  </button>

              </div>

              <CreateCandidate
                  isOpen={isModalOpen}
                  setIsOpen={setIsModalOpen}
                  onCandidateCreated={refresh}
              />

              {/*  Tabela */}
              <div className="w-full overflow-x-auto mt-8">
                  {loading ?(
                      <p className="text-center py-10">A carregar candidatos do Grupo Zeno...</p>
                  ):error?(
                      <p className="text-center py-10 text-red-500">{error}</p>
                  ):
                      (
                          <table className="w-full text-left border-collapse">
           <thead>
           <tr className="border-b">
               <th>Nome</th>
               <th>Email</th>
               <th>Telefone</th>
               <th>Estado</th>
               <th>Currículo</th>
               <th>Data</th>
           </tr>
           </thead>

                              <tbody>
                              {candidates.filter(c=>
                              c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  c.email.toLowerCase().includes(searchTerm.toLowerCase()))
                              .map((candidate)=>(
                                  <tr key={candidate._id} className="border-b hover:bg-gray-50 transition-colors">
                                      <td className="p-3 ">{candidate.name}</td>
                                      <td className="p-3 text-gray-600">{candidate.email}</td>
                                      <td   className="p-3 text-gray-600">{candidate.phone}</td>
                                      <td className="p-3">

  <span className={`px-2 py-1 rounded text-xs font-bold ${
      candidate.status === 'Aprovado' ? 'bg-green-100 text-green-700' :
          candidate.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' :
              candidate.status === 'Rejeitado' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700' 
  }`}>
    {candidate.status}
  </span>
                                      </td>

                                      <td className="p-3 text-center">
                                          <a
                                              href={candidate.resumeurl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-blue-600 font-bold hover:underline"
                                          >
                                              Abrir PDF
                                          </a>
                                      </td>
                                      <td className="p-3 ">
                                          {candidate.dataSubmitted ? new Date(candidate.dataSubmitted).toLocaleDateString('pt-PT') : '-'}
                                      </td>
                                  </tr>
                              ))}
                              </tbody>
                          </table>
                      )
                  }
              </div>
          </div>
      </div>
  )
}
