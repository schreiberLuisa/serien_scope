export default interface ISerie{
    id: number,
    name: string,
    image?: {
        medium?: string;
        original?: string;
    },
    premiered: string,
    rating: number,
    genres: string[]
}