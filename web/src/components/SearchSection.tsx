// @ts-ignore
import React, { useState } from 'react';
import SearchForm from './SearchForm.tsx';
import PersonaDetail from './PersonaDetail.tsx';
import { Persona } from '../../types/persona.ts';

interface SearchSectionProps {
    searchType: 'id' | 'name';
}

const SearchSection: React.FC<SearchSectionProps> = ({ searchType }) => {
    const [persona, setPersona] = useState<Persona | null>(null);

    // @ts-ignore
    const handleSearch = async (value: string) => {
        try {
            // API-Endpunkt je nach Suchtyp
            const endpoint = searchType === 'id'
                ? `http://localhost:8080/persona/id/${value}`
                : `http://localhost:8080/persona/name/${encodeURIComponent(value)}`;

            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            setPersona(data);
        } catch (error) {
            setPersona(null);
            throw error; // Fehler weitergeben, damit die SearchForm damit umgehen kann
        }
    };

    return (
        <div className="search-section">
            <SearchForm searchType={searchType} onSearch={handleSearch} />
            <PersonaDetail persona={persona} />
        </div>
    );
};

export default SearchSection;