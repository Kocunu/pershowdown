// @ts-ignore
import React, { useState } from 'react';
import { SearchStatus } from '../../types/persona.ts';

interface SearchFormProps {
    searchType: 'id' | 'name';
    onSearch: (value: string) => Promise<void>;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchType, onSearch }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchStatus, setSearchStatus] = useState<SearchStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    // @ts-ignore
    const handleSearch = async () => {
        if (!searchValue.trim()) {
            setErrorMessage(`Bitte gib ${searchType === 'id' ? 'eine gültige Persona-ID' : 'einen Persona-Namen'} ein`);
            return;
        }

        if (searchType === 'id' && isNaN(Number(searchValue))) {
            setErrorMessage('Bitte gib eine gültige numerische ID ein');
            return;
        }

        try {
            setSearchStatus('loading');
            setErrorMessage('');
            await onSearch(searchValue);
            setSearchStatus('success');
        } catch (error) {
            console.error('Fehler bei der Suche:', error);
            setErrorMessage(`Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
            setSearchStatus('error');
        }
    };

    return (
        <div className="search-form">
            <h2>Suche nach {searchType === 'id' ? 'ID' : 'Name'}</h2>
    <div className="search-container">
    <input
        type="text"
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    placeholder={`${searchType === 'id' ? 'Persona-ID' : 'Persona-Name'} eingeben`}
    className="search-input"
    />
    <button
        onClick={handleSearch}
    disabled={searchStatus === 'loading'}
    className="search-button"
    >
    {searchStatus === 'loading' ? 'Suche läuft...' : 'Suchen'}
    </button>
    </div>

    {errorMessage && (
        <div className="error-message">
            {errorMessage}
            </div>
    )}
    </div>
);
};

export default SearchForm;