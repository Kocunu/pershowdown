// @ts-ignore
import React from 'react';
import { Persona } from '../../types/persona.ts';

interface PersonaDetailProps {
    persona: Persona | null;
}

const PersonaDetail: React.FC<PersonaDetailProps> = ({ persona }) => {
    if (!persona) return null;

    return (
        <div className="persona-details">
            <h2>{persona.Name} (Level {persona.Level})</h2>

            <div className="stats-container">
                <div className="stats-column">
                    <h3>Status</h3>
                    <p>Health: {persona.Status.Health}</p>
                    <p>Magic: {persona.Status.Magic}</p>
                </div>

                <div className="stats-column">
                    <h3>Kampfwerte</h3>
                    <p>Strength: {persona.BattleStats.Strength}</p>
                    <p>Magic: {persona.BattleStats.Magic}</p>
                    <p>Endurance: {persona.BattleStats.Endurance}</p>
                    <p>Agility: {persona.BattleStats.Agility}</p>
                    <p>Luck: {persona.BattleStats.Luc}</p>
                </div>

                <div className="stats-column">
                    <h3>Schwächen & Resistenzen</h3>
                    <p>Physical: <span className={`element ${persona.Weakness.Physical}`}>{persona.Weakness.Physical}</span></p>
                    <p>Gun: <span className={`element ${persona.Weakness.Gun}`}>{persona.Weakness.Gun}</span></p>
                    <p>Fire: <span className={`element ${persona.Weakness.Fire}`}>{persona.Weakness.Fire}</span></p>
                    <p>Ice: <span className={`element ${persona.Weakness.Ice}`}>{persona.Weakness.Ice}</span></p>
                    <p>Electric: <span className={`element ${persona.Weakness.Electric}`}>{persona.Weakness.Electric}</span></p>
                    <p>Wind: <span className={`element ${persona.Weakness.Wind}`}>{persona.Weakness.Wind}</span></p>
                    <p>Psychic: <span className={`element ${persona.Weakness.Psychic}`}>{persona.Weakness.Psychic}</span></p>
                    <p>Nuclear: <span className={`element ${persona.Weakness.Nuclear}`}>{persona.Weakness.Nuclear}</span></p>
                    <p>Bless: <span className={`element ${persona.Weakness.Bless}`}>{persona.Weakness.Bless}</span></p>
                    <p>Curse: <span className={`element ${persona.Weakness.Curse}`}>{persona.Weakness.Curse}</span></p>
                </div>
            </div>
        </div>
    );
};

export default PersonaDetail;