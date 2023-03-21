import Joi from "joi";

export const InformationsSchema = Joi.object({
  id: Joi.number().required(),
  characterName: Joi.string().min(0),
  function: Joi.string().min(0),
  race: Joi.string().min(0),
  alignment: Joi.string().min(0),
  daysSurvived: Joi.string().min(0),
});

export const StatusSchema = Joi.object({
  id: Joi.number().required(),
  CA: Joi.number(),
  speed: Joi.string().min(0),
  totalLife: Joi.number(),
  actualLife: Joi.string().min(0),
  totalSanity: Joi.number(),
  actualSanity: Joi.string().min(0),
  deathSuccesses: Joi.number(),
  deathFailure: Joi.number(),
  sanitySuccesses: Joi.number(),
  sanityFailure: Joi.number(),
});

export const AttributesSchema = Joi.object({
  id: Joi.number().required(),
  strength: Joi.number(),
  dexterity: Joi.number(),
  constitution: Joi.number(),
  intellingence: Joi.number(),
  wisdom: Joi.number(),
  charisma: Joi.number(),
  ballisticSkill: Joi.number(),
  meleeSkill: Joi.number(),
});

export const DescriptionSchema = Joi.object({
  id: Joi.number().required(),
  age: Joi.string().min(0),
  height: Joi.string().min(0),
  weight: Joi.string().min(0),
  eyes: Joi.string().min(0),
  skin: Joi.string().min(0),
  hair: Joi.string().min(0),
  appearance: Joi.string().min(0),
  languages: Joi.string().min(0),
  personality: Joi.string().min(0),
  ideals: Joi.string().min(0),
  bonds: Joi.string().min(0),
  weaknesses: Joi.string().min(0),
  features: Joi.string().min(0),
  allies: Joi.string().min(0),
  story: Joi.string().min(0),
});

export const WeaponsSchema = Joi.array().items(
  Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(0),
    weight: Joi.string().min(0),
    attack: Joi.string().min(0),
    type: Joi.string().min(0),
    damage: Joi.string().min(0),
    property: Joi.string().min(0),
    range: Joi.string().min(0),
    maxMunition: Joi.string().min(0),
    actualMunition: Joi.string().min(0),
  }),
);

export const DefensesSchema = Joi.array().items(
  Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(0),
    weight: Joi.string().min(0),
    CA: Joi.string().min(0),
    modifications: Joi.string().min(0),
  }),
);

export const ItemsSchema = Joi.object({
  id: Joi.number().required(),
  money: Joi.string().min(0),
  others: Joi.string().min(0),
});

export const SkillsSchema = Joi.object({
  id: Joi.number().required(),
  skills: Joi.string().min(0),
  talents: Joi.string().min(0),
});

export const NotesSchema = Joi.object({
  id: Joi.number().required(),
  notes: Joi.string().min(0),
});
