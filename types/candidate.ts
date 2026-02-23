export interface ICandidate {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    resumeurl: string;
    status: 'Pendente' | 'Aprovado' | 'Rejeitado';
    dataSubmitted: Date;
}