import type { CharacterPhoto } from "./characterPhoto";

export class CharacterClass {
    name: string;
    photo: CharacterPhoto;
    classType: string;
    notes: string[] = [];
    feats: string[] = [];
    health: number = 15;
    armorClass: number = 0;
    movement: number = 15;
    level: number = 1;

    // stats
    strength: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    constitution: number;

    // saving throws
    strengthSavingThrow: number;
    dexteritySavingThrow: number;
    intelligenceSavingThrow: number;
    wisdomSavingThrow: number;
    charismaSavingThrow: number;
    constitutionSavingThrow: number;

    constructor(name: string, photo: CharacterPhoto, classType: string, strength: number, dexterity: number, intelligence: number, wisdom: number, charisma: number, constitution: number) {
        this.name = name;
        this.photo = photo;
        this.classType = classType;
        this.strength = strength;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.constitution = constitution;

        // saving throws calculated from stats (if stat is above 10, add 1 to saving throw for every 2 points above 10)
        this.strengthSavingThrow = Math.floor((strength - 10) / 2);
        this.dexteritySavingThrow = Math.floor((dexterity - 10) / 2);
        this.intelligenceSavingThrow = Math.floor((intelligence - 10) / 2);
        this.wisdomSavingThrow = Math.floor((wisdom - 10) / 2);
        this.charismaSavingThrow = Math.floor((charisma - 10) / 2);
        this.constitutionSavingThrow = Math.floor((constitution - 10) / 2);
    }
}
