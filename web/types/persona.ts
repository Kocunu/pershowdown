// Typ-Definition für die Persona
export interface Persona {
    ID: number;
    Name: string;
    Level: number;
    Status: {
        Health: number;
        Magic: number;
    };
    BattleStats: {
        Strength: number;
        Magic: number;
        Endurance: number;
        Agility: number;
        Luc: number;
    };
    Weakness: {
        Physical: string;
        Gun: string;
        Fire: string;
        Ice: string;
        Electric: string;
        Wind: string;
        Psychic: string;
        Nuclear: string;
        Bless: string;
        Curse: string;
    };
}

export type SearchStatus = 'idle' | 'loading' | 'success' | 'error';