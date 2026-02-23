export interface ICandidate {
    name: string;
    email: string;
    phone: string;
    resumeurl: string;
    status: 'Pendente' | 'Aprovado' | 'Rejeitado';
    dataSubmitted: Date;
}