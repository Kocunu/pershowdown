package server

type Persona struct {
	ID          int64
	Name        string
	Level       int16
	Status      Status
	BattleStats BattleStats
	Weakness    Weakness
	Image       string
}

type Status struct {
	Health int16
	Magic  int16
}

type BattleStats struct {
	Strength  int16
	Magic     int16
	Endurance int16
	Agility   int16
	Luc       int16
}
type Weakness struct {
	Physical string
	Gun      string
	Fire     string
	Ice      string
	Electric string
	Wind     string
	Psychic  string
	Nuclear  string
	Bless    string
	Curse    string
}

func (p Persona) New(id int64, name string, level int16, status Status, battleStats BattleStats, weakness Weakness) *Persona {
	return &Persona{
		ID:          id,
		Name:        name,
		Level:       level,
		Status:      status,
		BattleStats: battleStats,
		Weakness:    weakness,
	}
}

var TestPersona1 = Persona{
	ID:    1,
	Name:  "Ares",
	Level: 25,
	Image: "https://static.wikia.nocookie.net/megamitensei/images/3/30/SMT_II_Nyx.png",
	Status: Status{
		Health: 300,
		Magic:  150,
	},
	BattleStats: BattleStats{
		Strength:  40,
		Magic:     20,
		Endurance: 35,
		Agility:   25,
		Luc:       15,
	},
	Weakness: Weakness{
		Physical: "Resist",
		Gun:      "Weak",
		Fire:     "Null",
		Ice:      "Normal",
		Electric: "Weak",
		Wind:     "Resist",
		Psychic:  "Normal",
		Nuclear:  "Weak",
		Bless:    "Null",
		Curse:    "Normal",
	},
}

var TestPersona2 = Persona{
	ID:    2,
	Name:  "Nyx",
	Level: 30,
	Image: "https://static.wikia.nocookie.net/megamitensei/images/3/30/SMT_II_Nyx.png",
	Status: Status{
		Health: 350,
		Magic:  200,
	},
	BattleStats: BattleStats{
		Strength:  30,
		Magic:     45,
		Endurance: 25,
		Agility:   30,
		Luc:       20,
	},
	Weakness: Weakness{
		Physical: "Normal",
		Gun:      "Normal",
		Fire:     "Weak",
		Ice:      "Resist",
		Electric: "Normal",
		Wind:     "Null",
		Psychic:  "Weak",
		Nuclear:  "Normal",
		Bless:    "Normal",
		Curse:    "Resist",
	},
}
