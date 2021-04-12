export interface UserStoryMock {
  id: number;
  titre: string;
  description: string,
  complexite: number;
}

export const USMOCK: UserStoryMock[] = [
  {
    id: 1,
    titre: 'us001',
    description: 'Le metier constate l\'ajout d\'un US',
    complexite: 1
  },
  {
    id: 2,
    titre: 'us002',
    description: 'Le metier constate l\'ajout d\'un US',
    complexite: 1
  }
]